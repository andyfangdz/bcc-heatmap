from flask import Flask
from elasticsearch import Elasticsearch

import zlib
import datetime
import delorean
import base64
from flask import request, jsonify

from models.metrics_pb2 import HistogramGauge, HistogramRender

from constants import ES_INDEX


def now_epoch():
    dt = datetime.datetime.utcnow()
    return int(delorean.Delorean(dt, timezone="UTC").epoch * 1000)


app = Flask(__name__)
es = Elasticsearch()


@app.route('/api/gauge_histogram', methods=['POST'])
def gauge_histogram():
    content = request.get_json()
    payload = content['payload']
    hist = HistogramGauge()
    hist.ParseFromString(zlib.decompress(base64.b64decode(payload)))
    print(
        es.index(
            index=ES_INDEX,
            doc_type='histogram',
            body={
                'metric': hist.metric,
                'host': hist.host,
                'date': now_epoch(),
                'proto': payload,
            }))

    return jsonify({'success': True})


@app.route('/api/get_histogram/<topic>')
def get_histogram(topic):
    ret = es.search(
        index=ES_INDEX,
        doc_type='histogram',
        body={
            "sort": [{
                "date": {
                    "order": "desc"
                }
            }],
            "from": 0,
            "size": 60,
            "query": {
                "term": {
                    "metric": topic
                }
            }
        })
    render = HistogramRender()
    for hit in ret['hits']['hits']:
        hist = render.histograms.add()
        hist.ParseFromString(
            zlib.decompress(base64.b64decode(hit['_source']['proto'])))

    return jsonify({
        'success':
        True,
        'payload':
        base64.b64encode(render.SerializeToString()).decode('utf-8')
    })
