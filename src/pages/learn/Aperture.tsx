import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";

type Apertura = {
  nome: string;
  descrizione: string;
  path: string;
};

const aperture: Apertura[] = [
  {
    nome: "Apertura Italiana",
    descrizione: "Una delle aperture più classiche, mirata al rapido controllo del centro e allo sviluppo armonioso dei pezzi.",
    path: "/learn/Aperture/Italiana",
  },
  {
    nome: "Difesa Siciliana",
    descrizione: "Una risposta dinamica all'apertura del bianco, con piani controattaccanti e tante varianti aggressive.",
    path: "/learn/Aperture/Siciliana",
  },
  {
    nome: "Gambetto di Re",
    descrizione: "Un'apertura romantica che sacrifica un pedone per ottenere un attacco rapido e l'iniziativa.",
    path: "/learn/Aperture/GambettoRe",
  },
  {
    nome: "Difesa Francese",
    descrizione: "Una difesa solida per il nero, basata su strutture di pedoni ferme e controgioco al centro.",
    path: "/learn/Aperture/Francese",
  },
  {
    nome: "Partita Spagnola",
    descrizione: "Un'apertura elegante e molto studiata, ricca di idee strategiche e tattiche.",
    path: "/learn/Aperture/Spagnola",
  },
  {
    nome: "Apertura Inglese",
    descrizione: "Un'apertura flessibile basata sul controllo del centro tramite i pedoni e la pressione laterale.",
    path: "/learn/Aperture/Inglese",
  },
  {
    nome: "Difesa Caro-Kann",
    descrizione: "Una difesa solida e posizionale, ideale per chi preferisce una partita tranquilla ma robusta.",
    path: "/learn/Aperture/CaroKann",
  },
  {
    nome: "Gambetto di Donna",
    descrizione: "Un'apertura di pedone di donna che offre un pedone in cambio di controllo centrale e sviluppo rapido.",
    path: "/learn/Aperture/GambettoDonna",
  },
  {
    nome: "Difesa Scandinava",
    descrizione: "Una difesa aggressiva che punta a eliminare subito il pedone centrale del bianco.",
    path: "/learn/Aperture/Scandinava",
  },
  {
    nome: "Difesa Pirc",
    descrizione: "Una difesa moderna e flessibile che mira a una solida posizione difensiva e controgiochi dinamici.",
    path: "/learn/Aperture/Pirc",
  },
  {
    nome: "Difesa Alekhine",
    descrizione: "Una difesa provocativa che attira i pedoni del bianco in avanti per poi attaccarli.",
    path: "/learn/Aperture/Alekhine",
  },
  {
    nome: "Apertura Reti",
    descrizione: "Un'apertura flessibile con il cavallo e pedoni in posizioni strategiche per il controllo del centro.",
    path: "/learn/Aperture/Reti",
  },
  {
    nome: "Difesa Moderna",
    descrizione: "Una difesa flessibile e solida che lascia il centro aperto per futuri contrattacchi.",
    path: "/learn/Aperture/Moderna",
  },
  {
    nome: "Difesa Nimzo-Indiana",
    descrizione: "Una difesa classica che usa il cavallo per controllare le case centrali e minacciare la struttura pedonale bianca.",
    path: "/learn/Aperture/NimzoIndiana",
  },
  {
    nome: "Difesa Indiana di Re",
    descrizione: "Una difesa aggressiva che punta al controllo dinamico del centro con i pezzi leggeri.",
    path: "/learn/Aperture/IndianaRe",
  },
  {
    nome: "Difesa Benoni",
    descrizione: "Una difesa dinamica che punta a controgiochi attivi e gioco di controgioco sul centro e lato di donna.",
    path: "/learn/Aperture/Benoni",
  },
  {
    nome: "Attacco Trompowsky",
    descrizione: "Un'apertura aggressiva e poco ortodossa che mette subito pressione sul cavallo nero.",
    path: "/learn/Aperture/Trompowsky",
  },
  {
    nome: "Attacco London",
    descrizione: "Un sistema solido e versatile, facile da imparare e molto usato a tutti i livelli.",
    path: "/learn/Aperture/London",
  },
  {
    nome: "Difesa Grunfeld",
    descrizione: "Una difesa dinamica che lascia il centro aperto per un gioco di pezzi attivo e tattico.",
    path: "/learn/Aperture/Grunfeld",
  },
  {
    nome: "Apertura Bird",
    descrizione: "Un'apertura meno comune ma molto interessante che punta a un rapido controllo del centro con il pedone 'f'.",
    path: "/learn/Aperture/Bird",
  },
];

export default function Aperture() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const apertureFiltrate = aperture.filter((a) =>
    a.nome.toLowerCase().includes(query.toLowerCase())
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
        Tutte le Aperture
      </h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Esplora le principali aperture degli scacchi. Cerca per nome o scorri la lista.
      </p>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca un'apertura..."
          className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-blue-500 text-sm"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apertureFiltrate.map((apertura) => (
          <div
            key={apertura.nome}
            onClick={() => navigate(apertura.path)}
            className="cursor-pointer bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-green-400 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start gap-3 mb-2">
              <BookOpen className="text-green-600 w-6 h-6 mt-1" />
              <h2 className="text-lg font-semibold text-green-800">
                {apertura.nome}
              </h2>
            </div>
            <p className="text-sm text-gray-700 leading-snug">{apertura.descrizione}</p>
          </div>
        ))}

        {apertureFiltrate.length === 0 && (
          <p className="text-center col-span-full text-gray-500 italic">
            Nessuna apertura trovata.
          </p>
        )}
      </div>
    </div>
  );
}
