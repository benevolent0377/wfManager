import {House, Earth, ChartCandlestick, Gem, Database, Backpack, Info, ChartNoAxesCombined, Blend } from "lucide-react";

import DashboardPage from "../pages/Dashboard";
import WorldStatePage from "../pages/WorldStates";
import MarketPage from "../pages/Market";
import ReliquaryPage from "../pages/Reliquary";
import DropsPage from "../pages/Drops";
import InventoryPage from "../pages/Inventory";
import CodexPage from "../pages/Codex";
import AnalyticsPage from "../pages/Analytics";
import OverlayPage from "../pages/Overlay";


export const appRoutes = [
  {
    path: "/",
    title: "My Dashboard",
    icon: House,
    element: <DashboardPage />,
  },
  {
    path: "/worldstates",
    title: "World States",
    icon: Earth,
    element: <WorldStatePage />,
  },
  {
    path: "/market",
    title: "Market",
    icon: ChartCandlestick,
    element: <MarketPage />,
  },
  {
    path: "/reliquary",
    title: "Reliquary",
    icon: Gem,
    element: <ReliquaryPage />,
  },
  {
    path: "/drops",
    title: "Drop Tables",
    icon: Database,
    element: <DropsPage />,
  },
  {
    path: "/inventory",
    title: "Inventory",
    icon: Backpack,
    element: <InventoryPage />,
  },
  {
    path: "/codex",
    title: "Codex",
    icon: Info,
    element: <CodexPage />,
  },
  {
    page: "/analytics",
    title: "Analytics",
    icon: ChartNoAxesCombined,
    element: <AnalyticsPage />,
  },
  {
    page: "/overlay",
    title: "Overlay Options",
    icon: Blend,
    element: <OverlayPage />,
  }
];