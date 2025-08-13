import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Puzzle, ArrowLeft } from "lucide-react";

type Esercizio = {
  titolo: string;
  descrizione: string;
  path: string;
};

const eserciziAperture: Esercizio[] = [
  {
    titolo: "Scacco Doppio",
    descrizione: "Scopri come realizzare uno scacco doppio per guadagnare materiale.",
    path: "/learn/Esercizi/ScaccoDoppio", // Regole - Blu
  },
  {
    titolo: "Sacrificio",
    descrizione: "Trova mosse di sacrificio che cambiano le sorti della partita.",
    path: "/learn/Esercizi/Sacrificio", // Tattiche - Viola
  },
  {
    titolo: "Inchiodatura",
    descrizione: "Impara a bloccare i pezzi avversari per limitare le loro mosse.",
    path: "/learn/Esercizi/Inchiodatura", // Tattiche - Viola
  },
  {
    titolo: "Finale Re e Pedone contro Re",
    descrizione: "Usa l'opposizione per far promuovere il pedone e vincere.",
    path: "/learn/Esercizi/Opposizione", // Finali - Rosso
  },
  {
    titolo: "Finale di Torre contro Torre",
    descrizione: "Gestisci il finale con due torri per mantenere il vantaggio.",
    path: "/learn/Esercizi/DueTorri", // Finali - Rosso
  },
  {
    titolo: "Matto in 1 mossa",
    descrizione: "Risolvilo rapidamente per migliorare la tattica di base.",
    path: "/learn/Esercizi/MattoIn1", // Tattiche - Viola
  },
  {
    titolo: "Matto in 2 mosse",
    descrizione: "Esercitati con problemi di scacchi a due mosse per matto.",
    path: "/learn/Esercizi/MattoIn2", // Tattiche - Viola
  },
  {
    titolo: "Matto in 3 mosse",
    descrizione: "Sfida le tue capacità di calcolo con problemi a tre mosse.",
    path: "/learn/Esercizi/MattoIn3", // Tattiche - Viola
  },
  {
    titolo: "Controllo del Centro",
    descrizione: "Impara a dominare il centro con pedoni e pezzi sviluppati.",
    path: "/learn/Esercizi/Centro", // Strategia - Giallo
  },
  {
    titolo: "Pianificazione a lungo termine",
    descrizione: "Crea un piano strategico basato sulla struttura pedonale.",
    path: "/learn/Esercizi/Pianificazione", // Strategia - Giallo
  },
  {
    titolo: "Sacrifici vincenti",
    descrizione: "Trova mosse di sacrificio che cambiano le sorti della partita.",
    path: "/learn/Esercizi/SacrificiVincenti", // Tattiche - Viola
  },
  {
    titolo: "Combinazioni sorprendenti",
    descrizione: "Risolvi puzzle con mosse inaspettate e vincenti.",
    path: "/learn/Esercizi/CombinazioniSorprendenti", // Tattiche - Viola
  },
];

// Funzione per assegnare il colore basato sulla categoria indicata nel path
function getCategoryColor(path: string): string {
  if (
    path.includes("Sacrificio") ||
    path.includes("SacrificiVincenti") ||
    path.includes("Combinazioni") ||
    path.includes("Inchiodatura") ||
    path.includes("ScaccoDoppio") ||
    path.includes("MattoIn")
  )
    return "bg-purple-200 border-purple-400 text-purple-800"; // Tattiche
  if (
    path.includes("Centro") ||
    path.includes("Pianificazione")
  )
    return "bg-yellow-200 border-yellow-400 text-yellow-800"; // Strategia
  if (
    path.includes("Opposizione") ||
    path.includes("DueTorri")
  )
    return "bg-red-200 border-red-400 text-red-800"; // Finali
  if (
    path.includes("Apertura") ||
    path.includes("Aperture")
  )
    return "bg-green-200 border-green-400 text-green-800"; // Aperture
  // Default fallback
  return "bg-gray-200 border-gray-400 text-gray-800";
}

export default function EserciziAperture() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const eserciziFiltrati = eserciziAperture.filter((e) =>
    e.titolo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 relative">
      {/* Bottone torna a Esercizi */}
      <button
        onClick={() => navigate("/learn")}
        className="absolute top-6 left-6 flex items-center gap-2 text-yellow-600 hover:text-red-800 font-semibold transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Torna a Esercizi</span>
      </button>

      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Esercizi
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Migliora la tua comprensione del gioco attraverso esercizi interattivi e quiz.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un esercizio..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {eserciziFiltrati.map((es) => {
          const colorClass = getCategoryColor(es.path);
          return (
            <div
              key={es.titolo}
              onClick={() => navigate(es.path)}
              className={`${colorClass} cursor-pointer border rounded-2xl p-5 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all`}
            >
              <div className="flex items-start gap-3 mb-2">
                <Puzzle className={`${colorClass.split(" ")[2]} w-6 h-6 mt-1`} />
                <h2 className={`text-lg font-semibold ${colorClass.split(" ")[2]}`}>
                  {es.titolo}
                </h2>
              </div>
              <p
                className="text-sm leading-snug"
                style={{ color: colorClass.includes("text-") ? colorClass.split(" ")[2] : "#000" }}
              >
                {es.descrizione}
              </p>
            </div>
          );
        })}

        {eserciziFiltrati.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessun esercizio trovato.
          </p>
        )}
      </div>
    </div>
  );
}
