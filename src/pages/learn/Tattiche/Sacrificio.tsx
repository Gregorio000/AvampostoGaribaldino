import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Sacrificio = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const customFen = "1Q2kb1r/p2n1pp1/4q3/4p1B1/4P3/8/PPP2PPP/2KR4 w - - 0 1";

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

      <h1 className="text-3xl font-bold mb-4 text-center">Sacrificio</h1>
      <p className="mb-4 text-lg text-gray-700">
        In questa posizione spettacolare, il Bianco sacrifica la donna giocando <strong>Db8+</strong>. Il Cavallo è costretto a catturare,
        e il Bianco conclude con <strong>Td8#</strong>. Un classico esempio di sacrificio per ottenere matto forzato.
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
          <div className="mt-4 p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold text-red-800 mb-2">Sacrificio Tattico:</h3>
            <p className="text-red-700">
              <strong>1. Db8+!</strong> – La donna si offre in sacrificio<br />
              <strong>2. ... Cxb8</strong> – Il Cavallo deve catturare<br />
              <strong>3. Td8#</strong> – Matto perfetto: il Re nero è bloccato da tutti i lati
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Perché funziona questo sacrificio?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Il Re nero non ha case di fuga</li>
            <li>La casa d8 è perfetta per la torre</li>
            <li>Il Cavallo in d7 è forzato a catturare</li>
            <li>Il sacrificio sblocca la colonna “d” per la torre</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Lezioni chiave</h2>
          <ul className="list-disc list-inside">
            <li>I sacrifici funzionano quando creano minacce immediate e forzate</li>
            <li>Controlla tutte le vie di fuga del Re avversario</li>
            <li>Coordina i tuoi pezzi per attacchi a sorpresa</li>
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

export default Sacrificio;
