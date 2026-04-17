import React from 'react';
import SectionHeader from './SectionHeader';

const GiocaOnline: React.FC = () => (
  <section className="pb-4">
    <SectionHeader
      label="Community digitale"
      title="Gioca con Noi Online"
      subtitle="Unisciti alla nostra community digitale e continua a giocare anche da casa"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <img src="/images/chesscom.png" alt="Chess.com" className="h-10 w-10" />
        </div>
        <h3 className="text-lg font-bold text-chess-dark mb-3">ASD Mentana Scacchi</h3>
        <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">
          Unisciti al nostro club su Chess.com per giocare online, partecipare a tornei e migliorare il tuo gioco.
        </p>
        <a
          href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
        >
          Unisciti su Chess.com
        </a>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
        <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <img src="/images/lichess.png" alt="Lichess" className="h-10 w-10" />
        </div>
        <h3 className="text-lg font-bold text-chess-dark mb-3">Avamposto Junior Online</h3>
        <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">
          Il team Lichess dedicato ai giovani giocatori. Impara con i nostri istruttori esperti.
        </p>
        <a
          href="https://lichess.org/team/avamposto-junior-online"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-800 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-900 transition-colors text-sm"
        >
          Unisciti su Lichess
        </a>
      </div>
    </div>
  </section>
);

export default GiocaOnline;
