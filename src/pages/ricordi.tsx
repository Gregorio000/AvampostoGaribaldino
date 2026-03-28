import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";

const cardsWithDate = [
{ to: "/ricordi/turno5", image: "/turno5/turno5 (6).jpg", title: "5° Turno Serie Promozione — Black e Blue vincono!", description: "Ultimo turno in casa: Black e Blue vincono, White cede 1-3.", date: "22 Marzo 2026", dateValue: "2026-03-22", tag: "Campionato", tagColor: "bg-blue-600" },
{ to: "/ricordi/serieb",            image: "/serieb/serieb (7).jpeg",                             title: "Serie B — Avamposto Garibaldino RED",description: "Tutti e 5 i turni giocati a Villanova di Guidonia: 2V, 2S, 1P. Classifica contestata — ricorso in corso.",                     date: "13 Marzo 2026",                     dateValue: "2026-03-13", tag: "Campionato",   tagColor: "bg-blue-600" },
  { to: "/ricordi/turno4",          image: "/turno4/turno4 (4).jpeg",                             title: "4° Turno Campionato a Squadre FSI",  description: "4° Turno Campionato a Squadre FSI - Serie Promozione",                                                                          date: "01 Marzo 2026",                    dateValue: "2026-03-01", tag: "Campionato",   tagColor: "bg-blue-600" },
  { to: "/ricordi/turno3",          image: "/turno3/turno3 (3).jpeg",                             title: "3° Turno Campionato a Squadre FSI",  description: "3° Turno Campionato a Squadre FSI - Serie Promozione",                                                                          date: "22 Febbraio 2026",                 dateValue: "2026-02-22", tag: "Campionato",   tagColor: "bg-blue-600" },
  { to: "/ricordi/turno2",          image: "/turno2/turno2.jpg",                                  title: "2° Turno Campionato a Squadre FSI",  description: "2° Turno Campionato a Squadre FSI - Serie Promozione",                                                                          date: "08 Febbraio 2026",                 dateValue: "2026-02-08", tag: "Campionato",   tagColor: "bg-blue-600" },
  { to: "/ricordi/turno1",          image: "/turno1/black-0.jpeg",                                title: "1° Turno Campionato a Squadre FSI",  description: "1° Turno Campionato a Squadre FSI - Serie Promozione",                                                                          date: "01 Febbraio 2026",                 dateValue: "2026-02-01", tag: "Campionato",   tagColor: "bg-blue-600" },
  { to: "/ricordi/fantasy-pub",     image: "/fantasy-pub/fantasy-pub-0.jpeg",                     title: "Torneo Fantasy Pub",                 description: "Torneo di Scacchi Rapid presso il Fantasy Pub",                                                                                 date: "28 Dicembre 2025",                 dateValue: "2025-12-28", tag: "Torneo",       tagColor: "bg-red-500" },
  { to: "/ricordi/venafro",         image: "/venafro/venafro-0.jpeg",                             title: "Sfida a Venafro",                    description: "Sfida amichevole contro il circolo Leopoldo Pilla - Venafro 1870.",                                                              date: "16 Novembre 2025",                 dateValue: "2025-11-16", tag: "Evento",       tagColor: "bg-green-500" },
  { to: "/ricordi/starshop",        image: "/evento-starshop/evento-starshop.jpeg",               title: "Evento Starshop",                    description: "Collaborazione con Starshop di Fonte Nuova per diffondere la passione degli scacchi.",                                           date: "13 Apr · 15 Nov 2025",             dateValue: "2025-04-13", tag: "Evento",       tagColor: "bg-green-500" },
  { to: "/ricordi/torneo-ragazzi",  image: "/torneo-ragazzi/torneo-ragazzi-0.jpeg",               title: "4° Torneo under 16",                 description: "4° Torneo giovani promesse under 16 e neofiti",                                                                                 date: "06 Luglio 2025",                   dateValue: "2025-07-06", tag: "Torneo",       tagColor: "bg-red-500" },
  { to: "/ricordi/decimo-anniversario", image: "/decimo-anniversario/decimo-anniversario-0.jpeg", title: "Torneo 10° Anniversario",            description: "Il Torneo per il decimo Anniversario del circolo scacchistico.",                                                                 date: "15 Giugno 2025",                   dateValue: "2025-06-15", tag: "Torneo",       tagColor: "bg-red-500" },
  { to: "/ricordi/quarto-torneo",   image: "/quarto-torneo/quarto-torneo-0.jpeg",                 title: "4° Torneo di Allenamento",           description: "Quarto Torneo di Allenamento Open",                                                                                             date: "06 Giugno 2025",                   dateValue: "2025-06-06", tag: "Torneo",       tagColor: "bg-red-500" },
  { to: "/ricordi/centro-estivo",   image: "/centro-estivo/cavallo1.jpg",                         title: "Centro Estivo",                      description: "Il centro estivo di Monterotondo Scalo: giovani talenti e tante partite indimenticabili sotto il sole.",                         date: "Estate 2020",                      dateValue: "2020-06-01", tag: "Evento",       tagColor: "bg-green-500" },
];

const cardsWithoutDate = [
  { to: "/ricordi/scacchi-mentana",      image: "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg", title: "La Nostra Storia Scacchistica", description: "Un viaggio attraverso la nostra storia, dalle prime partite ai tornei più importanti.",       tag: "Storico",     tagColor: "bg-chess-gold" },
  { to: "/ricordi/gli-inizi",            image: "/ricordi-vecchi/ricordo-vecchio1.jpg",               title: "Gli Inizi",                     description: "I primi tornei dell'Avamposto Garibaldino: emozioni, sfide e l'inizio di una grande passione.", tag: "Storico",     tagColor: "bg-chess-gold" },
  { to: "/ricordi/allenamento-quotidiano", image: "/giochiamo-a-scacchi/CIS 2025 4 TURNO.jpg",        title: "Allenamento Quotidiano",        description: "Momenti di allenamento quotidiano e partite emozionanti.",                                       tag: "Allenamento", tagColor: "bg-purple-500" },
  { to: "/ricordi/scacchi-al-camybar",   image: "/scacchi-al-camybar/IMG-20201108-WA0006.jpg",        title: "Scacchi al Camybar",            description: "Le indimenticabili serate scacchistiche al Camybar: partite, amicizia e tanto divertimento.",   tag: "Evento",      tagColor: "bg-green-500" },
  { to: "/ricordi/loghi",                image: "/images/LogoNuovo2.png",                             title: "Storia dei nostri Loghi",       description: "I cambiamenti dei nostri loghi con il passare degli anni.",                                       tag: "Storico",     tagColor: "bg-chess-gold" },
];

const TAGS = ["Tutti", "Campionato", "Torneo", "Evento", "Allenamento", "Storico"];

type Card = {
  to: string;
  image: string;
  title: string;
  description: string;
  date?: string;
  dateValue?: string | null;
  tag: string;
  tagColor: string;
};

const GalleryCard: React.FC<{ card: Card }> = ({ card }) => (
  <Link
    to={card.to}
    className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col h-full"
  >
    {/* Image */}
    <div className="relative h-64 sm:h-72 overflow-hidden flex-shrink-0">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      {/* Tag */}
      <span className={`absolute top-3 right-3 ${card.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}>
        {card.tag}
      </span>
      {/* Title overlay */}
      <div className="absolute bottom-3 left-4 right-4">
        <h3 className="text-white font-bold text-base sm:text-lg leading-snug line-clamp-2">
          {card.title}
        </h3>
      </div>
    </div>

    {/* Body */}
    <div className="p-4 sm:p-5 flex flex-col flex-1">
      <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2">
        {card.description}
      </p>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
        {card.date ? (
          <span className="text-xs text-chess-gold font-semibold">{card.date}</span>
        ) : (
          <span className="text-xs text-gray-300 italic">Archivio storico</span>
        )}
        <span className="text-xs text-chess-dark font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          Scopri
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </Link>
);

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const Ricordi: React.FC = () => {
  const [activeTag, setActiveTag] = useState("Tutti");

  const allCards: Card[] = [
    ...cardsWithDate.sort((a, b) => new Date(b.dateValue!).getTime() - new Date(a.dateValue!).getTime()),
    ...cardsWithoutDate,
  ];

  const filtered = activeTag === "Tutti"
    ? allCards
    : allCards.filter(c => c.tag === activeTag);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
            <Camera className="h-3.5 w-3.5 text-chess-gold" />
            {allCards.length} album
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
            Galleria <span className="text-chess-gold">Fotografica</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            I momenti più emozionanti dell'Avamposto Garibaldino
          </p>
        </div>

        {/* ── Tag filter ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeTag === tag
                  ? "bg-chess-dark text-white border-chess-dark shadow-md"
                  : "bg-white text-gray-500 border-gray-200 hover:border-chess-gold hover:text-chess-gold"
              }`}
            >
              {tag}
              {tag !== "Tutti" && (
                <span className="ml-1.5 opacity-50 text-xs">
                  ({allCards.filter(c => c.tag === tag).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-center text-sm text-gray-400 mb-10">
          {filtered.length} {filtered.length === 1 ? "album" : "album"}
          {activeTag !== "Tutti" && ` — ${activeTag}`}
        </p>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((card, i) => (
            <GalleryCard key={i} card={card} />
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm italic">Tanti ricordi, un'unica passione</p>
        </div>

      </div>
    </div>
  );
};

export default Ricordi;
