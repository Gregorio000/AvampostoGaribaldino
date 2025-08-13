import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Pirc = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const pircMoves: string[] = ["e4", "d6", "d4", "Nf6", "Nc3", "g6"];

  useEffect(() => {
    const newGame = new Chess();
    pircMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Pirc</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Pirc è un'apertura ipermoderna caratterizzata dal fianchetto dell'alfiere e 
        dal controllo indiretto del centro. Popolare tra giocatori creativi come Vasily Ivanchuk 
        e Alexander Khalifman.
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
          <h2 className="text-xl font-semibold mb-2">Sequenza Tipica</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 d6</li>
            <li>2. d4 Nf6</li>
            <li>3. Nc3 g6</li>
            <li>4. f4 Bg7 (fianchetto completo)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo dinamico del centro con pezzi</li>
            <li>Fianchetto dell'alfiere campochiaro</li>
            <li>Flessibilità nelle risposte</li>
            <li>Possibilità di contrattacco al centro</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Classica</strong>: 4.Nf3 Bg7 5.Be2 0-0</li>
            <li><strong>Attacco Austriaco</strong>: 4.f4 Bg7 5.Nf3 0-0 6.e5</li>
            <li><strong>Sistema dei Due Alfieri</strong>: 4.Be3 c6 5.Qd2</li>
            <li><strong>Variante del Fianchetto</strong>: 4.g3 Bg7 5.Bg2</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Richiede buona comprensione dei piani strategici</li>
            <li>Spazio ridotto nelle prime mosse</li>
            <li>Eccellente per giocatori posizionali</li>
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
        <button
          onClick={() => navigate("/learn/Aperture/Moderna")}
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Confronta con la Moderna
        </button>
      </div>
    </div>
  );
};

export default Pirc;