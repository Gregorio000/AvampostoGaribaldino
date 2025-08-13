import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const London = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const londonMoves: string[] = ["d4", "d5", "Bf4", "Nf6", "e3", "e6", "Nd2", "c5", "c3", "Nc6"];

  useEffect(() => {
    const newGame = new Chess();
    londonMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Sistema London</h1>
      <p className="mb-4 text-lg text-gray-700">
        Il Sistema London (1.d4 d5 2.Bf4) è un'apertura solida e flessibile che garantisce al Bianco una struttura di pezzi armoniosa.
        Con lo sviluppo dell'alfiere in f4 prima di e2-e3, il Bianco evita molte linee teoriche complesse mantenendo un gioco posizionale.
        Popolare tra giocatori di tutti i livelli, da Magnus Carlsen ai club players, offre un buon equilibrio tra sicurezza e possibilità di attacco.
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
            <li>1. d4 d5</li>
            <li>2. Bf4 (mossa caratteristica)</li>
            <li>2... Nf6 (o ...c5, ...Bf5)</li>
            <li>3. e3 e6 (preparando ...c5)</li>
            <li>4. Nd2 (o Nf3) c5</li>
            <li>5. c3 Nc6 (sviluppo standard)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Struttura di pezzi molto armoniosa</li>
            <li>Controllo della diagonale h2-b8</li>
            <li>Possibilità di attaccare su entrambe le ali</li>
            <li>Difesa solida del pedone d4</li>
            <li>Flessibilità nello sviluppo dei cavalli</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>London Classica</strong>: 2...Nf6 3.e3 e6 4.Nd2 c5</li>
            <li><strong>London Accelerata</strong>: 2...Bf5 3.Nf3 e6 4.e3</li>
            <li><strong>Variante Carlsen</strong>: 2...c5 3.e3 Nc6 4.c3</li>
            <li><strong>Sistema Stonewall</strong>: con f3 e e4</li>
            <li><strong>London con ...g6</strong>: contro il Dragone Accelerato</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Vantaggi</h2>
          <ul className="list-disc list-inside">
            <li>Minima teoria da memorizzare</li>
            <li>Struttura solida e difficile da attaccare</li>
            <li>Adatta sia a giocatori posizionali che tattici</li>
            <li>Buone possibilità di iniziativa centrale</li>
            <li>Efficace contro vari schemi di sviluppo del Nero</li>
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

export default London;