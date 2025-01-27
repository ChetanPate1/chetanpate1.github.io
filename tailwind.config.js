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
        primary: '#FF5555'
      },
      boxShadow: {
        '3xl': '0 12.6px 25.2px -11.5733px rgba(50,50,93,.25),0 7.56px 15.12px -7.56px rgba(0,0,0,.1)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

