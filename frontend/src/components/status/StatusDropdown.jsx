import { useState } from "react";
import { getBatchStatus, useAPIStatuses } from "./APIStatus";
import StatusRow from "./StatusRow";
import StatusDot from "./StatusDot";

function StatusDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const { statuses, loading, updateStatuses } = useAPIStatuses();
    const batchStatus = getBatchStatus(statuses);

    return (
        <div className="status-dropdown">
            <button
                className="status-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                API Status
                <StatusDot status={batchStatus} />
            </button>

            {isOpen && (
                <div className="status-card">
                    <h3>Service Statuses</h3>

                    <StatusRow label="Backend" status={statuses.backend} />
                    <StatusRow label="Warframe API" status={statuses.wfstat} />
                    <StatusRow label="Market API" status={statuses.market} />

                    <button
                        className="status-reload-button"
                        onClick={updateStatuses}
                        disabled={loading}
                    >
                        {loading ? "Reloading..." : "Reload"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default StatusDropdown;





