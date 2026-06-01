import { Link } from "react-router-dom";
import {StatusDropdown} from "../status/StatusDropdown";
import "../status/Status.css"
import "./Sidebar.css";
import {House, Earth, ChartCandlestick, Gem, Database, Backpack, Info, ChartNoAxesCombined, Blend, Code, Cog} from "lucide-react";
import {Logo} from "./Logo";
export function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo-container">
          <Logo className="logo" />
          <div className="text-wrapper">
            <p className="title">Warframe Manager</p>
            <p className="version-tag">ALPHA 0.0.1</p>
          </div>
      </div>

      <div className="sidebar-items">

        <Link to="/"><div className="sidebar-item"><House/><p>My Dashboard</p></div></Link>

        <Link to="/worldstates"><div className="sidebar-item"><Earth/><p>World States</p></div></Link>

        <Link to="/market"><div className="sidebar-item"><ChartCandlestick/><p>Market</p></div></Link>

        <Link to="/reliquary"><div className="sidebar-item"><Gem/><p>Reliquary</p></div></Link>

        <Link to="/drops"><div className="sidebar-item"><Database/><p>Drop Tables</p></div></Link>

        <Link to="/inventory"><div className="sidebar-item"><Backpack/><p>Inventory</p></div></Link>

        <Link to="/codex"><div className="sidebar-item"><Info/><p>Codex</p></div></Link>

        <Link to="/analytics"><div className="sidebar-item"><ChartNoAxesCombined/><p>Analytics</p></div></Link>

        <Link to="/overlay"><div className="sidebar-item"><Blend/><p>Overlay Options</p></div></Link>

        <Link to="/developer"><div className="sidebar-item"><Code/><p>Developer Settings</p></div></Link>
      
      </div>

      <div className="sidebar-footer">
        
        <div className="status-container">

          <StatusDropdown />
        
        </div>

        <div className="settings-container">
          <Link to="/settings">
            <Cog/>
          </Link>
        </div>        

      </div>

    </aside>
  );
}