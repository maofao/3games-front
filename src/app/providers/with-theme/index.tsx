import React from 'react';
import { ThemeProvider } from './ui/ThemeProvider';

type ComponentType = () => React.ReactNode;

export const withTheme = (component: ComponentType) => () => (
  <ThemeProvider>
    {component()}
  </ThemeProvider>
);

export { ThemeProvider }; 