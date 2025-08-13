import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

const Grunfeld = () => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");
  const navigate = useNavigate();

  const grunfeldMoves: string[] = ["d4", "Nf6", "c4", "g6", "Nc3", "d5", "cxd5", "Nxd5", "e4", "Nxc3", "bxc3"];

  useEffect(() => {
    const newGame = new Chess();
    grunfeldMoves.forEach((move) => newGame.move(move));
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

      <h1 className="text-3xl font-bold mb-4 text-center">Difesa Grunfeld</h1>
      <p className="mb-4 text-lg text-gray-700">
        La Difesa Grunfeld (1.d4 Nf6 2.c4 g6 3.Nc3 d5) è una delle difese più dinamiche contro 1.d4. Il Nero permette al Bianco di costruire un forte centro per poi attaccarlo con pezzi e pedoni.
        Sviluppata da Ernst Grünfeld negli anni 1920, è stata arma preferita di campioni come Bobby Fischer, Garry Kasparov e Vladimir Kramnik. Offre gioco attivo al Nero a costo di accettare posizioni asimmetriche.
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
            <li>2. c4 g6 (preparando ...Bg7)</li>
            <li>3. Nc3 d5 (mossa caratteristica)</li>
            <li>4. cxd5 Nxd5 (ricattura con cavallo)</li>
            <li>5. e4 Nxc3 (scambio obbligato)</li>
            <li>6. bxc3 (centro potente ma vulnerabile)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Idee Strategiche</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Contrattacco al centro bianco con ...c5 e ...Bg7</li>
            <li>Sviluppo rapido dell'alfiere in g7</li>
            <li>Pressione sulla diagonale h8-a1</li>
            <li>Possibile rottura con ...e5 in momenti opportuni</li>
            <li>Gioco su ali opposte (Bianco al centro/re, Nero su donna)</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Varianti Principali</h2>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Variante dello Scambio</strong>: 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3</li>
            <li><strong>Variante Russa</strong>: 4.Nf3 Bg7 5.Qb3 dxc4 6.Qxc4</li>
            <li><strong>Sistema Brinckmann</strong>: 4.Bf4 Bg7 5.e3 0-0</li>
            <li><strong>Attacco dei Tre Pedoni</strong>: 4.Nf3 Bg7 5.e4 dxe4 6.Nxe4</li>
            <li><strong>Variante del Pedone Avvelenato</strong>: con Qa5+</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Caratteristiche</h2>
          <ul className="list-disc list-inside">
            <li>Una delle difese più teoriche contro 1.d4</li>
            <li>Richiede buona comprensione posizionale</li>
            <li>Offre gioco attivo al Nero</li>
            <li>Adatta a giocatori che amano il controgioco</li>
            <li>Molto efficace a livello magistrale</li>
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

export default Grunfeld;