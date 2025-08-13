import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const DueTorri = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Posizione tipica di finale con due torri coordinate per matto o restrizione
  const rooksFen = "8/3k4/8/R7/7R/4K3/8/8 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(rooksFen);
    setGame(newGame);
    setPosition(rooksFen);
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
        Finale di Due Torri
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Il <strong>finale di due torri</strong> è uno dei finali più potenti e
        spesso conduce a vittorie rapide se le torri sono coordinate. In questa
        posizione, le torri bianche dominano colonne e traverse, tagliando fuori
        il Re nero e avvicinandosi al matto.
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
            <h3 className="font-bold text-green-800 mb-2">
              Posizione chiave:
            </h3>
            <p className="text-green-700">
              Le due torri bianche controllano completamente file e traverse
              attorno al Re nero, impedendogli ogni fuga e preparando un matto
              forzato.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">
            Strategie Principali
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Tagliare il Re</strong> con una torre mentre l’altra dà
              scacchi o controlla la fuga
            </li>
            <li>
              <strong>Matto sulla prima traversa</strong> o in angolo con il Re
              proprio di supporto
            </li>
            <li>
              Coordinare le torri su colonne e traverse aperte
            </li>
            <li>
              Impedire al Re avversario di centralizzarsi
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Concetti Chiave</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Le torri sono più efficaci quando lavorano insieme e a distanza
            </li>
            <li>
              La settima traversa è spesso decisiva nei finali
            </li>
            <li>
              Mantenere l’iniziativa con minacce continue
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Errori da Evitare</h2>
          <ul className="list-disc list-inside">
            <li>
              Lasciare che il Re avversario sfugga al controllo
            </li>
            <li>
              Permettere scambi di una torre senza guadagno chiaro
            </li>
            <li>
              Posizionare entrambe le torri su case adiacenti e passive
            </li>
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

export default DueTorri;
