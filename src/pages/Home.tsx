import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Star, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section con altezza ridotta */}
      <section className="relative text-white py-12 h-[350px] md:h-[450px]"> {/* Altezza ridotta */}
        {/* Immagine di sfondo con zoom aumentato */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/scacchi-mentana/Foto da Gherardo Gismondi (54).jpg"
            alt="Avamposto Garibaldino"
            className="w-full h-full object-cover object-center scale-110" /* Zoom aumentato */
            style={{ 
              filter: 'brightness(1.05) contrast(1.1)',
              transform: 'scale(1.1)' /* Ingrandisce l'immagine */
            }}
          />
          {/* Overlay più leggero nella parte centrale */}
          <div className="absolute inset-0 bg-gradient-to-b from-chess-dark/70 via-chess-dark/40 to-chess-black/70"></div>
        </div>
        
        {/* Contenuto del hero con padding aggiustato */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center pt-10 pb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"> {/* Testo leggermente più piccolo */}
            Benvenuti all' <span className="text-chess-gold">Avamposto Garibaldino</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto"> {/* Testo ridotto */}
            Tradizione, eccellenza e passione per gli scacchi.<br />
            Unisciti al nostro circolo scacchistico.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Bottoni più compatti */}
            <Link
              to="/ricordi"
              className="bg-chess-gold text-chess-black px-6 py-2 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors inline-flex items-center justify-center text-sm md:text-base"
            >
              Il Nostro Circolo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/learn"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-chess-dark transition-colors text-sm md:text-base"
            >
              Impara a Giocare
            </Link>
          </div>
        </div>
      </section>
  
      <div className="max-w-7xl mx-auto px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl font-bold text-chess-dark mb-8">La Nostra Storia</h2>
            <p className="text-xl text-chess-gray mb-6">
            L'Avamposto Garibaldino rappresenta anni di tradizione scacchistica a Mentana. 
            </p>
            <p className="text-xl text-chess-gray mb-6">
            Radicato nel cuore di Mentana, il nostro circolo trae ispirazione dall'eroica storia locale.  
            </p>
            <p className="text-xl text-chess-gray">
              Formiamo campioni e uniamo generazioni attorno agli scacchi. 
              Oggi, con sede moderna e attrezzature all'avanguardia, offriamo tornei e corsi per tutti.
            </p>
          </div>
          <div>
            <img
              src="/images/scacchiera-grossa.jpg"
              alt="Scacchiera Grande"
              className="w-full h-[350px] object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Nuova Sezione Gruppi Online */}
      <div className="max-w-7xl mx-auto px-8 pt-4">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-chess-dark mb-8 text-center">Gioca con Noi Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Chess.com */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-chess-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/chesscom.png" 
                  alt="Chess.com logo" 
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-2">ASD Mentana Scacchi - Avamposto Garibaldino</h3>
              <p className="text-chess-gray mb-4">
                Unisciti al nostro club su Chess.com per giocare online, partecipare a tornei e migliorare il tuo gioco.
              </p>
              <a
                href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-chess-blue/90 transition-colors inline-block"
              >
                Unisciti su Chess.com
              </a>
            </div>

            {/* Card Lichess */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-chess-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/lichess.png" 
                  alt="Lichess logo" 
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-2">Avamposto Junior Online</h3>
              <p className="text-chess-gray mb-4">
                Il nostro team su Lichess dedicato ai giovani giocatori. Partecipa ai tornei e impara con i nostri istruttori.
              </p>
              <a
                href="https://lichess.org/team/avamposto-junior-online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-chess-green/90 transition-colors inline-block"
              >
                Unisciti su Lichess
              </a>
            </div>

            {/* Card Vesus */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-chess-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/images/lichess.png" 
                  alt="Lichess logo" 
                  className="h-15 w-15"
                />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-2">Avamposto Junior Online</h3>
              <p className="text-chess-gray mb-4">
                Il nostro team su Lichess dedicato ai giovani giocatori. Partecipa ai tornei e impara con i nostri istruttori.
              </p>
              <a
                href="https://lichess.org/team/avamposto-junior-online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-chess-green/90 transition-colors inline-block"
              >
                Unisciti su Lichess
              </a>
            </div> */}
          </div>
        </div>
      </div>

     <div className="max-w-7xl mx-auto px-8 pt-4">
  <div className="mb-16">
    <h2 className="text-5xl font-bold text-chess-dark mb-8 text-center">Il Nostro Circolo</h2>
    
    {/* Card Presidente */}
    <div className="bg-white rounded-xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/images-circolo/Gherardo-Gismondi.jpg"
          alt="Presidente"
          className="w-32 h-32 rounded-full object-cover border-4 border-chess-gold"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-chess-dark mb-1">Avvocato Gherardo Gismondi</h3>
          <p className="text-chess-gold font-medium mb-3">Presidente e Fondatore</p>
          <p className="text-chess-gray">
            Grande appassionato e storico degli scacchi, guida il club dal 2015 con dedizione e competenza.
          </p>
        </div>
      </div>
    </div>

    {/* Galleria Ricordi */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Scacchi a Mentana */}
<Link 
  to="/ricordi/scacchi-mentana" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full relative"
>
  <div className="relative group">
    <img
      src="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
      alt="h"
      className="w-full h-80 object-cover group-hover:brightness-90 transition"
    />
    <div className="absolute inset-0 flex items-end p-4">
      <h3 className="text-xl font-semibold text-white">
        La Nostra Storia Scacchistica
      </h3>
    </div>
  </div>
  <div className="p-6 flex-grow">
    <p className="text-chess-gray mb-4">
      La Nostra Storia Scacchistica
    </p>
  </div>
  <div className="p-4 border-t border-gray-100">
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold">Dal 2015 in poi</span>
      <span className="text-sm text-chess-dark font-medium">Scopri di più →</span>
    </div>
  </div>
</Link>
  {/* Centro Estivo */}
<Link 
  to="/ricordi/centro-estivo" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full" // Aggiunto flex-col e h-full
>
  <div className="relative">
    <img
      src="/centro-estivo/cavallo1.jpg"
      alt="Centro Estivo"
      className="w-full h-80 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <h3 className="text-xl font-semibold text-white">Centro Estivo</h3>
    </div>
  </div>
  
  <div className="p-6 flex-grow"> {/* flex-grow per occupare lo spazio rimanente */}
    <p className="text-chess-gray mb-4">
      Centro Estivo Monterotondo Scalo
    </p>
  </div>

  {/* Elementi fissi in basso */}
  <div className="p-4 border-t border-gray-100"> {/* Aggiunto un bordo superiore per separare */}
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold">Estate 2020</span>
      <span className="text-sm text-chess-dark font-medium">Scopri di più →</span>
    </div>
  </div>
</Link>

  
<Link 
  to="/ricordi/gli-inizi" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full relative"
>
  <div className="relative">
    <img
      src="/ricordi-vecchi/ricordo-vecchio1.jpg"
      alt="Scuola Scacchi Junior"
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-xl font-semibold text-white">Gli Inizi</h3>
        <p className="text-white/90"></p>
      </div>
    </div>
  </div>
  <div className="p-6 flex-grow">
    <p className="text-chess-gray mb-4">
      Primi Tornei dell'Avamposto Garibaldino
    </p>
  </div>
  <div className="p-4 border-t border-gray-100">
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold"></span>
      <span className="text-sm text-chess-dark font-medium">Scopri di più →</span>
    </div>
  </div>
</Link>




{/* <Link 
  to="/ricordi/memorial-garibaldi" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full relative"
>
  <div className="relative">
    <img
      src="/images/memorial-garibaldi.jpg"
      alt="Memorial Garibaldi"
      className="w-full h-80 object-cover"
    />
    <div className="absolute top-0 left-0 bg-chess-gold text-chess-dark px-3 py-1 font-bold">
      Evento Annuale
    </div>
  </div>
  <div className="p-6 flex-grow">
    <h3 className="text-xl font-semibold text-chess-dark mb-2">Memorial Garibaldi</h3>
    <p className="text-chess-gray mb-4">
      Torneo in memoria del nostro fondatore. Edizione speciale con ospiti d'onore.
    </p>
  </div>
  <div className="p-4 border-t border-gray-100">
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold">4 Novembre 2023</span>
      <span className="text-sm text-chess-dark font-medium">Vedi i vincitori →</span>
    </div>
  </div>
</Link>

<Link 
  to="/ricordi/corso-adulti" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full relative"
>
  <div className="relative h-80 bg-chess-dark flex items-center justify-center">
    <div className="text-center p-6">
      <h3 className="text-2xl font-bold text-chess-gold mb-2">Corso Adulti</h3>
      <p className="text-white">Primo livello 2023/24</p>
    </div>
  </div>
  <div className="p-6 flex-grow">
    <p className="text-chess-gray mb-4">
      15 nuovi appassionati hanno completato con successo il corso base di scacchi.
    </p>
  </div>
  <div className="p-4 border-t border-gray-100">
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold">Ottobre - Dicembre 2023</span>
      <span className="text-sm text-chess-dark font-medium">Vedi le lezioni →</span>
    </div>
  </div>
</Link>

<Link 
  to="/ricordi/simultanea-beneficenza" 
  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-[1.02] duration-300 flex flex-col h-full relative"
>
  <div className="relative">
    <img
      src="/images/simultanea.jpg"
      alt="Simultanea di Beneficenza"
      className="w-full h-80 object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-chess-gold text-chess-dark px-4 py-2 rounded font-bold">
        Rivedi l'evento
      </button>
    </div>
  </div>
  <div className="p-6 flex-grow">
    <h3 className="text-xl font-semibold text-chess-dark mb-2">Simultanea di Beneficenza</h3>
    <p className="text-chess-gray mb-4">
      Raccolti €2.500 per l'ospedale pediatrico. 35 avversari contro il GM Rossi.
    </p>
  </div>
  <div className="p-4 border-t border-gray-100">
    <div className="flex justify-between items-center">
      <span className="text-sm text-chess-gold">18 Marzo 2024</span>
      <span className="text-sm text-chess-dark font-medium">Vedi i dettagli →</span>
    </div>
  </div>
</Link> */}
</div>
  </div>
</div>



      {/* Resto del codice rimane invariato */}
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-3xl font-bold text-chess-dark mb-2">100+</h3>
              <p className="text-chess-gray">Membri</p>
            </div>
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-3xl font-bold text-chess-dark mb-2">20</h3>
              <p className="text-chess-gray">Insegnanti in Servizio</p>
            </div>
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-3xl font-bold text-chess-dark mb-2">10+</h3>
              <p className="text-chess-gray">Tornei Annuali</p>
            </div>
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-3xl font-bold text-chess-dark mb-2">2015</h3>
              <p className="text-chess-gray">Anno di Fondazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chess-dark mb-4">
              Perché Scegliere l'Avamposto Garibaldino?
            </h2>
            <p className="text-xl text-chess-gray max-w-3xl mx-auto">
              Offriamo un'esperienza unica che combina tradizione storica con approccio moderno agli scacchi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-6 w-6 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Decine di Tornei ogni Anno</h3>
              <p className="text-chess-gray">
                Partecipa a tornei con giocatori esperti e premi sostanziosi.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Comunità Appassionata</h3>
              <p className="text-chess-gray">
                Comunità di appassionati che condividono la tua passione per gli scacchi.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-chess-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Tradizione Storica</h3>
              <p className="text-chess-gray">
                15 anni di storia e tradizione negli scacchi italiani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-chess-dark">Ultime Notizie</h2>
            <Link
              to="/news"
              className="text-chess-gold hover:text-chess-dark transition-colors font-semibold"
            >
              Vedi Tutte →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/ScacchiFoto.jpg"
                alt="Chess tournament"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chess-dark mb-2">
                  Torneo 10° Anniversario - Iscrizioni Aperte
                </h3>
                <p className="text-chess-gray mb-4">
                  Il prestigioso torneo inizierà il 15 Giugno 2025. Iscriviti ora per partecipare.
                </p>
                <div className="text-sm text-chess-gold">10 Aprile 2025</div>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/images/ScacchiFoto2.jpg"
                alt="Chess pieces"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chess-dark mb-2">
                  Nuovo Gran Maestro nel Club
                </h3>
                <p className="text-chess-gray mb-4">
                  Nuovo Grande Maestro ha messo piede nel circolo.
                </p>
                <div className="text-sm text-chess-gold">10 Gennaio 2025</div>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/TorreScacchi.svg"
                alt="Chess match"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-chess-dark mb-2">
                  Nuova Scacchiera Digitale
                </h3>
                <p className="text-chess-gray mb-4">
                  Nuova Scacchiera Digitale in arrivo.
                </p>
                <div className="text-sm text-chess-gold">14 Giugno 2025</div>
              </div>
            </article>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;