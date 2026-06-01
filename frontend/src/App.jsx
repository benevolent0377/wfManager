import { Sidebar } from "./components/layout/Sidebar";
import {DashboardPage} from "./pages/Dashboard";
import {MarketPage} from "./pages/Market";
import {ReliquaryPage} from "./pages/Reliquary";
import {SettingsPage} from "./pages/Settings";
import {Footer} from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./themes/dark.css";
import "./themes/light.css";
import "./themes/grineer.css";
import "./themes/infested.css";
import "./themes/corpus.css";
import "./themes/orokin.css";
import "./themes/App.css";
import "./themes/solar.css";
import "./themes/lotus.css";
import "./themes/light-soft-orokin.css";
import "./themes/light-void-blue.css";
import "./themes/void.css";
import "./themes/cephalon-teal.css";
import "./themes/cy.css";

function App() {
  return (
    <BrowserRouter>
      <AppFrame />
    </BrowserRouter>
  );
}

function AppFrame() {
  return (
    <div className="app-frame" data-theme="cephalon-cy">

      <div className="app-body">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <main className="content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/reliquary" element={<ReliquaryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
            <div className="footerbar-wrapper">
              <Footer />
            </div>
        </main>
      </div>
    </div>
  );
}

export default App;