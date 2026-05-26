import { useState, useEffect } from "react";
import checkHealth from "../../api/backendHealth";

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
