import { Sidebar } from "./components/layout/Sidebar";
import {DashboardPage} from "./pages/Dashboard";
import {MarketPage} from "./pages/Market";
import {ReliquaryPage} from "./pages/Reliquary";
import {SettingsPage} from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./themes/App.css";
import "./themes/light.css";

function App() {
  return (
    <BrowserRouter>
      <AppFrame />
    </BrowserRouter>
  );
}

function AppFrame() {
  return (
    <div className="app-frame" data-theme="dark">

      <div className="app-body">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/reliquary" element={<ReliquaryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;