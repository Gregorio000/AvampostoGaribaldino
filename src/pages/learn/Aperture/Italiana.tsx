import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const AperturaItaliana = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const italianMoves: string[] = ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"];

  useEffect(() => {
    const newGame = new Chess();
    italianMoves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  // Funzione sicura per modificare il game
  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  // Blocca i pezzi se non è il loro turno
  function allowDrag({ piece }: { piece: string }): boolean {
    const turn = game.turn(); // 'w' o 'b'
    if (turn === "w" && piece.startsWith("b")) return false;
    if (turn === "b" && piece.startsWith("w")) return false;
    return true;
  }

  // Gestione movimento
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Italiana</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Italiana è una delle aperture più antiche e classiche del gioco degli scacchi.
        Si sviluppa rapidamente e punta al controllo del centro e allo sviluppo armonico dei pezzi leggeri.
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
            isDraggablePiece={({ piece }) => {
              const turn = game.turn(); // 'w' o 'b'
              return (turn === "w" && piece.startsWith("w")) || (turn === "b" && piece.startsWith("b"));
            }}
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sequenza Principale</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 e5</li>
            <li>2. Nf3 Nc6</li>
            <li>3. Bc4 Bc5</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo rapido del centro</li>
            <li>Sviluppo naturale dei pezzi</li>
            <li>Possibilità di attacco rapido con l’Affondo del Cavaliere</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Svantaggi</h2>
          <ul className="list-disc list-inside">
            <li>Espone il re se non si arrocca in tempo</li>
            <li>Linee ben conosciute: avversari esperti potrebbero prepararsi facilmente</li>
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

export default AperturaItaliana;
