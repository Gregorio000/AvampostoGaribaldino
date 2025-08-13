import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Scandinava = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  // Sequenza principale: 1.e4 d5
  const scandinavaMoves: string[] = ["e4", "d5", "exd5", "Qxd5", "Nc3"];

  useEffect(() => {
    const newGame = new Chess();
    scandinavaMoves.forEach((move) => newGame.move(move));
    setGame(newGame);
    setPosition(newGame.fen());
  }, []);

  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
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

  function allowDrag({ piece }: { piece: string }): boolean {
    const turn = game.turn();
    return (turn === "w" && piece.startsWith("w")) || (turn === "b" && piece.startsWith("b"));
  }


  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Scandinava</h1>
      <p className="mb-4 text-lg text-gray-700">
        L'audace risposta 1...d5 a 1.e4! Una delle difese più antiche (documentata nel 1497) che porta subito la regina in gioco. 
        Scelta da giocatori come Magnus Carlsen in partite blitz.
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

        <div className="w-full md:w-1/2 text-gray-800 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Sequenza Base</h2>
            <ul className="list-disc list-inside">
              <li><strong>1.e4 d5</strong> (la mossa caratteristica)</li>
              <li><strong>2.exd5 Qxd5</strong> (il Nero porta subito fuori la Donna)</li>
              <li><strong>3.Nc3 Qa5</strong> (o Qd6/Qd8 nelle varianti moderne)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Classica (Qa5)</strong>:
                <p className="text-sm text-gray-600 ml-5">3...Qa5 4.d4 Nf6 5.Nf3 c6</p>
              </li>
              <li>
                <strong>Modern Line (Qd6)</strong>:
                <p className="text-sm text-gray-600 ml-5">3...Qd6 4.d4 Nf6 5.Nf3 a6</p>
              </li>
              <li>
                <strong>Gubinsky-Melts Defense (Qd8)</strong>:
                <p className="text-sm text-gray-600 ml-5">3...Qd8!? (ritiro insolito)</p>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">✔ Vantaggi</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Rompe subito lo schema del Bianco</li>
                <li>Poche linee teoriche da memorizzare</li>
                <li>Gioco semplice e diretto</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">✖ Svantaggi</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Donna esposta a attacchi precoci</li>
                <li>Possibile ritardo nello sviluppo</li>
                <li>Difficoltà contro giocatori preparati</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => navigate("/learn/Aperture")}
          className="bg-chess-gold hover:bg-chess-gold/90 text-chess-black px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Tutte le Aperture
        </button>
        </div>
    </div>
  );
};

export default Scandinava;