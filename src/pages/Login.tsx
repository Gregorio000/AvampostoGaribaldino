import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика входа
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-chess-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img 
          src="/images/LogoAvampGarib.png"
          alt="Avamposto Garibaldino" 
          className="mx-auto h-16 w-auto"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-chess-gold">
          Accedi al tuo account
        </h2>
        <p className="mt-2 text-center text-sm text-chess-light">
          O{' '}
          <Link 
            to="/register" 
            className="font-medium text-chess-gold hover:text-chess-gold/80"
          >
            registrati come nuovo membro
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-chess-black py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-chess-gold/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-chess-light">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-chess-dark text-chess-light px-3 py-2 w-full border border-chess-gray rounded-md focus:outline-none focus:ring-2 focus:ring-chess-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-chess-light">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-chess-dark text-chess-light px-3 py-2 w-full border border-chess-gray rounded-md focus:outline-none focus:ring-2 focus:ring-chess-gold"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-chess-gold focus:ring-chess-gold border-chess-gray rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-chess-light">
                  Ricordami
                </label>
              </div>

              <div className="text-sm">
                <Link 
                  to="/forgot-password" 
                  className="font-medium text-chess-gold hover:text-chess-gold/80"
                >
                  Password dimenticata?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-chess-dark bg-chess-gold hover:bg-chess-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-gold"
              >
                Accedi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;