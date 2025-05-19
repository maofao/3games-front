/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // Основной оранжевый
          light: '#FF8533',   // Светлый оранжевый
          dark: '#CC5500',    // Темный оранжевый
        },
        background: {
          light: '#FFFFFF',   // Светлый фон
          dark: '#1A1B1E',    // Темный фон
        },
        text: {
          light: '#1A1B1E',   // Темный текст для светлой темы
          dark: '#FFFFFF',    // Светлый текст для темной темы
        }
      }
    },
  },
  plugins: [],
} 