/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        neon: {
          purple: "#7C3AED",
          magenta: "#A855F7",
          pink: "#EC4899",
          green: "#10B981",
          cyan: "#06B6D4",
          yellow: "#F59E0B",
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 30px rgba(124, 58, 237, 0.4)',
        'glow-lg': '0 0 50px rgba(168, 85, 247, 0.5)',
        'harsh-purple': '0 20px 50px -10px rgba(124, 58, 237, 0.45)',
        'harsh-pink': '0 20px 50px -10px rgba(236, 72, 153, 0.45)',
        'harsh-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 25%, #3b82f6 50%, #10b981 75%, #f59e0b 100%)',
        'radial-purple': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.25) 0%, rgba(255, 255, 255, 0) 70%)',
        'radial-pink': 'radial-gradient(circle at center, rgba(236, 72, 153, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
        'radial-cyan': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
        'gradient-neon': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f17 0%, #1a103c 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
