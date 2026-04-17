import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Social: React.FC = () => (
  <section className="pb-4">
    <SectionHeader
      label="Resta connesso"
      title="Seguici sui Social"
      subtitle="Resta aggiornato su tutti gli eventi, tornei e novità del nostro circolo"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <FaFacebookF className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-bold text-chess-dark mb-3">Facebook</h3>
        <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">
          Segui la nostra pagina per news, eventi e foto dei tornei in tempo reale.
        </p>
        <a
          href="https://www.facebook.com/mentanascacchi?locale=it_IT"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors text-sm"
        >
          Seguici su Facebook
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <FaInstagram className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-lg font-bold text-chess-dark mb-3">Instagram</h3>
        <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">
          Guarda le stories dei tornei e le foto più belle della community.
        </p>
        <a
          href="https://instagram.com/avamposto.garibaldino"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm"
        >
          Seguici su Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Social;
