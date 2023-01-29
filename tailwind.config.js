/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'xl': '976px',
        'header': '80px',
      },
      colors: {
        primary: {
            dark: '#172C4F',
            DEFAULT: '#1C355F',
            light: '#2E579E',
            lighter: '#6E98D8',
        },
        secondary: {
          DEFAULT: '#F66565',
          light: '#F99F9F',
          lighter: '#FAB2B2',
        },
      }
    },   
  },
  plugins: [],
}