import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Hourglass, AlertTriangle } from "lucide-react";

const Tempo = () => {
  const navigate = useNavigate();

  // Esempi di situazioni di tempo
  const scenariTempo = [
    {
      icona: <Clock className="w-8 h-8 text-blue-500" />,
      titolo: "Controllo del Tempo Standard",
      descrizione: "Nelle partite con incremento (es. 5+3), si aggiungono 3 secondi al tuo tempo dopo ogni mossa",
      esempio: "Un giocatore con 30 secondi può sopravvivere grazie all'incremento"
    },
    {
      icona: <AlertTriangle className="w-8 h-8 text-amber-500" />,
      titolo: "Time Trouble",
      descrizione: "Senza incremento, sotto i 2 minuti bisogna fare attenzione",
      esempio: "Molti giocatori si affrettano e sbagliano, puoi sfruttarlo a tuo vantaggio"
    },
    {
      icona: <Hourglass className="w-8 h-8 text-red-500" />,
      titolo: "Scadenza del Tempo",
      descrizione: "Se il tempo scade prima di completare le mosse richieste, si perde la partita",
      esempio: "Perdi anche in posizione vincente se finisci il tempo"
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
  {/* Intestazione */}
  <button
    onClick={() => navigate(-1)}
    className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
  >
    ← Torna indietro
  </button>
  
  <div className="text-center">
    <h1 className="text-4xl font-bold mb-2">Il Tempo</h1>
    <p className="text-lg text-gray-700">
      Strategia e gestione del tempo
    </p>
  </div>
      

      {/* Infografica */}
      <div className="bg-chess-light/50 p-6 rounded-xl shadow-md mb-10 border border-chess-light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenariTempo.map((scenario, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                {scenario.icona}
                <h3 className="text-xl font-semibold">{scenario.titolo}</h3>
              </div>
              <p className="text-gray-700 mb-2">{scenario.descrizione}</p>
              <p className="text-sm text-gray-500 italic">Esempio: {scenario.esempio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sezione regole principali */}
      {/* <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="text-amber-600" />
          Regole Fondamentali
        </h2>
        
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">1</span>
            <div>
              <strong>Notazione obbligatoria</strong> nei tornei classici (se hai più di 5 minuti)
            </div>
          </li>
          <li className="flex gap-3">
            <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">2</span>
            <div>
              <strong>Bandierina</strong>: l'orologio analogico mostra il tempo residuo con una bandierina che cade
            </div>
          </li>
          <li className="flex gap-3">
            <span className="bg-amber-100 text-amber-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">3</span>
            <div>
              <strong>Reclami</strong>: per denunciare la scadenza del tempo avversario devi alzare la mano
            </div>
          </li>
        </ul>
      </div> */}

      {/* Consigli strategici */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Strategie di Gestione</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">✔ Cosa fare</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-900">
              <li>Usa l'incremento a tuo vantaggio</li>
              <li>Prenditi più tempo per mosse critiche</li>
              <li>Utilizza a tuo favore il tempo dell'avversario</li>
              <li>Allenati con partite lampo</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">✖ Errori comuni</h3>
            <ul className="list-disc pl-5 space-y-2 text-red-900">
              <li>Guardare l'orologio invece della scacchiera</li>
              <li>Pensare troppo in posizioni semplici</li>
              <li>Dimenticare di premere il clock</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pulsanti */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => navigate("/learn/regole")}
          className="bg-chess-gold hover:bg-chess-gold/90 text-chess-dark px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Vai a tutte le Regole
        </button>
        {/* <button
          onClick={() => navigate("/tools/orologio")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Simulatore Orologio
        </button> */}
      </div>
    </div>
  );
};

export default Tempo;