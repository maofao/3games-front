import type { FC } from 'react';
import { Card, Title, Text, Group, Stack, useMantineColorScheme } from '@mantine/core';
import { COLORS, LIGHT_THEME, DARK_THEME, STATUS_COLORS, GAME_COLORS } from '@/shared/config/colors';

interface ColorSwatchProps {
  name: string;
  color: string;
  textColor?: string;
}

const ColorSwatch: FC<ColorSwatchProps> = ({ name, color, textColor = '#FFFFFF' }) => (
  <div className="flex flex-col items-center">
    <div 
      className="w-16 h-16 rounded-lg mb-2 shadow-md"
      style={{ backgroundColor: color }}
    />
    <Text size="xs" className="text-center font-medium" style={{ color: textColor }}>
      {name}
    </Text>
    <Text size="xs" className="text-center opacity-70" style={{ color: textColor }}>
      {color}
    </Text>
  </div>
);

export const ColorPalette: FC = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? DARK_THEME : LIGHT_THEME;

  return (
    <Stack gap="xl" className="p-6">
      {/* Основные цвета */}
      <Card className="shadow-lg">
        <Title order={2} mb="md" className="text-orange-500">Основная палитра</Title>
        <Group gap="lg" justify="center">
          {Object.entries(COLORS.primary).map(([shade, color]) => (
            <ColorSwatch 
              key={shade} 
              name={`Primary ${shade}`} 
              color={color}
              textColor={theme.text.primary}
            />
          ))}
        </Group>
      </Card>

      {/* Дополнительные цвета */}
      <Card className="shadow-lg">
        <Title order={2} mb="md" className="text-blue-500">Дополнительные цвета</Title>
        <Stack gap="md">
          <div>
            <Text size="lg" mb="sm" className="text-blue-500 font-medium">Синий</Text>
            <Group gap="lg" justify="center">
              {Object.entries(COLORS.blue).slice(0, 6).map(([shade, color]) => (
                <ColorSwatch 
                  key={shade} 
                  name={`Blue ${shade}`} 
                  color={color}
                  textColor={theme.text.primary}
                />
              ))}
            </Group>
          </div>
          
          <div>
            <Text size="lg" mb="sm" className="text-green-500 font-medium">Зеленый</Text>
            <Group gap="lg" justify="center">
              {Object.entries(COLORS.green).slice(0, 6).map(([shade, color]) => (
                <ColorSwatch 
                  key={shade} 
                  name={`Green ${shade}`} 
                  color={color}
                  textColor={theme.text.primary}
                />
              ))}
            </Group>
          </div>
          
          <div>
            <Text size="lg" mb="sm" className="text-red-500 font-medium">Красный</Text>
            <Group gap="lg" justify="center">
              {Object.entries(COLORS.red).slice(0, 6).map(([shade, color]) => (
                <ColorSwatch 
                  key={shade} 
                  name={`Red ${shade}`} 
                  color={color}
                  textColor={theme.text.primary}
                />
              ))}
            </Group>
          </div>
          
          <div>
            <Text size="lg" mb="sm" className="text-purple-500 font-medium">Фиолетовый</Text>
            <Group gap="lg" justify="center">
              {Object.entries(COLORS.purple).slice(0, 6).map(([shade, color]) => (
                <ColorSwatch 
                  key={shade} 
                  name={`Purple ${shade}`} 
                  color={color}
                  textColor={theme.text.primary}
                />
              ))}
            </Group>
          </div>
        </Stack>
      </Card>

      {/* Статусные цвета */}
      <Card className="shadow-lg">
        <Title order={2} mb="md" className="text-gray-500">Статусные цвета</Title>
        <Group gap="lg" justify="center">
          <ColorSwatch name="Success" color={STATUS_COLORS.success} />
          <ColorSwatch name="Warning" color={STATUS_COLORS.warning} />
          <ColorSwatch name="Error" color={STATUS_COLORS.error} />
          <ColorSwatch name="Info" color={STATUS_COLORS.info} />
        </Group>
      </Card>

      {/* Игровые цвета */}
      <Card className="shadow-lg">
        <Title order={2} mb="md" className="text-purple-500">Игровые цвета</Title>
        <Group gap="lg" justify="center">
          <ColorSwatch name="Player" color={GAME_COLORS.player} />
          <ColorSwatch name="Enemy" color={GAME_COLORS.enemy} />
          <ColorSwatch name="PowerUp" color={GAME_COLORS.powerUp} />
          <ColorSwatch name="Bonus" color={GAME_COLORS.bonus} />
          <ColorSwatch name="Neutral" color={GAME_COLORS.neutral} />
        </Group>
      </Card>

      {/* Тема */}
      <Card className="shadow-lg">
        <Title order={2} mb="md" className="text-gray-500">Текущая тема: {isDark ? 'Темная' : 'Светлая'}</Title>
        <Group gap="lg" justify="center">
          <ColorSwatch name="Background" color={theme.background.primary} textColor={theme.text.primary} />
          <ColorSwatch name="Surface" color={theme.background.surface} textColor={theme.text.primary} />
          <ColorSwatch name="Border" color={theme.border.primary} textColor={theme.text.primary} />
          <ColorSwatch name="Text Primary" color={theme.text.primary} textColor={theme.text.inverse} />
          <ColorSwatch name="Text Secondary" color={theme.text.secondary} textColor={theme.text.inverse} />
        </Group>
      </Card>
    </Stack>
  );
}; 