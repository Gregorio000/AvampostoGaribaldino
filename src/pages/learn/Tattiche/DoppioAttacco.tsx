import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const DoppioAttacco = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const doppioAttaccoFen = "r4rk1/ppN2ppp/8/3q4/8/8/PPPP1PPP/R1BQ1RK1 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(doppioAttaccoFen);
    setGame(newGame);
    setPosition(doppioAttaccoFen);
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

      <h1 className="text-3xl font-bold mb-4 text-center">Doppio Attacco</h1>
      <p className="mb-4 text-lg text-gray-700">
        Il Doppio Attacco è una tattica fondamentale in cui un pezzo minaccia simultaneamente due o più pezzi avversari.
        Conosciuto anche come "forchetta", è particolarmente efficace quando eseguito da cavalli, regine o pedoni.
        Grandi campioni come Capablanca e Tal hanno dimostrato la potenza di questa tattica nelle loro partite.
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
            <h3 className="font-bold text-blue-800 mb-2">Posizione chiave:</h3>
            <p className="text-blue-700">Il cavallo bianco in c7 attacca contemporaneamente la regina nera in d5 e la torre in a8.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Caratteristiche Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Un pezzo attacca due o più pezzi avversari simultaneamente</li>
            <li>Particolarmente efficace con i cavalli (forchetta)</li>
            <li>Spesso combinato con scacco per massimizzare l'efficacia</li>
            <li>Può coinvolgere pezzi di diverso valore (es. regina e torre)</li>
            <li>Difficile da parare quando eseguito correttamente</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Tipi di Doppio Attacco</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Forchetta di Cavallo</strong>: Il tipo più comune e temuto</li>
            <li><strong>Doppio Attacco di Regina</strong>: Attacca due pezzi contemporaneamente</li>
            <li><strong>Doppio Attacco di Pedone</strong>: Spesso sottovalutato ma efficace</li>
            <li><strong>Doppio Attacco con Scacco</strong>: Obbliga a rispondere allo scacco</li>
            <li><strong>Doppio Attacco Scoperto</strong>: Quando un pezzo si muove scoprendo l'attacco</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Come Sfruttarlo</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Cerca pezzi nemici non difesi o sovraccarichi</li>
            <li>Analizza le case dove i tuoi pezzi possono attaccare più bersagli</li>
            <li>Prepara il doppio attacco con mosse di sviluppo</li>
            <li>Usalo per guadagnare materiale o posizione</li>
            <li>Combinalo con altre tattiche come inchiodature o scoperti</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Come Difendersi</h2>
          <ul className="list-disc list-inside">
            <li>Mantieni i pezzi ben difesi e coordinati</li>
            <li>Evita di lasciare pezzi importanti su case dello stesso colore</li>
            <li>Considera sacrifici posizionali per evitare perdite maggiori</li>
            <li>Controlla sempre le case di fork prima di muovere</li>
            <li>Impara a riconoscere i pattern tipici</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Tattiche")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutte le Tattiche
        </button>
      </div>
    </div>
  );
};

export default DoppioAttacco;