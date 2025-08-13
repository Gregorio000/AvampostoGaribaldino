import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Coordinazione = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Esempio di FEN dove il Bianco ha un'eccellente coordinazione dei pezzi
  const customFen =
    "r1bq1rk1/ppp1bppp/2n2n2/3pp3/3PP3/2PB1N2/PP3PPP/RNBQR1K1 w - - 4 8";

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
    return (
      (turn === "w" && piece.startsWith("w")) ||
      (turn === "b" && piece.startsWith("b"))
    );
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

      <h1 className="text-3xl font-bold mb-4 text-center">
        Coordinazione dei Pezzi
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        La coordinazione dei pezzi è fondamentale per creare minacce, difendere
        punti deboli e mantenere la pressione sull'avversario. In questa
        posizione, i pezzi del Bianco lavorano insieme: gli Alfieri puntano
        verso l'ala di Re, i Cavalli supportano il centro e la Torre è pronta a
        entrare in gioco.
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
            <h3 className="font-bold text-blue-800 mb-2">Punti strategici:</h3>
            <p className="text-blue-700">
              • Gli Alfieri e i Cavalli del Bianco controllano case centrali e
              diagonali importanti
              <br />• La Torre su e1 supporta il pedone e4 e controlla la
              colonna aperta
              <br />• I pezzi si difendono a vicenda, evitando punti deboli
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">
            Perché la coordinazione è importante?
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Permette di combinare attacchi su più punti contemporaneamente
            </li>
            <li>Rende più difficile per l’avversario trovare buone mosse</li>
            <li>
              Migliora la difesa naturale: i pezzi si coprono a vicenda
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Concetti Chiave</h2>
          <ul className="list-disc list-inside">
            <li>Sviluppa i pezzi in modo che si supportino tra loro</li>
            <li>Evita di lasciare pezzi “fuori gioco” lontani dall’azione</li>
            <li>
              Usa linee, diagonali e colonne per connettere i pezzi
            </li>
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

export default Coordinazione;
