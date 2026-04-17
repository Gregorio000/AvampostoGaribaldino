import React, { useState, useEffect } from 'react';

const Carosello: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
    "/images-circolo/Importante.jpg",
    "/images/scacchiera-grossa.jpg",
    "/ricordi-vecchi/ricordo-vecchio1.jpg",
    "/foto-scacchiera-gigante/realizzata1.jpg",
    "/scacchi-mentana/domenica 15 nov 2020.jpg",
    "/decimo-anniversario/decimo-anniversario-00.jpeg",
    "/images/Prova1.jpg",
    "/turno3/turno3 (3).jpeg",
    "/turno4/turno4 (1).jpeg",
    "/turno4/turno4 (4).jpeg",
    "/turno5/turno5 (6).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Avamposto Garibaldino ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-110 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(1.1) contrast(1.2)' }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-chess-gold w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carosello;
