const SERVICE_HEALTH_BASE = "http://localhost:8000/health";

export default async function checkServiceHealth(apiName) {

    class ServiceInfo {
        constructor(name, status, latency, lastChecked) {
            this.name = name;
            this.status = status;
            this.latency = latency;
            this.lastChecked = lastChecked;
            }
        }
    if (apiName == "wfstat") {
        const wfstatResponse = await fetch(`${SERVICE_HEALTH_BASE}/wfstat`);
        const wfStatData = await wfstatResponse.json();

        console.log("Health check response for wfstat api:", wfStatData);

        const wfstatInfo = new ServiceInfo(
            "wfstat",
            wfStatData.status,
            wfStatData.latency,
            wfStatData.lastChecked
        );
        
        return wfstatInfo;

    }

    if (apiName == "market") {

        const marketResponse = await fetch(`${SERVICE_HEALTH_BASE}/market`);
        const marketData = await marketResponse.json();

        console.log("Health check response for market api:", marketData);

        const marketInfo = new ServiceInfo(
            "market",
            marketData.status,
            marketData.latency,
            marketData.lastChecked
        );

        return marketInfo;
    }
}    