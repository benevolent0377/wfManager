import { BackendStatus, WfStatStatus, MarketStatus } from "./components/status/APIStatus";
function App() {
  return (
    <main>
      <h1>Warframe Manager</h1>
      <BackendStatus />
      <WfStatStatus />
      <MarketStatus />
    </main>
  );
}

export default App;