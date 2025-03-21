/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#4F46E5",
        accent: {
          purple: "#8B5CF6",
          blue: "#3B82F6",
          indigo: "#6366F1",
          violet: "#7C3AED",
        },
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
      boxShadow: {
        'glow-sm': '0 2px 8px -1px rgba(99, 102, 241, 0.25)',
        'glow': '0 4px 12px -2px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 8px 24px -4px rgba(99, 102, 241, 0.35)',
        'glow-xl': '0 12px 32px -8px rgba(99, 102, 241, 0.4)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'cyber-glow': 'cyber-glow 1.5s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #7C3AED, 0 0 20px #7C3AED, 0 0 30px #7C3AED' },
          '100%': { textShadow: '0 0 20px #BD34FE, 0 0 30px #BD34FE, 0 0 40px #BD34FE' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'cyber-glow': {
          '0%': { boxShadow: '0 0 5px #7C3AED, 0 0 10px #7C3AED, 0 0 15px #7C3AED' },
          '100%': { boxShadow: '0 0 10px #BD34FE, 0 0 20px #BD34FE, 0 0 30px #BD34FE' },
        },
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, #6B21A8 1px, transparent 1px), linear-gradient(to bottom, #6B21A8 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 