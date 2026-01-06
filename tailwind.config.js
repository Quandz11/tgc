/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#051628", // Darker Navy 
        secondary: "#007BFF", // Brighter Blue for accents
        "background-light": "#F8F9FA",
        "background-dark": "#0F172A",
        "text-light": "#333333", // Dark gray text
        "text-dark": "#E2E8F0",
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        'xl': "1rem",
        '2xl': "1.5rem",
      },
      backgroundImage: {
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
