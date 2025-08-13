import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, ArrowLeft } from "lucide-react";

type Regola = {
  nome: string;
  descrizione: string;
  path: string;
};

const regole: Regola[] = [
  {
    nome: "Come giocare",
    descrizione: "Scopri le basi su come muovere i pezzi e impostare una partita.",
    path: "/learn/Regole/ComeGiocare",
  },
  {
    nome: "Scacco Matto",
    descrizione:
      "Condizioni e significato dello scacco matto, la vittoria definitiva.",
    path: "/learn/Regole/ComeVincere",
  },
  {
    nome: "Regole fondamentali",
    descrizione:
      "Regole speciali come arrocco, en passant e promozione.",
    path: "/learn/Regole/RegoleFondamentali",
  },
  // {
  //   nome: "Arrocco",
  //   descrizione:
  //     "Dettagli e condizioni per eseguire l'arrocco, una mossa speciale.",
  //   path: "/learn/Regole/Arrocco",
  // },
  // {
  //   nome: "En passant",
  //   descrizione:
  //     "Regola speciale per catturare un pedone appena mosso di due caselle.",
  //   path: "/learn/Regole/EnPassant",
  // },
  // {
  //   nome: "Promozione",
  //   descrizione:
  //     "Come promuovere un pedone arrivato in fondo alla scacchiera.",
  //   path: "/learn/Regole/Promozione",
  // },
//   {
//     nome: "Scacco matto",
//     descrizione:
//       "Condizioni e significato dello scacco matto, la vittoria definitiva.",
//     path: "/learn/Regole/ScaccoMatto",
//   },
  {
    nome: "Stallo",
    descrizione:
      "Quando la partita termina in pareggio per mancanza di mosse legali.",
    path: "/learn/Regole/Stallo",
  },
  {
    nome: "Patta",
    descrizione:
      "Le condizioni che portano al pareggio in una partita di scacchi.",
    path: "/learn/Regole/Patta",
  },
  {
    nome: "Regole del tempo",
    descrizione:
      "Come funziona il controllo del tempo nelle partite di scacchi.",
    path: "/learn/Regole/Tempo",
  },
  // puoi aggiungere altre regole qui...
];

export default function Regole() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const regoleFiltrate = regole.filter((r) =>
    r.nome.toLowerCase().includes(query.toLowerCase())
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
        Regole degli Scacchi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Tutte le regole fondamentali per imparare e approfondire il gioco.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca una regola..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regoleFiltrate.map((regola) => (
          <div
            key={regola.nome}
            onClick={() => navigate(regola.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-blue-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <Book className="text-blue-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-blue-800">{regola.nome}</h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{regola.descrizione}</p>
          </div>
        ))}

        {regoleFiltrate.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessuna regola trovata.
          </p>
        )}
      </div>
    </div>
  );
}
