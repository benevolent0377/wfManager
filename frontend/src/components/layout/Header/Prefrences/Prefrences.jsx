import { UserCog } from "lucide-react";
import { useState } from "react";

export default function Prefrences() {
    return (
        <div className="prefrences header-item">
            <PrefrencesDropdown />
        </div>
    );
}

export function PrefrencesDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="prefrences-dropdown">
            <button
                className="prefrences-button"
                onClick={() => setIsOpen(!isOpen)}
            >
             <UserCog className="icon" />   
            </button>

            {isOpen && (
                <div className="prefrences-card">


                    
                </div>
            )}
        </div>
    );
}

export function NotificationsRow(){}