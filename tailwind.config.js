/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      colors: {
        primary: "#111827",
        secondary: "#111827",
        brand: "#F9FAFB",
        black_scale: "#040905",
        foreshadow: "#C9C2BC"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

