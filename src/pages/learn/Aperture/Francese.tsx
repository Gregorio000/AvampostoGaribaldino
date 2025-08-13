import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Francese = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const navigate = useNavigate();

  // Sequenza base della Difesa Francese
  const frenchDefenseMoves = ["e4", "e6", "d4", "d5"];

  useEffect(() => {
    const newGame = new Chess();
    frenchDefenseMoves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  function onDrop(sourceSquare: string, targetSquare: string): boolean {
    let move = null;
    safeGameMutate((gameInstance) => {
      move = gameInstance.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
    });
    return move !== null;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>
      

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Francese</h1>

      <p className="mb-4 text-lg text-gray-700">
        La Difesa Francese è una delle risposte più solide del Nero contro 1.e4. Con 1...e6, il Nero prepara d5 per contestare il centro.
        È una difesa strategica che punta a una solida struttura pedonale e manovre posizionali, anche se a volte limita temporaneamente l’alfiere campo chiaro.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Chessboard
            position={position}
            arePiecesDraggable={true}
            onPieceDrop={onDrop}
            boardWidth={450}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
            isDraggablePiece={({ piece }) => {
              const turn = game.turn();
              return turn === piece[0];
            }}
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sequenza Principale</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 e6</li>
            <li>2. d4 d5</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Struttura solida per il Nero</li>
            <li>Controllo strategico del centro</li>
            <li>Buone risorse tattiche e manovre</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Svantaggi</h2>
          <ul className="list-disc list-inside">
            <li>Alfiere campo chiaro inizialmente bloccato</li>
            <li>Posizione a volte passiva se mal giocata</li>
            <li>Necessita conoscenza teorica per evitare trappole</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/aperture")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Aperture
        </button>
      </div>
    </div>
  );
};

export default Francese;
