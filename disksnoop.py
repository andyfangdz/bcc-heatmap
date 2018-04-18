#!/usr/bin/python
#
# disksnoop.py	Trace block device I/O: basic version of iosnoop.
#		For Linux, uses BCC, eBPF. Embedded C.
#
# Written as a basic example of tracing latency.
#
# Copyright (c) 2015 Brendan Gregg.
# Licensed under the Apache License, Version 2.0 (the "License")
#
# 11-Aug-2015	Brendan Gregg	Created this.

from __future__ import print_function, absolute_import
from bcc import BPF
from twisted.internet import task
from twisted.internet import reactor
from twisted.web import client
from datetime import datetime
from models.metrics_pb2 import HistogramGauge
import json
import base64


REQ_WRITE = 1  # from include/linux/blk_types.h

# load BPF program
b = BPF(text="""
#include <uapi/linux/ptrace.h>
#include <linux/blkdev.h>

BPF_HASH(start, struct request *);
BPF_HISTOGRAM(dist);

void trace_start(struct pt_regs *ctx, struct request *req) {
    // stash start timestamp by request ptr
    u64 ts = bpf_ktime_get_ns();

    start.update(&req, &ts);
}

void trace_completion(struct pt_regs *ctx, struct request *req) {
    u64 *tsp, delta;

    tsp = start.lookup(&req);
    if (tsp != 0) {
        delta = bpf_ktime_get_ns() - *tsp;
        dist.increment(delta / 1000000 / 2);
        start.delete(&req);
    }
}
""")

b.attach_kprobe(event="blk_start_request", fn_name="trace_start")
b.attach_kprobe(event="blk_mq_start_request", fn_name="trace_start")
b.attach_kprobe(event="blk_account_io_completion", fn_name="trace_completion")


def get_update():
    idx = 0
    hist = HistogramGauge()
    hist.metric = 'bio_latency'
    hist.host = 'localhost'
    for _, cv in b['dist'].items()[:50]:
        this_bin = hist.bins.add()
        this_bin.start = 2 * idx
        this_bin.length = 2
        this_bin.count = cv.value
        idx += 1

    client.getPage('http://localhost:5000/api/gauge_histogram', method='POST',
                   headers={'Content-Type': 'application/json'},
                   postdata=json.dumps({'payload': base64.b64encode(hist.SerializeToString())}))
    b['dist'].clear()
    print(datetime.now())


l = task.LoopingCall(get_update)
l.start(0.5)

reactor.run()
