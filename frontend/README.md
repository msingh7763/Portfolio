# Portfolio Frontend (Vite + React)

## Local Development

1. Install dependencies:

   npm install

2. Create a local env file from the example and adjust values if needed:

   copy .env.example .env

3. Run the app:

   npm run dev

By default, local API calls use `/api/*` and Vite proxies them to `VITE_DEV_API_URL`.

## Deploy on Vercel

1. Import this `frontend` folder into Vercel.
2. Keep framework preset as `Vite`.
3. Add environment variable (required):
   - `VITE_API_BASE_URL` = `https://your-backend-service.onrender.com`

4. Deploy.

## Backend CORS Setting (Render)

In Render backend environment variables, set:

- `CLIENT_URLS=http://localhost:5173,https://your-frontend.vercel.app`

Replace `https://your-frontend.vercel.app` with your real Vercel production URL.
