const API_BASE = "http://127.0.0.1:8000";

export async function checkHealth() {
    const response = await fetch(`${API_BASE}/health`);
    
    if (!response.ok) {
        throw new Error("Backend health check failed");
    }

    return response.json();
}