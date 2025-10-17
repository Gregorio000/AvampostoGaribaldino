import React from "react";
import { useNavigate } from "react-router-dom";
import { Book, ArrowLeft } from "lucide-react";

const Libri = () => {
  const navigate = useNavigate();

  const libri = [
  {
    id: 1,
    titolo: "Storia degli Scacchi - Vol. 1: Dalle Origini al Rinascimento",
    autore: "Giovanni Chessari",
    anno: 2020,
    descrizione: "Un'analisi approfondita delle origini degli scacchi, dalle prime testimonianze sumere alla diffusione in Europa durante il periodo rinascimentale.",
    copertina: "/libri/storia-degli-scacchi-vol-1.jpg",
  },
  {
    id: 2,
    titolo: "I Grandi Maestri Italiani",
    autore: "Marco Scacchi",
    anno: 2018,
    descrizione: "Biografie e partite memorabili dei più grandi giocatori italiani dalla scuola modenese ai campioni moderni.",
    copertina: "/libri/grandi-maestri-italiani.jpg",
  },
  {
    id: 3,
    titolo: "Trattato di Strategia Scacchistica",
    autore: "Anna Torre",
    anno: 2021,
    descrizione: "Un compendio completo delle strategie e tattiche essenziali per dominare la scacchiera, con esempi pratici e esercizi.",
    copertina: "/libri/trattato-strategia-scacchistica.jpg",
  },
  {
    id: 4,
    titolo: "Scacchi e Matematica",
    autore: "Prof. Luca Algorithmi",
    anno: 2019,
    descrizione: "Le connessioni matematiche negli scacchi: dalla teoria dei giochi alla complessità algoritmica delle posizioni.",
    copertina: "/libri/scacchi-e-matematica.jpg",
  },
  {
    id: 5,
    titolo: "L'Arte del Finale",
    autore: "Roberto Pedone",
    anno: 2022,
    descrizione: "Tecniche avanzate per concludere le partite nei finali di re e pedoni, torri e pezzi minori.",
    copertina: "/libri/arte-del-finale.jpg",
  },
  {
    id: 6,
    titolo: "Scacchi nella Letteratura Mondiale",
    autore: "Elisabetta Letteraria",
    anno: 2017,
    descrizione: "Come gli scacchi hanno influenzato e sono stati rappresentati nella letteratura di tutti i tempi.",
    copertina: "/libri/scacchi-letteratura-mondiale.jpg",
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-800 hover:text-amber-900 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Indietro
          </button>
          <div className="flex items-center">
            <Book className="w-8 h-8 text-amber-700 mr-3" />
            <h1 className="text-4xl font-bold text-amber-900">Biblioteca dell'Avamposto Garibaldino</h1>
          </div>
        </div>

        <p className="text-lg text-amber-700 mb-10 text-center max-w-3xl mx-auto">
          Scopri il patrimonio librario dedicato agli scacchi: trattati storici, manuali tecnici, 
          biografie dei campioni e saggi sulla cultura scacchistica.
        </p>

        {/* Grid dei libri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {libri.map((libro) => (
            <div
              key={libro.id}
              className="bg-white rounded-xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={libro.copertina} 
                    alt={`Copertina di ${libro.titolo}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{libro.titolo}</h3>
                  <p className="text-amber-600 font-medium mb-1">{libro.autore}</p>
                  <p className="text-amber-500 text-sm mb-3">Anno: {libro.anno}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {libro.descrizione}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Libri;