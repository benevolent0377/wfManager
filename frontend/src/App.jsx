import { Header } from "./components/layout/Header";
import {DashboardPage} from "./pages/Dashboard";
import {MarketPage} from "./pages/Market";
import {FissuresPage} from "./pages/Fissures";
import {SettingsPage} from "./pages/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <Header />

      <div className="app-body">
        {/* <Sidebar /> */}

        <main className="content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/fissures" element={<FissuresPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;