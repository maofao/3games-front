import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { routes } from '../config/routes';

export const Router = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Layout>
  );
}; 