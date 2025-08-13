import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Bird = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const birdMoves: string[] = ["f4", "d5", "Nf3", "g6", "e3", "Bg7", "Be2", "Nf6", "O-O", "O-O"];

  useEffect(() => {
    const newGame = new Chess();
    birdMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Apertura Bird</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'Apertura Bird (1.f4) è un'apertura insolita e aggressiva che prende il nome dal maestro inglese Henry Edward Bird.
        Caratterizzata dal controllo immediato della casa e5, offre un gioco asimmetrico con possibilità di attacco sull'ala di re.
        Sebbene meno comune di altre aperture di re, è stata occasionalmente adottata da giocatori come Bent Larsen e Hikaru Nakamura per sorprendere gli avversari.
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
            <li>1. f4 (mossa caratteristica)</li>
            <li>1... d5 (risposta più comune)</li>
            <li>2. Nf3 g6 (preparando ...Bg7)</li>
            <li>3. e3 Bg7 (sviluppo flessibile)</li>
            <li>4. Be2 Nf6 (sviluppo standard)</li>
            <li>5. O-O O-O (arrocco reciproco)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Idee Strategiche</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Controllo della diagonale h1-a8</li>
            <li>Possibilità di attacco con g4-g5 in alcune varianti</li>
            <li>Formazione Stonewall con pedoni in f4, e3, d4</li>
            <li>Gioco sull'ala di re per il Bianco</li>
            <li>Possibile trasposizione in Olandese inversa</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante Classica</strong>: 1...d5 2.Nf3 Nf6 3.e3 g6</li>
            <li><strong>Gambetto From</strong>: 1...e5!? 2.fxe5 d6 (pericoloso)</li>
            <li><strong>Difesa Olandese Inversa</strong>: 1...f5 2.Nf3 Nf6</li>
            <li><strong>Sistema Stonewall</strong>: con d4 ed e3</li>
            <li><strong>Variante Lasker</strong>: 1...d5 2.b3 (sviluppo ipermoderno)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Considerazioni</h2>
          <ul className="list-disc list-inside">
            <li>Apertura poco teorica che sorprende molti avversari</li>
            <li>Offre partite originali fin dalle prime mosse</li>
            <li>Debolezza potenziale sulla diagonale a1-h8</li>
            <li>Adatta a giocatori creativi e posizionali</li>
            <li>Può portare a strutture di pedoni insolite</li>
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

export default Bird;