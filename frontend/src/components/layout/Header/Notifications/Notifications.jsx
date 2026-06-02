import { Bell } from "lucide-react";
import {useState} from "react";

export default function Notifications() {
    return (
        <div className="notifications header-item">
            <NotificationsDropdown />
        </div>
    );
}

export function NotificationsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="notifications-dropdown">
            <button
                className="notifications-button"
                onClick={() => setIsOpen(!isOpen)}
            >
             <Bell className="icon" />   
            </button>

            {isOpen && (
                <div className="notifications-card">
                    <div className="header-wrapper">
                        <h5>Notifications</h5>
                    </div>
                    <p>No new notifications</p>
                </div>
            )}
        </div>
    );
}

export function NotificationsRow(){}