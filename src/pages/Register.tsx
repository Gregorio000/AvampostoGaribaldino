import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика регистрации
    console.log(formData);
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
          Diventa membro
        </h2>
        <p className="mt-2 text-center text-sm text-chess-light">
          Già registrato?{' '}
          <Link 
            to="/login" 
            className="font-medium text-chess-gold hover:text-chess-gold/80"
          >
            Accedi al tuo account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-chess-black py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-chess-gold/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-chess-light">
                Nome e cognome
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-chess-dark text-chess-light px-3 py-2 w-full border border-chess-gray rounded-md focus:outline-none focus:ring-2 focus:ring-chess-gold"
                />
              </div>
            </div>

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
                  value={formData.email}
                  onChange={handleChange}
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
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-chess-dark text-chess-light px-3 py-2 w-full border border-chess-gray rounded-md focus:outline-none focus:ring-2 focus:ring-chess-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-chess-light">
                Conferma Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-chess-dark text-chess-light px-3 py-2 w-full border border-chess-gray rounded-md focus:outline-none focus:ring-2 focus:ring-chess-gold"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-chess-gold focus:ring-chess-gold border-chess-gray rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-chess-light">
                Accetto i <Link to="/terms" className="text-chess-gold hover:underline">Termini di servizio</Link> e 
                l'<Link to="/privacy" className="text-chess-gold hover:underline">Informativa sulla privacy</Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-chess-dark bg-chess-gold hover:bg-chess-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-chess-gold"
              >
                Registrati
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;