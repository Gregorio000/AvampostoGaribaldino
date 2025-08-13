import React from "react";
import { useNavigate } from "react-router-dom";

const Patta = () => {
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

      <h1 className="text-4xl font-bold mb-4 text-center">La Patta negli Scacchi</h1>

      <p className="text-lg text-gray-700 mb-6">
        La patta (o pareggio) è un risultato che può verificarsi in diverse situazioni durante una partita di scacchi.
        Ecco le principali condizioni che portano a una patta:
      </p>

      {/* Container flex per le due immagini affiancate */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="w-1/2 text-center">
          <img
            src="/images/Patta1.jpg"
            alt="Esempio di patta per stallo"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Patta per stallo</p>
        </div>

        <div className="w-1/2 text-center">
          <img
            src="/images/Patta2.jpg"
            alt="Esempio di patta per materiale insufficiente"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Materiale insufficiente</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-2">Situazioni che portano a patta:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
        <li><strong>Stallo</strong>: il giocatore al turno non ha mosse legali e il re non è sotto scacco</li>
        <li><strong>Materiale insufficiente</strong>: nessuno dei due giocatori ha pezzi sufficienti per dare matto (Re vs Re, Re + Alfiere o Cavallo vs Re, Re + 2 Cavalli vs Re)</li>
        <li><strong>Ripetizione di mosse</strong>: la stessa posizione si ripete tre volte</li>
        <li><strong>Regola dei 50 mosse</strong>: nessun pedone viene mosso e nessun pezzo viene catturato per 50 mosse</li>
        <li><strong>Accordo tra i giocatori</strong>: i giocatori possono concordare il pareggio</li>
      </ul>

      {/* Pulsante navigazione */}
      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/regole")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Regole
        </button>
        {/* <button
          onClick={() => navigate("/learn/regole/stallo")}
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Vedi Stallo
        </button> */}
      </div>
    </div>
  );
};

export default Patta;