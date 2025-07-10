import type { FC, ReactNode } from 'react';
import { Footer } from '@/shared/ui';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0F0F0F]">
      {/* Основной контент */}
      <main className="flex-1">
        {children}
      </main>
      {/* Футер */}
      <Footer />
    </div>
  );
}; 