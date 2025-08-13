import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flag, ArrowLeft } from "lucide-react";

type Finale = {
  nome: string;
  descrizione: string;
  path: string;
};

const finali: Finale[] = [
  {
    nome: "Finale di Due Torri",
    descrizione:
      "Tecniche per dominare il finale con due torri.",
    path: "/learn/Finali/DueTorri",
  },
  {
    nome: "Re e Torre contro Re",
    descrizione:
      "Tecnica fondamentale per vincere un finale con solo Re e Torre contro un Re.",
    path: "/learn/Finali/TorrevsRe",
  },
  {
    nome: "Opposizione",
    descrizione:
      "Concetto chiave per controllare lo spazio nel finale e costringere l’avversario a mosse sfavorevoli.",
    path: "/learn/Finali/Opposizione",
  },
  {
    nome: "Finale di Pedoni",
    descrizione:
      "Strategie per promuovere i pedoni e vincere il finale.",
    path: "/learn/Finali/FinalePedoni",
  },
  // {
  //   nome: "Finale di Alfiere e Cavallo",
  //   descrizione:
  //     "Tecniche per utilizzare alfiere e cavallo nel finale in modo efficace.",
  //   path: "/learn/Finali/FinaleDiAlfiereECavallo",
  // },
  // {
  //   nome: "Finale di Due Alfieri",
  //   descrizione:
  //     "Come sfruttare la coppia di alfieri per ottenere un vantaggio decisivo.",
  //   path: "/learn/Finali/FinaleDiDueAlfieri",
  // },
  // {
  //   nome: "Finale di Donna contro Torre",
  //   descrizione:
  //     "Strategie per vincere o patteggiare un finale complesso con donna contro torre.",
  //   path: "/learn/Finali/FinaleDiDonnaControTorre",
  // },
  // {
  //   nome: "Finale di Cavallo contro Alfiere",
  //   descrizione:
  //     "Quando e come sfruttare il cavallo o l’alfiere in un finale.",
  //   path: "/learn/Finali/FinaleDiCavalloControAlfiere",
  // },
  // {
  //   nome: "Finale di Re e Pedoni",
  //   descrizione:
  //     "Tecniche di base per vincere o patteggiare un finale con re e pedoni.",
  //   path: "/learn/Finali/FinaleDiReEPedoni",
  // },
  // {
  //   nome: "Finale di Torre e Pedone",
  //   descrizione:
  //     "Come gestire il finale con torre e pedoni per ottenere la vittoria.",
  //   path: "/learn/Finali/FinaleDiTorreEPedone",
  // },
];

export default function Finali() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const finaliFiltrati = finali.filter((f) =>
    f.nome.toLowerCase().includes(query.toLowerCase())
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
        Finali degli Scacchi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Scopri i finali fondamentali per chiudere la partita con successo.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un finale..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {finaliFiltrati.map((finale) => (
          <div
            key={finale.nome}
            onClick={() => navigate(finale.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-red-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <Flag className="text-red-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-red-800">{finale.nome}</h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{finale.descrizione}</p>
          </div>
        ))}

        {finaliFiltrati.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessun finale trovato.
          </p>
        )}
      </div>
    </div>
  );
}
