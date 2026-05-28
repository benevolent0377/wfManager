import { Link } from "react-router-dom";
import { Header } from "./Header";
import {StatusDropdown} from "../status/StatusDropdown";
import "../status/Status.css"
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="header-container">
        <Header />
      </div>

      <div className="sidebar-items">

        <Link to="/"><div className="sidebar-item"><p>Dashboard</p></div></Link>

        <Link to="/market"><div className="sidebar-item"><p>Market</p></div></Link>

        <Link to="/reliquary"><div className="sidebar-item"><p>Reliquary</p></div></Link>

      </div>

      <div className="sidebar-footer">
        
        <div className="status-container">

          <StatusDropdown />
        
        </div>

        <div className="settings-container">
          <Link to="/settings">
            <img src="src/assets/layout/settings-cog-dark.png" className="settings-icon"/> 
          </Link>
        </div>        

      </div>

    </aside>
  );
}