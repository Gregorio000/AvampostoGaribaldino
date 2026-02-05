import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Venafro = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const photos = [
    "/venafro/venafro-0.jpeg",
    "/venafro/venafro-1.jpeg",
    "/venafro/venafro-2.jpeg",
    "/venafro/venafro-3.jpeg",
    "/venafro/venafro-4.jpeg",
    "/venafro/venafro-5.jpeg",
    "/venafro/venafro-6.jpeg",
    "/venafro/venafro-7.jpeg",
    "/venafro/venafro-8.jpeg",
    "/venafro/venafro-9.jpeg",
    "/venafro/venafro-10.jpeg",
    "/venafro/venafro-11.jpeg",
    "/venafro/venafro-12.jpeg",
    "/venafro/venafro-13.jpeg",
    "/venafro/venafro-14.jpeg",
    "/venafro/venafro-15.jpeg",
    "/venafro/venafro-16.jpeg",
    "/venafro/venafro-17.jpeg",
    "/venafro/venafro-18.jpeg",
    "/venafro/venafro-19.jpeg",
    "/venafro/venafro-20.jpeg",
    "/venafro/venafro-21.jpeg",
    "/venafro/venafro-22.jpeg",
    "/venafro/venafro-23.jpeg",
    "/venafro/venafro-24.jpeg",
    "/venafro/venafro-25.jpeg",
    "/venafro/venafro-26.jpeg",
    "/venafro/venafro-27.jpeg",
    "/venafro/venafro-28.jpeg",
    "/venafro/venafro-29.jpeg",
    "/venafro/venafro-30.jpeg",
    "/venafro/venafro-31.jpeg",
    "/venafro/venafro-32.jpeg",
    "/venafro/venafro-33.jpeg",
    "/venafro/venafro-34.jpeg",
    "/venafro/venafro-35.jpeg",
    "/venafro/venafro-36.jpeg",
    "/venafro/venafro-37.jpeg",
    "/venafro/venafro-38.jpeg",
    "/venafro/venafro-39.jpeg",
  ];

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      const newIndex = selectedImageIndex === 0 ? photos.length - 1 : selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
    } else {
      const newIndex = selectedImageIndex === photos.length - 1 ? 0 : selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
    }
  }, [selectedImageIndex, photos.length]);

  // Gestione della navigazione da tastiera
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeModal, navigateImage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header con navigazione */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200 mb-8 group"
        >
          <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Torna indietro
        </button>

        {/* Titolo principale */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent leading-[1.3]">
            Sfida amichevole contro il circolo Leopoldo Pilla - Venafro 1870.
          </h1>
        </div>

        {/* Sezione descrittiva breve */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-amber-100 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Il 16 Novembre 2025, l'Avamposto Garibaldino ha sfidato in un'amichevole a squadre il circolo "Leopoldo Pilla - Venafro 1870" a Venafro.
          </p>
        </div>

        {/* Galleria Fotografica */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galleria Fotografica</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 bg-white"
                onClick={() => openModal(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={photo} 
                    alt={`Ricordo storico ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-12 h-12 text-white filter drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Modal per l'immagine ingrandita */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="relative max-w-6xl w-full max-h-screen flex flex-col items-center">
            <img 
              src={photos[selectedImageIndex]} 
              alt={`Ricordo storico ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="mt-4 text-white text-center">
              <p className="text-gray-400">
                {selectedImageIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full p-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Venafro;