import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const ScaccoDoppio = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const customFen = "1k2n1r1/b1p5/2P5/3NnB2/1N6/5pp1/5PP1/1R4K1 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(customFen);
    setGame(newGame);
    setPosition(customFen);
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

      <h1 className="text-3xl font-bold mb-4 text-center">Scacco Doppio</h1>
      <p className="mb-4 text-lg text-gray-700">
        In questa posizione, il Bianco può dare uno scacco doppio spostando il cavallo in <strong>a6+</strong>. 
        Così facendo, il Re nero è attaccato contemporaneamente dal cavallo e dalla torre in b1, creando una minaccia a cui il Nero non può rispondere facilmente.
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
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">Scacco doppio con Na6+</h3>
            <p className="text-blue-700">
              Il cavallo bianco si sposta in a6, dando scacco con il proprio movimento e liberando la torre per uno scacco simultaneo: è un classico esempio di scacco doppio.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Perché è efficace?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Il Re nero non può parare entrambi gli scacchi</li>
            <li>Lo scacco doppio forza una risposta obbligata: muovere il Re</li>
            <li>Spesso porta a guadagno materiale o matto imminente</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Chiave nella Posizione</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Il cavallo in b4 può andare in a6 con scacco</li>
            <li>La torre in b1 diventa attiva dopo lo spostamento del cavallo</li>
            <li>Il Re nero ha poche case sicure</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Tattiche")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Tattiche
        </button>
      </div>
    </div>
  );
};

export default ScaccoDoppio;
