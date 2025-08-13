import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CentroEstivo = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

const photos = [
  {
    src: "/centro-estivo/cavallo1.jpg"
  },
  {
    src: "/centro-estivo/cavallo2.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo1.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo2.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo3.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo4.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo5.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo6.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo7.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo8.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo9.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo10.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo11.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo12.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo13.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo14.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo15.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo16.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo17.jpg"
  },
  {
    src: "/centro-estivo/centro-estivo18.jpg"
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
        <h1 className="text-5xl font-bold text-center text-chess-dark mt-4">Centro Estivo</h1>
      </div>

      {/* Sezione descrittiva */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12">
        <div className="prose max-w-none">
          <p className="text-chess-black">
            Nell'estate 2020 abbiamo organizzato un centro estivo speciale per bambini dai 3 ai 14 anni a Monterotondo Scalo, 
            combinando attività sportive, laboratori creativi e naturalmente lezioni di scacchi!
          </p>
          
          <h2 className="text-2xl font-semibold text-chess-dark mt-6">Le nostre attività</h2>
          
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Lezioni di scacchi quotidiane con istruttori qualificati</li>
            <li>Laboratori creativi (pittura, teatro, musica)</li>
            <li>Tornei interni con premi per tutti i partecipanti</li>
            <li>Giochi di squadra all'aperto (Scherma, Equitazione)</li>
          </ul>
        </div>
      </div>

      {/* Galleria fotografica */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-chess-dark mb-6">Galleria Fotografica</h2>
        
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

export default CentroEstivo;