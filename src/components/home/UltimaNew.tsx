import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, CalendarDays, Download, ArrowRight, X, ZoomIn } from 'lucide-react';

const UltimaNew: React.FC = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <section className="pt-8 pb-4">

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 rounded-full p-2"
            onClick={() => setShowLightbox(false)}
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src="/images/torneo-rieti.jpeg"
            alt="Torneo Città di Rieti"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Bell className="h-7 w-7 text-chess-gold flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chess-dark">Ultima Notizia</h2>
        </div>
        <Link to="/news" className="text-chess-gold hover:text-chess-dark font-semibold transition-colors flex items-center gap-1 text-sm sm:text-base whitespace-nowrap">
          Vedi tutte le notizie
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <div className="flex flex-col lg:flex-row">

          {/* Testo */}
          <div className="flex-1 p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-xs font-bold">TORNEO</span>
              <span className="text-chess-gray text-sm flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                8–10 Maggio 2026
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-chess-dark mb-3 leading-tight">
              Primo Torneo Nazionale "Città di Rieti"
            </h3>
            <p className="text-chess-gray mb-6 leading-relaxed">
              L'ASD Mentana Scacchi – Avamposto Garibaldino organizza il Primo Torneo Nazionale "Città di Rieti", valevole quale campionato Interprovinciale Rieti–Viterbo. 5 turni a cadenza 90+30, montepremi 2000€.
            </p>

            <div className="space-y-3">
              <div className="bg-chess-gold/10 rounded-xl p-4 border-l-4 border-chess-gold">
                <p className="font-semibold text-chess-dark text-sm mb-1">DOVE E QUANDO</p>
                <p className="text-chess-gray text-sm">Chiesa di San Domenico · Rieti · 8–10 Maggio 2026</p>
                <p className="text-chess-gray text-xs italic mt-0.5">Storico complesso monumentale del XIII secolo</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-gray-400">
                <p className="font-semibold text-chess-dark text-sm mb-1">DETTAGLI</p>
                <p className="text-chess-gray text-sm">5 turni · Cadenza 90+30 · Montepremi 2000€</p>
                <p className="text-chess-gray text-xs italic mt-0.5">3 tornei distinti: open, over 50 e altri</p>
                <a
                  href="/bando-torneo-rieti-2026.pdf"
                  download="Bando_Torneo_Citta_di_Rieti_2026.pdf"
                  className="inline-flex items-center gap-2 mt-3 bg-chess-gold text-chess-dark px-5 py-2.5 rounded-xl font-bold hover:bg-chess-gold/90 transition-all duration-300 shadow hover:shadow-chess-gold/20 hover:-translate-y-0.5 text-sm"
                >
                  <Download className="h-4 w-4" />
                  Scarica il Bando
                </a>
              </div>
            </div>
          </div>

          {/* Foto — cliccabile → lightbox */}
          <div
            className="lg:w-2/5 h-56 sm:h-64 lg:h-auto relative flex-shrink-0 cursor-zoom-in"
            onClick={() => setShowLightbox(true)}
          >
            <img
              src="/images/torneo-rieti.jpeg"
              alt="Torneo Città di Rieti"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white/80 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity">
                <ZoomIn className="h-5 w-5 text-chess-dark" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UltimaNew;
