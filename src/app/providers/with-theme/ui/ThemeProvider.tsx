import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../config/theme';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function TailwindDarkSync() {
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    if (colorScheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [colorScheme]);
  return null;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MantineProvider theme={theme} defaultColorScheme="auto">
    <TailwindDarkSync />
    <Notifications />
    {children}
  </MantineProvider>
); 