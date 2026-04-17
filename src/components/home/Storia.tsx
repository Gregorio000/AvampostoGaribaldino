import React from 'react';

const Storia: React.FC = () => (
  <section className="pb-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
      <div>
        <div className="inline-flex items-center mb-4 text-chess-gold font-semibold text-sm uppercase tracking-widest">
          <span className="w-10 h-px bg-chess-gold mr-3" />
          LA NOSTRA STORIA
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark mb-6 leading-tight">
          La nostra Storia
        </h2>
        <div className="space-y-4 text-chess-gray text-lg leading-relaxed">
          <p>L'Avamposto Garibaldino rappresenta anni di tradizione scacchistica a Mentana, ispirandosi all'eroica storia locale mentre guarda con innovazione al futuro.</p>
          <p>L'Associazione ha lo scopo di divulgare il gioco degli scacchi.</p>
          <p>Oggi, con sede moderna e attrezzature all'avanguardia, offriamo tornei, corsi e eventi per appassionati di ogni livello ed età.</p>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/ricordi-vecchi/ricordo-vecchio5.jpg"
            alt="Scacchiera Grande"
            className="w-full h-72 sm:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/20 to-transparent rounded-2xl" />
        </div>
        <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-chess-gold text-chess-dark px-5 py-2.5 rounded-xl shadow-lg font-bold text-sm">
          <span>2015</span>
          <span className="ml-2 font-normal">Anno di Fondazione</span>
        </div>
      </div>
    </div>
  </section>
);

export default Storia;
