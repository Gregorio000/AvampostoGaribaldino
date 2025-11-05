import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Star, ArrowRight, ChevronRight, Heart, Award, Shield } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaChessRook } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section migliorata */}
      <section className="relative text-white py-16 md:py-24 min-h-[80vh] flex items-center">
        {/* Immagine di sfondo con overlay migliorato */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
            alt="Avamposto Garibaldino"
            className="w-full h-full object-cover object-center scale-110"
            style={{ 
              filter: 'brightness(1.1) contrast(1.3)',
            }}
          />
          {/* Overlay con gradiente più elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-chess-dark/80 via-chess-dark/50 to-chess-dark/70"></div>
        </div>
        
        {/* Contenuto del hero migliorato */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/*<div className="inline-flex items-center justify-center mb-6 bg-chess-gold/20 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-chess-gold mr-2" />
            <span className="text-chess-gold font-medium">Circolo Scacchistico</span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Benvenuti all'<span className="text-chess-gold">Avamposto Garibaldino</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Tradizione, eccellenza e passione per gli scacchi nel cuore di Mentana
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-chess-gold text-chess-dark px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center text-base shadow-lg hover:shadow-chess-gold/20 hover:-translate-y-1"
            >
              Scopri il Nostro Circolo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/ricordi"
              className="border-2 border-chess-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold hover:text-chess-dark transition-all duration-300 text-base hover:-translate-y-1"
            >
              La Nostra Storia
            </Link>
          </div>
        </div>
        
        {/* Elemento decorativo */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>
  
      {/* Sezione Storia migliorata */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
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
                L’Associazione ha lo scopo di divulgare il gioco degli scacchi.
              </p>
              <p className="text-xl text-chess-gray">
                Oggi, con sede moderna e attrezzature all'avanguardia, offriamo tornei, corsi e eventi per appassionati di ogni livello ed età.
              </p> 
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/scacchiera-grossa.jpg"
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
                className="bg-green-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center mx-auto"
              >
                Unisciti su Lichess
                
              </a>
            </div>
          </div>
        </div>

{/* Nuova Sezione Seguici sui Social */}
{/* Nuova Sezione Seguici sui Social */}
<div className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">Seguici sui Social</h2>
    <p className="text-xl text-chess-gray max-w-2xl mx-auto">
      Resta aggiornato su tutti gli eventi, tornei e novità del nostro circolo
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

    {/* YouTube */}
    {/* <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg className="h-12 w-12 text-red-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-chess-dark mb-4">YouTube</h3>
      <p className="text-chess-gray mb-6">
        Video lezioni, analisi delle partite e riprese dei nostri tornei
      </p>
      <a
        href="https://youtube.com/avampostogaribaldino"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center mx-auto"
      >
        Iscriviti su YouTube
      </a>
    </div> */}

    {/* TikTok */}
    {/* <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="bg-black w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-chess-dark mb-4">TikTok</h3>
      <p className="text-chess-gray mb-6">
        Video brevi e divertenti con mosse spettacolari e momenti dei tornei
      </p>
      <a
        href="https://tiktok.com/@avampostogaribaldino"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center mx-auto"
      >
        Seguici su TikTok
      </a>
    </div> */}

    {/* Vesus - Assumendo sia una piattaforma di scacchi */}
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
  <div className="bg-gradient-to-br from-chess-dark to-green-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
    <FaChessRook className="h-12 w-12 text-white" />
  </div>
  <h3 className="text-2xl font-semibold text-chess-dark mb-4">Vesus</h3>
  <p className="text-chess-gray mb-6">
    Vivi il circolo, partecipa ai tornei! Segui il programma dei tornei e assicurati il tuo posto! 
  </p>
  <a
    href="https://vesus.org"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-chess-dark to-green-700 text-white px-6 py-3 rounded-lg font-medium hover:from-chess-dark/90 hover:to-green-800 transition-colors inline-flex items-center justify-center mx-auto"
  >
    Entra su Vesus
  </a>
</div>

    {/* Telegram */}
    {/* <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
      <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.534.26l.213-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.57-4.458c.534-.196 1.006.128.832.941z"/>
        </svg>
      </div>
      <h3 className="text-2xl font-semibold text-chess-dark mb-4">Telegram</h3>
      <p className="text-chess-gray mb-6">
        Unisciti al nostro canale per aggiornamenti immediati e chat di gruppo
      </p>
      <a
        href="https://t.me/avampostogaribaldino"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center mx-auto"
      >
        Unisciti su Telegram
      </a>
    </div> */}
  </div>
</div>

        {/* Sezione Il Nostro Circolo migliorata */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">Il Nostro Circolo</h2>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Conosci le persone che rendono speciale la nostra community scacchistica
            </p>
          </div>
          
          {/* Card Presidente */}
          {/* Card Presidente e Vicepresidente affiancate */}
<div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mb-16">
  {/* Card Presidente */}
  <div className="bg-gradient-to-br from-chess-gold/5 to-chess-gold/10 rounded-2xl shadow-lg p-8 flex-1 border border-chess-gold/20">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <img
          src="/images-circolo/Gherardo-Gismondi-2.jpg"
          alt="Presidente"
          className="w-40 h-40 rounded-full object-cover border-4 border-chess-gold shadow-lg"
        />
        <div className="absolute -bottom-2 -right-2 bg-chess-dark text-white text-xs font-bold px-3 py-1 rounded-full">
          Presidente
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-chess-dark mb-2">Avvocato Gherardo Gismondi</h3>
        <p className="text-chess-gold font-medium mb-4">Fondatore e Presidente</p>
        {/* <p className="text-chess-gray">
          Grande appassionato e storico degli scacchi, guida il club dal 2015 con dedizione e competenza, 
          trasmettendo la sua passione a tutti i membri del circolo.
        </p> */}
      </div>
    </div>
  </div>

  {/* Card Vicepresidente */}
  <div className="bg-gradient-to-br from-chess-blue/5 to-chess-blue/10 rounded-2xl shadow-lg p-8 flex-1 border border-chess-blue/20">
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <img
          src="/images-circolo/pier-luigi-militerni-2.jpg"
          alt="Vicepresidente"
          className="w-40 h-40 rounded-full object-cover border-4 border-chess-blue shadow-lg"
        />
        <div className="absolute -bottom-2 -right-2 bg-chess-dark text-white text-xs font-bold px-3 py-1 rounded-full">
          Vicepresidente
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-chess-dark mb-2">Pier Luigi Militerni</h3>
        <p className="text-chess-blue font-medium mb-4">Vicepresidente</p>
        {/* <p className="text-chess-gray">
          Esperto stratega e organizzatore di tornei, supporta il presidente nella gestione del circolo 
          e si occupa della coordinazione delle attività competitive e degli eventi speciali.
        </p> */}
      </div>
    </div>
  </div>
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

      {/* Stats Section migliorata */}
      <section className="py-16 bg-gradient-to-br from-chess-dark to-chess-dark/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Impatto</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Numeri che raccontano la nostra passione e il nostro impegno per gli scacchi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "30+", label: "Membri Attivi" },
              { icon: Star, value: "3", label: "Insegnanti" },
              { icon: Trophy, value: "10+", label: "Tornei Annuali" },
              { icon: Calendar, value: "2015", label: "Anno di Fondazione" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-chess-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-chess-gold/30 transition-colors duration-300">
                  <stat.icon className="h-10 w-10 text-chess-gold" />
                </div>
                <h3 className="text-4xl font-bold text-chess-gold mb-2">{stat.value}</h3>
                <p className="text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section migliorata */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-chess-dark mb-4">
              Perché Scegliere l'Avamposto Garibaldino?
            </h2>
            <p className="text-xl text-chess-gray max-w-3xl mx-auto">
              Un'esperienza unica che combina tradizione storica con un approccio moderno agli scacchi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Trophy,
                title: "Decine di Tornei ogni Anno",
                description: "Partecipa a tornei con giocatori esperti e premi sostanziosi, in un'atmosfera competitiva ma amichevole."
              },
              {
                icon: Users,
                title: "Comunità Appassionata",
                description: "Unisciti a una comunità di appassionati che condividono la tua passione per gli scacchi e il desiderio di migliorare."
              },
              {
                icon: Award,
                title: "Tradizione e Innovazione",
                description: "10 anni di storia e tradizione uniti a metodi di insegnamento moderni e all'avanguardia."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="bg-chess-gold/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-chess-gold/20 transition-colors">
                  <feature.icon className="h-7 w-7 text-chess-gold" />
                </div>
                <h3 className="text-xl font-semibold text-chess-dark mb-4">{feature.title}</h3>
                <p className="text-chess-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section finale */}
      <section className="py-16 bg-chess-dark text-white">
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