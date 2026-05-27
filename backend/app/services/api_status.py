import time
from dataclasses import dataclass
from datetime import datetime

import httpx


@dataclass
class ServiceConfig:
    name: str
    url: str


@dataclass
class ServiceStatus:
    name: str
    status: str
    status_code: int | None
    latency: float | None
    last_checked: str


SERVICES = {
    "wfstat": ServiceConfig(
        name="wfstat",
        url="https://api.warframestat.us/pc",
    ),
    "market": ServiceConfig(
        name="market",
        url="https://api.warframe.market/v2/",
    ),
}


async def check_service(client: httpx.AsyncClient, service: ServiceConfig) -> ServiceStatus:
    start_time = time.time()
    last_checked = datetime.now().strftime("%A, %Y-%m-%d %H:%M:%S")

    try:
        response = await client.get(service.url, timeout=15)
        latency = time.time() - start_time

        status = "ok" if 200 <= response.status_code < 400 else "offline"

        return ServiceStatus(
            name=service.name,
            status=status,
            status_code=response.status_code,
            latency=latency,
            last_checked=last_checked,
        )

    except Exception:
        return ServiceStatus(
            name=service.name,
            status="offline",
            status_code=None,
            latency=None,
            last_checked=last_checked,
        )


async def get_service_status(service_name: str) -> ServiceStatus:
    service = SERVICES[service_name]

    async with httpx.AsyncClient() as client:
        return await check_service(client, service)


async def get_all_service_statuses() -> dict[str, ServiceStatus]:
    async with httpx.AsyncClient() as client:
        results = {}

        for service_name, service in SERVICES.items():
            results[service_name] = await check_service(client, service)

        return results