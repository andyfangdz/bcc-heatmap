from flask import Flask
from elasticsearch import Elasticsearch
from google.protobuf.json_format import MessageToJson, Parse

import datetime
import delorean
import json
import base64
from flask import request, jsonify

from models.metrics_pb2 import HistogramGauge, HistogramRender

from constants import ES_INDEX


def now_epoch():
    dt = datetime.datetime.utcnow()
    return int(delorean.Delorean(dt, timezone="UTC").epoch * 1000)


def message_to_obj_with_date(msg):
    obj = json.loads(MessageToJson(msg))
    # HACK: https://github.com/golang/protobuf/issues/258
    obj['bins'][0]['start'] = 0
    obj['date'] = now_epoch()
    for bin in obj['bins']:
        if 'count' not in bin:
            bin['count'] = 0
    return obj


app = Flask(__name__)
es = Elasticsearch()


@app.route('/api/gauge_histogram', methods=['POST'])
def gauge_histogram():
    content = request.get_json()
    hist = HistogramGauge()
    hist.ParseFromString(base64.b64decode(content['payload']))
    print(es.index(index=ES_INDEX, doc_type='histogram', body=message_to_obj_with_date(hist)))

    return jsonify({'success': True})


@app.route('/api/get_histogram')
def get_histogram():
    topic = "bio_latency"
    ret = es.search(index=ES_INDEX, doc_type='histogram', body={
        "sort": [
            {"date": {"order": "desc"}}
        ],
        "from": 0, "size": 60,
        "query": {
            "term": {"metric": topic}
        }
    })
    render = HistogramRender()
    for hit in ret['hits']['hits']:
        hist = render.histograms.add()
        Parse(json.dumps(hit['_source']), hist)

    return jsonify({'success': True, 'payload': base64.b64encode(render.SerializeToString()).decode('utf-8')})
