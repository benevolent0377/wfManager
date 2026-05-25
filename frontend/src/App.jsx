import { useEffect, useState } from "react";
import { checkHealth } from "./api/backend";

function App() {
  const [backendStatus, setBackendStatus] = useState("checking...");

  useEffect(() => {
    checkHealth()
      .then((data) => setBackendStatus(data.status))
  }, []);

  return (
    <main>
      <h1>Warframe Manager</h1>
      <p>Backend status: {backendStatus}</p>
    </main>
  );
}

export default App;