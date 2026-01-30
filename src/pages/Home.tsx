import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Star, ArrowRight, ChevronRight, Heart, Award, Shield, BookOpen, Bell, CalendarDays, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaChessRook } from 'react-icons/fa';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
    "/images-circolo/Importante.jpg",    
    "/images/scacchiera-grossa.jpg",
    "/ricordi-vecchi/ricordo-vecchio1.jpg",
    "/foto-scacchiera-gigante/realizzata1.jpg",
    "/scacchi-mentana/domenica 15 nov 2020.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img 
          key={image}
          src={image}
          alt={`Avamposto Garibaldino ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-110 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            filter: 'brightness(1.1) contrast(1.3)',
          }}
        />
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section migliorata */}
      <section className="relative text-white py-16 md:py-24 min-h-[80vh] flex items-center">
        {/* Carosello immagini con overlay migliorato */}
        <div className="absolute inset-0 overflow-hidden">
          <ImageCarousel />
          {/* Overlay con gradiente più elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-chess-dark/80 via-chess-dark/50 to-chess-dark/70"></div>
        </div>
        
        {/* Contenuto del hero migliorato */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Benvenuti all'<span className="text-chess-gold">Avamposto Garibaldino</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Tradizione, eccellenza e passione per gli scacchi nel cuore di Mentana
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/soci"
              className="bg-chess-gold text-chess-dark px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center text-base shadow-lg hover:shadow-chess-gold/20 hover:-translate-y-1"
            >
              Scopri il Nostro Circolo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-chess-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold hover:text-chess-dark transition-all duration-300 text-base hover:-translate-y-1"
            >
              Dove trovarci
            </Link>
          </div>
        </div>
        
        {/* Elemento decorativo */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* Sezione Ultima Notizia */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
  <div className="">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <Bell className="h-8 w-8 text-chess-gold mr-3" />
        <h2 className="text-3xl md:text-4xl font-bold text-chess-dark">Ultima Notizia</h2>
      </div>
      <Link 
        to="/news" 
        className="text-chess-gold hover:text-chess-dark font-medium transition-colors flex items-center"
      >
        Vedi tutte le notizie
        <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
    
    <Link 
      to="/news" 
      className="group bg-gradient-to-r from-chess-dark/5 via-chess-dark/10 to-chess-dark/5 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-chess-dark/20 hover:-translate-y-1 block"
    >
      <div className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Colonna sinistra: Contenuto */}
          <div className="flex-grow lg:w-2/3">
            <div className="flex items-center mb-3">
              <div className="bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-sm font-bold mr-3">
                NUOVO CORSO
              </div>
              <span className="text-chess-gray text-sm">
                <CalendarDays className="h-4 w-4 inline mr-1" />
                Sabato 24.1.2026 • ore 15:20
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-chess-dark mb-4 group-hover:text-chess-gold transition-colors">
              "A Scuola dai Campioni" - Corso di Scacchi Avanzato
            </h3>
            <p className="text-chess-gray text-lg mb-6">
              Sabato 24.1.2026 ore 15.20 a Mentana, Via Giovanni Giolitti 21/23, parte il corso "a scuola dai campioni" 
              con il CM Emanuele Stella e il 1N Riccardo Grammatico! Vi aspettiamo!!!
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-green-300 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                CM Emanuele Stella
              </div>
              <div className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                1N Riccardo Grammatico
              </div>
            </div>
            <div className="flex items-center text-chess-gold font-medium">
              Scopri tutti i dettagli 
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
          
          {/* Colonna destra: Foto */}
          <div className="lg:w-1/3">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[250px]">
              <img
                src="/images/corso-scacchi.jpg"
                alt="Corso Scacchi Avanzato"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/30 to-transparent"></div>
              {/* <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-chess-gold mr-2 flex-shrink-0" /> 
                    <span className="text-sm font-medium text-chess-dark truncate">
                      Via Giovanni Giolitti 21/23, Mentana
                    </span> 
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
</div>
  
      {/* Sezione Storia migliorata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"> {/* cambiato da items-center a items-start */}
  <div className="order-2 lg:order-1 pt-8"> {/* aggiunto pt-8 per spostare il contenuto verso il basso */}
    <div className="inline-flex items-center mb-4 text-chess-gold font-medium">
      <div className="w-12 h-0.5 bg-chess-gold mr-3"></div>
      LA NOSTRA STORIA
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-chess-dark mb-6">La nostra Storia</h1>
    <div className="space-y-5">
      <p className="text-xl text-chess-gray">
        L'Avamposto Garibaldino rappresenta anni di tradizione scacchistica a Mentana, ispirandosi all'eroica storia locale mentre guarda con innovazione al futuro.
      </p>
      <p className="text-xl text-chess-gray">
        L'Associazione ha lo scopo di divulgare il gioco degli scacchi.
      </p>
      <p className="text-xl text-chess-gray">
        Oggi, con sede moderna e attrezzature all'avanguardia, offriamo tornei, corsi e eventi per appassionati di ogni livello ed età.
      </p> 
    </div>
  </div>
  <div className="order-2 lg:order-2 relative">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="/ricordi-vecchi/ricordo-vecchio5.jpg"
        alt="Scacchiera Grande"
        className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/20 to-transparent"></div>
    </div>
    <div className="absolute -bottom-6 -left-6 bg-chess-gold text-chess-dark px-6 py-3 rounded-lg shadow-lg">
      <span className="font-bold">2015</span>
      <span className="ml-2">Anno di Fondazione</span>
    </div>
  </div>
</div>

        {/* Sezione Gruppi Online migliorata */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">Gioca con Noi Online</h2>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Unisciti alla nostra community digitale e continua a giocare anche da casa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card Chess.com */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/images/chesscom.png" 
                  alt="Chess.com logo" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-2xl font-semibold text-chess-dark mb-4">ASD Mentana Scacchi - Avamposto Garibaldino</h3>
              <p className="text-chess-gray mb-6">
                Unisciti al nostro club su Chess.com per giocare online, partecipare a tornei e migliorare il tuo gioco con analisi dettagliate.
              </p>
              <a
                href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center mx-auto"
              >
                Unisciti su Chess.com
              </a>
            </div>

            {/* Card Lichess */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <img 
                  src="/images/lichess.png" 
                  alt="Lichess logo" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-2xl font-semibold text-chess-dark mb-4">Avamposto Junior Online</h3>
              <p className="text-chess-gray mb-6">
                Il nostro team su Lichess dedicato ai giovani giocatori. Partecipa ai tornei e impara con i nostri istruttori esperti.
              </p>
              <a
                href="https://lichess.org/team/avamposto-junior-online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-900 transition-colors inline-flex items-center justify-center mx-auto"
              >
                Unisciti su Lichess
              </a>
            </div>
          </div>
        </div>

        {/* Nuova Sezione Seguici sui Social */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">Seguici sui Social</h2>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Resta aggiornato su tutti gli eventi, tornei e novità del nostro circolo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Facebook */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaFacebookF className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-chess-dark mb-4">Facebook</h3>
              <p className="text-chess-gray mb-6">
                Segui la nostra pagina per news, eventi e foto dei tornei in tempo reale
              </p>
              <a
                href="https://www.facebook.com/mentanascacchi?locale=it_IT"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-colors inline-flex items-center justify-center mx-auto"
              >
                Seguici su Facebook
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaInstagram className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-chess-dark mb-4">Instagram</h3>
              <p className="text-chess-gray mb-6">
                Guarda le stories dei nostri tornei e le foto più belle della community in tempo reale
              </p>
              <a
                href="https://instagram.com/avamposto.garibaldino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors inline-flex items-center justify-center mx-auto"
              >
                Seguici su Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Sezione Il Nostro Circolo migliorata */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">I Nostri Soci</h2>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Conosci le persone che rendono speciale la nostra community scacchistica
            </p> 
          </div>

          <div className="flex justify-center mb-12">
            <Link 
                to="/soci" 
                className="group bg-gradient-to-br from-chess-dark/5 to-chess-dark/10 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-chess-dark/20 hover:-translate-y-2 w-full max-w-4xl overflow-hidden"
              >
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden mx-auto shadow-lg">
                    <img
                      src="/foto-scacchiera-gigante/realizzata2.jpg"
                      alt="La Nostra Community"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-chess-gold text-chess-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Esperienza Unica
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-chess-dark mb-4">La Nostra Community</h3>
                <p className="text-chess-gray mb-6 text-lg">
                  Scopri tutti i membri dell'Avamposto Garibaldino.
                </p>
                <div className="mt-4">
                  <span className="text-lg text-chess-gold font-medium flex items-center justify-center">
                    Conosci i nostri soci 
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
          </div>

          {/* Sezione Scacchiera Gigante */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">La Nostra Scacchiera Gigante</h2>
              <p className="text-xl text-chess-gray max-w-2xl mx-auto">
                Vivi l'emozione di giocare sulla nostra spettacolare scacchiera gigante
              </p>
            </div>

            <div className="flex justify-center">
              <Link 
                to="/scacchiera-gigante" 
                className="group bg-gradient-to-br from-chess-dark/5 to-chess-dark/10 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-chess-dark/20 hover:-translate-y-2 w-full max-w-4xl overflow-hidden"
              >
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden mx-auto shadow-lg">
                    <img
                      src="/images/scacchiera-grossa.jpg"
                      alt="Scacchiera Gigante"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-chess-gold text-chess-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Esperienza Unica
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-chess-dark mb-4">Scacchiera Gigante</h3>
                <p className="text-chess-gray mb-6 text-lg">
                  Scopri la nostra iconica scacchiera gigante, dalla costruzione all'aspetto odierno. 
                  Un'esperienza immersiva che ti farà sentire parte integrante del gioco degli scacchi.
                </p>
                <div className="mt-4">
                  <span className="text-lg text-chess-gold font-medium flex items-center justify-center">
                    Scopri la Scacchiera Gigante
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Nuova Sezione Patrimonio */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">Il Nostro Patrimonio</h2>
              <p className="text-xl text-chess-gray max-w-2xl mx-auto">
                Scopri il ricco patrimonio culturale e scacchistico dell'Avamposto Garibaldino
              </p>
            </div>

            <div className="flex justify-center">
              <Link 
                to="/patrimonio" 
                className="group bg-gradient-to-br from-chess-dark/5 to-chess-dark/10 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-chess-dark/20 hover:-translate-y-2 w-full max-w-4xl overflow-hidden"
              >
                <div className="relative mb-6">
                  <div className="w-full h-64 rounded-2xl overflow-hidden mx-auto shadow-lg">
                    <img
                      src="/libri/libris.jpg"
                      alt="Patrimonio dell'Avamposto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-chess-gold text-chess-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Collezioni Preziose
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-chess-dark mb-4">Il Nostro Patrimonio</h3>
                <p className="text-chess-gray mb-6 text-lg">
                  Scopri la biblioteca scacchistica dell'Avamposto Garibaldino: libri storici, manuali tecnici, biografie dei campioni e saggi sulla cultura scacchistica.
                </p>
                <div className="mt-4">
                  <span className="text-lg text-chess-gold font-medium flex items-center justify-center">
                    Scopri il Patrimonio
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">I nostri Ricordi più emozionanti</h2>
          </div>
          
          {/* Galleria Ricordi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scacchi a Mentana */}
            <Link 
              to="/ricordi/scacchi-mentana" 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
                  alt="Scacchi a Mentana"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">
                    La Nostra Storia Scacchistica
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-chess-gray mb-4">
                  Scopri l'evoluzione del nostro circolo attraverso gli anni
                </p>
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-chess-gold"></span>
                  <span className="text-sm text-chess-dark font-medium flex items-center">
                    Scopri di più <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Centro Estivo */}
            <Link 
              to="/ricordi/centro-estivo" 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/centro-estivo/cavallo1.jpg"
                  alt="Centro Estivo"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">Centro Estivo</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-chess-gray mb-4">
                  Esperienze estive dedicate ai giovani appassionati di scacchi
                </p>
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-chess-gold"></span>
                  <span className="text-sm text-chess-dark font-medium flex items-center">
                    Scopri di più <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Gli Inizi */}
            <Link 
              to="/ricordi/gli-inizi" 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/ricordi-vecchi/ricordo-vecchio1.jpg"
                  alt="Gli Inizi"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/70 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-semibold text-white">Gli Inizi</h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-chess-gray mb-4">
                  I primi tornei e le fondazione dell'Avamposto Garibaldino
                </p>
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-chess-gold"></span>
                  <span className="text-sm text-chess-dark font-medium flex items-center">
                    Scopri di più <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section finale */}
      <section className="py-16 bg-chess-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto a Unirti a Noi?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Diventa parte della nostra community scacchistica e inizia il tuo viaggio nell'affascinante mondo degli scacchi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-chess-gold text-chess-dark px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center text-base shadow-lg"
            >
              Contattaci
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;