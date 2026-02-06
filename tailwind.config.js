/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          // Lighter, more vibrant blue palette
          DEFAULT: "#2563eb", // Tailwind's blue-600
          dark: "#1d4ed8", // Tailwind's blue-700
          light: "#60a5fa", // Tailwind's blue-400
        },
        accent: {
          DEFAULT: "#22c55e", // Green for success/growth remains
        },
        // Swapped neutral grays for blue-ish "slate" grays to avoid black
        neutral: {
          900: "#1e293b", // slate-800
          800: "#334155", // slate-700
          700: "#475569", // slate-600
          600: "#64748b", // slate-500
          500: "#94a3b8", // slate-400
          400: "#cbd5e1", // slate-300
          300: "#e2e8f0", // slate-200
          200: "#f1f5f9", // slate-100
          100: "#f8fafc", // slate-50
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
