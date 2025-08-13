import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const NimzoIndiana = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const nimzoMoves: string[] = ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4", "e3", "O-O", "Bd3", "d5"];

  useEffect(() => {
    const newGame = new Chess();
    nimzoMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Nimzo-Indiana</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Nimzo-Indiana (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4) è una delle difese più solide e popolari contro 1.d4.
        Sviluppata da Aaron Nimzowitsch, combina controllo del centro con pressione sul cavallo c3,
        spesso portando a strutture pedonali complesse e gioco dinamico. È stata arma preferita di campioni
        come Capablanca, Fischer e Carlsen.
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
            <li>1. d4 Nf6</li>
            <li>2. c4 e6 (preparando Bb4)</li>
            <li>3. Nc3 Bb4 (mossa caratteristica)</li>
            <li>4. e3 O-O (sviluppo standard)</li>
            <li>5. Bd3 d5 (controllo del centro)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Pressione sul cavallo c3 con l'alfiere</li>
            <li>Possibilità di raddoppiare i pedoni al bianco</li>
            <li>Controllo dinamico delle case centrali</li>
            <li>Flessibilità nelle strutture pedonali</li>
            <li>Controgio attivo sull'ala di donna</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante Rubinstein</strong>: 4.e3 0-0 5.Bd3 d5 6.Nf3</li>
            <li><strong>Variante Saemisch</strong>: 4.a3 Bxc3+ 5.bxc3</li>
            <li><strong>Variante Leningrado</strong>: 4.Bg5 h6 5.Bh4 c5</li>
            <li><strong>Variante del Fianchetto</strong>: 4.g3 (Catalan-Nimzo)</li>
            <li><strong>Variante Hubner</strong>: 4.e3 c5 5.Bd3 Nc6 6.Nf3 Bxc3+</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Una delle difese più solide contro 1.d4</li>
            <li>Richiede buona comprensione delle strutture pedonali</li>
            <li>Offre gioco attivo al Nero senza rischi eccessivi</li>
            <li>Adatta sia a giocatori posizionali che tattici</li>
            <li>Estesa teoria che richiede studio approfondito</li>
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

export default NimzoIndiana;