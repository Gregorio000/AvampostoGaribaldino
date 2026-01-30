import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Calendar, Star } from 'lucide-react';

const Soci: React.FC = () => {
  const soci = [
    // Soci Fondatori
    {
      id: 1,
      nome: "Gherardo Maria Gismondi",
      ruolo: "Socio Fondatore",
      immagine: "/soci/Gherardo-Gismondi-2.jpg",
      descrizione: "Ideatore, Socio fondatore e presidente, guida del circolo dal 2015, grande appassionato degli scacchi",
    },
    {
      id: 2,
      nome: "Luigi Marini",
      ruolo: "Socio Fondatore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 3,
      nome: "Raffaele Bizziccari",
      ruolo: "Socio Fondatore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 4,
      nome: "Luca Gambetti",
      ruolo: "Socio Fondatore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 5,
      nome: "Di Deodato Lucia",
      ruolo: "Socio Fondatore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },
    {
      id: 6,
      nome: "Francesco Pandolfi",
      ruolo: "Socio Fondatore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Uno dei soci fondatori storici del circolo",
    },

    // Istruttori
    {
      id: 7,
      nome: "Riccardo Grammatico",
      ruolo: "Istruttore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 8,
      nome: "Emanuele Stella",
      ruolo: "Istruttore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 9,
      nome: "Domenico 'Mimmo' Catalano",
      ruolo: "Istruttore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },

    // Soci Onorari
    {
      id: 10,
      nome: "Francesco Angeli",
      ruolo: "Socio Onorario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 11,
      nome: "Andrea De Simone",
      ruolo: "Socio Onorario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 12,
      nome: "Gregorio Caruso",
      ruolo: "Socio Onorario",
      immagine: "/soci/gregorio-caruso.jpg",
      descrizione: "",
    },
    {
      id: 13,
      nome: "Angelo Campanile",
      ruolo: "Socio Onorario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 14,
      nome: "Fernando Celso Pogliani",
      ruolo: "Socio Onorario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 15,
      nome: "Roberto Ventilii",
      ruolo: "Socio Onorario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    // Soci Ordinari
    {
      id: 16,
      nome: "Simone Di Marco",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 17,
      nome: "Mauro Fumagalli",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Tesoriere",
    },
    {
      id: 18,
      nome: "Luigi Boccadori",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 19,
      nome: "Argia Cucka",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 20,
      nome: "Roberto Paoloni",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 21,
      nome: "Pierluigi Polese",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Vicepresidente",
    },
    {
      id: 22,
      nome: "Pier Luigi Militerni",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 23,
      nome: "Simone Federici",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 24,
      nome: "Matteo Scorcelletti",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 25,
      nome: "Italo Biagioli",
      ruolo: "Socio Ordinario",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    // Soci Junior
    {
      id: 26,
      nome: "Giuseppe Campanile",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 27,
      nome: "Sofia Caruso",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 28,
      nome: "Emanuel Castaldo",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 29,
      nome: "Alessandro D'Ambrosio",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 30,
      nome: "Mario Lai",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 31,
      nome: "Learco Ranieri",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
    {
      id: 32,
      nome: "Riccardo Venturi",
      ruolo: "Socio Junior",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "",
    },
  ];

  // Conta per statistiche
  const sociAttivi = soci.length;
  const Fondatori = soci.filter(s => s.ruolo === "Socio Fondatore").length;
  const istruttori = soci.filter(s => s.ruolo === "Istruttore").length;
  const SociJunior = soci.filter(s => s.ruolo === "Socio Junior").length;

  // Funzione per ottenere il colore in base al ruolo
  const getRuoloColor = (ruolo: string) => {
    switch (ruolo) {
      case "Socio Fondatore":
        return "bg-yellow-500 text-black"; // Oro
      case "Istruttore":
        return "bg-green-600 text-white"; // Verde
      case "Socio Onorario":
        return "bg-red-600 text-white"; // Rosso
      case "Socio Ordinario":
        return "bg-yellow-400 text-black"; // Giallo
      case "Socio Junior":
        return "bg-blue-600 text-white"; // Blu
      default:
        return "bg-gray-600 text-white";
    }
  };

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
            <div className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-chess-gold to-chess-dark rounded-full blur opacity-30"></div>
            <div className="relative bg-white p-3 rounded-full">
              <Users className="w-8 h-8 text-chess-dark" />
            </div>
          </div>
        </div>
            <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
              I Nostri Soci
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              Conosci le persone che rendono vivo l'Avamposto Garibaldino
            </p>
          </div>
        </div>

        {/* Statistiche */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">{sociAttivi}</div>
            <div className="text-chess-gray">Soci Totali</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Star className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">{istruttori}</div>
            <div className="text-chess-gray">Istruttori</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Trophy className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">{Fondatori}</div>
            <div className="text-chess-gray">Soci Fondatori</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Users className="h-8 w-8 text-chess-gold mx-auto mb-2" />
            <div className="text-2xl font-bold text-chess-dark">{SociJunior}</div>
            <div className="text-chess-gray">Soci Junior</div>
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
                <div className={`absolute top-4 right-4 ${getRuoloColor(socio.ruolo)} px-3 py-1 rounded-full text-sm font-semibold`}>
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