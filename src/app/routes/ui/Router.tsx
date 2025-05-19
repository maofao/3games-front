import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../config/routes';

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}; 