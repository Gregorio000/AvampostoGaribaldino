import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Calendar, Star } from 'lucide-react';

const Soci: React.FC = () => {
  const soci = [
    {
      id: 1,
      nome: "Avvocato Gherardo Gismondi",
      ruolo: "Presidente",
      immagine: "/soci/Gherardo-Gismondi-2.jpg",
      descrizione: "Ideatore, Socio fondatore e presidente, guida del circolo dal 2015, grande appassionato degli scacchi",
    },
    {
      id: 2,
      nome: "Luigi Marini",
      ruolo: "Socio Fondatore",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 3,
      nome: "Raffaele Bizziccari",
      ruolo: "Socio Fondatore",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 4,
      nome: "Pier Luigi Militerni",
      ruolo: "Socio Attivo",
      immagine: "/soci/pier-luigi-militerni-2.jpg",
      descrizione: "",
    },
    {
      id: 5,
      nome: "Pierluigi Gigi Polese",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 6,
      nome: "Goffredo Piergotti",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 7,
      nome: "Luigi Boccadori",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 8,
      nome: "Argis Cucka",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 9,
      nome: "Federico Caparrotta",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 10,
      nome: "Mauro Fumagalli",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 11,
      nome: "Italo Biagioli",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 12,
      nome: "Enrico Iacovelli",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 13,
      nome: "Claudio Galizia",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 14,
      nome: "Maurizio Pencelli",
      ruolo: "Socio Attivo",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 15,
      nome: "Domenico Mimmo Catalano",
      ruolo: "Socio Onorario",
      immagine: "/images/placeholder-user.jpg",
      descrizione: "",
    },
    {
      id: 16,
      nome: "Gregorio Caruso",
      ruolo: "Socio Onorario",
      immagine: "/soci/gregorio-caruso.jpg",
      descrizione: "",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-chess-gold hover:text-chess-dark transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Torna alla Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
              I Nostri Soci
            </h1>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Conosci le persone che rendono vivo l'Avamposto Garibaldino
            </p>
          </div>
        </div>

        {/* Statistiche */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">{soci.length}</div>
            <div className="text-chess-gray">Soci Attivi</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Star className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">3</div>
            <div className="text-chess-gray">Istruttori</div>
          </div>
        </div>

        {/* Lista Soci */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {soci.map((socio) => (
            <div
              key={socio.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={socio.immagine}
                  alt={socio.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {socio.ruolo}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-chess-dark mb-2">
                  {socio.nome}
                </h3>
                
                <p className="text-chess-gray mb-4">
                  {socio.descrizione}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Soci;