const rawApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim();
const rawDevApiUrl = (import.meta.env.VITE_DEV_API_URL || '').trim();
const productionFallbackApiUrl = 'https://portfolio-5tua.onrender.com';

const resolvedApiBaseUrl = rawApiBaseUrl || (import.meta.env.DEV ? rawDevApiUrl : productionFallbackApiUrl);

export const API_BASE_URL = resolvedApiBaseUrl.replace(/\/$/, '');

export const buildApiUrl = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!API_BASE_URL) {
    return normalizedPath;
  }

  return `${API_BASE_URL}${normalizedPath}`;
};
