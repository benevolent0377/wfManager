import { useState, useEffect } from "react";
import checkHealth from "../../api/backendHealth";
import checkServiceHealth from "../../api/serviceHealth";

const STATUS_CHECK_INTERVAL = 300000; // 5 minutes in milliseconds

export function BackendStatus() {
    const [backendStatus, setBackendStatus] = useState("checking...");

    useEffect(() => {
        async function updateStatus() {
            try {
                const data = await checkHealth();
                console.log("Health check data for backend api:", data.status);
                if (data.status == "ok") {
                    setBackendStatus("online");
                } else {
                    setBackendStatus("offline");
                }
            } catch {
                setBackendStatus("offline");
            }
        }

        updateStatus();

        const intervalId = setInterval(updateStatus, STATUS_CHECK_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p>Backend status: {backendStatus}</p>
    )
}

export function WfStatStatus() {
    const [wfStatStatus, setWfStatStatus] = useState("checking...");

    useEffect(() => {
        async function updateStatus() {
            try {   
                const wfstatData = await checkServiceHealth("wfstat");
                console.log("Health check data for wfstat api:", wfstatData.status);
                if (wfstatData.status == "ok") {
                    setWfStatStatus("online");
                } else {
                    setWfStatStatus("offline");
                }
            } catch {
                setWfStatStatus("offline");
            }
        }

        updateStatus();

        const intervalId = setInterval(updateStatus, STATUS_CHECK_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p>Warframe API status: {wfStatStatus}</p>
    )
}

export function MarketStatus() {
    const [marketStatus, setMarketStatus] = useState("checking...");

    useEffect(() => {
        async function updateStatus() {
            try {
                const marketData = await checkServiceHealth("market");
                console.log("Health check data for market api:", marketData.status);
                if (marketData.status == "ok") {
                    setMarketStatus("online");
                } else {
                    setMarketStatus("offline");
                }
            } catch {
                setMarketStatus("offline");
            }
        }

        updateStatus();

        const intervalId = setInterval(updateStatus, STATUS_CHECK_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p>Market API status: {marketStatus}</p>
    )
}   
