import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const Ricordi = () => {
  // Array delle card con data (se presente)
  const cardsWithDate = [
    {
      to: "/ricordi/centro-estivo",
      image: "/centro-estivo/cavallo1.jpg",
      title: "Centro Estivo",
      description: "Il centro estivo di Monterotondo Scalo: giovani talenti e tante partite indimenticabili sotto il sole.",
      date: "Estate 2020",
      dateValue: "2020-06-01",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/quarto-torneo",
      image: "/quarto-torneo/quarto-torneo-0.jpeg",
      title: "4° Torneo di Allenamento",
      description: "Quarto Torneo di Allenamento Open",
      date: "06 Giugno 2025",
      dateValue: "2025-06-06",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/torneo-ragazzi",
      image: "/torneo-ragazzi/torneo-ragazzi-0.jpeg",
      title: "4° Torneo under 16",
      description: "4° Torneo giovani promesse under 16 e neofiti",
      date: "06 Luglio 2025",
      dateValue: "2025-07-06",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/decimo-anniversario",
      image: "/decimo-anniversario/decimo-anniversario-0.jpeg",
      title: "Torneo 10° Anniversario",
      description: "L'Avamposto Garibaldino presenta il Torneo per il decimo Anniversario del circolo scacchistico.",
      date: "15 Giugno 2025",
      dateValue: "2025-06-15",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/starshop",
      image: "/evento-starshop/evento-starshop.jpeg",
      title: "Evento Starshop",
      description: "Collaborazione dell'Avamposto Garibaldino con Starshop di Fonte Nuova per diffondere la passione degli scacchi.",
      date: "13 Aprile e 15 Novembre 2025",
      dateValue: "2025-04-13", // Prendo la prima data per l'ordinamento
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/venafro",
      image: "/venafro/venafro-0.jpeg",
      title: "Sfida a Venafro",
      description: "Sfida amichevole contro il circolo Leopoldo Pilla - Venafro 1870.",
      date: "16 Novembre 2025",
      dateValue: "2025-11-16",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/fantasy-pub",
      image: "/fantasy-pub/fantasy-pub-0.jpeg",
      title: "Torneo Fantasy Pub",
      description: "Torneo di Scacchi Rapid presso il Fantasy Pub",
      date: "28 Dicembre 2025",
      dateValue: "2025-12-28",
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/turno1",
      image: "/turno1/black-0.jpeg",
      title: "1° Turno Campionato a Squadre FSI",
      description: "1° Turno Campionato a Squadre FSI - Serie Promozione",
      date: "02 Febbraio 2026",
      dateValue: "2026-02-02",
      tag: "Evento",
      tagColor: "bg-red-500"
    }
  ];

  // Array delle card senza data (mantenendo l'ordine originale)
  const cardsWithoutDate = [
    {
      to: "/ricordi/scacchi-mentana",
      image: "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
      title: "La Nostra Storia Scacchistica",
      description: "Un viaggio attraverso la nostra storia scacchistica, dalle prime partite ai tornei più importanti.",
      date: "",
      dateValue: null,
      tag: "Storico",
      tagColor: "bg-chess-gold"
    },
    {
      to: "/ricordi/gli-inizi",
      image: "/ricordi-vecchi/ricordo-vecchio1.jpg",
      title: "Gli Inizi",
      description: "I primi tornei dell'Avamposto Garibaldino: emozioni, sfide e l'inizio di una grande passione.",
      date: "",
      dateValue: null,
      tag: "Storico",
      tagColor: "bg-chess-gold"
    },
    {
      to: "/ricordi/allenamento-quotidiano",
      image: "/giochiamo-a-scacchi/CIS 2025 4 TURNO.jpg",
      title: "Allenamento Quotidiano",
      description: "Momenti di allenamento quotidiano e partite emozionanti.",
      date: "",
      dateValue: null,
      tag: "Allenamento",
      tagColor: "bg-purple-500"
    },
    {
      to: "/ricordi/scacchi-al-camybar",
      image: "/scacchi-al-camybar/IMG-20201108-WA0006.jpg",
      title: "Scacchi al Camybar",
      description: "Le indimenticabili serate scacchistiche al Camybar: partite, amicizia e tanto divertimento in compagnia.",
      date: "",
      dateValue: null,
      tag: "Evento",
      tagColor: "bg-red-500"
    },
    {
      to: "/ricordi/loghi",
      image: "/images/LogoNuovo2.png",
      title: "Storia dei nostri Loghi",
      description: "I cambiamenti dei nostri loghi con il passare degli anni.",
      date: "",
      dateValue: null,
      tag: "Storico",
      tagColor: "bg-chess-gold"
    }
  ];

  // Ordina le card con data per data decrescente (dal più recente al più vecchio)
  const sortedCardsWithDate = [...cardsWithDate].sort((a, b) => {
    return new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime();
  });

  // Combina le card ordinate: prima quelle con data (dal più recente), poi quelle senza
  const allCards = [...sortedCardsWithDate, ...cardsWithoutDate];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-12">
      {/* Torna alla Home */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-chess-gold hover:text-chess-dark transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Torna alla Home
        </Link>
      </div>

      {/* Intestazione con effetto migliorato */}
      <div className="mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-chess-dark to-chess-gold p-1 rounded-full">
          <div className="bg-white rounded-full p-3">
            <svg className="w-10 h-10 text-chess-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent leading-[1.3]">
          Galleria Fotografica
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          I momenti più emozionanti dell'Avamposto Garibaldino
        </p>
      </div>

      {/* Grid delle card ordinate cronologicamente (dal più recente) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allCards.map((card, index) => (
          <Link 
            key={index}
            to={card.to} 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">
                  {card.title}
                </h3>
              </div>
              <div className={`absolute top-4 right-4 ${card.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                {card.tag}
              </div>
            </div>
            
            <div className="p-6 flex-grow">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {card.description}
              </p>
            </div>
            
            <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
              <div className="flex justify-between items-center">
                {card.date ? (
                  <span className="text-sm text-chess-gold font-medium">{card.date}</span>
                ) : (
                  <span></span>
                )}
                <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Scopri di più →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Elemento decorativo in fondo alla pagina */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 italic">Tanti ricordi, un'unica passione</p>
      </div>
    </div>
  );
};

export default Ricordi;