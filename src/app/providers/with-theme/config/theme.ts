import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'orange',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  defaultRadius: 'md',
  
  colors: {
    // Основная оранжевая палитра
    orange: [
      '#FFF8F0', // 0 - очень светлый фон
      '#FFE8D1', // 1 - светлый фон
      '#FFD4A3', // 2 - светлый акцент
      '#FFB366', // 3 - средний светлый
      '#FF9933', // 4 - средний
      '#FF6B00', // 5 - основной цвет
      '#E55A00', // 6 - средний темный
      '#CC4400', // 7 - темный
      '#B33300', // 8 - очень темный
      '#8A2600', // 9 - самый темный
    ],
    
    // Дополнительные цвета для игровой тематики
    blue: [
      '#F0F8FF', // 0
      '#E1F0FF', // 1
      '#B3D9FF', // 2
      '#80BFFF', // 3
      '#4DA6FF', // 4
      '#1A8CFF', // 5
      '#0066CC', // 6
      '#004D99', // 7
      '#003366', // 8
      '#001A33', // 9
    ],
    
    green: [
      '#F0FFF4', // 0
      '#E1FFE8', // 1
      '#B3FFC6', // 2
      '#80FFA3', // 3
      '#4DFF80', // 4
      '#1AFF5C', // 5
      '#00CC47', // 6
      '#009933', // 7
      '#006620', // 8
      '#003310', // 9
    ],
    
    red: [
      '#FFF0F0', // 0
      '#FFE1E1', // 1
      '#FFB3B3', // 2
      '#FF8080', // 3
      '#FF4D4D', // 4
      '#FF1A1A', // 5
      '#CC0000', // 6
      '#990000', // 7
      '#660000', // 8
      '#330000', // 9
    ],
    
    purple: [
      '#F8F0FF', // 0
      '#F0E1FF', // 1
      '#E1B3FF', // 2
      '#D180FF', // 3
      '#C24DFF', // 4
      '#B31AFF', // 5
      '#8F00CC', // 6
      '#6B0099', // 7
      '#470066', // 8
      '#240033', // 9
    ],
    
    // Нейтральные цвета для текста и фона
    gray: [
      '#F8F9FA', // 0 - очень светлый фон
      '#F1F3F4', // 1 - светлый фон
      '#E8EAED', // 2 - границы
      '#DADCE0', // 3 - разделители
      '#BDC1C6', // 4 - неактивный текст
      '#9AA0A6', // 5 - вторичный текст
      '#5F6368', // 6 - основной текст
      '#3C4043', // 7 - заголовки
      '#202124', // 8 - темный текст
      '#171717', // 9 - очень темный
    ],
  },
  
  // Настройки для светлой и темной тем
  other: {
    // Светлая тема
    light: {
      background: '#FFFFFF',
      surface: '#F8F9FA',
      border: '#E8EAED',
      text: {
        primary: '#202124',
        secondary: '#5F6368',
        disabled: '#9AA0A6',
      },
      shadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    },
    
    // Темная тема
    dark: {
      background: '#0F0F0F',
      surface: '#1A1A1A',
      border: '#2D2D2D',
      text: {
        primary: '#FFFFFF',
        secondary: '#B0B0B0',
        disabled: '#666666',
      },
      shadow: '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)',
    },
  },
  
  // Настройки компонентов
  components: {
    Button: {
      defaultProps: {
        size: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          transition: 'all 0.2s ease',
        },
      },
    },
    
    Card: {
      defaultProps: {
        radius: 'md',
        withBorder: true,
      },
      styles: {
        root: {
          transition: 'all 0.2s ease',
        },
      },
    },
    
    Input: {
      defaultProps: {
        size: 'md',
      },
    },
    
    Modal: {
      defaultProps: {
        radius: 'md',
        centered: true,
      },
    },
  },
  
  // Настройки типографики
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    sizes: {
      h1: { fontSize: '2.5rem', lineHeight: '1.2' },
      h2: { fontSize: '2rem', lineHeight: '1.3' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4' },
      h4: { fontSize: '1.25rem', lineHeight: '1.4' },
      h5: { fontSize: '1.125rem', lineHeight: '1.4' },
      h6: { fontSize: '1rem', lineHeight: '1.4' },
    },
  },
  
  // Настройки отступов
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  
  // Настройки радиусов
  radius: {
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  
  // Настройки теней
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  },
}); 