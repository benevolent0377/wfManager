import {CircleEllipsis, CircleCheckBig, OctagonX} from "lucide-react";

function StatusDot({ status }) {

    if (status === "online") {

        return (
                <CircleCheckBig className="status-dot online-dot" color="#4ade80"/>            
        );
    }
    else if (
        status === "warning" ||
        status === "checking"
    ) {

        return (
                <CircleEllipsis className="status-dot warning-dot" color="#fbbf24"/>
        );
    }
    else {

        return (

                <OctagonX className="status-dot offline-dot" color="#fb7185"/>

        );

    }
}

export default StatusDot;