import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const AperturaSpagnola = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const spanishMoves: string[] = ["e4", "e5", "Nf3", "Nc6", "Bb5"];

  useEffect(() => {
    const newGame = new Chess();
    spanishMoves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  function allowDrag({ piece }: { piece: string }): boolean {
    const turn = game.turn();
    return (turn === "w" && piece.startsWith("w")) || (turn === "b" && piece.startsWith("b"));
  }

  function onDrop(sourceSquare: string, targetSquare: string): boolean {
    let move: any = null;
    safeGameMutate((gameInstance: Chess) => {
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Spagnola (Ruy Lopez)</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Spagnola è una delle scelte più solide e popolari dopo 1.e4 e5. 
        Combina pressione strategica sul centro con un attacco indiretto al cavallo che difende il pedone e5.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Chessboard
            position={position}
            arePiecesDraggable={true}
            onPieceDrop={onDrop}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
            isDraggablePiece={({ piece }) => allowDrag({ piece })}
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sequenza Principale</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 e5</li>
            <li>2. Nf3 Nc6</li>
            <li>3. Bb5 (il caratteristico attacco al cavallo)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Pressione strategica sul centro</li>
            <li>Possibilità di varianti aggressive (come l'Attacco Marshall)</li>
            <li>Strutture pedonali flessibili</li>
            <li>Giocata da tutti i Campioni del Mondo</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Difesa Morphy</strong>: 3...a6 (la più comune)</li>
            <li><strong>Variante Berlinese</strong>: 3...Nf6</li>
            <li><strong>Variante Chiusa</strong>: 3...a6 4.Ba4 Nf6 5.0-0 Be7</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Svantaggi</h2>
          <ul className="list-disc list-inside">
            <li>Richiede studio teorico approfondito</li>
            <li>Alcune linee possono essere molto lunghe (20+ mosse di teoria)</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Aperture")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Aperture
        </button>
      </div>
    </div>
  );
};

export default AperturaSpagnola;