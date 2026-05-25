const API_BASE = "http://127.0.0.1:8000";


export default async function checkHealth() {

    const response = await fetch(`${API_BASE}/health`);

    console.log("Health check response for backend api:", response);
    
    if (!response.ok) {
        throw new Error(`Backend health check failed`);
    }

    return await response.json();
}