import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ScacchiMentana = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // Array con tutte le foto del circolo scacchistico
const photos = [
  {
    src: "/scacchi-mentana/torneo_mentana_2023 (1).jpg"
  },
  {
    src: "/scacchi-mentana/la_squadra_promossa_in_C.jpg"
  },
  {
    src: "/scacchi-mentana/Gubbio_2018.jpg"
  },
  {
    src: "/scacchi-mentana/lezione_IM_di_benedetto.jpg"
  },
  {
    src: "/scacchi-mentana/lezione_in_biblioteca (1).jpg"
  },
  {
    src: "/scacchi-mentana/lezione_scacchi_alessio (1).jpg"
  },
  {
    src: "/scacchi-mentana/scuola_di_scacchi_nel_500 (1).jpg"
  },
  {
    src: "/scacchi-mentana/simultanea_IM_Edoardo_Di_Benedetto.jpg"
  },
  {
    src: "/scacchi-mentana/simultanea_gherardo (1).jpg"
  },
  {
    src: "/scacchi-mentana/foto simultanea oggi.jpg"
  },
  {
    src: "/scacchi-mentana/scacchi_a_palazzo_orsini (1).jpg"
  },
  {
    src: "/scacchi-mentana/scacchi_a_scuola.jpg"
  },
  {
    src: "/scacchi-mentana/foto scacchi centro anziani .jpg"
  },
  {
    src: "/scacchi-mentana/domenica 15 nov 2020.jpg"
  },
  {
    src: "/scacchi-mentana/CIG 2021 Attimi di relax.jpg"
  },
  {
    src: "/scacchi-mentana/Foto oggi .jpg"
  },
  {
    src: "/scacchi-mentana/Foto scacchi a Palombara Sabina .jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (1).jpg"
  },
  {
    src: "/scacchi-mentana/Foto lezione a Matias (1).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204024.438.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204032.772.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204037.266.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204042.915.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204045.612.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204048.629.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204052.886.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204058.849.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204118.718.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204123.222.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204127.790.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204130.471.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204130.471.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204136.994.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204140.396.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204144.088.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204146.782.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204149.719.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204152.862.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204159.104.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204203.432.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204206.042.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204208.629.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204211.412.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204214.085.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da 2023-11-23T204315.916.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi.jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (3).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (14).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (15).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (16).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (18).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (19).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (20).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (21).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (22).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (23).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (24).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (25).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (26).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (27).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (28).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (29).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (30).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (31).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (32).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (33).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (34).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (35).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (36).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (37).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (38).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (39).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (40).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (41).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (42).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (43).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (44).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (45).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (46).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (47).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (48).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (49).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (50).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (51).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (52).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (53).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (54).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (55).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (56).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (57).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (58).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (59).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (60).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (61).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (62).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (63).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (64).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (65).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (66).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (67).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (68).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (69).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (70).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (71).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (72).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (73).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (74).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (75).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (76).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (77).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (78).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (79).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (80).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (81).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (82).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (84).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (85).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (86).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (87).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (88).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (89).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (90).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (91).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (92).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (93).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (94).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (95).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (96).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (97).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (98).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (99).jpg"
  },
  {
    src: "/scacchi-mentana/Foto da Gherardo Gismondi (100).jpg"
  },
  {
    src: "/scacchi-mentana/foto lezione a Matias.jpg"
  },
  {
    src: "/scacchi-mentana/Foto simultanea oggi 2.jpg"
  },
  {
    src: "/scacchi-mentana/Foto simultanea oggi 3.jpg"
  },
  {
    src: "/scacchi-mentana/Foto simultanea oggi 4.jpg"
  },
  {
    src: "/scacchi-mentana/lezione_IM_di_benedetto.jpg"
  },
  {
    src: "/scacchi-mentana/lezione_scacchi_alessio (1).jpg"
  },
  {
    src: "/scacchi-mentana/lezione_scacchi_alessio (2).jpg"
  },
  {
    src: "/scacchi-mentana/scuola_di_scacchi_nel_500 (1).jpg"
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
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-chess-dark">Scacchi a Mentana</h1>
      </div>

      {/* Sezione descrittiva */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12">
        <div className="prose max-w-none mx-auto">
          <p className="text-chess-black text-center">
            Dal 2010 promuoviamo la passione per gli scacchi a Mentana con tornei, lezioni ed eventi per tutte le età.
            Questa è la nostra storia per immagini.
          </p>
          
          <h2 className="text-2xl font-semibold text-chess-dark mt-8 mb-4 text-center">Le nostre attività</h2>
          
            <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-800">
                <h3 className="font-semibold text-gray-800">Tornei</h3>
                <p className="text-gray-600 mt-2">
                Organizziamo tornei e un grandi eventi che attira giocatori da tutta la regione.
                </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-800">
                <h3 className="font-semibold text-chess-green">Formazione</h3>
                <p className="text-gray-600 mt-2">
                Corsi per principianti e avanzati con istruttori qualificati.
                </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-800">
                <h3 className="font-semibold text-gray-800">Eventi</h3>
                <p className="text-gray-600 mt-2">
                Simultane, scacchi viventi e attività per avvicinare nuovi appassionati.
                </p>
            </div>
            </div>
        </div>
      </div>

      {/* Galleria fotografica */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center text-chess-dark mb-8">Galleria Fotografica</h2>
        
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

      {/* Sezione testimonianze
      <div className="bg-chess-gold/10 rounded-xl p-8 mb-12 border border-chess-gold/20">
        <h2 className="text-2xl font-semibold text-center text-chess-dark mb-6">Cosa dicono di noi</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-chess-gray italic text-lg">
              "Il circolo mi ha fatto innamorare degli scacchi. L'ambiente è accogliente e gli istruttori molto preparati."
            </p>
            <p className="font-medium text-chess-dark mt-4">- Luca, 15 anni</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-chess-gray italic text-lg">
              "Porto mio figlio da 2 anni alla scuola junior ed è migliorato tantissimo, sia negli scacchi che nella concentrazione."
            </p>
            <p className="font-medium text-chess-dark mt-4">- Elena, mamma di Matteo</p>
          </div>
        </div>
      </div> */}

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

export default ScacchiMentana;