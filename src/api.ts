const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api"; // Use env or fallback

function handleError(context: string, error: unknown) {
  console.error(`[API] ${context} failed:`, error);
  return { error: true, message: error instanceof Error ? error.message : String(error) };
}

export async function uploadReceipt(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await fetch(`${API_BASE}/receipts/upload`, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('uploadReceipt', error);
  }
}

export async function getReceipt(receiptId: string) {
  try {
    const res = await fetch(`${API_BASE}/receipts/${receiptId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('getReceipt', error);
  }
}

export async function queryInsights(question: string) {
  try {
    const res = await fetch(`${API_BASE}/insights/query`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('queryInsights', error);
  }
}

export async function getSummary() {
  try {
    const res = await fetch(`${API_BASE}/insights/summary`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('getSummary', error);
  }
}

export async function registerUser(username: string, password: string) {
  try {
    const res = await fetch(`${API_BASE}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('registerUser', error);
  }
}

export async function loginUser(username: string, password: string) {
  try {
    const res = await fetch(`${API_BASE}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    throw handleError('loginUser', error);
  }
} 