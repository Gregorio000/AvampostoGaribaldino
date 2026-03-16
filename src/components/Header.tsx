import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Soci', href: '/soci' },
    { name: 'Squadre', href: '/squadra' },
    { name: 'Scac Gigante', href: '/scacchiera-gigante' },
    { name: 'Patrimonio', href: '/patrimonio' },
    { name: 'Foto', href: '/ricordi' },
    { name: 'Contattaci', href: '/contact' },
    // { name: 'Profilo', href: '/profilo' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-chess-dark shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/LogoNuovo2.png"
              alt="Torre Scacchi"
              className="h-8 w-8 text-chess-gold"
            />
            <span className="text-chess-light font-bold text-xl">
              Avamposto Garibaldino
            </span>
          </Link>

          {/* Desktop Navigation — visibile solo da lg in su */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-chess-gold bg-chess-dark/50'
                    : 'text-chess-light hover:text-chess-gold hover:bg-chess-dark/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile/tablet menu button — visibile sotto lg */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-chess-light hover:text-chess-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/tablet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-chess-gold/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-chess-gold bg-chess-dark/50'
                      : 'text-chess-light hover:text-chess-gold hover:bg-chess-dark/30'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;