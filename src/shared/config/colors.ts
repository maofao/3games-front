// Цветовая палитра для игрового приложения
export const COLORS = {
  // Основные цвета
  primary: {
    50: '#FFF8F0',
    100: '#FFE8D1',
    200: '#FFD4A3',
    300: '#FFB366',
    400: '#FF9933',
    500: '#FF6B00', // Основной оранжевый
    600: '#E55A00',
    700: '#CC4400',
    800: '#B33300',
    900: '#8A2600',
  },
  
  // Дополнительные цвета для игр
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
  
  // Нейтральные цвета
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
} as const;

// Семантические цвета для светлой темы
export const LIGHT_THEME = {
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F9FA',
    surface: '#F1F3F4',
  },
  text: {
    primary: '#202124',
    secondary: '#5F6368',
    disabled: '#9AA0A6',
    inverse: '#FFFFFF',
  },
  border: {
    primary: '#E8EAED',
    secondary: '#DADCE0',
  },
  shadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
} as const;

// Семантические цвета для темной темы
export const DARK_THEME = {
  background: {
    primary: '#0F0F0F',
    secondary: '#1A1A1A',
    surface: '#2D2D2D',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0',
    disabled: '#666666',
    inverse: '#202124',
  },
  border: {
    primary: '#2D2D2D',
    secondary: '#404040',
  },
  shadow: '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.7)',
} as const;

// Статусные цвета
export const STATUS_COLORS = {
  success: COLORS.green[500],
  warning: COLORS.primary[500], // Исправлено: было orange, стало primary
  error: COLORS.red[500],
  info: COLORS.blue[500],
} as const;

// Цвета для игровых элементов
export const GAME_COLORS = {
  player: COLORS.blue[500],
  enemy: COLORS.red[500],
  powerUp: COLORS.green[500],
  bonus: COLORS.purple[500],
  neutral: COLORS.gray[500],
} as const;

// Утилитарные функции для работы с цветами
export const getThemeColors = (isDark: boolean) => {
  return isDark ? DARK_THEME : LIGHT_THEME;
};

export const getContrastColor = (backgroundColor: string) => {
  // Простая логика определения контрастного цвета
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
  return brightness > 128 ? COLORS.gray[900] : COLORS.gray[50];
}; 