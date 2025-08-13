import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const GliInizi = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const photos = [
    {
      src: "/ricordi-vecchi/ricordo-vecchio1.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio2.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio3.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio4.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio5.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio6.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio7.jpg"
    },
    {
      src: "/ricordi-vecchi/ricordo-vecchio8.jpg"
    }
];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      const newIndex = selectedImageIndex === 0 ? photos.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
    } else {
      const newIndex = selectedImageIndex === photos.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      {/* Intestazione */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-center text-chess-dark mt-4">Gli Inizi</h1>
        <p className="text-xl text-center text-chess-gray mt-2">La storia della fondazione del nostro circolo</p>
      </div>

      {/* Sezione descrittiva */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12">
        <div className="prose max-w-none">
          <p className="text-chess-black">
            Il Circolo Scacchi Monterotondo è nato nel 2010 dall'idea di diffondere il gioco degli scacchi nella nostra comunità. 
            Ciò che iniziò come un piccolo gruppo di giocatori che si riuniva in un bar locale si è trasformato in una realtà consolidata con oltre 100 soci.
          </p>
          
          {/* <h2 className="text-2xl font-semibold text-chess-dark mt-6">I primi passi</h2> */}
          
          {/* <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>2015: Prima riunione ufficiale con 12 soci fondatori</li>
            <li>2016: Primo torneo interno e collaborazione con le scuole</li>
            <li>2017: Trasferimento nella sede attuale e ampliamento delle attività</li>
            <li>2018: Riconoscimento come ASD (Associazione Sportiva Dilettantistica)</li>
          </ul> */}

          <h2 className="text-2xl font-semibold text-chess-dark mt-6">I valori fondanti</h2>
          <p className="text-chess-black mt-4">
            Fin dall'inizio, il nostro circolo si è basato su tre principi fondamentali: inclusività, formazione e passione. 
            Volevamo creare un luogo dove persone di tutte le età e livelli potessero avvicinarsi agli scacchi in un ambiente 
            accogliente e stimolante.
          </p>
        </div>
      </div>

      {/* Galleria fotografica */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-chess-dark mb-6">Galleria Storica</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={photo.src} 
                
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* Modal per l'immagine ingrandita */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            &times;
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-4 text-white text-4xl hover:text-gray-300"
          >
            &#10094;
          </button>
          
          <div className="max-w-4xl w-full max-h-screen flex flex-col items-center">
            <img 
              src={photos[selectedImageIndex].src} 
              
              className="max-w-full max-h-[80vh] object-contain"
            />
            
          </div>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-4 text-white text-4xl hover:text-gray-300"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default GliInizi;