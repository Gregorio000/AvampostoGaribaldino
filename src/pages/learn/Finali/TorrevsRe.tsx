import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const TorrevsRe = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Posizione tipica di finale Re e Torre contro Re
  const endgameFen = "8/8/8/8/3k4/8/3K4/5R2 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(endgameFen);
    setGame(newGame);
    setPosition(endgameFen);
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
        Finale Re e Torre contro Re
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Il finale di <strong>Re e Torre contro Re</strong> è una posizione
        teoricamente vinta, ma richiede tecnica per evitare stalli o perdite di
        tempo. L'obiettivo è usare la Torre per limitare la mobilità del Re
        avversario, e il proprio Re per avvicinarsi e dare scacco matto sul
        bordo della scacchiera.
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
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold text-yellow-800 mb-2">Posizione chiave:</h3>
            <p className="text-yellow-700">
              La Torre controlla un'intera traversa o colonna, tagliando fuori
              il Re avversario, mentre il proprio Re si avvicina per dare matto.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">
            Principi Fondamentali
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Taglia fuori il Re nemico con la Torre</li>
            <li>Avvicina il tuo Re per supportare l'attacco</li>
            <li>
              Non dare scacchi inutili: guadagna spazio e riduci le opzioni
              dell'avversario
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Tecnica Comune</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Metodo di Lucena</strong>: per convertire il vantaggio in
              matto
            </li>
            <li>
              <strong>Taglio del Re</strong>: Torre che blocca l'accesso a
              file/traverse
            </li>
            <li>
              Uso combinato di Re e Torre per forzare il Re nemico verso il
              bordo
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Errori da Evitare</h2>
          <ul className="list-disc list-inside">
            <li>Lasciare che il Re nemico sfugga dal “taglio”</li>
            <li>Perdere tempi con scacchi inutili</li>
            <li>Attenzione agli stalli sul bordo</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Finali")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutti i Finali
        </button>
      </div>
    </div>
  );
};

export default TorrevsRe;
