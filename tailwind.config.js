/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Основная оранжевая палитра (соответствует Mantine)
        orange: {
          50: '#FFF8F0',
          100: '#FFE8D1',
          200: '#FFD4A3',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF6B00', // Основной цвет
          600: '#E55A00',
          700: '#CC4400',
          800: '#B33300',
          900: '#8A2600',
        },
        
        // Дополнительные цвета для игровой тематики
        blue: {
          50: '#F0F8FF',
          100: '#E1F0FF',
          200: '#B3D9FF',
          300: '#80BFFF',
          400: '#4DA6FF',
          500: '#1A8CFF',
          600: '#0066CC',
          700: '#004D99',
          800: '#003366',
          900: '#001A33',
        },
        
        green: {
          50: '#F0FFF4',
          100: '#E1FFE8',
          200: '#B3FFC6',
          300: '#80FFA3',
          400: '#4DFF80',
          500: '#1AFF5C',
          600: '#00CC47',
          700: '#009933',
          800: '#006620',
          900: '#003310',
        },
        
        red: {
          50: '#FFF0F0',
          100: '#FFE1E1',
          200: '#FFB3B3',
          300: '#FF8080',
          400: '#FF4D4D',
          500: '#FF1A1A',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        
        purple: {
          50: '#F8F0FF',
          100: '#F0E1FF',
          200: '#E1B3FF',
          300: '#D180FF',
          400: '#C24DFF',
          500: '#B31AFF',
          600: '#8F00CC',
          700: '#6B0099',
          800: '#470066',
          900: '#240033',
        },
        
        // Нейтральные цвета (соответствуют Mantine gray)
        gray: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E8EAED',
          300: '#DADCE0',
          400: '#BDC1C6',
          500: '#9AA0A6',
          600: '#5F6368',
          700: '#3C4043',
          800: '#202124',
          900: '#171717',
        },
        
        // Семантические цвета для тем
        primary: {
          DEFAULT: '#FF6B00',
          light: '#FF9933',
          dark: '#CC4400',
        },
        
        // Фоны для светлой и темной тем
        background: {
          light: '#FFFFFF',
          dark: '#0F0F0F',
          surface: {
            light: '#F8F9FA',
            dark: '#1A1A1A',
          },
        },
        
        // Текст для светлой и темной тем
        text: {
          light: {
            primary: '#202124',
            secondary: '#5F6368',
            disabled: '#9AA0A6',
          },
          dark: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
            disabled: '#666666',
          },
        },
        
        // Границы для тем
        border: {
          light: '#E8EAED',
          dark: '#2D2D2D',
        },
      },
      
      // Расширение типографики
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      
      // Расширение теней
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1)',
        '3xl': '0 35px 60px rgba(0, 0, 0, 0.25), 0 15px 30px rgba(0, 0, 0, 0.15)',
        'dark': '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)',
      },
      
      // Расширение радиусов
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      
      // Анимации
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      
      // Задержки анимаций
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
} 