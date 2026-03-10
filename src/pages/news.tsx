import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Bell, Tag, User } from 'lucide-react';

// Definizione dei tipi
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

const News = () => {
  const newsItems: NewsItem[] = [
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
      clickable: false
    },
    {
      id: 5,
      title: "4° Turno Campionato a Squadre FSI - Serie Promozione",
      date: "Domenica 01.03.2026",
      location: "Varie sedi (Nepi, Sacrofano, Roma)",
      description: "Trasferta decisiva per tutte e tre le squadre: il Black gioca la promozione a Nepi, il White ha il primo match point per la Serie C, il Blue cerca l'aggancio in casa dell'Easy Scacchi.",
      category: "PROMOZIONE",
      categoryColor: "bg-red-500 text-white",
      image: "/turno4/turno4 (4).jpeg",
      link: "/ricordi/turno4",
      clickable: true
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
      clickable: true
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
      clickable: true
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
      clickable: true
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
        { name: "1N Riccardo Grammatico", color: "bg-blue-100 text-blue-800" }
      ],
      clickable: false
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "https://via.placeholder.com/400x200?text=Avamposto+Garibaldino";
  };

  const renderCardContent = (news: NewsItem) => (
    <>
      {/* Sezione immagine con badge */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <div className="absolute top-3 left-3">
          <span className={`${news.categoryColor} px-3 py-1.5 text-xs font-bold rounded-full shadow-md flex items-center`}>
            <Tag className="h-3 w-3 mr-1" />
            {news.category}
          </span>
        </div>
      </div>

      {/* Contenuto card */}
      <div className="p-5 flex-grow">
        {/* Titolo */}
        <h3 className="text-xl font-bold text-chess-dark mb-4 line-clamp-2 min-h-[56px]">
          {news.title}
        </h3>

        {/* Informazioni data/ora/luogo */}
        <div className="space-y-2.5 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
            <span className="font-medium">{news.date}</span>
          </div>
          {/* <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
            <span>ore {news.time}</span>
          </div> */}
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
            <span className="line-clamp-1">{news.location}</span>
          </div>
        </div>

        {/* Descrizione */}
        <p className="text-gray-700 mb-4 leading-relaxed text-sm">
          {news.description}
        </p>

        {/* Sezione Istruttori (solo per il corso) - ora su una riga */}
        {news.instructors && news.instructors.length > 0 && (
          <div className="mb-2">
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
              <span className="text-sm font-medium text-chess-dark">Istruttori:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {news.instructors.map((instructor: Instructor, index: number) => (
                <span 
                  key={index}
                  className={`${instructor.color} px-3 py-1.5 text-xs font-medium rounded-full inline-flex items-center`}
                >
                  <User className="h-3 w-3 mr-1" />
                  {instructor.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-chess-dark/5 px-4 sm:px-6 lg:px-8 py-8">
      {/* Header con Torna alla Home */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center text-chess-gold hover:text-chess-dark transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Torna alla Home
          </Link>
          
          <div className="flex items-center text-sm text-gray-600">
            <Bell className="h-4 w-4 mr-2" />
            <span>Ultimo aggiornamento: 10-03-2026</span>
          </div>
        </div>
      </div>

      {/* Intestazione */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-chess-gold to-chess-dark rounded-full blur opacity-30"></div>
            <div className="relative bg-white p-3 rounded-full">
              <Bell className="w-8 h-8 text-chess-dark" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent leading-[1.3]">
          News & Eventi
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Resta aggiornato su tutti gli eventi, corsi e tornei dell'Avamposto Garibaldino
        </p>
      </div>

      {/* Grid delle card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[...newsItems].sort((a: NewsItem, b: NewsItem) => b.id - a.id).map((news: NewsItem) => (
          <div key={news.id}>
            {news.clickable ? (
              <a
                href={news.link}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 hover:border-chess-gold/30 overflow-hidden cursor-pointer no-underline"
              >
                {renderCardContent(news)}
              </a>
            ) : (
              <div className="bg-white rounded-lg shadow-md flex flex-col h-full border border-gray-200 overflow-hidden">
                {renderCardContent(news)}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-chess-gold" />
            </div>
            <h4 className="font-bold text-chess-dark mb-2">Eventi Mensili</h4>
            <p className="text-sm text-gray-600">
              Tornei, lezioni ed eventi speciali ogni mese
            </p>
          </div>
          
          <div>
            <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Bell className="h-6 w-6 text-chess-gold" />
            </div>
            <h4 className="font-bold text-chess-dark mb-2">Notifiche</h4>
            <p className="text-sm text-gray-600">
              Aggiornamenti in tempo reale sui social
            </p>
          </div>
          
          <div>
            <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-chess-gold" />
            </div>
            <h4 className="font-bold text-chess-dark mb-2">Sede</h4>
            <p className="text-sm text-gray-600">
              Via Giovanni Giolitti 21/23, Mentana
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Per ulteriori informazioni seguici sui social: Instagram e Facebook
        </p>
      </div>
    </div>
  );
};

export default News;