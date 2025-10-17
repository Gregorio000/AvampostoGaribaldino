import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ScacchiMentana = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const photos = [
    "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
    "/scacchi-mentana/torneo_mentana_2023 (1).jpg",
    "/scacchi-mentana/la_squadra_promossa_in_C.jpg",
    "/scacchi-mentana/Gubbio_2018.jpg",
    "/scacchi-mentana/lezione_IM_di_benedetto.jpg",
    "/scacchi-mentana/lezione_in_biblioteca (1).jpg",
    "/scacchi-mentana/lezione_scacchi_alessio (1).jpg",
    "/scacchi-mentana/scuola_di_scacchi_nel_500 (1).jpg",
    "/scacchi-mentana/simultanea_IM_Edoardo_Di_Benedetto.jpg",
    "/scacchi-mentana/simultanea_gherardo (1).jpg",
    "/scacchi-mentana/foto simultanea oggi.jpg",
    "/scacchi-mentana/scacchi_a_palazzo_orsini (1).jpg",
    "/scacchi-mentana/scacchi_a_scuola.jpg",
    "/scacchi-mentana/foto scacchi centro anziani .jpg",
    "/scacchi-mentana/domenica 15 nov 2020.jpg",
    "/scacchi-mentana/CIG 2021 Attimi di relax.jpg",
    "/scacchi-mentana/Foto oggi .jpg",
    "/scacchi-mentana/Foto scacchi a Palombara Sabina .jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (1).jpg",
    "/scacchi-mentana/Foto lezione a Matias (1).jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204024.438.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204032.772.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204037.266.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204042.915.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204045.612.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204048.629.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204052.886.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204058.849.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204118.718.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204123.222.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204127.790.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204130.471.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204130.471.jpg",

    "/scacchi-mentana/Foto da 2023-11-23T204136.994.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204140.396.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204144.088.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204146.782.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204149.719.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204152.862.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204159.104.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204203.432.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204206.042.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204208.629.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204211.412.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204214.085.jpg",
    "/scacchi-mentana/Foto da 2023-11-23T204315.916.jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi.jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (3).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (14).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (15).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (16).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (18).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (19).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (20).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (21).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (22).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (23).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (24).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (25).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (26).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (27).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (28).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (29).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (30).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (31).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (32).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (33).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (34).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (35).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (36).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (37).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (38).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (39).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (40).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (41).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (42).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (43).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (44).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (45).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (46).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (47).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (48).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (49).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (50).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (51).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (52).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (53).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (54).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (55).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (56).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (57).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (58).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (59).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (60).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (61).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (62).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (63).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (64).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (65).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (66).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (67).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (68).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (69).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (70).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (71).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (72).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (73).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (74).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (75).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (76).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (77).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (78).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (79).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (80).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (81).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (82).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (84).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (85).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (86).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (87).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (88).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (89).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (90).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (91).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (92).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (93).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (94).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (95).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (96).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (97).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (98).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (99).jpg",
    "/scacchi-mentana/Foto da Gherardo Gismondi (100).jpg",
    "/scacchi-mentana/foto lezione a Matias.jpg",
    "/scacchi-mentana/Foto simultanea oggi 2.jpg",
    "/scacchi-mentana/Foto simultanea oggi 3.jpg",
    "/scacchi-mentana/Foto simultanea oggi 4.jpg",
    "/scacchi-mentana/lezione_IM_di_benedetto.jpg",
    "/scacchi-mentana/lezione_scacchi_alessio (1).jpg",
    "/scacchi-mentana/lezione_scacchi_alessio (2).jpg",
    "/scacchi-mentana/scuola_di_scacchi_nel_500 (1).jpg"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Scacchi a Mentana
          </h1>
        </div>

        {/* Sezione descrittiva breve */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Dal 2010 promuoviamo la passione per gli scacchi a Mentana con tornei, lezioni ed eventi per tutte le età.
          </p>
        </div>

        {/* Galleria Fotografica */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galleria Fotografica</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
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
                    alt={`Scacchi a Mentana ${index + 1}`}
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
              alt={`Scacchi a Mentana ${selectedImageIndex + 1}`}
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

export default ScacchiMentana;