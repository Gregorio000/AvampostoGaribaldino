import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, ArrowLeft, Search, X } from "lucide-react";

const libri = [
  { id: 1,  titolo: "Manuale del gioco posizionale",                 autore: "Gelfer" },
  { id: 2,  titolo: "Come vincere contro la siciliana",               autore: "Nunn" },
  { id: 3,  titolo: "640 Best Golden Games",                          autore: "Chess Informant" },
  { id: 4,  titolo: "101 Sorprese in apertura",                       autore: "Burgess" },
  { id: 5,  titolo: "Trappole in apertura",                           autore: "Chernev" },
  { id: 6,  titolo: "Scacchi Moderni - Come giocare contro siciliana",autore: "Barlov - Jovicic" },
  { id: 7,  titolo: "Nimzowitsch - formidabile innovatore",           autore: "Keene" },
  { id: 8,  titolo: "Tal - magia dell'attacco",                       autore: "Damskij" },
  { id: 9,  titolo: "La partita di re - parte prima",                 autore: "Porreca" },
  { id: 10, titolo: "Finali di scacchi",                              autore: "Grigorjev" },
  { id: 11, titolo: "L'attacco sul lato di donna",                    autore: "Shashin" },
  { id: 12, titolo: "Come entrare in un finale vincente",             autore: "Ness" },
  { id: 13, titolo: "Manuale del gioco combinativo",                  autore: "Nejstadt" },
  { id: 14, titolo: "Tarrasch - potere della logica",                 autore: "Nejstadt" },
  { id: 15, titolo: "Sahovski Informator 56",                         autore: "FIDE" },
  { id: 16, titolo: "Sahovski 52",                                    autore: "FIDE" },
  { id: 17, titolo: "Esercizi di tattica",                            autore: "Nunn" },
  { id: 18, titolo: "Sahovski Informator Beograd",                    autore: "FIDE" },
  { id: 19, titolo: "Esame di scacchi",                               autore: "Khmelnitsky" },
  { id: 20, titolo: "Il gambetto",                                    autore: "Yudovich" },
  { id: 21, titolo: "Il finale degli scacchi",                        autore: "Paoli" },
  { id: 22, titolo: "La pratica del mio sistema",                     autore: "Nimzowitsch" },
  { id: 23, titolo: "Il libro completo delle aperture",               autore: "Porreca" },
  { id: 24, titolo: "La caduta degli dei I",                          autore: "Porreca" },
  { id: 25, titolo: "Metodi per la vittoria I",                       autore: "Mansurov" },
  { id: 26, titolo: "Metodi per la vittoria II",                      autore: "Golovko" },
  { id: 27, titolo: "La caduta degli dei II",                         autore: "Golovko" },
  { id: 28, titolo: "La partita di re parte seconda",                 autore: "Porreca" },
  { id: 29, titolo: "Giocare bene per giocare meglio",                autore: "Paoli" },
  { id: 30, titolo: "Manuale dei finali per il giocatore agonistico", autore: "De Santis" },
  { id: 31, titolo: "Pensa come un Grande Maestro",                   autore: "Kotov" },
];

/* Spine color palette — cycles through warm literary tones */
const spineColors = [
  "from-amber-700 to-amber-900",
  "from-red-700 to-red-900",
  "from-emerald-700 to-emerald-900",
  "from-blue-700 to-blue-900",
  "from-purple-700 to-purple-900",
  "from-rose-700 to-rose-900",
  "from-teal-700 to-teal-900",
  "from-orange-700 to-orange-900",
];

const BookCard: React.FC<{ libro: typeof libri[0]; colorIdx: number }> = ({ libro, colorIdx }) => {
  const spine = spineColors[colorIdx % spineColors.length];

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Book spine visual */}
      <div className={`bg-gradient-to-b ${spine} h-2 w-full`} />

      {/* Icon area */}
      <div className={`bg-gradient-to-br ${spine} opacity-90 flex items-center justify-center py-7`}>
        <div className="bg-white/15 rounded-2xl p-3">
          <Book className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Text */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-2 line-clamp-3 flex-1">
          {libro.titolo}
        </h3>
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
          <span className="text-xs text-amber-700 font-semibold">{libro.autore}</span>
          <span className="text-xs text-gray-400">#{libro.id}</span>
        </div>
      </div>
    </div>
  );
};

const Libri: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = libri.filter(
    l =>
      l.titolo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.autore.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Indietro
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-amber-200 px-3 py-2 rounded-full shadow-sm">
            <Book className="h-3.5 w-3.5 text-amber-600" />
            {libri.length} volumi
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-amber-400" />
            Patrimonio del Circolo
            <span className="w-8 h-px bg-amber-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            Biblioteca <span className="text-amber-600">Scacchistica</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Libri storici, manuali tecnici, biografie dei campioni e saggi sulla cultura scacchistica
          </p>
        </div>

        {/* ── Search ── */}
        <div className="max-w-lg mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca per titolo o autore…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 shadow-sm text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchTerm && (
            <p className="text-center text-sm text-gray-400 mt-2">
              {filtered.length} {filtered.length === 1 ? 'risultato' : 'risultati'} per "{searchTerm}"
            </p>
          )}
        </div>

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((libro, i) => (
              <BookCard key={libro.id} libro={libro} colorIdx={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Book className="w-12 h-12 text-amber-200 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Nessun libro trovato per "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-amber-600 font-semibold text-sm hover:underline"
            >
              Cancella ricerca
            </button>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="mt-14 pt-8 border-t border-amber-100 text-center">
          <p className="text-gray-400 text-sm">
            {libri.length} volumi · Biblioteca Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default Libri;
