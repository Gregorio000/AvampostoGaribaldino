import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const GambettoDiDonna = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const queenGambitMoves: string[] = ["d4", "d5", "c4"];

  useEffect(() => {
    const newGame = new Chess();
    queenGambitMoves.forEach((move) => newGame.move(move));
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
    if (turn === "w" && piece.startsWith("b")) return false;
    if (turn === "b" && piece.startsWith("w")) return false;
    return true;
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

      <h1 className="text-3xl font-bold mb-4 text-center">Gambetto di Donna</h1>
      <p className="mb-4 text-lg text-gray-700">
        Il Gambetto di Donna è una delle aperture più popolari e solide nel gioco degli scacchi.
        Il Bianco offre temporaneamente un pedone laterale (c4) per ottenere un vantaggio nello sviluppo e nel controllo del centro.
        Nonostante il nome, non è un vero gambetto poiché il pedone può essere recuperato facilmente.
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
              const turn = game.turn();
              return (turn === "w" && piece.startsWith("w")) || (turn === "b" && piece.startsWith("b"));
            }}
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sequenza Principale</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. d4 d5</li>
            <li>2. c4</li>
          </ul>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">✔ Vantaggi</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Controllo del centro con i pedoni</li>
                <li>Pressione costante sul lato di donna</li>
                <li>Buon sviluppo dei pezzi leggeri</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">✖ Svantaggi</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Linea teorica molto conosciuta</li>
                <li>Può portare a un gioco posizionale meno dinamico</li>
              </ul>
            </div>
            </div>

         
          
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

export default GambettoDiDonna;
