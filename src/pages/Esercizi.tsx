import React from "react";
import { Play, Puzzle, Flag, Zap, Target, Dumbbell } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Sezione = {
  id: string;
  titolo: string;
  descrizione: string;
  icona: JSX.Element;
  pulsanti: {
    label: string;
    path: string;
  }[];
  pathSezione: string;
};

const sezioni: Sezione[] = [
  {
     id: "matto-1-2-3...",
    titolo: "Scacco Matto in 1-2-3 mosse. Laszlo Polgar",
    descrizione:
      "Esercitati a trovare lo scacco matto immediato. Sviluppa la tua vista scacchistica e riconosci i pattern di matto.",
    icona: <Zap className="w-6 h-6 text-yellow-600" />,
    pathSezione: "/esercizi/matto",
    pulsanti: [
      // { label: "Matto con Donna", path: "/esercizi/matto-1/donna" },
      // { label: "Matto con Torre", path: "/esercizi/matto-1/torre" },
      // { label: "Matto con pezzi minori", path: "/esercizi/matto-1/pezzi-minori" },
    ],
  },
  {
    id: "aperture",
    titolo: "Esercizi di Apertura",
    descrizione:
      "Metti alla prova la tua conoscenza delle aperture più comuni. Riconosci le posizioni tipiche e scegli le mosse migliori per sviluppare i tuoi pezzi.",
    icona: <Play className="w-6 h-6 text-green-600" />,
    pathSezione: "/esercizi/aperture",
    pulsanti: [
      { label: "Aperture Italiane", path: "/esercizi/aperture/italiana" },
      { label: "Difesa Siciliana", path: "/esercizi/aperture/siciliana" },
      { label: "Gambetto di Re", path: "/esercizi/aperture/gambetto-re" },
    ],
  },
  {
    id: "tattiche",
    titolo: "Esercizi Tattici",
    descrizione:
      "Allenati con combinazioni tattiche come forchette, inchiodature e attacchi doppi. Migliora la tua capacità di vedere mosse vincenti.",
    icona: <Puzzle className="w-6 h-6 text-purple-600" />,
    pathSezione: "/esercizi/tattiche",
    pulsanti: [
      { label: "Forchette", path: "/esercizi/tattiche/forchette" },
      { label: "Inchiodature", path: "/esercizi/tattiche/inchiodature" },
      { label: "Scacco doppio", path: "/esercizi/tattiche/scacco-doppio" },
    ],
  },
  {
    id: "finali",
    titolo: "Esercizi di Finale",
    descrizione:
      "Perfeziona la tua tecnica nei finali di partita. Impara a convertire vantaggi minimi e a padroneggiare finali fondamentali.",
    icona: <Flag className="w-6 h-6 text-red-600" />,
    pathSezione: "/esercizi/finali",
    pulsanti: [
      { label: "Re e Donna vs Re", path: "/esercizi/finali/donna-re" },
      { label: "Re e Torre vs Re", path: "/esercizi/finali/torre-re" },
      { label: "Finali di pedoni", path: "/esercizi/finali/pedoni" },
    ],
  },

  // {
  //   id: "matto-2",
  //   titolo: "Matto in 2 Mosse",
  //   descrizione:
  //     "Risolvi problemi di scacco matto in due mosse. Questi esercizi ti aiuteranno a pensare in sequenza e a pianificare combinazioni.",
  //   icona: <Target className="w-6 h-6 text-blue-600" />,
  //   pathSezione: "/esercizi/matto-2",
  //   pulsanti: [
  //     { label: "Facile", path: "/esercizi/matto-2/facile" },
  //     { label: "Intermedio", path: "/esercizi/matto-2/intermedio" },
  //     { label: "Difficile", path: "/esercizi/matto-2/difficile" },
  //   ],
  // },
  // {
  //   id: "mix",
  //   titolo: "Esercizi Misti",
  //   descrizione:
  //     "Una combinazione di diversi tipi di esercizi per testare tutte le tue abilità scacchistiche in modo vario e completo.",
  //   icona: <Dumbbell className="w-6 h-6 text-pink-600" />,
  //   pathSezione: "/esercizi/mix",
  //   pulsanti: [
  //     { label: "Livello Principiante", path: "/esercizi/mix/principiante" },
  //     { label: "Livello Intermedio", path: "/esercizi/mix/intermedio" },
  //     { label: "Livello Avanzato", path: "/esercizi/mix/avanzato" },
  //   ],
  // },
];

function Esercizi() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mt-8 mb-6 text-center">
        Esercizi di Scacchi
      </h1>
      <p className="text-lg text-center mb-10 text-gray-600">
        Migliora il tuo gioco con esercizi pratici su aperture, tattiche, finali e problemi di matto.
      </p>

      {sezioni.map((s) => (
        <div
          key={s.id}
          className="mb-10 p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200"
        >
          <div
            className="cursor-pointer flex items-center gap-3 mb-2 group"
            onClick={() => navigate(s.pathSezione)}
          >
            <div className="group-hover:scale-110 transition-transform">{s.icona}</div>
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
              {s.titolo}
            </h2>
          </div>

          <p className="text-gray-600 mb-4">{s.descrizione}</p>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-nowrap gap-4 overflow-x-auto pb-2">
            {s.pulsanti.map((btn) => {
              let btnColorClass = "bg-chess-gold text-chess-black hover:bg-chess-gold-dark";

              if (s.id === "aperture") {
                btnColorClass = "bg-green-500 text-white hover:bg-green-600";
              } else if (s.id === "tattiche") {
                btnColorClass = "bg-purple-500 text-white hover:bg-purple-600";
              } else if (s.id === "finali") {
                btnColorClass = "bg-red-500 text-white hover:bg-red-600";
              } else if (s.id === "matto-1") {
                btnColorClass = "bg-yellow-500 text-black hover:bg-yellow-600";
              } else if (s.id === "matto-2") {
                btnColorClass = "bg-blue-500 text-white hover:bg-blue-600";
              } else if (s.id === "mix") {
                btnColorClass = "bg-pink-500 text-white hover:bg-pink-600";
              }

              return (
                <button
                  key={btn.path}
                  onClick={() => navigate(btn.path)}
                  className={`shrink-0 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap text-center ${btnColorClass}`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Esercizi;