import React from "react";
import { useNavigate } from "react-router-dom";

const ComeVincere = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-4xl font-bold mb-4 text-center" id="come-vincere">
        Scacco Matto
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Per vincere una partita di scacchi devi mettere il re avversario sotto scacco matto, cioè attaccarlo in modo tale che non abbia nessuna mossa legale per fuggire.
      </p>

      {/* Container flex per le due immagini affiancate */}
      <div className="flex justify-center gap-8 mb-6">
        <div className="w-1/2 text-center">
          <img
            src="/images/EsempioScaccoMatto1.jpg"
            alt="Esempio di scacco matto 1"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Esempio di scacco matto 1</p>
        </div>

        <div className="w-1/2 text-center">
          <img
            src="/images/EsempioScaccoMatto2.jpg"
            alt="Esempio di scacco matto 2"
            className="mx-auto max-h-100 object-contain rounded-lg shadow-md"
          />
          <p className="mt-2 text-sm text-gray-500 italic">Esempio di scacco matto 2</p>
        </div>
      </div>

      {/* <p className="text-lg text-gray-700 mb-2">Consigli utili:</p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Controlla il centro della scacchiera per una migliore mobilità.</li>
        <li>Sviluppa tutti i tuoi pezzi prima di iniziare un attacco.</li>
        <li>Tieni il tuo re al sicuro tramite l’arrocco.</li>
        <li>Approfitta degli errori dell’avversario, come pezzi lasciati indifesi.</li>
        <li>Combina tattiche e strategie per ottenere un vantaggio decisivo.</li>
      </ul> */}
      {/* Pulsante per Regole Fondamentali */}
      <div className="mt-10 text-center flex justify-center gap-4">
        {/* <button
          onClick={() => navigate("/learn/regole/comegiocare")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Come Giocare
        </button> */}
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

export default ComeVincere;
