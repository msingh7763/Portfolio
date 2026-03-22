const rawApiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim();
const rawDevApiUrl = (import.meta.env.VITE_DEV_API_URL || '').trim();
const resolvedApiBaseUrl = import.meta.env.DEV ? (rawDevApiUrl || rawApiBaseUrl) : rawApiBaseUrl;
const knownProductionApiUrls = [
  'https://portfolio-api.onrender.com',
  'https://portfolio-5tua.onrender.com',
];

if (import.meta.env.PROD && !rawApiBaseUrl) {
  // Surface deployment misconfiguration early instead of silently calling the frontend origin.
  console.warn('Missing VITE_API_BASE_URL in production. Contact API requests may fail.');
}

export const API_BASE_URL = resolvedApiBaseUrl.replace(/\/$/, '');

export const buildApiUrl = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!API_BASE_URL) {
    return normalizedPath;
  }

  return `${API_BASE_URL}${normalizedPath}`;
};

const uniq = (arr) => [...new Set(arr.filter(Boolean))];

export const getApiBaseCandidates = () => {
  if (import.meta.env.DEV) {
    return uniq([rawDevApiUrl, rawApiBaseUrl]);
  }

  return uniq([rawApiBaseUrl, ...knownProductionApiUrls]);
};

export const buildApiCandidates = (path) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const bases = getApiBaseCandidates();

  if (bases.length === 0) {
    return [normalizedPath];
  }

  return bases.map((base) => `${base.replace(/\/$/, '')}${normalizedPath}`);
};
