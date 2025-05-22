import React from 'react';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ padding: '1rem', backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
        <h1>CajaPyme</h1>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', textAlign: 'center', fontSize: '0.8rem', color: '#7f8c8d' }}>
        &copy; 2025 CajaPyme
      </footer>
    </div>
  );
};
