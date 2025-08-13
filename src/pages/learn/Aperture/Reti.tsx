import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Reti = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const retiMoves: string[] = ["Nf3", "d5", "c4", "c6", "b3", "Nf6", "g3", "Bg4", "Bg2", "e6"];

  useEffect(() => {
    const newGame = new Chess();
    retiMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Reti</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Reti (1.Nf3) è un'apertura flessibile e ipermoderna ideata dal maestro cecoslovacco Richard Réti.
        Caratterizzata dallo sviluppo precoce del cavallo in f3, permette al bianco di mantenere opzioni aperte
        sia per strutture di gioco chiuso che aperto, spesso transponendo in sistemi tipo Inglese o Catalan.
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
            <li>1. Nf3 (mossa caratteristica dell'apertura)</li>
            <li>1... d5 (risposta più comune)</li>
            <li>2. c4 (attacco al centro)</li>
            <li>2... c6 (difesa Slav)</li>
            <li>3. b3 (preparando il fianchetto)</li>
            <li>3... Nf6 (sviluppo naturale)</li>
            <li>4. g3 (fianchetto dell'alfiere)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo indiretto del centro</li>
            <li>Flessibilità nelle strutture pedonali</li>
            <li>Possibilità di transposizioni in altre aperture</li>
            <li>Gioco posizionale con fianchetti</li>
            <li>Pressione diagonale sull'ala di donna</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Sistema Reti Puro</strong>: con g3 e Ag2 senza c4 immediato</li>
            <li><strong>Transizione in Inglese</strong>: dopo c4 e successivo fianchetto</li>
            <li><strong>Attacco Reti</strong>: 1.Nf3 d5 2.c4 dxc4 3.e3</li>
            <li><strong>Variante Slovacca</strong>: 1.Nf3 d5 2.c4 c6 3.e3 Nf6 4.Nc3 a6</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Apertura molto posizionale</li>
            <li>Adatta a giocatori che preferiscono il gioco strategico</li>
            <li>Minore teoria specifica rispetto a 1.e4 o 1.d4</li>
            <li>Popolare tra giocatori come Kramnik e Karpov</li>
            <li>Può sorprendere avversari poco preparati</li>
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

export default Reti;