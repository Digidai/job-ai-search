/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#4F46E5",
        neon: {
          pink: "#FF10F0",
          blue: "#00FFF0",
          purple: "#BD34FE",
          yellow: "#FFFF00",
        },
        cyber: {
          dark: "#0A0A0F",
          darker: "#050507",
          purple: "#6B21A8",
          blue: "#0EA5E9",
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #7C3AED, 0 0 20px #7C3AED, 0 0 30px #7C3AED' },
          '100%': { textShadow: '0 0 20px #BD34FE, 0 0 30px #BD34FE, 0 0 40px #BD34FE' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'cyber-glow': {
          '0%': { boxShadow: '0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED' },
          '100%': { boxShadow: '0 0 10px #BD34FE, 0 0 20px #BD34FE, 0 0 30px #BD34FE' },
        },
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, #6B21A8 1px, transparent 1px), linear-gradient(to bottom, #6B21A8 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} 