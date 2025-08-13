import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Zugzwang = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Posizione di zugzwang dove tocca al Nero muovere e perde
  const customFen = "3k4/8/3K4/3P4/8/8/8/8 w - - 0 1";

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

      <h1 className="text-3xl font-bold mb-4 text-center">Zugzwang</h1>
      <p className="mb-4 text-lg text-gray-700">
        Lo <strong>zugzwang</strong> è una situazione in cui il giocatore obbligato a muovere si trova in svantaggio: 
        qui tocca al Nero muovere e qualunque sua mossa peggiora la sua posizione, permettendo al Bianco di vincere.
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
            <h3 className="font-bold text-blue-800 mb-2">Posizione chiave:</h3>
            <p className="text-blue-700">
              Il Nero è costretto a muovere il Re, ma qualsiasi mossa permetterà al Bianco di avanzare e vincere.
              Il Bianco è in una posizione vincente proprio grazie al fatto che tocca al Nero muovere.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Caratteristiche dello Zugzwang</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Il giocatore che deve muovere (qui il Nero) peggiora la propria posizione</li>
            <li>Il Bianco aspetta paziente in posizione vincente</li>
            <li>Qualsiasi mossa del Nero facilita la vittoria del Bianco</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Cosa succede qui?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Il Re nero è bloccato nella zona centrale</li>
            <li>Il Bianco può avanzare il pedone e usare il Re per supportarlo</li>
            <li>È il turno del Nero, e questa è la sua rovina: deve muovere e peggiorare la sua posizione</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Prova!</h2>
          <p>Prova a muovere il Nero e osserva come il Bianco vince facilmente dopo ogni mossa.</p>
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

export default Zugzwang;
