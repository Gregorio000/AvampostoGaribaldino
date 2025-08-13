import React from "react";
import { useNavigate } from "react-router-dom";

const pezzi = [
  {
    titolo: "Pedone",
    descrizione: "Il pedone si muove in avanti di una casella, ma cattura in diagonale.",
    immagine: "/images/PedoneScacchi.jpg",
  },
  {
    titolo: "Alfiere",
    descrizione: "L'alfiere si muove solo in diagonale.",
    immagine: "/images/AlfiereScacchi.jpg",
  },
  {
    titolo: "Torre",
    descrizione: "La torre si muove solo in verticale e orizzontale.",
    immagine: "/images/TorreScacchi.jpg",
  },
  {
    titolo: "Regina",
    descrizione: "La regina si muove in tutte le direzioni su linee rette.",
    immagine: "/images/ReginaScacchi.jpg",
  },
  {
    titolo: "Cavallo",
    descrizione: "Così si muove il cavallo: a 'L', due caselle in una direzione e una perpendicolare.",
    immagine: "/images/CavalloScacchi.jpg",
  },
  {
    titolo: "Re",
    descrizione: "Il re si muove di una casella in qualsiasi direzione.",
    immagine: "/images/ReScacchi.jpg",
  },
];

function ComeGiocare() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Pulsante torna indietro */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-4xl font-bold mb-4 text-center">Come Giocare</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
        Gli scacchi si giocano su una scacchiera 8x8. Ogni pezzo ha regole di movimento specifiche: 
        pedone, alfiere, torre, regina, cavallo e re. Imparare come si muove ogni pezzo è fondamentale per iniziare.
      </p>

      {/* Carte dei pezzi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {pezzi.map((pezzo, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden text-center p-6 border border-gray-200"
          >
            <img
              src={pezzo.immagine}
              alt={pezzo.titolo}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{pezzo.titolo}</h2>
            <p className="text-gray-700 text-sm">{pezzo.descrizione}</p>
          </div>
        ))}
      </div>

      {/* Pulsante per andare a ComeVincere */}
      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/regole")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Regole
        </button>
      </div>
    </div>
  );
}

export default ComeGiocare;
