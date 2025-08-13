import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Inchiodatura = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const pinFen = "r2qk1nr/ppp2ppp/2n1b3/1B6/8/2NP1N2/PPP2PPP/R1BQ1RK1 w Qkq - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(pinFen);
    setGame(newGame);
    setPosition(pinFen);
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

      <h1 className="text-3xl font-bold mb-4 text-center">Inchiodatura</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Inchiodatura è una tattica fondamentale in cui un pezzo non può muoversi senza esporre un pezzo più prezioso dietro di esso.
        Nell'esempio mostrato, l'alfiere bianco in b5 inchioda il cavallo nero in c6 contro il re nero in e8.
        Questa tecnica è stata magistralmente utilizzata da giocatori come Anatoly Karpov e Tigran Petrosian.
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
            <p className="text-blue-700">L'alfiere bianco in b5 inchioda il cavallo nero in c6, che non può muoversi senza esporre il re nero in e8 a uno scacco.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Caratteristiche Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Un pezzo è bloccato perché dietro c'è un pezzo più prezioso</li>
            <li>Particolarmente efficace quando inchioda contro il re</li>
            <li>Può essere assoluta (contro il re) o relativa (contro altro pezzo)</li>
            <li>Spesso sfruttata da alfieri, torri e regine</li>
            <li>Può portare a guadagno materiale o vantaggio posizionale</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Tipi di Inchiodatura</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Inchiodatura Assoluta</strong>: Contro il re, il pezzo non può muoversi</li>
            <li><strong>Inchiodatura Relativa</strong>: Contro un pezzo prezioso ma non il re</li>
            <li><strong>Inchiodatura Scoperta</strong>: Creata da un movimento che scopre l'attacco</li>
            <li><strong>Inchiodatura Incrociata</strong>: Quando due pezzi si inchiodano reciprocamente</li>
            <li><strong>Inchiodatura Laterale</strong>: Tipica delle torri su colonne aperte</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Come Sfruttarla</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Cerca pezzi nemici allineati con pezzi più preziosi</li>
            <li>Usa alfieri e torri per creare inchiodature</li>
            <li>Sfrutta l'inchiodatura per attaccare il pezzo inchiodato</li>
            <li>Combinala con altre tattiche come doppio attacco o scoperti</li>
            <li>Mantieni la pressione sul pezzo inchiodato</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Come Difendersi</h2>
          <ul className="list-disc list-inside">
            <li>Evita di allineare pezzi importanti</li>
            <li>Interrompi l'inchiodatura con mosse intermedie</li>
            <li>Proteggi il pezzo inchiodato con altri pezzi</li>
            <li>Considera sacrifici posizionali per liberarti</li>
            <li>Controlla sempre le diagonali e colonne prima di muovere</li>
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

export default Inchiodatura;