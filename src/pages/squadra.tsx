import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Shield, ChevronDown, ChevronUp } from 'lucide-react';

const squadre = [
  {
    id: 1,
    nome: "RED",
    nomeCompleto: "Squadra RED",
    serie: "SERIE B",
    coloreHex: "#EF4444",
    coloreBg: "from-red-600 to-red-800",
    giocatori: [
      "STELLA EMANUELE", "GRAMMATICO RICCARDO", "CIUFOLINI SIRIO",
      "MILITERNI PIERLUIGI", "CAPARROTTA FEDERICO", "ANGELI FRANCESCO",
      "NUZZO DANIELE", "FUMAGALLI MAURO", "POIANI FERNANDO CELSO",
      "GISMONDI GHERARDO MARIA", "DI MARCO SIMONE", "DE SIMONE ANDREA",
      "IACOVELLI ENRICO", "VENTURI RICCARDO", "CARUSO GREGORIO",
    ],
  },
  {
    id: 2,
    nome: "BLUE",
    nomeCompleto: "Squadra BLUE",
    serie: "PROMOZIONE",
    coloreHex: "#3B82F6",
    coloreBg: "from-blue-600 to-blue-800",
    giocatori: [
      "NUZZO DANIELE", "DE SIMONE ANDREA", "FUMAGALLI MAURO",
      "CUCKA ARGIS", "IACOVELLI ENRICO", "BOCCADORI LUIGI",
      "FEDERICI SIMONE", "SCORCELLETTI MATTEO", "CAMPANILE ANGELO",
      "CAMPANILE GIUSEPPE", "LOIZOS PANAGYOTIS", "CATALANO DOMENICO",
      "MOROTTI GIAN PAOLO", "RIGGIO SABATINO", "GISMONDI GHERARDO MARIA",
    ],
  },
  {
    id: 3,
    nome: "WHITE",
    nomeCompleto: "Squadra WHITE",
    serie: "UNDER 30",
    coloreHex: "#6B7280",
    coloreBg: "from-gray-500 to-gray-700",
    giocatori: [
      "MILITERNI PIERLUIGI", "DI MARCO SIMONE", "VENTURI RICCARDO",
      "RANIERI LEARCO", "LAI MARIO", "D'AMBROSIO ALESSANDRO",
      "CARUSO SOFIA", "CASTALDO EMANUEL", "CAMPANILE GIUSEPPE",
      "VERZILLI ASIA", "SCORCELLETTI MATTEO", "SPANU ANASTASIA",
      "MUCCI PIETRO", "CARUSO GREGORIO", "CASCIANO DANIELE",
    ],
  },
  {
    id: 4,
    nome: "BLACK",
    nomeCompleto: "Squadra BLACK",
    serie: "OVER 50",
    coloreHex: "#1F2937",
    coloreBg: "from-gray-800 to-gray-950",
    giocatori: [
      "ANGELI FRANCESCO", "GISMONDI GHERARDO MARIA", "BIAGIOLI ITALO",
      "POLESE PIERLUIGI", "BOCCADORI LUIGI", "TOMA FLORIN",
      "CATALANO DOMENICO", "CAMPANILE ANGELO", "VENTILI ROBERTO",
      "PAOLONI ROBERTO", "PIERGOTTI GOFFREDO", "MOROTTI GIAN PAOLO",
      "PENCELLI MAURIZIO", "GALIZIA CLAUDIO", "RICCI ROLANDO",
    ],
  },
];

/* ── Single squad card ── */
const SquadraCard: React.FC<{ squadra: typeof squadre[0] }> = ({ squadra }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = squadra.giocatori.slice(0, 5);
  const rest = squadra.giocatori.slice(5);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">

      {/* Coloured header */}
      <div className={`bg-gradient-to-br ${squadra.coloreBg} p-6 relative overflow-hidden`}>
        {/* decorative circle */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-white/5" />

        <div className="relative">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {squadra.serie}
          </span>
          <h2 className="text-3xl font-bold text-white">{squadra.nomeCompleto}</h2>
          <p className="text-white/70 text-sm mt-1">{squadra.giocatori.length} giocatori</p>
        </div>
      </div>

      {/* Player list */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-4 w-4 text-chess-gold" />
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Formazione</span>
        </div>

        <ul className="space-y-1.5">
          {preview.map((nome, i) => (
            <PlayerRow key={nome} index={i + 1} nome={nome} coloreHex={squadra.coloreHex} />
          ))}

          {expanded && rest.map((nome, i) => (
            <PlayerRow key={nome} index={preview.length + i + 1} nome={nome} coloreHex={squadra.coloreHex} />
          ))}
        </ul>

        {rest.length > 0 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-chess-gold hover:text-chess-dark transition-colors py-2 border border-chess-gold/20 rounded-xl hover:bg-chess-gold/5"
          >
            {expanded ? (
              <><ChevronUp className="h-3.5 w-3.5" /> Mostra meno</>
            ) : (
              <><ChevronDown className="h-3.5 w-3.5" /> +{rest.length} giocatori</>
            )}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: squadra.coloreHex }} />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{squadra.nome}</span>
        <span className="ml-auto text-xs text-gray-400">Stagione 2025/26</span>
      </div>
    </div>
  );
};

const PlayerRow: React.FC<{ index: number; nome: string; coloreHex: string }> = ({ index, nome, coloreHex }) => (
  <li className="flex items-center gap-3 py-1.5 px-2 rounded-lg hover:bg-gray-50 transition-colors group">
    <span
      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
      style={{ backgroundColor: coloreHex }}
    >
      {index}
    </span>
    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 capitalize">
      {nome.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
    </span>
  </li>
);

/* ══════════════════════════════════════════════
   SQUADRE PAGE
══════════════════════════════════════════════ */
const Squadre: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <div className="flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Trophy className="h-3.5 w-3.5 text-chess-gold" />
            Serie B · Stagione 2025/2026
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Avamposto Garibaldino
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            Le Nostre <span className="text-chess-gold">Squadre</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Le formazioni ufficiali dell'Avamposto Garibaldino per la stagione 2025/2026
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
          {[
            { icon: Shield, value: squadre.length, label: "Squadre" },
            { icon: Trophy, value: "SERIE B", label: "Campionato" },
            { icon: Users, value: 15, label: "Giocatori/squadra" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5 text-center">
              <Icon className="h-6 w-6 text-chess-gold mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-chess-dark">{value}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Squad grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {squadre.map(s => <SquadraCard key={s.id} squadra={s} />)}
        </div>

        {/* ── Footer ── */}
        <div className="mt-14 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            Serie B · Stagione 2025/2026 · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default Squadre;
