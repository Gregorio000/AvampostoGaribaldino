import React from "react";
import { useNavigate } from "react-router-dom";

const specialRules = [
  {
    titolo: "Arrocco corto",
    descrizione:
      "L’arrocco corto coinvolge il re e la torre sul lato del re. È il modo più rapido per mettere al sicuro il re.",
    immagine: "/images/ArroccoCorto.jpg",
  },
  {
    titolo: "Arrocco lungo",
    descrizione:
      "L’arrocco lungo coinvolge il re e la torre sul lato della donna. Offre sicurezza e centralizzazione della torre.",
    immagine: "/images/ArroccoLungo.jpg",
  },
  {
    titolo: "Promozione",
    descrizione:
      "Un pedone che raggiunge l’ottava traversa può essere promosso a regina, torre, alfiere o cavallo.",
    immagine: "/images/Promozione.jpg",
  },
  {
    titolo: "En Passant",
    descrizione:
      "Cattura speciale eseguita quando un pedone avversario avanza di due caselle e si trova accanto al tuo.",
    immagine: "/images/EnPassant.jpg",
  },
];

const RegoleFondamentali = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-4xl font-bold mb-4 text-center" id="regole-fondamentali">
        Regole fondamentali
      </h1>

      <p className="text-lg text-gray-700 mb-6">
        Le regole fondamentali degli scacchi sono le basi per iniziare a giocare correttamente. Ecco le più importanti:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
        <li>Ogni pezzo si muove in un modo specifico (torre in linea, alfiere in diagonale, cavallo a L, ecc.).</li>
        <li>Lo scacco matto è l’obiettivo finale: mettere il re avversario sotto scacco senza via di fuga.</li>
        <li>L’arrocco permette di spostare contemporaneamente il re e una torre.</li>
        <li>La promozione avviene quando un pedone raggiunge l’ottava traversa e può diventare un pezzo a scelta (tranne il re).</li>
        <li>L’en passant è una regola speciale per catturare un pedone appena avanzato di due caselle.</li>
      </ul>

      {/* Griglia 2x2 per le card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {specialRules.map((regola, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden text-center p-5 border border-gray-200"
          >
            <img
              src={regola.immagine}
              alt={regola.titolo}
              className="w-full h-96 object-contain mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{regola.titolo}</h2>
            <p className="text-gray-700 text-sm">{regola.descrizione}</p>
          </div>
        ))}
      </div>

      {/* Bottone per andare all'Apertura Italiana */}
      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/regole")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Regole
        </button>
        {/* <button
          onClick={() => navigate("/learn/Aperture/AperturaItaliana")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai all’Apertura Italiana
        </button> */}
      </div>
    </div>
  );
};

export default RegoleFondamentali;
