import { useState, useEffect } from "react";
import checkHealth from "../../api/backendHealth";
import checkServiceHealth from "../../api/serviceHealth";

const STATUS_CHECK_INTERVAL = 150000;

export function getBatchStatus(statuses) {
    const values = Object.values(statuses);

    if (values.includes("checking")) return "checking";

    const onlineCount = values.filter(
        (status) => status === "online"
    ).length;

    const total = values.length;

    if (onlineCount === total) return "online";
    if (onlineCount > total / 2) return "warning";

    return "offline";
}

export function useAPIStatuses() {
    const [statuses, setStatuses] = useState({
        backend: "checking",
        wfstat: "checking",
        market: "checking",
    });

    const [loading, setLoading] = useState(false);

    async function updateStatuses() {
        setLoading(true);
        try{
            const checks = [
                ["backend", checkHealth],
                ["wfstat", () => checkServiceHealth("wfstat")],
                ["market", () => checkServiceHealth("market")],
            ];

            for (const [name, checkFunction] of checks) {
                try {
                    const data = await checkFunction();

                    setStatuses((prev) => ({
                        ...prev,
                        [name]: data.status === "ok" ? "online" : "offline",
                    }));
                } catch {
                    setStatuses((prev) => ({
                        ...prev,
                        [name]: "offline",
                    }));
                }
            }
        }
        finally {
        setLoading(false);
        }
    }

    useEffect(() => {

        //find out how to fix this later
        // eslint-disable-next-line react-hooks/set-state-in-effect
        updateStatuses();

        const intervalId = setInterval(
            updateStatuses,
            STATUS_CHECK_INTERVAL
        );

        return () => clearInterval(intervalId);
    }, []);

    return {
        statuses,
        loading,
        updateStatuses,
    };
}