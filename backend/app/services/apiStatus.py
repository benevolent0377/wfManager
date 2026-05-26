import time
import httpx
import datetime
import asyncio

class APIInfo:

    def __init__(self):
        self.wfstat = self.wfstat()
        self.market = self.market()

    class wfstat:
        def __init__(self):
            self.status = "unknown"
            self.statusCode = 404
            self.latency = None
            self.URL = "https://api.warframestat.us/pc"
            self.lastChecked = datetime.datetime.now()

    class market:
        def __init__(self):
            self.status = "unknown"
            self.statusCode = 404
            self.latency = None
            self.URL = "https://api.warframe.market/v2/"
            self.lastChecked = datetime.datetime.now()

    async def checkServiceStatuses(self):
        print("Checking API statuses...")
        async with httpx.AsyncClient() as client:
            # Check wfstat
            start_time = time.time()
            try:
                self.wfstat.lastChecked = datetime.datetime.now()
                response = await client.get(self.wfstat.URL, timeout=15)
                self.wfstat.latency = time.time() - start_time
                print(response.status_code)
                self.wfstat.statusCode = response.status_code
                if response.status_code < 400 and response.status_code >= 200:
                    self.wfstat.status = "ok"
                else:
                    self.wfstat.status = "offline"
            except Exception as e:
                print(f"Error checking wfstat: {e}")
                self.wfstat.status = "offline"
                self.wfstat.latency = None

            # Check market
            start_time = time.time()
            try:
                self.market.lastChecked = datetime.datetime.now()
                response = await client.get(self.market.URL, timeout=15)
                self.market.latency = time.time() - start_time
                self.market.statusCode = response.status_code
                if response.status_code < 400 and response.status_code >= 200:
                    self.market.status = "ok"
                else:
                    self.market.status = "offline"
            except Exception as e:
                print(f"Error checking market: {e}")
                self.market.status = "offline"
                self.market.latency = None

async def get():
    APIINFO = APIInfo()
    await APIINFO.checkServiceStatuses()
    return APIINFO

async def diagnostics():
    APIINFO = APIInfo()
    await APIINFO.checkServiceStatuses()
    print("WFStat Status:", APIINFO.wfstat.status)
    print("WFStat Latency:", APIINFO.wfstat.latency)
    print("WFStat Last Checked:", APIINFO.wfstat.lastChecked)
    print("Market Status:", APIINFO.market.status)
    print("Market Latency:", APIINFO.market.latency)
    print("Market Last Checked:", APIINFO.market.lastChecked)

