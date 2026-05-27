from fastapi import APIRouter

from app.services.api_status import get_all_service_statuses, get_service_status

router = APIRouter(prefix="/health", tags=["health"])


def serialize_status(status):
    return {
        "status": status.status,
        "statusCode": status.status_code,
        "latency": status.latency,
        "lastChecked": status.last_checked,
    }


@router.get("/system")
def system_health():
    return {"status": "ok"}


@router.get("/wfstat")
async def wfstat_health():
    status = await get_service_status("wfstat")
    return serialize_status(status)


@router.get("/market")
async def market_health():
    status = await get_service_status("market")
    return serialize_status(status)


@router.get("/services")
async def service_health():
    statuses = await get_all_service_statuses()

    return {
        service_name: serialize_status(status)
        for service_name, status in statuses.items()
    }