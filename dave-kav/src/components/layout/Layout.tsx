import { FC, ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import './Layout.css';
import React from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
