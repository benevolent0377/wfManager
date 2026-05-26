import { useState, useEffect } from "react";
import checkHealth from "../../api/backendHealth";
import checkServiceHealth from "../../api/serviceHealth";

const STATUS_CHECK_INTERVAL = 300000; // 5 minutes in milliseconds

function StatusDisplay({ label, checkFunction }) {
    const [status, setStatus] = useState("checking...");

    useEffect(() => {
        async function updateStatus() {
            try {
                const data = await checkFunction();

                if (data.status === "ok") {
                    setStatus("online");
                } else {
                    setStatus("offline");
                }
            } catch {
                setStatus("offline");
            }
        }

        updateStatus();

        const intervalId = setInterval(updateStatus, STATUS_CHECK_INTERVAL);

        return () => clearInterval(intervalId);
    }, [checkFunction]);

    return (
        <p>{label} status: {status}</p>
    );
}

export function BackendStatus() {
    return (
        <StatusDisplay
            label="Backend"
            checkFunction={checkHealth}
        />
    );
}

export function WfStatStatus() {
    return (
        <StatusDisplay
            label="Warframe API"
            checkFunction={() => checkServiceHealth("wfstat")}
        />
    );
}

export function MarketStatus() {
    return (
        <StatusDisplay
            label="Market API"
            checkFunction={() => checkServiceHealth("market")}
        />
    );
}