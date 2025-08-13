import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, ArrowLeft } from "lucide-react";

type Strategia = {
  nome: string;
  descrizione: string;
  path: string;
};

const strategie: Strategia[] = [
  {
    nome: "Controllo del centro",
    descrizione:
      "Strategia per dominare le caselle centrali della scacchiera, fondamentale per la mobilità dei pezzi.",
    path: "/learn/Strategie/Centro",
  },
  {
    nome: "Coordinazione pezzi",
    descrizione:
      "Mantenere i pezzi ben posizionati e supportati tra loro per attacchi efficaci e difesa solida.",
    path: "/learn/Strategie/Coordinazione",
  },
  {
     nome: "Gestione del tempo",
     descrizione:
       "Strategia per usare il tempo di gioco in modo ottimale, evitando errori dovuti alla fretta.",
     path: "/learn/Regole/Tempo",
   },
  // {
  //   nome: "Sviluppo rapido",
  //   descrizione:
  //     "Portare velocemente i pezzi in gioco per ottenere un vantaggio iniziale.",
  //   path: "/learn/Strategie/SviluppoRapido",
  // },
  // {
  //   nome: "Difesa solida",
  //   descrizione:
  //     "Costruire una struttura difensiva resistente per proteggere il re e mantenere l'equilibrio.",
  //   path: "/learn/Strategie/DifesaSolida",
  // },
  // {
  //   nome: "Attacco sul re",
  //   descrizione:
  //     "Pianificare e coordinare attacchi diretti contro il re avversario.",
  //   path: "/learn/Strategie/AttaccoSulRe",
  // },
  // {
  //   nome: "Scambio vantaggioso",
  //   descrizione:
  //     "Effettuare scambi di pezzi che migliorano la propria posizione.",
  //   path: "/learn/Strategie/ScambioVantaggioso",
  // },
  // {
  //   nome: "Gioco posizionale",
  //   descrizione:
  //     "Concentrare il gioco sul miglioramento della posizione e il controllo della scacchiera.",
  //   path: "/learn/Strategie/GiocoPosizionale",
  // },
  // {
  //   nome: "Preparazione dell'endgame",
  //   descrizione:
  //     "Strategie per arrivare ai finali con una posizione favorevole.",
  //   path: "/learn/Strategie/PreparazioneEndgame",
  // },
  // {
  //   nome: "Sacrificio strategico",
  //   descrizione:
  //     "Sacrificare un pezzo per ottenere un vantaggio strategico a lungo termine.",
  //   path: "/learn/Strategie/SacrificioStrategico",
  // },
];

export default function Strategie() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const strategieFiltrate = strategie.filter((s) =>
    s.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 relative">
      {/* Bottone torna a Impara */}
      <button
        onClick={() => navigate("/learn")}
        className="absolute top-6 left-6 flex items-center gap-2 text-yellow-600 hover:text-red-800 font-semibold transition-colors"
        aria-label="Torna a Impara"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Torna a Impara</span>
      </button>

      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Strategie degli Scacchi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Scopri le strategie chiave per migliorare il tuo gioco a scacchi.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca una strategia..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strategieFiltrate.map((strategia) => (
          <div
            key={strategia.nome}
            onClick={() => navigate(strategia.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-yellow-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <Crown className="text-yellow-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-yellow-800">{strategia.nome}</h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{strategia.descrizione}</p>
          </div>
        ))}

        {strategieFiltrate.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessuna strategia trovata.
          </p>
        )}
      </div>
    </div>
  );
}
