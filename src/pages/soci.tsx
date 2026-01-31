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
      descrizione: "Socio Onorario",
    },
    {
      id: 8,
      nome: "Emanuele Stella",
      ruolo: "Istruttore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Socio Onorario",
    },
    {
      id: 9,
      nome: "Domenico 'Mimmo' Catalano",
      ruolo: "Istruttore",
      immagine: "/images/LogoNuovo2.png",
      descrizione: "Divulgatore e promoter di eventi",
    },

      // Soci Onorari (in ordine alfabetico)
  {
    id: 10,
    nome: "Angeli Francesco",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 11,
    nome: "Benedetto Edoardo Di",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 12,
    nome: "Campanile Angelo",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 13,
    nome: "Caruso Gregorio",
    ruolo: "Socio Onorario",
    immagine: "/soci/gregorio-caruso.jpg",
    descrizione: "",
  },
  {
    id: 14,
    nome: "Poiani Fernando Celso",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 15,
    nome: "Rocchetti Sergio",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 16,
    nome: "Simone Andrea De",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 17,
    nome: "Ventilii Roberto",
    ruolo: "Socio Onorario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },

  // Soci Ordinari (in ordine alfabetico)
  {
    id: 18,
    nome: "Biagioli Italo",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 19,
    nome: "Boccadori Luigi",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 20,
    nome: "Caparrotta Federico",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 21,
    nome: "Cucka Argia",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 22,
    nome: "Federici Simone",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 23,
    nome: "Fumagalli Mauro",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "Tesoriere",
  },
  {
    id: 24,
    nome: "Iacovelli Enrico",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 25,
    nome: "Marco Simone Di",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 26,
    nome: "Militerni Pier Luigi",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 27,
    nome: "Nuzzo Daniele",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 28,
    nome: "Paoloni Roberto",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 29,
    nome: "Polese Pierluigi",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "Vicepresidente",
  },
  {
    id: 30,
    nome: "Scorcelletti Matteo",
    ruolo: "Socio Ordinario",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },

  // Soci Junior (in ordine alfabetico)
  {
    id: 31,
    nome: "Ambrosio Alessandro D'",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 32,
    nome: "Campanile Giuseppe",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 33,
    nome: "Caruso Sofia",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 34,
    nome: "Castaldo Emanuel",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 35,
    nome: "Lai Mario",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 36,
    nome: "Ranieri Learco",
    ruolo: "Socio Junior",
    immagine: "/images/LogoNuovo2.png",
    descrizione: "",
  },
  {
    id: 37,
    nome: "Venturi Riccardo",
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