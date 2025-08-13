import React from "react";
import { useNavigate } from "react-router-dom";

const Stallo = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Pulsante torna indietro */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-4xl font-bold mb-4 text-center">Lo Stallo negli Scacchi</h1>

      <p className="text-lg text-gray-700 mb-6">
        Lo stallo è una situazione in cui il giocatore al turno non ha mosse legali disponibili 
        e il suo re non è sotto scacco. In questo caso, la partita termina con un pareggio.
      </p>

      {/* Container flex per le due immagini affiancate */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="w-1/2 text-center">
          <img
            src="/images/Stallo1.jpg"
            alt="Esempio di stallo 1"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Esempio di stallo base</p>
        </div>

        <div className="w-1/2 text-center">
          <img
            src="/images/Stallo2.jpg"
            alt="Esempio di stallo 2"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Esempio con pezzi maggiori</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-2">Regole principali dello stallo:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li>Determina sempre un pareggio (½ punto per entrambi)</li>
        <li>Non è considerato scacco matto</li>
        <li>Può essere usato strategicamente per salvare una partita persa</li>
        <li>Il re non deve essere sotto scacco</li>
        <li>Non devono esserci mosse legali disponibili</li>
      </ul>

      {/* Pulsante navigazione */}
      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/regole")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Regole
        </button>
      </div>
    </div>
  );
};

export default Stallo;