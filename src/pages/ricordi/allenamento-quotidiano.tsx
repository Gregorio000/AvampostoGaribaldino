import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AllenamentoQuotidiano = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const photos = [
    "/giochiamo-a-scacchi/CASALE FERONIA VILLAGE.jpg",
    "/giochiamo-a-scacchi/CIG 2021 Attimi di relax.jpg",
    "/giochiamo-a-scacchi/CIS 2025 4 TURNO.jpg",
    "/giochiamo-a-scacchi/domenica 15 nov 2020.jpg",
    "/giochiamo-a-scacchi/foto Collegio Arbitrale_.jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(1).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(2).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(3).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(4).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(5).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(6).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(7).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(8).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(9).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(10).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(11).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(12).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(13).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(14).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(15).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(16).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(17).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(18).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(19).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(20).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(21).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(22).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(23).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(24).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(25).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(26).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(27).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(28).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(29).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(30).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(31).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(32).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(33).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(34).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(35).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(36).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(37).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(38).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(39).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(40).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(41).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(42).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(43).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(44).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(45).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(46).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(47).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(48).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(49).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(50).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(51).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(52).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(53).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(54).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(55).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(56).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(57).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(58).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(59).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(60).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(61).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(62).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(63).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(64).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(65).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(66).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(67).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(68).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(69).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(70).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(71).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(72).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(73).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(74).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(75).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(76).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(77).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(78).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(79).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(80).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(81).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(82).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(83).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(84).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(85).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(86).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(87).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(88).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(89).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(90).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(91).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(92).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(93).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(94).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(95).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(96).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(97).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(98).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(99).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(100).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(101).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(102).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(103).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(104).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(105).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(106).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(107).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(108).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(109).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(110).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(111).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(112).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(113).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(114).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(115).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(116).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(117).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(118).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(119).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(120).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(121).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(122).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(123).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(124).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi(125).jpg",
    "/giochiamo-a-scacchi/Foto da Gherardo Gismondi.jpg",
    "/giochiamo-a-scacchi/Foto lezione a Matias(1).jpg",
    "/giochiamo-a-scacchi/foto lezione a Matias.jpg",
    "/giochiamo-a-scacchi/Foto oggi_.jpg",
    "/giochiamo-a-scacchi/Foto sala da gioco con indicazione di Shanti.jpg",
    "/giochiamo-a-scacchi/Foto scacchi a Palombara Sabina_.jpg",
    "/giochiamo-a-scacchi/foto scacchi centro anziani_.jpg",
    "/giochiamo-a-scacchi/Foto scacchiera gigante.jpg",
    "/giochiamo-a-scacchi/Foto simultanea oggi 2.jpg",
    "/giochiamo-a-scacchi/Foto simultanea oggi 3.jpg",
    "/giochiamo-a-scacchi/Foto simultanea oggi 4.jpg",
    "/giochiamo-a-scacchi/foto simultanea oggi.jpg",
    "/giochiamo-a-scacchi/Gubbio_2018.jpg",
    "/giochiamo-a-scacchi/IMG-20151010-WA0000.jpg",
    "/giochiamo-a-scacchi/la_squadra_promossa_in_C.jpg",
    "/giochiamo-a-scacchi/lezione_IM_di_benedetto.jpg",
    "/giochiamo-a-scacchi/lezione_in_biblioteca.jpg",
    "/giochiamo-a-scacchi/lezione_scacchi_alessio(1).jpg",
    "/giochiamo-a-scacchi/lezione_scacchi_alessio.jpg",
    "/giochiamo-a-scacchi/momento scacchiera gigante_.jpg",
    "/giochiamo-a-scacchi/sala gioco.jpg",
    "/giochiamo-a-scacchi/scacchi a santa lucia_.jpg",
    "/giochiamo-a-scacchi/scacchi_a_palazzo_orsini.jpg",
    "/giochiamo-a-scacchi/scacchi_a_scuola.jpg",
    "/giochiamo-a-scacchi/scacchi_colorati.jpg",
    "/giochiamo-a-scacchi/scacchi_inclusivi.jpg",
    "/giochiamo-a-scacchi/scacchi_viventi_fasti_di_autunno.jpg",
    "/giochiamo-a-scacchi/scacchiera_tricolore.jpg",
    "/giochiamo-a-scacchi/scacchiste.jpg",
    "/giochiamo-a-scacchi/Screenshot.png",
    "/giochiamo-a-scacchi/scuola_di_scacchi_nel_500.jpg",
    "/giochiamo-a-scacchi/simultanea_gherardo.jpg",
    "/giochiamo-a-scacchi/simultanea_IM_Edoardo_Di_Benedetto_2450_elo.jpg",
    "/giochiamo-a-scacchi/torneo_in_piazza_palombara_sabina.jpg",
    "/giochiamo-a-scacchi/torneo_mentana_2023.jpg"
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
          <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
            Allenamento Quotidiano
          </h1>
        </div>

        {/* Sezione descrittiva breve */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-amber-100 text-center max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            I momenti di gioco, allenamento e condivisione che rendono vivo il nostro circolo ogni giorno.
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
                    alt={`Allenamento quotidiano ${index + 1}`}
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
              alt={`Allenamento quotidiano ${selectedImageIndex + 1}`}
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

export default AllenamentoQuotidiano;