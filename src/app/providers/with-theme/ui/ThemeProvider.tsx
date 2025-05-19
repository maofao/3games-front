import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from '../config/theme';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MantineProvider theme={theme} defaultColorScheme="auto">
    <Notifications />
    {children}
  </MantineProvider>
); 