import React from 'react';
import { Crown, Award, Users, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-chess-dark mb-6">
            Chi Siamo
          </h1>
          <p className="text-xl text-chess-gray max-w-3xl mx-auto">
            L'Avamposto Garibaldino rappresenta anni di tradizione scacchistica a Mentana. 
            In questo luogo, tra le mura che evocano le gesta garibaldine, coltiviamo menti strategiche e costruiamo legami duraturi.
          </p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-chess-dark mb-6">La Nostra Storia</h2>
            <p className="text-chess-gray mb-4">
              Radicato nel cuore di Mentana da generazioni, il nostro circolo trae ispirazione dall'eroica storia locale. 
              Come i garibaldini scrissero pagine decisive del Risorgimento, noi scriviamo la storia degli scacchi nella regione con la stessa determinazione.
            </p>
            <p className="text-chess-gray mb-4">
              Negli anni, abbiamo formato campioni regionali e ospitato talenti emergenti, mantenendo vivo l'autentico spirito scacchistico; 
              quello che unisce generazioni attorno alla scacchiera, dove anziani maestri e giovani promesse si confrontano con uguale rispetto.
            </p>
            <p className="text-chess-gray">
              Oggi continuiamo questa tradizione con una sede moderna nel centro di Mentana, 
              attrezzature all'avanguardia e un programma di eventi che spazia da tornei
              a corsi per principianti.
            </p>
          </div>
          <div>
            <img
              src="/images/Prova1.jpg"
              alt="Scacchiera Grande"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-chess-dark mb-8 text-center">La Nostra Missione</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Eccellenza</h3>
              <p className="text-chess-gray">
                Promuoviamo l'eccellenza negli scacchi attraverso formazione continua e competizioni di alto livello.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Comunità</h3>
              <p className="text-chess-gray">
                Creiamo una comunità inclusiva dove giocatori di tutti i livelli possono crescere e divertirsi.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-chess-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-chess-gold" />
              </div>
              <h3 className="text-xl font-semibold text-chess-dark mb-4">Tradizione</h3>
              <p className="text-chess-gray">
                Preserviamo e tramandiamo la ricca tradizione scacchistica italiana alle nuove generazioni.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-chess-dark mb-8 text-center">Il Nostro Circolo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                alt="President"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-chess-dark mb-2">Avvocato Gherardo Gismondi</h3>
              <p className="text-chess-gold mb-2">Presidente</p>
              <p className="text-chess-gray text-sm">
                Grande Appassionato e storico degli scacchi, guida il club dal 2010 "da precisare".
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Vice President"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-chess-dark mb-2">Mario Rossi</h3>
              <p className="text-chess-gold mb-2">Vice Presidente</p>
              <p className="text-chess-gray text-sm">
                Maestro Internazionale...
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
                alt="Tournament Director"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-chess-dark mb-2">Luigi Bianchi</h3>
              <p className="text-chess-gold mb-2">Vice Presidente</p>
              <p className="text-chess-gray text-sm">
                Maestro e organizzatore di tornei internazionali...
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-chess-dark text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">I Nostri Risultati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-chess-gold mb-2">25</div>
              <p className="text-gray-300">Campioni Nazionali</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chess-gold mb-2">8</div>
              <p className="text-gray-300">Grandi Maestri</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chess-gold mb-2">150+</div>
              <p className="text-gray-300">Tornei Organizzati</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chess-gold mb-2">5000+</div>
              <p className="text-gray-300">Partite Giocate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;