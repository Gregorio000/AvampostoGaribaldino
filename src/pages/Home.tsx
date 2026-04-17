import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

import Carosello from '../components/home/Carosello';
import Sponsor from '../components/home/Sponsor';
import UltimaNew from '../components/home/UltimaNew';
import Storia from '../components/home/Storia';
import Iscrizione from '../components/home/Iscrizione';
import GiocaOnline from '../components/home/GiocaOnline';
import Social from '../components/home/Social';
import CardSect from '../components/home/CardSect';
import GalleriaSect from '../components/home/GalleriaSect';
import Divider from '../components/home/Divider';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Carosello />
          <div className="absolute inset-0 bg-gradient-to-r from-chess-dark/85 via-chess-dark/55 to-chess-dark/70" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-chess-gold border border-chess-gold/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-chess-gold animate-pulse" />
            Mentana, dal 2015
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Benvenuti all'<br className="hidden sm:block" />
            <span className="text-chess-gold">Avamposto Garibaldino</span>
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Tradizione, eccellenza e passione per gli scacchi nel cuore di Mentana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/soci"
              className="bg-chess-gold text-chess-dark px-8 py-3.5 rounded-xl font-bold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-chess-gold/20 hover:-translate-y-1"
            >
              Scopri il Nostro Circolo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/70 text-white px-8 py-3.5 rounded-xl font-bold hover:border-chess-gold hover:text-chess-gold transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Contattaci ed Iscriviti
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-7 w-7 text-white/60 rotate-90" />
        </div>
      </section>

      {/* ── SPONSOR ── */}
      <Sponsor />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UltimaNew />
        <Divider />

        <Storia />
        <Divider />

        <Iscrizione />
        <Divider />

        <GiocaOnline />
        <Divider />

        <Social />
        <Divider />

        <CardSect />
        <Divider />
        
        <GalleriaSect />
      </div>

    </div>
  );
};

export default Home;