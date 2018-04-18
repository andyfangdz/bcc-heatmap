from models.metrics_pb2 import HistogramGauge
import asyncio
import aiohttp
import json


async def gauge_task():
    # sleep until the next whole second
    async with aiohttp.ClientSession() as session:
        while True:
            hist = HistogramGauge()
            hist.metric = 'bio_latency'
            hist.host = 'localhost111'
            bin = hist.bins.add()
            bin.count = 123
            bin.start = 0.0
            bin.length = 12
            print(json.dumps({'payload': hist.SerializeToString().decode('utf-8')}))
            res = await session.post('http://localhost:5000/api/gauge_histogram',
                                     json={'payload': hist.SerializeToString().decode('utf-8')})
            print(res)
            await asyncio.sleep(1)


task = asyncio.ensure_future(gauge_task())

loop = asyncio.get_event_loop()

try:
    loop.run_forever()
finally:
    loop.close()
