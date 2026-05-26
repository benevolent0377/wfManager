import StatusDot from "./StatusDot";

function StatusRow({ label, status }) {

    return (
        <p>
            {label}
            <StatusDot status={status} />
        </p>
    );
}

export default StatusRow;