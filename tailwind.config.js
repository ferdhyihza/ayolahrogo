/** @type {import('tailwindcss').Config} */
module.exports = {
  // Sesuaikan path ini dengan letak file HTML kamu. 
  // Jika file HTML ada di root folder, gunakan ["./*.html"]
  content: ["./**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#7dd3fc',
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
        accent: '#fde047',
      }
    }
  },
  plugins: [],
}