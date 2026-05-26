import "./Header.css";
import StatusDropdown from "../status/StatusDropdown";
export function Header() {

    return (
        <header className="header">

            
            <div className="left">
            <img src="/src/assets/layout/logo.png" alt="Warframe Manager" className="logo" />
            </div>

            <div className="center">
                <input type="text" placeholder="Search..." className="search-bar" />
            </div>

            <div className="right">
                <StatusDropdown />
                <button className="settings"> <img className="settings-icon" src="/src/assets/layout/settings-cog-dark.png" alt="Settings" /> </button>
            </div>

        </header>
    );

}