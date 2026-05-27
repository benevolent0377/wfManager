import StatusDot from "./StatusDot";

function StatusRow({ label, status }) {

    console.log(`Rendering StatusRow: ${label} - ${status}`);
    return (
        <p className={`status-row ${status}`}>
            {label}
            <StatusDot status={status} />
        </p>
    );
}

export default StatusRow;