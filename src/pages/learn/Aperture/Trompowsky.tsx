import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Trompowsky = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const trompowskyMoves: string[] = ["d4", "Nf6", "Bg5", "e6", "e4", "h6", "Bxf6", "Qxf6", "Nc3", "Bb4"];

  useEffect(() => {
    const newGame = new Chess();
    trompowskyMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Trompowsky</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Trompowsky (1.d4 Nf6 2.Bg5) è un'apertura aggressiva che evita le lunghe teorie delle difese Indiane.
        Sviluppando l'alfiere in g5, il Bianco minaccia di catturare il cavallo, creando immediatamente tensione.
        Popolare tra giocatori come Julian Hodgson e Alexander Morozevich, offre partite vivaci con chances per entrambi i lati.
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
            <li>2. Bg5 (mossa caratteristica)</li>
            <li>2... e6 (o ...Ne4, ...d5)</li>
            <li>3. e4 h6 (provocando la cattura)</li>
            <li>4. Bxf6 Qxf6 (scambio voluto)</li>
            <li>5. Nc3 Bb4 (pressione sul cavallo)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Punti Strategici</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Doppio pedone sull'ala di re nero dopo Bxf6</li>
            <li>Controllo della casa e5 per il Bianco</li>
            <li>Possibile vantaggio di sviluppo</li>
            <li>Debolezze del Nero sull'ala di re</li>
            <li>Gioco asimmetrico con chances per entrambi</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante Classica</strong>: 2...e6 3.e4 h6 4.Bxf6</li>
            <li><strong>Controgambetto</strong>: 2...Ne4 3.h4 c5</li>
            <li><strong>Variante Morozevich</strong>: 2...d5 3.Bxf6 exf6</li>
            <li><strong>Sistema Torre</strong>: 2...c5 3.d5 Qb6</li>
            <li><strong>Difesa Pseudo-Trompowsky</strong>: 2...c6</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Evita teorie approfondite delle Indie</li>
            <li>Porta a posizioni originali già dalle prime mosse</li>
            <li>Adatta a giocatori che amano il gioco tattico</li>
            <li>Offre buone possibilità di iniziativa</li>
            <li>Può sorprendere avversari impreparati</li>
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

export default Trompowsky;