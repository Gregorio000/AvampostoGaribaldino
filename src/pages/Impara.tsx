import React from "react";
import { Book, Play, Puzzle, Crown, Flag, Dumbbell, Scroll } from "lucide-react";
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
    id: "regole",
    titolo: "Regole",
    descrizione:
      "Scopri come si muovono i pezzi, come si vince, e le regole fondamentali come l'arrocco, l'en passant e la promozione.",
    icona: <Book className="w-6 h-6 text-blue-600" />,
    pathSezione: "/learn/Regole",
    pulsanti: [
      { label: "Come giocare", path: "/learn/Regole/ComeGiocare" },
      { label: "Scacco Matto", path: "/learn/Regole/ComeVincere" },
      { label: "Regole fondamentali", path: "/learn/Regole/RegoleFondamentali" },
    ],
  },
  {
    id: "aperture",
    titolo: "Aperture",
    descrizione:
      "Impara le aperture più usate come l'Apertura Italiana, la Difesa Siciliana e il Gambetto di Re, e il loro scopo strategico.",
    icona: <Play className="w-6 h-6 text-green-600" />,
    pathSezione: "/learn/Aperture",
    pulsanti: [
      { label: "Aperture Aperte", path: "/learn/Aperture/Aperte" },
      { label: "Aperture Semichiuse", path: "/learn/Aperture/Semichiuse" },
      { label: "Aperture Chiuse", path: "/learn/Aperture/Chiuse" },
    ],
  },
  {
    id: "tattiche",
    titolo: "Tattiche",
    descrizione:
      "Scopri le tattiche più efficaci del gioco degli scacchi, come il doppio attacco, l'inchiodatura, lo scacco doppio e il sacrificio.",
    icona: <Puzzle className="w-6 h-6 text-purple-600" />,
    pathSezione: "/learn/Tattiche",
    pulsanti: [
      { label: "Doppio attacco", path: "/learn/Tattiche/DoppioAttacco" },
      { label: "Inchiodatura", path: "/learn/Tattiche/Inchiodatura" },
      { label: "Sacrificio", path: "/learn/Tattiche/Sacrificio" },
    ],
  },
  {
    id: "strategie",
    titolo: "Strategie",
    descrizione:
      "Approfondisci la strategia posizionale, il controllo del centro, la coordinazione dei pezzi e la gestione del tempo.",
    icona: <Crown className="w-6 h-6 text-yellow-600" />,
    pathSezione: "/learn/Strategie",
    pulsanti: [
      { label: "Controllo del centro", path: "/learn/Strategie/Centro" },
      { label: "Coordinazione pezzi", path: "/learn/Strategie/Coordinazione" },
      { label: "Gestione del tempo", path: "/learn/Regole/Tempo" },
    ],
  },
  {
    id: "finali",
    titolo: "Finali",
    descrizione:
      "Impara i finali essenziali come Re e Torre contro Re, l'opposizione, e come promuovere correttamente i pedoni.",
    icona: <Flag className="w-6 h-6 text-red-600" />,
    pathSezione: "/learn/Finali",
    pulsanti: [
      { label: "Due Torri contro Re", path: "/learn/Finali/DueTorri" },
      { label: "Opposizione", path: "/learn/Finali/Opposizione" },
      { label: "Finale di Pedoni", path: "/learn/Finali/FinalePedoni" },
    ],
  },
  {
    id: "storia",
    titolo: "Storia degli Scacchi",
    descrizione:
      "Scopri l'evoluzione del gioco degli scacchi, dalle sue origini fino ai grandi maestri moderni.",
    icona: <Scroll className="w-6 h-6 text-orange-600" />,
    pathSezione: "/learn/Storia",
    pulsanti: [
      { label: "Capitolo 1: Origini", path: "/learn/Storia/Capitolo1" },
      { label: "Capitolo 2: Medioevo", path: "/learn/Storia/Capitolo2" },
      { label: "Capitolo 3: Attualità", path: "/learn/Storia/Capitolo3" },
    ],
  },
];

function Impara() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mt-8 mb-6 text-center">
        Impara a giocare a scacchi
      </h1>
      <p className="text-lg text-center mb-10 text-gray-600">
        Una guida completa per principianti e giocatori intermedi. Scopri le regole, le aperture, le tattiche e molto altro.
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
              let btnColorClass = "text-white hover:opacity-90 transition-colors";

              // Assegna colori diversi in base alla sezione
              if (s.id === "regole") {
                btnColorClass = "bg-blue-600 " + btnColorClass;
              } else if (s.id === "aperture") {
                btnColorClass = "bg-green-600 " + btnColorClass;
              } else if (s.id === "tattiche") {
                btnColorClass = "bg-purple-600 " + btnColorClass;
              } else if (s.id === "strategie") {
                btnColorClass = "bg-yellow-500 text-black hover:bg-yellow-600 transition-colors";
              } else if (s.id === "finali") {
                btnColorClass = "bg-red-600 " + btnColorClass;
              } else if (s.id === "storia") {
                btnColorClass = "bg-orange-600 " + btnColorClass;
              }

              return (
                <button
                  key={btn.path}
                  onClick={() => navigate(btn.path)}
                  className={`shrink-0 px-6 py-3 rounded-lg font-semibold whitespace-nowrap text-center ${btnColorClass}`}
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

export default Impara;