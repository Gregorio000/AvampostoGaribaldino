import React from 'react';
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Bell, ChevronRight, Tag } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: '"A Scuola dai Campioni" - Corso di Scacchi Avanzato',
      date: "Sabato 24.1.2026",
      time: "15:20",
      location: "Mentana, Via Giovanni Giolitti 21/23",
      description: "Parte il corso 'a scuola dai campioni' con il CM Emanuele Stella e il 1N Riccardo Grammatico! Vi aspettiamo!!!",
      category: "NUOVO CORSO",
      categoryColor: "bg-yellow-500 text-black",
      image: "/images/corso-scacchi.jpg",
      instructors: [
        { name: "CM Emanuele Stella", color: "bg-green-100 text-green-800" },
        { name: "1N Riccardo Grammatico", color: "bg-blue-100 text-blue-800" }
      ]
    },
    // {
    //   id: 2,
    //   title: 'Torneo Regionale di Primavera',
    //   date: "Sabato 15.3.2026",
    //   time: "10:00",
    //   location: "Sala Comunale, Mentana",
    //   description: "Torneo ufficiale regionale aperto a tutti i giocatori. Premi per le prime tre categorie.",
    //   category: "TORNEO",
    //   categoryColor: "bg-red-500 text-white",
    //   image: "/images-circolo/Importante.jpg",
    //   instructors: []
    // },
    // {
    //   id: 3,
    //   title: 'Lezione Gratuita per Principianti',
    //   date: "Mercoledì 5.2.2026",
    //   time: "18:30",
    //   location: "Sede Avamposto Garibaldino",
    //   description: "Prima lezione gratuita per chi vuole avvicinarsi al mondo degli scacchi. Porta un amico!",
    //   category: "LEZIONE GRATUITA",
    //   categoryColor: "bg-green-500 text-white",
    //   image: "/ricordi-vecchi/ricordo-vecchio1.jpg",
    //   instructors: [
    //     { name: "Istruttori Certificati", color: "bg-purple-100 text-purple-800" }
    //   ]
    // },
    // {
    //   id: 4,
    //   title: 'Campionato Sociale 2026',
    //   date: "Dal 10.2.2026",
    //   time: "21:00",
    //   location: "Circolo Scacchi Mentana",
    //   description: "Il tradizionale campionato sociale per determinare il campione dell'Avamposto Garibaldino 2026.",
    //   category: "CAMPIONATO",
    //   categoryColor: "bg-blue-500 text-white",
    //   image: "/foto-scacchiera-gigante/realizzata1.jpg",
    //   instructors: []
    // },
    // {
    //   id: 5,
    //   title: 'Serata Simultanea con Maestro Internazionale',
    //   date: "Venerdì 28.2.2026",
    //   time: "20:00",
    //   location: "Biblioteca Comunale",
    //   description: "Evento speciale: sfida simultanea contro un Maestro Internazionale. Posti limitati!",
    //   category: "EVENTO SPECIALE",
    //   categoryColor: "bg-purple-500 text-white",
    //   image: "/scacchi-mentana/domenica 15 nov 2020.jpg",
    //   instructors: [
    //     { name: "Maestro Internazionale", color: "bg-red-100 text-red-800" }
    //   ]
    // },
    // {
    //   id: 6,
    //   title: 'Workshop: Strategie di Apertura',
    //   date: "Sabato 8.3.2026",
    //   time: "16:00",
    //   location: "Sede Avamposto Garibaldino",
    //   description: "Workshop intensivo sulle migliori aperture scacchistiche per giocatori intermedi.",
    //   category: "WORKSHOP",
    //   categoryColor: "bg-orange-500 text-white",
    //   image: "/images/scacchiera-grossa.jpg",
    //   instructors: [
    //     { name: "CM Emanuele Stella", color: "bg-green-100 text-green-800" }
    //   ]
    // }
  ];

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
            <span>Ultimo aggiornamento: 23-01-2026</span>
          </div>
        </div>
      </div>

      {/* Intestazione migliorata */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-chess-gold to-chess-dark rounded-full blur opacity-30"></div>
            <div className="relative bg-white p-3 rounded-full">
              <Bell className="w-8 h-8 text-chess-dark" />
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
          News & Eventi
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Resta aggiornato su tutti gli eventi, corsi e tornei dell'Avamposto Garibaldino
        </p>
      </div>

      {/* Grid delle card - ora non cliccabili */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {newsItems.map((news) => (
          <div 
            key={news.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-gray-200 hover:border-chess-gold/30 overflow-hidden"
          >
            {/* Sezione immagine con badge */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              {/* Badge categoria posizionata sopra l'immagine */}
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
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
                  <span>ore {news.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-chess-gold flex-shrink-0" />
                  <span className="line-clamp-1">{news.location}</span>
                </div>
              </div>

              {/* Descrizione */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                {news.description}
              </p>

              {/* Istruttori/Tags */}
              {news.instructors.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {news.instructors.map((instructor, index) => (
                    <span 
                      key={index}
                      className={`${instructor.color} px-2.5 py-1 text-xs rounded-full`}
                    >
                      {instructor.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer card - rimossa l'interazione */}
            <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 mt-auto">
              <div className="flex justify-between items-center">
                {/* <span className="text-xs text-gray-500 font-medium">
                  Evento #{news.id.toString().padStart(2, '0')}
                </span> */}
                <div className="flex items-center text-gray-400">
                  {/* <span className="text-sm font-medium mr-1">Informazioni</span> */}
                  {/* <ChevronRight className="h-4 w-4" /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sezione Newsletter */}
      {/* <div className="max-w-4xl mx-auto mt-16 mb-12">
        <div className="bg-gradient-to-r from-chess-dark/10 to-chess-gold/10 rounded-xl p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-chess-dark mb-3">
              Non perderti le prossime novità!
            </h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Iscriviti per ricevere aggiornamenti su eventi, tornei e corsi direttamente nella tua email
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chess-gold focus:border-transparent"
              />
              <button className="bg-chess-gold text-chess-dark px-6 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors whitespace-nowrap">
                Iscriviti
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Informazioni aggiuntive */}
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

      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Per informazioni: avamposto.garibaldino@gmail.com • Tel: +39 338 244 9032
        </p>
      </div>
    </div>
  );
};

export default News;