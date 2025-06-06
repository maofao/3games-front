import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWithProviders } from '@/app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
);
