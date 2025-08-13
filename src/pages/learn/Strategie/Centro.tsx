import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Centro = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Esempio di FEN dove il Bianco ha un solido controllo del centro
  const customFen = "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 4";

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

      <h1 className="text-3xl font-bold mb-4 text-center">Controllo del Centro</h1>
      <p className="mb-4 text-lg text-gray-700">
        Il centro della scacchiera (case <strong>d4, d5, e4, e5</strong>) è una zona cruciale. Chi lo controlla, solitamente, ha maggiore spazio,
        migliori possibilità di attacco e maggiore mobilità dei pezzi. In questa posizione, il Bianco domina il centro con i pedoni in d4 ed e4
        e pezzi ben sviluppati.
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
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Punti strategici:</h3>
            <p className="text-green-700">
              • Il Bianco ha i pedoni in d4 ed e4, che controllano case centrali chiave<br />
              • I pezzi leggeri (Cavallo in f3, Alfiere in f1) sono pronti per entrare in gioco<br />
              • Il Nero ha meno spazio ed è costretto a difendersi
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Perché il centro è importante?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Permette ai pezzi di muoversi liberamente su entrambi i lati</li>
            <li>Spinge l'avversario in posizioni passive</li>
            <li>Offre supporto per attacchi su colonne e diagonali</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Concetti Chiave</h2>
          <ul className="list-disc list-inside">
            <li>Sviluppa i pezzi verso il centro (Cf3, Cc3, Af4, etc.)</li>
            <li>Evita di spingere pedoni laterali troppo presto</li>
            <li>Controlla il centro con pedoni e pezzi, non solo con uno dei due</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Strategie")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Strategie
        </button>
      </div>
    </div>
  );
};

export default Centro;
