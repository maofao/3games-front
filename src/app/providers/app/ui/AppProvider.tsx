import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/app/routes';

interface AppProviderProps {
  children?: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      {children || <AppRoutes />}
    </BrowserRouter>
  );
}; 