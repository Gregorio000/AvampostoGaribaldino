import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useNavigate } from "react-router-dom";

type Apertura = {
  nome: string;
  descrizione: string;
  mosse: string[];
  vantaggi: string[];
  svantaggi: string[];
  path: string;
};

const apertureAperte: Apertura[] = [
  {
    nome: "Apertura Italiana",
    descrizione:
      "L'Apertura Italiana è una delle aperture più antiche e classiche del gioco degli scacchi. Si sviluppa rapidamente e punta al controllo del centro e allo sviluppo armonico dei pezzi leggeri.",
    mosse: ["e4", "e5", "Nf3", "Nc6", "Bc4", "Bc5"],
    vantaggi: [
      "Controllo rapido del centro",
      "Sviluppo naturale dei pezzi",
      "Possibilità di attacco rapido con l’Affondo del Cavaliere",
    ],
    svantaggi: [
      "Espone il re se non si arrocca in tempo",
      "Linee ben conosciute: avversari esperti potrebbero prepararsi facilmente",
    ],
    path: "/learn/Aperture/AperturaItaliana",
  },
  {
    nome: "Difesa Siciliana",
    descrizione:
      "Una delle risposte più popolari e aggressive contro 1.e4, permette un gioco asimmetrico e molte possibilità di controgioco.",
    mosse: ["e4", "c5"],
    vantaggi: [
      "Controllo asimmetrico del centro",
      "Molte varianti aggressive",
      "Buone possibilità di controgioco",
    ],
    svantaggi: [
      "Richiede buona conoscenza teorica",
      "Potenziale debolezza nel centro",
    ],
    path: "/learn/Aperture/DifesaSiciliana",
  },
  {
    nome: "Gambetto di Donna",
    descrizione:
      "Il Gambetto di Donna è un'apertura classica che punta a controllare il centro con la spinta del pedone c4, offrendo un pedone per ottenere un rapido sviluppo e spazio.",
    mosse: ["d4", "d5", "c4"],
    vantaggi: [
      "Controllo centrale e spazio",
      "Sviluppo rapido dei pezzi",
      "Possibilità di gioco aggressivo",
    ],
    svantaggi: [
      "Può perdere un pedone se non giocato correttamente",
      "Richiede buona preparazione teorica",
    ],
    path: "/learn/Aperture/GambettoDonna",
  },
];

const Aperte = () => {
  const navigate = useNavigate();
  const [selectedApertura, setSelectedApertura] = useState<Apertura | null>(null);
  const [game, setGame] = useState<Chess>(new Chess());
  const [position, setPosition] = useState<string>("start");

  useEffect(() => {
    if (selectedApertura) {
      const newGame = new Chess();
      selectedApertura.mosse.forEach((move) => newGame.move(move));
      setGame(newGame);
      setPosition(newGame.fen());
    } else {
      setGame(new Chess());
      setPosition("start");
    }
  }, [selectedApertura]);

  function safeGameMutate(modify: (game: Chess) => void): void {
    const newGame = new Chess(game.fen());
    modify(newGame);
    setGame(newGame);
    setPosition(newGame.fen());
  }

  function allowDrag({ piece }: { piece: string }): boolean {
    const turn = game.turn();
    if (turn === "w" && piece.startsWith("b")) return false;
    if (turn === "b" && piece.startsWith("w")) return false;
    return true;
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
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-yellow-600 hover:text-red-800 font-semibold"
      >
        ← Torna indietro
      </button>

      <h1 className="text-3xl font-bold mb-2 text-center">Aperture Aperte</h1>
      <p className="mb-8 text-center text-gray-700 max-w-3xl mx-auto">
        Le aperture aperte sono caratterizzate dalla spinta iniziale dei pedoni centrali con scambi rapidi e sviluppo attivo dei pezzi. Queste aperture portano spesso a partite dinamiche e tattiche.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-1/3`}>
          <ul className="space-y-4 max-h-[700px] overflow-auto border border-gray-300 rounded-lg p-4 bg-white shadow">
            {apertureAperte.map((apertura) => (
              <li
                key={apertura.nome}
                onClick={() => setSelectedApertura(apertura)}
                className={`cursor-pointer p-3 rounded-lg transition-colors ${
                  selectedApertura?.nome === apertura.nome
                    ? "bg-yellow-300 font-semibold"
                    : "hover:bg-yellow-100"
                }`}
                aria-label={`Seleziona apertura ${apertura.nome}`}
              >
                {apertura.nome}
              </li>
            ))}
          </ul>
        </div>

        {selectedApertura ? (
          <div className={`md:w-2/3 flex flex-col gap-6 transition-all duration-300 ease-in-out`}>
            <h2 className="text-2xl font-bold text-center">{selectedApertura.nome}</h2>
            <p className="text-gray-700">{selectedApertura.descrizione}</p>

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
                  isDraggablePiece={({ piece }) => {
                    const turn = game.turn();
                    return (turn === "w" && piece.startsWith("w")) || (turn === "b" && piece.startsWith("b"));
                  }}
                  boardWidth={400} // più grande
                />
              </div>

              <div className="w-full md:w-1/2 text-gray-800">
                <h3 className="text-xl font-semibold mb-2">Sequenza Principale</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedApertura.mosse.map((move, i) => (
                    <li key={i}>
                      {i % 2 === 0 ? `${Math.floor(i / 2) + 1}. ${move}` : move}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">Vantaggi</h3>
                <ul className="list-disc list-inside mb-4">
                  {selectedApertura.vantaggi.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">Svantaggi</h3>
                <ul className="list-disc list-inside">
                  {selectedApertura.svantaggi.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:w-2/3 flex items-center justify-center text-gray-500 italic">
            Seleziona un'apertura dall'elenco per vederne i dettagli.
          </div>
        )}
      </div>
    </div>
  );
};

export default Aperte;
