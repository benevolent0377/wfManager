import "./Header.css";
import { useState, useEffect } from "react";
import getDateTimeNow from "../../../util/clock"
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import { appRoutes } from "../../../routes/appRoutes";
import Notifications from "./Notifications";
import Prefrences from "./Prefrences";

export function Header() {

    const location = useLocation();

    const currentRoute = appRoutes.find(
        (route) => route.path === location.pathname
    );

    const title = currentRoute?.title ?? "WF Manager";

    return (
        <header className="header">
            
            <div className="left">
                <SearchBar />
            </div>

            <div className="center">
                <h1></h1>
            </div>

            <div className="right">
                <Clock/>
                <Notifications />
                <Prefrences />
            </div>

        </header>
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
        <div className="clock header-item">
        <p>{currentTime}</p>
        </div>    
    );

}