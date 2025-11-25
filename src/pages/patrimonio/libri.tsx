import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, ArrowLeft, Search } from "lucide-react";

const Libri = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const libri = [
    {
      id: 1,
      titolo: "Manuale del gioco posizionale",
      autore: "Gelfer",
    },
    {
      id: 2,
      titolo: "Come vincere contro la siciliana",
      autore: "Nunn",
    },
    {
      id: 3,
      titolo: "640 Best Golden Games",
      autore: "Chess Informant",
    },
    {
      id: 4,
      titolo: "101 Sorprese in apertura",
      autore: "Burgess",
    },
    {
      id: 5,
      titolo: "Trappole in apertura",
      autore: "Chernev",
    },
    {
      id: 6,
      titolo: "Scacchi Moderni - Come giocare contro siciliana",
      autore: "Barlov - Jovicic",
    },
    {
      id: 7,
      titolo: "Nimzowitsch - formidabile innovatore",
      autore: "Keene",
    },
    {
      id: 8,
      titolo: "Tal - magia dell'attacco",
      autore: "Damskij",
    },
    {
      id: 9,
      titolo: "La partita di re - parte prima",
      autore: "Porreca",
    },
    {
      id: 10,
      titolo: "Finali di scacchi",
      autore: "Grigorjev",
    },
    {
      id: 11,
      titolo: "L'attacco sul lato di donna",
      autore: "Shashin",
    },
    {
      id: 12,
      titolo: "Come entrare in un finale vincente",
      autore: "Ness",
    },
    {
      id: 13,
      titolo: "Manuale del gioco combinativo",
      autore: "Nejstadt",
    },
    {
      id: 14,
      titolo: "Tarrasch - potere della logica",
      autore: "Nejstadt",
    },
    {
      id: 15,
      titolo: "Sahovski Informator 56",
      autore: "FIDE",
    },
    {
      id: 16,
      titolo: "Sahovski 52",
      autore: "FIDE",
    },
    {
      id: 17,
      titolo: "Esercizi di tattica",
      autore: "Nunn",
    },
    {
      id: 18,
      titolo: "Sahovski Informator Beograd",
      autore: "FIDE",
    },
    {
      id: 19,
      titolo: "Esame di scacchi",
      autore: "Khmelnitsky",
    },
    {
      id: 20,
      titolo: "Il gambetto",
      autore: "Yudovich",
    },
    {
      id: 21,
      titolo: "Il finale degli scacchi",
      autore: "Paoli",
    },
    {
      id: 22,
      titolo: "La pratica del mio sistema",
      autore: "Nimzowitsch",
    },
    {
      id: 23,
      titolo: "Il libro completo delle aperture",
      autore: "Porreca",
    },
    {
      id: 24,
      titolo: "La caduta degli dei I",
      autore: "Porreca",
    },
    {
      id: 25,
      titolo: "Metodi per la vittoria I",
      autore: "Mansurov",
    },
    {
      id: 26,
      titolo: "Metodi per la vittoria II",
      autore: "Golovko",
    },
    {
      id: 27,
      titolo: "La caduta degli dei II",
      autore: "Golovko",
    },
    {
      id: 28,
      titolo: "La partita di re parte seconda",
      autore: "Porreca",
    },
    {
      id: 29,
      titolo: "Giocare bene per giocare meglio",
      autore: "Paoli",
    },
    {
      id: 30,
      titolo: "Manuale dei finali per il giocatore agonistico",
      autore: "De Santis",
    },
    {
      id: 31,
      titolo: "Pensa come un Grande Maestro",
      autore: "Kotov",
    }
  ];

  // Filtra i libri in base alla ricerca
  const filteredLibri = libri.filter(libro =>
    libro.titolo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    libro.autore.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b p-6">
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
          Scopri la biblioteca scacchistica dell'Avamposto Garibaldino: libri storici, manuali tecnici, 
          biografie dei campioni e saggi sulla cultura scacchistica.
        </p>

        {/* Barra di ricerca */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Cerca per titolo o autore..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-amber-900 placeholder-amber-400"
            />
          </div>
        </div>

        {/* Grid dei libri */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLibri.map((libro) => (
            <div
              key={libro.id}
              className="bg-white rounded-xl shadow-lg border border-amber-200 hover:shadow-xl transition-all duration-300 p-6 hover:border-amber-300"
            >
              {/* Icona libro al posto della foto */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Book className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              
              {/* Contenuto testo */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-900 mb-2 line-clamp-2 leading-tight">
                  {libro.titolo}
                </h3>
                <p className="text-amber-600 font-medium text-sm">
                  {libro.autore}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Messaggio se nessun libro trovato */}
        {filteredLibri.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-600 text-lg">
              Nessun libro trovato per "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Libri;