import "./Footer.css";
import { useState, useEffect } from "react";
import getDateTimeNow from "../../util/clock"

export function Footer() {

    return (

        <div className="footerbar">

            <div className="spacer"></div>

            <div className="clock-container">
                
                <Clock />

            </div>

            <div className="exit-container">
                    <button className="exit-button"><p>Exit</p></button>
            </div>     

        </div>

    );

}

function Clock() {
    const [currentTime, setTime] = useState(
        "Fetching Data..."
    );

    async function updateTime() {

        try {
            const timeNow = await getDateTimeNow();
            setTime(timeNow);
        }
        catch (error) {
            console.log(`Could not update time. Thrown error: ${error}`);
        }
    }

    useEffect(() => {

        const intervalId = setInterval(
            updateTime,
            1000
        );
        return () => clearInterval(intervalId);
    },[]);

    return (
        <p>{currentTime}</p>
    );

}