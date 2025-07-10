# Руководство по цветовой гамме 3Games

## Обзор

Проект использует четкую и согласованную цветовую гамму, разработанную специально для игрового приложения с поддержкой светлой и темной тем.

## Основная палитра

### 🟠 Оранжевый (Primary)
Основной цвет бренда - энергичный и привлекательный для игровой тематики.

```typescript
import { COLORS } from '@/shared/config/colors';

// Использование
COLORS.primary[500] // Основной оранжевый #FF6B00
COLORS.primary[400] // Светлый оранжевый #FF9933
COLORS.primary[600] // Темный оранжевый #E55A00
```

### 🔵 Синий
Используется для интерактивных элементов, ссылок и информационных блоков.

```typescript
COLORS.blue[500] // Основной синий #1A8CFF
COLORS.blue[300] // Светлый синий #80BFFF
COLORS.blue[700] // Темный синий #004D99
```

### 🟢 Зеленый
Для успешных действий, положительных статусов и игровых бонусов.

```typescript
COLORS.green[500] // Основной зеленый #1AFF5C
COLORS.green[300] // Светлый зеленый #80FFA3
COLORS.green[700] // Темный зеленый #009933
```

### 🔴 Красный
Для ошибок, предупреждений и игровых врагов.

```typescript
COLORS.red[500] // Основной красный #FF1A1A
COLORS.red[300] // Светлый красный #FF8080
COLORS.red[700] // Темный красный #990000
```

### 🟣 Фиолетовый
Для премиум функций, бонусов и специальных элементов.

```typescript
COLORS.purple[500] // Основной фиолетовый #B31AFF
COLORS.purple[300] // Светлый фиолетовый #D180FF
COLORS.purple[700] // Темный фиолетовый #6B0099
```

## Семантические цвета

### Статусные цвета
```typescript
import { STATUS_COLORS } from '@/shared/config/colors';

STATUS_COLORS.success // Успех (зеленый)
STATUS_COLORS.warning // Предупреждение (оранжевый/primary)
STATUS_COLORS.error   // Ошибка (красный)
STATUS_COLORS.info    // Информация (синий)
```

### Игровые цвета
```typescript
import { GAME_COLORS } from '@/shared/config/colors';

GAME_COLORS.player   // Игрок (синий)
GAME_COLORS.enemy    // Враг (красный)
GAME_COLORS.powerUp  // Усиление (зеленый)
GAME_COLORS.bonus    // Бонус (фиолетовый)
GAME_COLORS.neutral  // Нейтральный (серый)
```

## Темы

### Светлая тема
```typescript
import { LIGHT_THEME } from '@/shared/config/colors';

LIGHT_THEME.background.primary   // Основной фон #FFFFFF
LIGHT_THEME.background.surface   // Поверхность #F1F3F4
LIGHT_THEME.text.primary         // Основной текст #202124
LIGHT_THEME.text.secondary       // Вторичный текст #5F6368
LIGHT_THEME.border.primary       // Основная граница #E8EAED
```

### Темная тема
```typescript
import { DARK_THEME } from '@/shared/config/colors';

DARK_THEME.background.primary    // Основной фон #0F0F0F
DARK_THEME.background.surface    // Поверхность #1A1A1A
DARK_THEME.text.primary          // Основной текст #FFFFFF
DARK_THEME.text.secondary        // Вторичный текст #B0B0B0
DARK_THEME.border.primary        // Основная граница #2D2D2D
```

## Использование в компонентах

### С Mantine
```typescript
import { useMantineColorScheme } from '@mantine/core';
import { getThemeColors } from '@/shared/config/colors';

const MyComponent = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = getThemeColors(isDark);
  
  return (
    <div style={{ 
      backgroundColor: theme.background.primary,
      color: theme.text.primary 
    }}>
      Контент
    </div>
  );
};
```

### С Tailwind CSS
```typescript
// Использование кастомных цветов
<div className="bg-orange-500 text-white">Оранжевая кнопка</div>
<div className="bg-blue-500 text-white">Синяя кнопка</div>
<div className="bg-green-500 text-white">Зеленая кнопка</div>

// Использование с темной темой
<div className="dark:bg-gray-800 bg-white">
  <span className="dark:text-white text-gray-900">Адаптивный текст</span>
</div>
```

### С CSS-in-JS
```typescript
import { COLORS, LIGHT_THEME, DARK_THEME } from '@/shared/config/colors';

const styles = {
  container: (isDark: boolean) => ({
    backgroundColor: isDark ? DARK_THEME.background.primary : LIGHT_THEME.background.primary,
    color: isDark ? DARK_THEME.text.primary : LIGHT_THEME.text.primary,
    border: `1px solid ${isDark ? DARK_THEME.border.primary : LIGHT_THEME.border.primary}`,
  }),
  button: {
    backgroundColor: COLORS.primary[500],
    color: 'white',
    '&:hover': {
      backgroundColor: COLORS.primary[600],
    },
  },
};
```

## Утилитарные функции

### Получение цветов темы
```typescript
import { getThemeColors } from '@/shared/config/colors';

const theme = getThemeColors(isDark);
```

### Определение контрастного цвета
```typescript
import { getContrastColor } from '@/shared/config/colors';

const textColor = getContrastColor(backgroundColor);
```

## Рекомендации по использованию

### 1. Приоритет цветов
- **Primary (Orange)**: Основные действия, кнопки, акценты
- **Blue**: Ссылки, информационные элементы
- **Green**: Успешные действия, положительные статусы
- **Red**: Ошибки, предупреждения, удаление
- **Purple**: Премиум функции, специальные элементы

### 2. Доступность
- Всегда обеспечивайте достаточный контраст (минимум 4.5:1)
- Используйте `getContrastColor()` для автоматического определения цвета текста
- Тестируйте цвета в обеих темах

### 3. Консистентность
- Используйте семантические цвета для соответствующих действий
- Придерживайтесь установленной палитры
- Избегайте создания новых цветов без необходимости

### 4. Анимации
- Используйте плавные переходы при смене тем
- Применяйте `transition-colors duration-300` для цветовых изменений

## Примеры компонентов

### Кнопка
```typescript
const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
```

### Карточка
```typescript
const Card = ({ children, ...props }) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <div 
      className={`
        p-6 rounded-lg shadow-md transition-all duration-300
        ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
        border
      `}
      {...props}
    >
      {children}
    </div>
  );
};
``` 