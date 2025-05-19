import React from 'react';
import type { RouteObject } from 'react-router-dom';
import { MainPage } from '@/pages/main';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
]; 