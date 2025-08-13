import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const FinalePedoni = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Posizione tipica di finale di pedoni con potenziale corsa alla promozione
  const pawnsFen = "8/5k2/5pp1/8/4P1P1/5K2/8/8 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(pawnsFen);
    setGame(newGame);
    setPosition(pawnsFen);
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
        Finali di Pedoni
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        I <strong>finali di pedoni</strong> sono tra i più istruttivi negli
        scacchi: poche mosse precise possono fare la differenza tra vittoria e
        sconfitta. Le strategie corrette permettono di promuovere un pedone e
        convertire il vantaggio in una vittoria sicura.
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
          <div className="mt-4 p-4 bg-orange-50 rounded-lg">
            <h3 className="font-bold text-orange-800 mb-2">
              Posizione chiave:
            </h3>
            <p className="text-orange-700">
              In questa posizione, il Bianco può creare un pedone passato
              sull'ala di Re, forzando il Re nero a difendere e aprendo la
              strada alla promozione.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">
            Strategie Principali
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Pedone passato</strong>: crealo e sostienilo con il tuo Re
            </li>
            <li>
              <strong>Opposizione</strong>: controlla le case critiche davanti
              al pedone avversario
            </li>
            <li>
              <strong>Zugzwang</strong>: costringi l’avversario a fare mosse
              sfavorevoli
            </li>
            <li>
              <strong>Taglio del Re</strong>: impedisci al Re nemico di avvicinarsi
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            Concetti Chiave
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              Non spingere il pedone troppo presto senza il supporto del Re
            </li>
            <li>
              Calcola sempre la corsa alla promozione (chi arriva prima?)
            </li>
            <li>
              Usa pedoni lontani per distrarre il Re avversario
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            Errori da Evitare
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Entrare in zugzwang a proprio svantaggio
            </li>
            <li>
              Creare debolezze irreparabili spingendo pedoni isolati
            </li>
            <li>
              Ignorare i pedoni passati dell’avversario
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

export default FinalePedoni;
