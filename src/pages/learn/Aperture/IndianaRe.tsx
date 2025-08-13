import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const IndianaRe = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const indianaReMoves: string[] = ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7", "e4", "d6", "Nf3", "O-O"];

  useEffect(() => {
    const newGame = new Chess();
    indianaReMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Indiana di Re</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Indiana di Re (1.d4 Nf6 2.c4 g6 3.Nc3 Bg7) è una delle difese più popolari contro 1.d4.
        Caratterizzata dal fianchetto dell'alfiere campochiaro, offre al Nero una solida struttura difensiva
        con possibilità di controgioco dinamico. È stata arma preferita di grandi campioni come Garry Kasparov
        e Viswanathan Anand.
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
            <li>2. c4 g6 (preparando il fianchetto)</li>
            <li>3. Nc3 Bg7 (alfiere ipermoderno)</li>
            <li>4. e4 d6 (centro pedonale classico)</li>
            <li>5. Nf3 O-O (arrocco sicuro)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo diagonale dell'alfiere in g7</li>
            <li>Flessibilità nella risposta al centro bianco</li>
            <li>Possibilità di contrattacco con ...e5 o ...c5</li>
            <li>Struttura pedonale solida ma dinamica</li>
            <li>Gioco su entrambi i lati della scacchiera</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante Classica</strong>: 5.Nf3 0-0 6.Be2 e5</li>
            <li><strong>Attacco dei Quattro Pedoni</strong>: 5.f4 0-0 6.Nf3 c5</li>
            <li><strong>Variante Sämisch</strong>: 5.f3 0-0 6.Be3 e5</li>
            <li><strong>Variante del Fianchetto</strong>: 5.g3 0-0 6.Bg2</li>
            <li><strong>Sistema Averbakh</strong>: 5.Be2 0-0 6.Bg5</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Difesa solida ma non passiva</li>
            <li>Adatta a giocatori che amano il gioco dinamico</li>
            <li>Richiede buona comprensione delle strutture pedonali</li>
            <li>Offre buone possibilità di vittoria col Nero</li>
            <li>Teoria molto vasta e approfondita</li>
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

export default IndianaRe;