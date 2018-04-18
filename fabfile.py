from elasticsearch import Elasticsearch

from constants import ES_INDEX

es = Elasticsearch()


def create_index():
    # create index
    es.indices.create(index=ES_INDEX)
    es.indices.put_mapping(index=ES_INDEX, doc_type='histogram', body={
        "properties": {
            "metrics": {
                "type": "text",
                "store": True
            },
            "host": {
                "type": "text",
                "store": True
            },
            "date": {
                "type": "date",
                "format": "dateOptionalTime||epoch_millis",
                "store": True
            }
        }
    })
