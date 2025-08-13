import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Puzzle, ArrowLeft } from "lucide-react";

type Tattica = {
  nome: string;
  descrizione: string;
  path: string;
};

const tattiche: Tattica[] = [
  {
    nome: "Doppio attacco",
    descrizione:
      "Una tattica in cui un pezzo attacca simultaneamente due o più pezzi avversari.",
    path: "/learn/Tattiche/DoppioAttacco",
  },
  {
    nome: "Inchiodatura",
    descrizione:
      "Una mossa che immobilizza un pezzo perché muovendolo si perderebbe un pezzo più prezioso.",
    path: "/learn/Tattiche/Inchiodatura",
  },
  {
    nome: "Scacco doppio",
    descrizione:
      "Uno scacco dato simultaneamente da due pezzi, forzando una perdita.",
    path: "/learn/Tattiche/ScaccoDoppio",
  },
  // {
  //   nome: "Scacco scoperto",
  //   descrizione:
  //     "Una mossa che libera un attacco da un altro pezzo.",
  //   path: "/learn/Tattiche/ScaccoScoperto",
  // },
  {
    nome: "Zugzwang",
    descrizione:
      "Situazione in cui ogni mossa del giocatore peggiora la sua posizione.",
    path: "/learn/Tattiche/Zugzwang",
  },
  {
    nome: "Sacrificio",
    descrizione:
      "Dare via volontariamente un pezzo per ottenere un vantaggio strategico o tattico.",
    path: "/learn/Tattiche/Sacrificio",
  },
  // aggiungi altre tattiche qui se vuoi...
];

export default function Tattiche() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const tatticheFiltrate = tattiche.filter((t) =>
    t.nome.toLowerCase().includes(query.toLowerCase())
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
        Tattiche degli Scacchi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Le tattiche più efficaci per migliorare il tuo gioco.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca una tattica..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tatticheFiltrate.map((tattica) => (
          <div
            key={tattica.nome}
            onClick={() => navigate(tattica.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-purple-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <Puzzle className="text-purple-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-blue-800">{tattica.nome}</h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{tattica.descrizione}</p>
          </div>
        ))}

        {tatticheFiltrate.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessuna tattica trovata.
          </p>
        )}
      </div>
    </div>
  );
}
