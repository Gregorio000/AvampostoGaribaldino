import { Link } from "react-router-dom";

const Ricordi = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Intestazione */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-chess-dark">Ricordi</h1>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          I momenti più belli dell'Avamposto Garibaldino
        </p>
      </div>

      {/* Grid delle card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - La Nostra Storia */}
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
              <span className="text-sm text-chess-gold">Dal 2010 in poi</span>
              <span className="text-sm text-chess-dark font-medium">Scopri di più →</span>
            </div>
          </div>
        </Link>

        {/* Card 2 - Centro Estivo */}
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


        
      </div>
    </div>
  );
};

export default Ricordi;