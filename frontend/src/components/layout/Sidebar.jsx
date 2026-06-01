import { Link } from "react-router-dom";
import {StatusDropdown} from "../status/StatusDropdown";
import "../status/Status.css"
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-container">
          <img src="/src/assets/logo.png" alt="Warframe Manager" className="logo" />
          <div className="text-wrapper">
            <p className="title">Warframe Manager</p>
            <p className="version-tag">ALPHA 0.0.1</p>
          </div>
      </div>

      <div className="sidebar-items">

        <Link to="/"><div className="sidebar-item"><p>My Dashboard</p></div></Link>

        <Link to="/worldstates"><div className="sidebar-item"><p>World States</p></div></Link>

        <Link to="/market"><div className="sidebar-item"><p>Market</p></div></Link>

        <Link to="/reliquary"><div className="sidebar-item"><p>Reliquary</p></div></Link>

        <Link to="/drops"><div className="sidebar-item"><p>Drop Tables</p></div></Link>

        <Link to="/inventory"><div className="sidebar-item"><p>Inventory</p></div></Link>

        <Link to="/codex"><div className="sidebar-item"><p>Codex</p></div></Link>

        <Link to="/analytics"><div className="sidebar-item"><p>Analytics</p></div></Link>

        <Link to="/overlay"><div className="sidebar-item"><p>Overlay Options</p></div></Link>

        <Link to="/developer"><div className="sidebar-item"><p>Developer Options</p></div></Link>
      
      </div>

      <div className="sidebar-footer">
        
        <div className="status-container">

          <StatusDropdown />
        
        </div>

        <div className="settings-container">
          <Link to="/settings">
            <img src="src/assets/dark/settings-cog.png" className="settings-icon"/> 
          </Link>
        </div>        

      </div>

    </aside>
  );
}