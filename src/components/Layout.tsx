import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Analytics } from "@vercel/analytics/react";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-chess-light flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Layout;