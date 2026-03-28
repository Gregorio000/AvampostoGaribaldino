import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Bell, Tag, User, ArrowRight } from 'lucide-react';

interface Instructor {
  name: string;
  color: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  categoryColor: string;
  image: string;
  link?: string;
  clickable: boolean;
  instructors?: Instructor[];
}

const newsItems: NewsItem[] = [
  {
    id: 9,
    title: "5° Turno Serie Promozione — Black e Blue vincono, White cede",
    date: "Domenica 22.03.2026",
    location: "Fonte Nuova & Santa Lucia",
    description: "Sipario sul campionato di Serie Promozione Lazio: Black batte Frascati 4 con le prodezze di Ventilii e Gismondi, Blue si impone 3–1 su Ladispoli. Cede il White contro Alvise Zichichi B per 1–3. Grande terzo tempo finale tra le squadre!",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno5/turno5 (6).jpg",
    link: "/ricordi/turno5",
    clickable: true,
  },
  {
    id: 8,
    title: "5° Turno Serie Promozione — Ultimo turno, venite a supportarci!",
    date: "Domenica 22.03.2026",
    location: "Fantasy Pub, Via Nomentana 502, Fonte Nuova",
    description: "Domenica 22 marzo ore 10:30 si gioca il turno finale del Campionato Italiano di Scacchi a Squadre 2026 — Serie Promozione. Black vs Frascati 4 e White vs Alvise Zichichi B. Tutte le partite in casa al Fantasy Pub! Venite a supportare i nostri campioni locali!",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno4/turno4 (1).jpeg",
    link: "/ricordi/turno5",
    clickable: false,
  },
  {
    id: 7,
    title: "Serie B — Avamposto Garibaldino RED: tutti e 5 i turni",
    date: "Venerdì 13.03.2026",
    location: "Villanova di Guidonia",
    description: "2 vittorie, 2 sconfitte, 1 pareggio. La classifica finale ci vede retrocessi ma presenteremo ricorso per i 2 punti contestati.",
    category: "SERIE B",
    categoryColor: "bg-purple-600 text-white",
    image: "/serieb/serieb (2).jpeg",
    link: "/ricordi/serieb",
    clickable: true,
  },
  {
    id: 6,
    title: "ESORDIO STORICO IN SERIE B - Avamposto Garibaldino RED",
    date: "Giovedì 13.03.2026",
    location: "Mentana, Via Giovanni Giolitti 21/23",
    description: "La formazione Avamposto Garibaldino RED esordisce nel Campionato Italiano di Serie B! Un traguardo storico per la nostra associazione. Cinque turni per sognare in grande.",
    category: "SERIE B",
    categoryColor: "bg-purple-600 text-white",
    image: "/turno5/inizio.jpg",
    link: "/ricordi/serieb",
    clickable: false,
  },
  {
    id: 5,
    title: "4° Turno Campionato a Squadre FSI - Serie Promozione",
    date: "Domenica 01.03.2026",
    location: "Varie sedi (Nepi, Sacrofano, Roma)",
    description: "Trasferta decisiva per tutte le squadre: Black gioca la promozione a Nepi, White ha primo match point per la Serie C, Blue in casa dell'Easy Scacchi.",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno4/turno4 (4).jpeg",
    link: "/ricordi/turno4",
    clickable: true,
  },
  {
    id: 4,
    title: "3° Turno Campionato a Squadre FSI - Serie Promozione",
    date: "Domenica 22.02.2026",
    location: "Varie sedi (Manziana, Civitavecchia, Farfa)",
    description: "Il Black vince a Manziana, il White pareggia contro la capolista, il Blue cade a Farfa. Giornata di emozioni per i colori garibaldini!",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno3/turno3 (3).jpeg",
    link: "/ricordi/turno3",
    clickable: true,
  },
  {
    id: 3,
    title: "2° Turno Campionato a Squadre FSI - Serie Promozione",
    date: "Domenica 08.02.2026",
    location: "Varie sedi",
    description: "Secondo turno di campionato per le squadre dell'Avamposto Garibaldino. La favola continua!",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno2/turno2.jpg",
    link: "/ricordi/turno2",
    clickable: true,
  },
  {
    id: 2,
    title: "1° Turno Campionato a Squadre FSI - Serie Promozione",
    date: "Domenica 01.02.2026",
    location: "Varie sedi (Monterotondo e Piazza Mazzaresi)",
    description: "Inizio del campionato a squadre della FSI per le nostre tre formazioni: Avamposto Garibaldino Black, White e Blue. Forza ragazzi!",
    category: "PROMOZIONE",
    categoryColor: "bg-red-500 text-white",
    image: "/turno1/black-0.jpeg",
    link: "/ricordi/turno1",
    clickable: true,
  },
  {
    id: 1,
    title: '"A Scuola dai Campioni" - Corso di Scacchi Avanzato',
    date: "Sabato 24.12.2026",
    location: "Mentana, Via Giovanni Giolitti 21/23",
    description: "Parte il corso 'a scuola dai campioni' con il CM Emanuele Stella e il 1N Riccardo Grammatico! Vi aspettiamo!!!",
    category: "NUOVO CORSO",
    categoryColor: "bg-yellow-500 text-black",
    image: "/images/corso-scacchi.jpg",
    instructors: [
      { name: "CM Emanuele Stella", color: "bg-green-100 text-green-800" },
      { name: "1N Riccardo Grammatico", color: "bg-blue-100 text-blue-800" },
    ],
    clickable: false,
  },
];

/* ── Featured card (id === 6, top of list) ── */
const FeaturedCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  const inner = (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white">
      {/* Image */}
      <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`${news.categoryColor} px-3 py-1.5 text-xs font-bold rounded-full shadow flex items-center gap-1`}>
            <Tag className="h-3 w-3" />
            {news.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight line-clamp-2">
            {news.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-chess-gold flex-shrink-0" />
            {news.date}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-chess-gold flex-shrink-0" />
            <span className="line-clamp-1">{news.location}</span>
          </span>
        </div>
        <p className="text-gray-700 leading-relaxed">{news.description}</p>
      </div>
    </div>
  );

  return news.clickable && news.link ? (
    <a href={news.link} className="block no-underline">{inner}</a>
  ) : (
    inner
  );
};

/* ── Regular card ── */
const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  const inner = (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-chess-gold/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`${news.categoryColor} px-2.5 py-1 text-xs font-bold rounded-full shadow flex items-center gap-1`}>
            <Tag className="h-3 w-3" />
            {news.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-chess-dark mb-3 line-clamp-2 group-hover:text-chess-gold transition-colors leading-snug">
          {news.title}
        </h3>

        <div className="space-y-1.5 mb-3">
          <div className="flex items-center text-xs text-gray-600 gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-chess-gold flex-shrink-0" />
            <span className="font-medium">{news.date}</span>
          </div>
          <div className="flex items-center text-xs text-gray-600 gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-chess-gold flex-shrink-0" />
            <span className="line-clamp-1">{news.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
          {news.description}
        </p>

        {news.instructors && news.instructors.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-1.5 mb-2">
              <User className="h-3.5 w-3.5 text-chess-gold" />
              <span className="text-xs font-semibold text-chess-dark">Istruttori</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {news.instructors.map((inst, i) => (
                <span key={i} className={`${inst.color} px-2.5 py-1 text-xs font-medium rounded-full flex items-center gap-1`}>
                  <User className="h-3 w-3" />
                  {inst.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {news.clickable && news.link && (
          <div className="mt-4 pt-3 border-t border-gray-100">
            <span className="text-chess-gold font-semibold text-xs flex items-center gap-1">
              Scopri di più
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        )}
      </div>
    </div>
  );

  return news.clickable && news.link ? (
    <a href={news.link} className="block no-underline h-full">{inner}</a>
  ) : (
    inner
  );
};

/* ══════════════════════════════════════════════
   NEWS PAGE
══════════════════════════════════════════════ */
const News: React.FC = () => {
  const sorted = [...newsItems].sort((a, b) => b.id - a.id);
  const [featured, ...rest] = sorted;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Bell className="h-3.5 w-3.5 text-chess-gold" />
            Aggiornato il 20-03-2026
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
            News & <span className="text-chess-gold">Eventi</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Resta aggiornato su tornei, corsi e novità dell'Avamposto Garibaldino
          </p>
        </div>

        {/* ── Featured ── */}
        {featured && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1 h-5 bg-chess-gold rounded-full" />
              <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">In evidenza</span>
            </div>
            <FeaturedCard news={featured} />
          </div>
        )}

        {/* ── Grid ── */}
        {rest.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1 h-5 bg-chess-dark/30 rounded-full" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tutte le notizie</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        )}

        {/* ── Footer info ── */}
        <div className="border-t border-gray-200 pt-10 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Calendar, label: "Eventi Mensili", text: "Tornei, lezioni ed eventi speciali ogni mese" },
              { icon: Bell, label: "Notifiche", text: "Aggiornamenti in tempo reale sui social" },
              { icon: MapPin, label: "Sede", text: "Via Giovanni Giolitti 21/23, Mentana" },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="bg-chess-gold/10 w-11 h-11 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-chess-gold" />
                </div>
                <h4 className="font-bold text-chess-dark text-sm mb-1">{label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-8">
            Per ulteriori informazioni seguici sui social: Instagram e Facebook
          </p>
        </div>

      </div>
    </div>
  );
};

export default News;
