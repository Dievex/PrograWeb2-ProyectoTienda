import { auth } from '../stores/auth.svelte';

const API_URL = "http://localhost:3000/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const headers: Record<string, string> = {
    ...((options.headers as Record<string, string>) || {})
  };

  // Only add Content-Type: application/json if body is NOT FormData
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  if (auth.token) {
    headers['Authorization'] = `Bearer ${auth.token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers
  });

  if (!response.ok) {
    if (response.status === 401) {
      auth.logout();
    }
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || errorData?.error || 'Error en la petición');
  }

  return response.json();
}
