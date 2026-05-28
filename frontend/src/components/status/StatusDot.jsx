function StatusDot({ status }) {

    let src = "/src/assets/status/offline-dot.svg";
    let alt = "Offline";

    if (status === "online") {

        src = "/src/assets/status/online-dot.svg";
        alt = "Online";

    }
    else if (
        status === "warning" ||
        status === "checking"
    ) {

        src = "/src/assets/status/warning-dot.svg";
        alt = "Warning";
    }

    return (
        <img
            className="status-dot"
            src={src}
            alt={alt}
        />
    );
}

export default StatusDot;