/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#0b1020',
        panel: '#11182b',
        panel2: '#16213a',
        line: '#26314d',
        accent: '#7dd3fc',
        accent2: '#fda4af',
        success: '#34d399',
        warn: '#fbbf24',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.15), 0 30px 80px rgba(8, 15, 34, 0.45)',
      },
    },
  },
  plugins: [],
};