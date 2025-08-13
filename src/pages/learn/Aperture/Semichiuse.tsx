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

const apertureSemichiuse: Apertura[] = [
  {
    nome: "Difesa Nimzo-Indiana",
    descrizione:
      "Apertura in risposta a 1.d4 che mira a creare pressione immediata sul centro e sulle case chiave con un gioco solido e posizionale.",
    mosse: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4"],
    vantaggi: [
      "Pressione immediata sul centro",
      "Controllo posizionale profondo",
      "Buona preparazione per mediogioco",
    ],
    svantaggi: [
      "Richiede buona comprensione strategica",
      "Può essere passiva se non giocata correttamente",
    ],
    path: "/learn/Aperture/NimzoIndiana",
  },
  {
    nome: "Difesa Indiana di Re",
    descrizione:
      "Un’apertura dinamica in cui il Nero concede temporaneamente il centro per preparare un contrattacco violento.",
    mosse: ["d4", "Nf6", "c4", "g6", "Nc3", "Bg7"],
    vantaggi: [
      "Flessibilità strategica",
      "Attacchi potenti contro il centro",
      "Adatta al gioco aggressivo",
    ],
    svantaggi: [
      "Il Bianco può costruire una struttura forte",
      "Posizione ristretta nelle prime mosse",
    ],
    path: "/learn/Aperture/IndianaRe",
  },
  {
    nome: "Difesa Olandese",
    descrizione:
      "Un’apertura non convenzionale in risposta a 1.d4 con l’obiettivo di controllare la casa e4 con il pedone f5.",
    mosse: ["d4", "f5"],
    vantaggi: [
      "Gioco fuori dal repertorio comune",
      "Controllo della casa e4",
      "Opportunità di attacchi laterali",
    ],
    svantaggi: [
      "Indebolisce la struttura del Re",
      "Espone facilmente a contromosse",
    ],
    path: "/learn/Aperture/Olandese",
  },
];

const Semichiuse = () => {
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
    return !(turn === "w" && piece.startsWith("b")) && !(turn === "b" && piece.startsWith("w"));
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

      <h1 className="text-3xl font-bold mb-2 text-center">Aperture Semichiuse</h1>
      <p className="mb-8 text-center text-gray-700 max-w-3xl mx-auto">
        Le aperture semichiuse iniziano con 1.d4 e si sviluppano dopo risposte diverse da 1...d5. 
        Queste aperture mirano a creare giochi più dinamici, spesso portando a posizioni complesse e strategiche.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ul className="space-y-4 max-h-[700px] overflow-auto border border-gray-300 rounded-lg p-4 bg-white shadow">
            {apertureSemichiuse.map((apertura) => (
              <li
                key={apertura.nome}
                onClick={() => setSelectedApertura(apertura)}
                className={`cursor-pointer p-3 rounded-lg transition-colors ${
                  selectedApertura?.nome === apertura.nome
                    ? "bg-yellow-300 font-semibold"
                    : "hover:bg-yellow-100"
                }`}
              >
                {apertura.nome}
              </li>
            ))}
          </ul>
        </div>

        {selectedApertura ? (
          <div className={`md:w-2/3 flex flex-col gap-6`}>
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
                  boardWidth={400}
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

export default Semichiuse;
