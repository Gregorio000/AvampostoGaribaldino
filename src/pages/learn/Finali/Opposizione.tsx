import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Opposizione = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Posizione tipica: Re e pedone bianco contro Re nero, vicino alla promozione
  const oppositionFen = "8/8/8/3k4/3P4/3K4/8/8 w - - 0 1";

  useEffect(() => {
    const newGame = new Chess();
    newGame.load(oppositionFen);
    setGame(newGame);
    setPosition(oppositionFen);
  }, []);

  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  function allowDrag({ piece }: { piece: string }): boolean {
    const turn = game.turn();
    return (
      (turn === "w" && piece.startsWith("w")) ||
      (turn === "b" && piece.startsWith("b"))
    );
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

      <h1 className="text-3xl font-bold mb-4 text-center">
        Opposizione nei Finali di Pedone
      </h1>
      <p className="mb-4 text-lg text-gray-700">
        Nel finale <strong>Re e pedone contro Re</strong>, l'uso corretto
        dell'<em>opposizione</em> permette al re attaccante di guadagnare
        l’avanzata decisiva, bloccando il re avversario e aprendo la strada al
        pedone verso la promozione.  
        Questo concetto è fondamentale per convertire un vantaggio minimo in
        vittoria.
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
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-green-800 mb-2">Posizione chiave:</h3>
            <p className="text-green-700">
              Il Re bianco in d3 e il Re nero in d5 sono in opposizione diretta.
              Tocca al Nero muovere: sarà costretto ad arretrare, permettendo al
              Re bianco di avanzare e supportare il pedone in d4 fino alla
              promozione.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-xl font-semibold mb-2">
            Principio dell'Opposizione
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Due re si fronteggiano a una casa di distanza</li>
            <li>
              Chi non deve muovere ha il vantaggio: costringe l'altro re ad
              cedere terreno
            </li>
            <li>
              Usare l'opposizione per aprire la strada al pedone e controllare
              le case chiave davanti a esso
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">
            Tecnica passo-passo
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Taglia la via al re avversario con il tuo re</li>
            <li>Usa l'opposizione per forzarlo ad arretrare</li>
            <li>Avanza il re davanti al pedone</li>
            <li>Promuovi il pedone in sicurezza</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Errori comuni</h2>
          <ul className="list-disc list-inside">
            <li>Avanzare il pedone troppo presto senza il supporto del re</li>
            <li>Perdere l'opposizione e permettere al re nemico di bloccare</li>
            <li>Non calcolare bene la posizione di stallo</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center flex justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Finali")}
          className="bg-chess-gold text-chess-black px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-colors"
        >
          Vai a tutti i Finali
        </button>
      </div>
    </div>
  );
};

export default Opposizione;
