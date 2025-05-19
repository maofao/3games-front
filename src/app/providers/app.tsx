import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { AppRoutes } from '@/app/routes';

export const App = () => {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'blue',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}; 