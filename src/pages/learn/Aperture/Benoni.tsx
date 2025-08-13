import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Benoni = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const benoniMoves: string[] = ["d4", "Nf6", "c4", "c5", "d5", "e6", "Nc3", "exd5", "cxd5", "d6", "Nf3", "g6"];

  useEffect(() => {
    const newGame = new Chess();
    benoniMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Benoni</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Benoni (1.d4 Nf6 2.c4 c5) è un'apertura dinamica e aggressiva per il Nero che crea
        immediatamente asimmetria nella posizione. Caratterizzata dalla spinta ...c5 contro il centro bianco,
        porta a strutture pedonali complesse e gioco tattico. Resa popolare da giocatori come Mikhail Tal e
        Garry Kasparov, è un'arma temibile per chi cerca il gioco attivo col Nero.
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
            <li>2. c4 c5 (mossa caratteristica)</li>
            <li>3. d5 e6 (sfidando il centro)</li>
            <li>4. Nc3 exd5</li>
            <li>5. cxd5 d6 (struttura Benoni classica)</li>
            <li>6. Nf3 g6 (preparando il fianchetto)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controgio sull'ala di donna con ...a6 e ...b5</li>
            <li>Pressione sul pedone d5 bianco</li>
            <li>Possibilità di sfondamento con ...f5 in alcune varianti</li>
            <li>Fianchetto dell'alfiere campochiaro</li>
            <li>Asimmetria pedonale che crea chances per entrambi i lati</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Benoni Moderna</strong>: con ...g6 e ...Bg7</li>
            <li><strong>Benoni Classica</strong>: con ...e6 e ...exd5</li>
            <li><strong>Variante Tsjechov</strong>: 6...Nbd7</li>
            <li><strong>Attacco Fianchetto</strong>: Bianco gioca g3</li>
            <li><strong>Variante Tal</strong>: con precoce ...f5</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Apertura molto tattica e dinamica</li>
            <li>Offre buone possibilità di vittoria col Nero</li>
            <li>Richiede buona comprensione delle strutture pedonali</li>
            <li>Adatta a giocatori che amano il gioco complesso</li>
            <li>Può portare a posizioni esplosive</li>
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

export default Benoni;