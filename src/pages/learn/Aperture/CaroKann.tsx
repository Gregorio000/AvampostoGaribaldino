import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const CaroKann = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const caroKannMoves: string[] = ["e4", "c6", "d4", "d5", "Nc3"];

  useEffect(() => {
    const newGame = new Chess();
    caroKannMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Caro-Kann</h1>
      <p className="mb-4 text-lg text-gray-700">
        Solida difesa contro 1.e4 caratterizzata da 1...c6. Sviluppata da Horatio Caro e Marcus Kann,
        offre strutture pedonali stabili e un gioco posizionale sicuro, prediletta da Karpov e Petrosian.
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
          <h2 className="text-xl font-semibold mb-2">Sequenza Base</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 c6</li>
            <li>2. d4 d5</li>
            <li>3. Nc3 dxe4</li>
            <li>4. Nxe4 (struttura classica)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti di Forza</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Struttura pedonale solida (pedoni in c6 e e6)</li>
            <li>Meno buchi rispetto alla Siciliana o Francese</li>
            <li>Difesa ideale per chi cerca gioco sicuro</li>
            <li>Ottima contro giocatori tattici</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Classica</strong>: 4...Bf5 5.Ng3 Bg6</li>
            <li><strong>Variante Tartakower</strong>: 4...Nd7</li>
            <li><strong>Attacco Panov</strong>: 3.exd5 cxd5 4.c4</li>
            <li><strong>Variante Fantasia</strong>: 3.f3 (rara ma aggressiva)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Sfide</h2>
          <ul className="list-disc list-inside">
            <li>Spazio ridotto in apertura</li>
            <li>Difficoltà nel controgioco per il Nero</li>
            <li>Pezzi possono diventare passivi se mal gestiti</li>
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
        {/* <button
          onClick={() => navigate("/learn/Aperture/Francese")}
          className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Confronta con la Francese
        </button> */}
      </div>
    </div>
  );
};

export default CaroKann;