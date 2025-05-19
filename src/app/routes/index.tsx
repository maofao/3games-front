import { Routes, Route } from 'react-router-dom';
import { MainPage } from '@/pages/main';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}; 