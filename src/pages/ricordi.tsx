import { Link } from "react-router-dom";

const Ricordi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8 py-12">
      {/* Intestazione con effetto migliorato */}
      <div className="mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-chess-dark to-chess-gold p-1 rounded-full mb-6">
          <div className="bg-white rounded-full p-3">
            <svg className="w-10 h-10 text-chess-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
          Ricordi
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          I momenti più belli dell'Avamposto Garibaldino
        </p>
      </div>

      {/* Grid delle card migliorata */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 - La Nostra Storia */}
        <Link 
          to="/ricordi/scacchi-mentana" 
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
                alt="La Nostra Storia Scacchistica"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">
                La Nostra Storia Scacchistica
              </h3>
            </div>
            <div className="absolute top-4 right-4 bg-chess-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
              Storico
            </div>
          </div>
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Un viaggio attraverso la nostra storia scacchistica, dalle prime partite ai tornei più importanti.
            </p>
          </div>
          <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-sm text-chess-gold font-medium">Dal 2010 in poi</span>
              <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                Scopri di più →
              </span>
            </div>
          </div>
        </Link>

        {/* Card 2 - Centro Estivo */}
        <Link 
          to="/ricordi/centro-estivo" 
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src="/centro-estivo/cavallo1.jpg"
                alt="Centro Estivo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">Centro Estivo</h3>
            </div>
            <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Estate 2020
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Il centro estivo di Monterotondo Scalo: giovani talenti e tante partite indimenticabili sotto il sole.
            </p>
          </div>
        
          <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-sm text-chess-gold font-medium">Estate 2020</span>
              <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                Scopri di più →
              </span>
            </div>
          </div>
        </Link>
        
        {/* Card 3 - Gli Inizi */}
        <Link 
          to="/ricordi/gli-inizi" 
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src="/ricordi-vecchi/ricordo-vecchio1.jpg"
                alt="Gli Inizi"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">Gli Inizi</h3>
            </div>
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Primi Tornei
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4 leading-relaxed">
              I primi tornei dell'Avamposto Garibaldino: emozioni, sfide e l'inizio di una grande passione.
            </p>
          </div>
          
          <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-sm text-chess-gold font-medium">2010-2012</span>
              <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                Scopri di più →
              </span>
            </div>
          </div>
        </Link>

        {/* Card 4 - Eventi Salienti del Circolo */}
        <Link 
          to="/ricordi/allenamento-quotidiano" 
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src="/giochiamo-a-scacchi/CIS 2025 4 TURNO.jpg"
                alt="Allenamento Quotidiano"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">Allenamento Quotidiano</h3>
            </div>
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Allenamento
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Momenti di allenamento quotidiano e partite emozionanti.
            </p>
          </div>
          
          <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-sm text-chess-gold font-medium">Eventi Speciali</span>
              <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                Scopri di più →
              </span>
            </div>
          </div>
        </Link>

        {/* Card 5 - Scacchi al Camybar */}
        <Link 
          to="/ricordi/scacchi-al-camybar" 
          className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <div className="h-80 overflow-hidden">
              <img
                src="/scacchi-al-camybar/IMG-20201108-WA0006.jpg"
                alt="Scacchi al Camybar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <h3 className="text-2xl font-bold text-white">Scacchi al Camybar</h3>
            </div>
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Generico
            </div>
          </div>
          
          <div className="p-6 flex-grow">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Le indimenticabili serate scacchistiche al Camybar: partite, amicizia e tanto divertimento in compagnia.
            </p>
          </div>
          
          <div className="p-6 pt-0 border-t border-gray-100 mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-sm text-chess-gold font-medium">Serate Speciali</span>
              <span className="text-sm text-chess-dark font-medium group-hover:translate-x-1 transition-transform duration-300">
                Scopri di più →
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Elemento decorativo in fondo alla pagina */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 italic">Tanti ricordi, un'unica passione</p>
      </div>
    </div>
  );
};

export default Ricordi;