import { useState, useEffect } from "react";
import checkHealth from "../../api/backend";

export function BackendStatus() {
    const [backendStatus, setBackendStatus] = useState("checking...");

    useEffect(() => {
        async function updateStatus() {
            try {
                const data = await checkHealth();
                setBackendStatus(data.status);
            } catch {
                setBackendStatus("offline");
            }
        }

        updateStatus();

        const intervalId = setInterval(updateStatus, 300000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p>Backend status: {backendStatus}</p>
    )
}