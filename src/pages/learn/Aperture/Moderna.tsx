import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Moderna = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const modernaMoves: string[] = ["e4", "g6", "d4", "Bg7", "Nf3", "d6", "Bc4", "Nf6", "Qe2"];

  useEffect(() => {
    const newGame = new Chess();
    modernaMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Moderna</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Moderna (1...g6) è un'apertura ipermoderna dove il Nero rinuncia inizialmente al controllo del centro
        con i pedoni, preferendo controllarlo a distanza con i pezzi. Caratterizzata dal fianchetto dell'alfiere in g7,
        offre un gioco flessibile e dinamico, spesso scelta da giocatori che cercano posizioni complesse e asimmetriche.
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
            <li>1. e4 g6 (fianchetto futuro)</li>
            <li>2. d4 Bg7 (alfiere ipermoderno)</li>
            <li>3. Nf3 d6 (preparando e5 o c5)</li>
            <li>4. Bc4 Nf6 (sviluppo flessibile)</li>
            <li>5. Qe2 (protezione dell'arrocco)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo del centro a distanza con l'alfiere in g7</li>
            <li>Flessibilità nella risposta al centro bianco</li>
            <li>Possibilità di attacchi sull'ala di donna con ...c5</li>
            <li>Gioco dinamico con controgioco nel mediogioco</li>
            <li>Strutture pedonali flessibili e adattabili</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante Standard</strong>: con d6 e Nf6</li>
            <li><strong>Attacco Pirc-Moderno</strong>: transizione in Pirc con Nf6 e O-O</li>
            <li><strong>Variante del Dragone Accelerato</strong>: con c5 e Nc6</li>
            <li><strong>Sistema Gurgenidze</strong>: con c6 e d5</li>
            <li><strong>Variante Averbakh</strong>: Bianco gioca h4-h5</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Apertura flessibile ma che richiede buona comprensione posizionale</li>
            <li>Popolare tra giocatori che amano il controgioco dinamico</li>
            <li>Può portare a posizioni complesse con chances per entrambi i lati</li>
            <li>Usata da grandi maestri come Tal, Larsen e Nakamura</li>
            <li>Adatta a chi preferisce evitare teorie troppo approfondite</li>
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

export default Moderna;