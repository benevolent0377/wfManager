import { NavLink, Link } from "react-router-dom";
import {StatusDropdown} from "../../status/StatusDropdown";
import "../../status/Status.css"
import "./Sidebar.css";
import { Cog } from "lucide-react";
import { appRoutes } from "../../../routes/appRoutes";
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

        {appRoutes.map((route) => {
          const Icon = route.icon;

          return (
            <NavLink to={route.path} key={route.path} className={({isActive}) => 
              isActive
              ? "sidebar-item hover-popout active"
              : "sidebar-item hover-popout"
            } >
                <Icon />
                <p>{route.title}</p>
            </NavLink>
          );
        })}

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