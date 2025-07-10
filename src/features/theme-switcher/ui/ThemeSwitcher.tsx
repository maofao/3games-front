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
      onClick={toggleTheme}
      className={styles.button(dark)}
      px={8}
    >
      {dark 
        ? <IconSun size="1.5rem" className={styles.icon(dark)} /> 
        : <IconMoonStars size="1.5rem" className={styles.icon(dark)} />
      }
    </Button>
  );
}; 