/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
      },
      boxShadow: {
        glass: '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      backgroundImage: {
        'hero-grad': 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 15%, rgba(16,185,129,0.2), transparent 40%)',
      },
    },
  },
  plugins: [],
}

