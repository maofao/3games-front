import type { FC } from 'react';
import { Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useTheme } from '../model/useTheme';
import { styles } from '../styles';

export const ThemeSwitcher: FC = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <Button
      variant="subtle"
      color={dark ? 'yellow' : 'blue'}
      onClick={toggleTheme}
      className={styles.button(dark)}
      leftSection={dark ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
    >
      {dark ? 'Светлая тема' : 'Темная тема'}
    </Button>
  );
}; 