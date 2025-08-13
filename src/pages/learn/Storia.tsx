import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";

type Capitolo = {
  titolo: string;
  descrizione: string;
  path: string;
};

const capitoli: Capitolo[] = [
  {
    titolo: "Capitolo 1: Le Origini degli Scacchi",
    descrizione:
      "Scopri come e dove è nato il gioco degli scacchi, dalle antiche civiltà fino alla sua diffusione in Europa.",
    path: "/learn/Storia/Capitolo1",
  },
  // {
  //   titolo: "Capitolo 2: Lo sviluppo nel Medioevo",
  //   descrizione:
  //     "Analizza l'evoluzione delle regole e la diffusione del gioco nel periodo medievale.",
  //   path: "/learn/Storia/Capitolo2",
  // },
  // {
  //   titolo: "Capitolo 3: GM Storici",
  //   descrizione:
  //     "Approfondisci la vita e le partite dei grandi maestri che hanno segnato la storia degli scacchi.",
  //   path: "/learn/Storia/Capitolo3",
  // },
  // {
  //   titolo: "Capitolo 4: L'Era Moderna degli Scacchi",
  //   descrizione:
  //     "Dai tornei internazionali alle innovazioni contemporanee, esplora lo sviluppo recente del gioco.",
  //   path: "/learn/Storia/Capitolo4",
  // },
  // {
  //   titolo: "Capitolo 5: Gli Scacchi nel Mondo Digitale",
  //   descrizione:
  //     "Come il computer e internet hanno rivoluzionato il modo di giocare e studiare gli scacchi.",
  //   path: "/learn/Storia/Capitolo5",
  // },
];

export default function Storia() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const capitoliFiltrati = capitoli.filter((c) =>
    c.titolo.toLowerCase().includes(query.toLowerCase())
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
        Storia degli Scacchi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Esplora i capitoli chiave che raccontano l’evoluzione e le tappe storiche del gioco degli scacchi.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un capitolo..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capitoliFiltrati.map((capitolo) => (
          <div
            key={capitolo.titolo}
            onClick={() => navigate(capitolo.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <BookOpen className="text-orange-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-orange-800">
                {capitolo.titolo}
              </h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{capitolo.descrizione}</p>
          </div>
        ))}

        {capitoliFiltrati.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessun capitolo trovato.
          </p>
        )}
      </div>
    </div>
  );
}
