from fastapi import APIRouter
from app.services import apiStatus

router = APIRouter(prefix="/health", tags=["health"])

@router.get("/system")
def systemHealth():
    return {"status":"ok"}

@router.get("/wfstat")
async def wfstatHealth():
    APIInfo = await apiStatus.get()
    return {"status": APIInfo.wfstat.status,
            "latency": APIInfo.wfstat.latency,
            "lastChecked": APIInfo.wfstat.lastChecked
            }

@router.get("/market")
async def marketHealth():
    APIInfo = await apiStatus.get()
    return {"status": APIInfo.market.status,
            "latency": APIInfo.market.latency,
            "lastChecked": APIInfo.market.lastChecked}