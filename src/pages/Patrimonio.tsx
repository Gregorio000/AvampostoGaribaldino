import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  BookOpen, Grid, Shield, ArrowLeft, ArrowRight, ChevronRight
} from "lucide-react";

type Categoria = {
  titolo: string;
  descrizione: string;
  icona: JSX.Element;
  pathSezione: string;
  colore: string;
  coloreIcona: string;
  coloreTesto: string;
  image: string;
};

const patrimonio: Categoria[] = [
  {
    titolo: "Biblioteca Scacchistica",
    descrizione: "Libri e pubblicazioni specializzate disponibili per tutti i soci del circolo.",
    icona: <BookOpen className="w-7 h-7" />,
    pathSezione: "/patrimonio/libri",
    colore: "from-yellow-600 to-yellow-900",
    coloreIcona: "text-yellow-100",
    coloreTesto: "text-yellow-700",
    image: "/libri/libris.jpg",
  },
  {
    titolo: "Scacchiere e Materiali",
    descrizione: "Set professionali e attrezzature per tornei ufficiali e partite amichevoli.",
    icona: <Grid className="w-7 h-7" />,
    pathSezione: "/patrimonio/scacchiere",
    colore: "from-green-600 to-green-900",
    coloreIcona: "text-green-100",
    coloreTesto: "text-green-700",
    image: "/images/scacchiera-grossa.jpg",
  },
];

const stats = [
  { value: "30+",  label: "Libri" },
  { value: "30+",  label: "Scacchiere" },
  { value: "10",   label: "Anni di Storia" },
  { value: "Soci", label: "Accesso esclusivo" },
];

function Patrimonio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Shield className="h-3.5 w-3.5 text-chess-gold" />
            Patrimonio Condiviso
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Avamposto Garibaldino
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            Il Nostro <span className="text-chess-gold">Patrimonio</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Scopri le risorse, i materiali e le collezioni che rendono speciale il nostro circolo scacchistico
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-14">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl border border-amber-100 shadow-sm p-4 sm:p-5 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-amber-600 mb-0.5">{value}</div>
              <div className="text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Category cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {patrimonio.map((cat) => (
            <div
              key={cat.titolo}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
              onClick={() => navigate(cat.pathSezione)}
            >
              {/* Image with gradient overlay */}
              <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={cat.image}
                  alt={cat.titolo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.colore} opacity-60`} />

                {/* Icon badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                  <span className={cat.coloreIcona}>{cat.icona}</span>
                </div>

                {/* Animated chevron */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>

                {/* Title over image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white leading-tight">{cat.titolo}</h2>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-chess-gray leading-relaxed text-sm flex-1 mb-5">
                  {cat.descrizione}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`text-xs font-semibold ${cat.coloreTesto}`}>
                    Solo per i soci
                  </span>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(cat.pathSezione); }}
                    className={`flex items-center gap-1.5 text-sm font-semibold ${cat.coloreTesto}`}
                  >
                    Esplora
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            Patrimonio del Circolo · Accessibile ai Soci · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
}

export default Patrimonio;
