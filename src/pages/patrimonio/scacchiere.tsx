import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Clock, Grid, Layers, CheckSquare, X } from "lucide-react";

const categorie = [
  { id: "TUTTI",      nome: "Tutti",       icon: Grid },
  { id: "SCACCHIERE", nome: "Scacchiere",  icon: CheckSquare },
  { id: "SCACCHI",    nome: "Scacchi",     icon: CheckSquare },
  { id: "OROLOGI",    nome: "Orologi",     icon: Clock },
  { id: "DIDATTICHE", nome: "Didattiche",  icon: Layers },
];

const materiali = [
  { id: 1,  categoria: "SCACCHIERE", nome: "Scacchiere in Legno",                    quantita: "9 + 1 piccola",        descrizione: "Scacchiere in legno di alta qualità" },
  { id: 2,  categoria: "SCACCHIERE", nome: "Scacchiere in PVC",                      quantita: "3",                    descrizione: "Scacchiere in materiale PVC resistente" },
  { id: 3,  categoria: "SCACCHIERE", nome: "Scacchiere Avvolgibili Mousepad",        quantita: "27",                   descrizione: "Scacchiere avvolgibili in mousepad" },
  { id: 4,  categoria: "SCACCHIERE", nome: "Scacchiere Pieghevoli",                  quantita: "9",                    descrizione: "Scacchiere pieghevoli in plastica o cartone" },
  { id: 5,  categoria: "SCACCHI",    nome: "Scacchi in Legno",                       quantita: "21 SET",               descrizione: "Scacchi in legno, di cui uno di alto pregio" },
  { id: 6,  categoria: "SCACCHI",    nome: "Scacchi in Legno Piccoli",               quantita: "2 SET",                descrizione: "Set di scacchi piccoli in legno" },
  { id: 7,  categoria: "SCACCHI",    nome: "Scacchi in Plastica Doppio Piombo",      quantita: "11 SET",               descrizione: "Di cui 1 rosso c/ nero e 5 misura grande avana c/ neri" },
  { id: 8,  categoria: "SCACCHI",    nome: "Scacchi in Plastica Serie DGT",          quantita: "11 SET",               descrizione: "Scacchi compatibili con scacchiere digitali DGT" },
  { id: 9,  categoria: "SCACCHI",    nome: "Scacchi Leggeri da Torneo",              quantita: "8 SET avana + 6 neri", descrizione: "Scacchi leggeri per torneo o allenamento (vecchi)" },
  { id: 10, categoria: "SCACCHI",    nome: "Scacchi Leggeri Bianchi/Neri",           quantita: "8 SET",                descrizione: "Serie bianchi c/ neri per torneo" },
  { id: 11, categoria: "SCACCHI",    nome: "Scacchi Leggeri Colorati",               quantita: "21 SET",               descrizione: "5 neri, 4 arancioni, 4 fuxia, 4 argento, 4 verdi militare" },
  { id: 12, categoria: "SCACCHI",    nome: "Scacchi in Silicone",                    quantita: "8 SET",                descrizione: "1 bianco, 1 nero, 1 viola, 1 verde, 1 rosso, 1 blue, 1 giallo, 1 rosa" },
  { id: 13, categoria: "OROLOGI",    nome: "DGT 3000 Limited Edition",               quantita: "8",                    descrizione: "Orologi omologati FIDE per tornei ufficiali" },
  { id: 14, categoria: "OROLOGI",    nome: "DGT 2010",                               quantita: "9",                    descrizione: "Orologi omologati FIDE, modello precedente" },
  { id: 15, categoria: "OROLOGI",    nome: "LEAP",                                   quantita: "9",                    descrizione: "6 celesti e 3 neri, omologati FIDE" },
  { id: 16, categoria: "OROLOGI",    nome: "SAITEK",                                 quantita: "3",                    descrizione: "2 Mephisto e 1 modello 'astronave'" },
  { id: 17, categoria: "OROLOGI",    nome: "Chess Clock Cinesi",                     quantita: "4",                    descrizione: "Da allenamento, tipo Saitek astronave" },
  { id: 18, categoria: "OROLOGI",    nome: "HQT 101",                                quantita: "1",                    descrizione: "Orologio da torneo" },
  { id: 19, categoria: "DIDATTICHE", nome: "Scacchiera Didattica Verde",             quantita: "1",                    descrizione: "Plastica pieghevole verde, completa di 2 set di pezzi in spugna" },
  { id: 20, categoria: "DIDATTICHE", nome: "Scacchiere Didattiche Avvolgibili Grandi", quantita: "2",                 descrizione: "Con tasche, complete di 2 serie di carte gialli contro marroni" },
  { id: 21, categoria: "DIDATTICHE", nome: "Scacchiere Didattiche Magnetiche",       quantita: "2",                    descrizione: "Avvolgibili piccole magnetiche, 2 serie gialli contro rossi" },
];

const categoryStyle: Record<string, { badge: string; icon: string; bar: string }> = {
  SCACCHIERE: { badge: "bg-emerald-100 text-emerald-700", icon: "bg-emerald-100 text-emerald-600", bar: "bg-emerald-500" },
  SCACCHI:    { badge: "bg-amber-100 text-amber-700",     icon: "bg-amber-100 text-amber-600",     bar: "bg-amber-500" },
  OROLOGI:    { badge: "bg-blue-100 text-blue-700",       icon: "bg-blue-100 text-blue-600",       bar: "bg-blue-500" },
  DIDATTICHE: { badge: "bg-purple-100 text-purple-700",   icon: "bg-purple-100 text-purple-600",   bar: "bg-purple-500" },
};

const getIcon = (cat: string) => {
  if (cat === "OROLOGI")    return <Clock className="w-5 h-5" />;
  if (cat === "DIDATTICHE") return <Layers className="w-5 h-5" />;
  return <CheckSquare className="w-5 h-5" />;
};

const stats = [
  { value: materiali.length,                                              label: "Tipi di materiale" },
  { value: materiali.filter(m => m.categoria === "SCACCHIERE").length,   label: "Tipi scacchiere" },
  { value: materiali.filter(m => m.categoria === "SCACCHI").length,      label: "Tipi di scacchi" },
  { value: materiali.filter(m => m.categoria === "OROLOGI").length,      label: "Tipi di orologi" },
];

/* ══════════════════════════════════════════════
   MATERIAL CARD
══════════════════════════════════════════════ */
const MaterialCard: React.FC<{ m: typeof materiali[0] }> = ({ m }) => {
  const style = categoryStyle[m.categoria] ?? { badge: "bg-gray-100 text-gray-700", icon: "bg-gray-100 text-gray-600", bar: "bg-gray-400" };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Color bar */}
      <div className={`h-1.5 w-full ${style.bar}`} />

      <div className="p-5 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className={`${style.icon} rounded-xl p-2.5 flex-shrink-0`}>
            {getIcon(m.categoria)}
          </div>
          <span className={`${style.badge} px-2.5 py-1 rounded-full text-xs font-bold flex-shrink-0`}>
            {m.categoria}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-base font-bold text-gray-800 leading-snug mb-2 flex-1">
          {m.nome}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {m.descrizione}
        </p>

        {/* Quantity pill */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Quantità</span>
          <span className={`${style.badge} px-3 py-1 rounded-full text-sm font-bold`}>
            {m.quantita}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const Scacchiere: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TUTTI");

  const filtered = materiali.filter(m => {
    const q = searchTerm.toLowerCase();
    const matchSearch = m.nome.toLowerCase().includes(q) || m.descrizione.toLowerCase().includes(q);
    const matchCat = selectedCategory === "TUTTI" || m.categoria === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Indietro
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-emerald-200 px-3 py-2 rounded-full shadow-sm">
            <CheckSquare className="h-3.5 w-3.5 text-emerald-600" />
            {materiali.length} tipologie
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-emerald-400" />
            Patrimonio del Circolo
            <span className="w-8 h-px bg-emerald-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            Materiale <span className="text-emerald-600">Scacchistico</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Inventario completo di scacchiere, pezzi, orologi da torneo e materiale didattico
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-4 sm:p-5 text-center hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-emerald-700">{value}</div>
              <div className="text-xs sm:text-sm text-emerald-600 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Search ── */}
        <div className="max-w-lg mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-400 w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Cerca per nome o descrizione…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent bg-white text-gray-800 placeholder-gray-400 shadow-sm text-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ── Category filter pills ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorie.map(({ id, nome, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                selectedCategory === id
                  ? "bg-chess-dark text-white border-chess-dark shadow-md"
                  : "bg-white text-gray-500 border-gray-200 hover:border-emerald-400 hover:text-emerald-600"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {nome}
              <span className="opacity-60 text-xs">
                ({id === "TUTTI" ? materiali.length : materiali.filter(m => m.categoria === id).length})
              </span>
            </button>
          ))}
        </div>

        {/* ── Count label ── */}
        {(searchTerm || selectedCategory !== "TUTTI") && (
          <p className="text-center text-sm text-gray-400 mb-6">
            {filtered.length} {filtered.length === 1 ? "risultato" : "risultati"}
            {selectedCategory !== "TUTTI" && ` — ${selectedCategory.charAt(0) + selectedCategory.slice(1).toLowerCase()}`}
            {searchTerm && ` per "${searchTerm}"`}
          </p>
        )}

        {/* ── Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(m => <MaterialCard key={m.id} m={m} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <CheckSquare className="w-12 h-12 text-emerald-200 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-4">Nessun materiale trovato</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("TUTTI"); }}
              className="text-emerald-600 font-semibold text-sm hover:underline"
            >
              Ripristina filtri
            </button>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="mt-14 pt-8 border-t border-emerald-100 text-center">
          <p className="text-gray-400 text-sm">
            {materiali.length} tipologie · Materiale Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default Scacchiere;
