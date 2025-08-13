import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Inglese = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const englishMoves: string[] = ["c4", "e5", "Nc3", "Nf6", "g3", "d5"];

  useEffect(() => {
    const newGame = new Chess();
    englishMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Inglese</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Inglese (1.c4) è un'apertura flessibile e posizionale che può transporre 
        in strutture sia di gioco chiuso che aperto. Popolare tra giocatori posizionali come 
        Karpov e Botvinnik.
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
            <li>1. c4 (il caratteristico controllo di d5)</li>
            <li>1... e5 (risposta simmetrica)</li>
            <li>2. Nc3 Nf6</li>
            <li>3. g3 (preparando Fianchetto)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo del centro da lontano</li>
            <li>Flessibilità nelle strutture pedonali</li>
            <li>Possibilità di transposizioni in altre aperture</li>
            <li>Gioco sia sul lato di Re che di Donna</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Sistema Botvinnik</strong>: con d3 e e4 successivo</li>
            <li><strong>Fianchetto</strong>: g3 e Ag2</li>
            <li><strong>Variante Simmetrica</strong>: 1.c4 c5</li>
            <li><strong>Attacco dei Quattro Pedoni</strong>: contro 1...e5 2.Nc3 Nf6 3.Nf3 Nc6 4.d4</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Meno tattica rispetto a 1.e4 o 1.d4</li>
            <li>Richiede buona comprensione posizionale</li>
            <li>Adatta a giocatori che preferiscono manovrare</li>
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

export default Inglese;