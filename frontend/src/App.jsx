import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";

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
    <div className="app-frame" data-theme="solar">

      <div className="app-body">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <main className="content">
        <div className="header-container">
          <Header />
        </div>
          <div className="content-wrapper">
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;