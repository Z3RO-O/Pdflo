// API utility for handling backend URLs
// If VITE_API_URL is set, prefix requests with it (works in dev and prod).
// Otherwise, fall back to relative endpoints which rely on same-origin or dev proxy.
const getApiUrl = (endpoint: string): string => {
  const base = (import.meta as any).env?.VITE_API_URL
  if (base && typeof base === 'string' && base.length > 0) {
    return `${base}${endpoint}`
  }
  return endpoint
}

export default getApiUrl
