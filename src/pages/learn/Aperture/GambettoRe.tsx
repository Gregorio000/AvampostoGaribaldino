import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const KingsGambit = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const navigate = useNavigate();

  // Sequenza base del Gambetto di Re
  const kingsGambitMoves = ["e4", "e5", "f4"];

  useEffect(() => {
    const newGame = new Chess();
    kingsGambitMoves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  // Funzione sicura per aggiornare il gioco e la posizione
  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  // Gestione del drop con controllo mosse legali
  function onDrop(sourceSquare: string, targetSquare: string): boolean {
    let move = null;
    safeGameMutate((gameInstance) => {
      move = gameInstance.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // promozione automatica a donna
      });
    });
    return move !== null;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold "
      >
        ← Torna indietro
      </button>

      <h1 className="text-3xl font-bold mb-4 text-center">Gambetto di Re</h1>

      <p className="mb-4 text-lg text-gray-700">
        Il Gambetto di Re è una delle aperture più romantiche e aggressive della storia degli scacchi.
        Con 2.f4 il Bianco sacrifica un pedone per ottenere rapido sviluppo e iniziativa sull'ala di re.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Chessboard
            position={position}
            arePiecesDraggable={true}
            onPieceDrop={onDrop}
            boardWidth={450}
            customBoardStyle={{
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
            isDraggablePiece={({ piece }) => {
              const turn = game.turn(); // 'w' o 'b'
              return turn === piece[0]; // es. 'wP' => 'w', 'bN' => 'b'
            }}
          />
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Sequenza Principale</h2>
          <ul className="list-disc list-inside mb-4">
            <li>1. e4 e5</li>
            <li>2. f4</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Iniziativa precoce per il Bianco</li>
            <li>Possibilità di attacco rapido sull'ala di re</li>
            <li>Apertura di linee per gli alfieri e la torre</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Svantaggi</h2>
          <ul className="list-disc list-inside">
            <li>Espone il re bianco se non si arrocca velocemente</li>
            <li>Rischio di perdere l'iniziativa se il Nero difende bene</li>
            <li>Lascia il pedone e4 vulnerabile dopo f4</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/aperture")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Aperture
        </button>
      </div>
    </div>
  );
};

export default KingsGambit;
