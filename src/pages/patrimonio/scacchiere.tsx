import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Clock, Grid, Layers, CheckSquare } from "lucide-react";

const Scacchiere = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("TUTTI");

  const categorie = [
    { id: "TUTTI", nome: "Tutti", icon: Grid },
    { id: "SCACCHIERE", nome: "Scacchiere", icon: CheckSquare },
    { id: "SCACCHI", nome: "Scacchi", icon: CheckSquare },
    { id: "OROLOGI", nome: "Orologi", icon: Clock },
    { id: "DIDATTICHE", nome: "Didattiche", icon: Layers }
  ];

  const materiali = [
    // SCACCHIERE
    { id: 1, categoria: "SCACCHIERE", nome: "Scacchiere in Legno", quantita: "9 + 1 piccola", descrizione: "Scacchiere in legno di alta qualità" },
    { id: 2, categoria: "SCACCHIERE", nome: "Scacchiere in PVC", quantita: "3", descrizione: "Scacchiere in materiale PVC resistente" },
    { id: 3, categoria: "SCACCHIERE", nome: "Scacchiere Avvolgibili Mousepad", quantita: "27", descrizione: "Scacchiere avvolgibili in mousepad" },
    { id: 4, categoria: "SCACCHIERE", nome: "Scacchiere Pieghevoli", quantita: "9", descrizione: "Scacchiere pieghevoli in plastica o cartone" },

    // SCACCHI (PEZZI)
    { id: 5, categoria: "SCACCHI", nome: "Scacchi in Legno", quantita: "21 SET", descrizione: "Scacchi in legno, di cui uno di alto pregio" },
    { id: 6, categoria: "SCACCHI", nome: "Scacchi in Legno Piccoli", quantita: "2 SET", descrizione: "Set di scacchi piccoli in legno" },
    { id: 7, categoria: "SCACCHI", nome: "Scacchi in Plastica Doppio Piombo", quantita: "11 SET", descrizione: "Di cui 1 rosso c/ nero e 5 misura grande avana c/ neri" },
    { id: 8, categoria: "SCACCHI", nome: "Scacchi in Plastica Serie DGT", quantita: "11 SET", descrizione: "Scacchi compatibili con scacchiere digitali DGT" },
    { id: 9, categoria: "SCACCHI", nome: "Scacchi Leggeri da Torneo", quantita: "8 SET avana + 6 SET neri", descrizione: "Scacchi leggeri per torneo o allenamento (vecchi)" },
    { id: 10, categoria: "SCACCHI", nome: "Scacchi Leggeri Bianchi/Neri", quantita: "8 SET", descrizione: "Serie bianchi c/ neri per torneo" },
    { id: 11, categoria: "SCACCHI", nome: "Scacchi Leggeri Colorati", quantita: "21 SET", descrizione: "5 neri, 4 arancioni, 4 fuxia, 4 argento, 4 verdi militare" },
    { id: 12, categoria: "SCACCHI", nome: "Scacchi in Silicone", quantita: "8 SET", descrizione: "1 bianco, 1 nero, 1 viola, 1 verde, 1 rosso, 1 blue, 1 giallo, 1 rosa" },

    // OROLOGI
    { id: 13, categoria: "OROLOGI", nome: "DGT 3000 Limited Edition", quantita: "8", descrizione: "Orologi omologati FIDE per tornei ufficiali" },
    { id: 14, categoria: "OROLOGI", nome: "DGT 2010", quantita: "9", descrizione: "Orologi omologati FIDE, modello precedente" },
    { id: 15, categoria: "OROLOGI", nome: "LEAP", quantita: "9", descrizione: "6 celesti e 3 neri, omologati FIDE" },
    { id: 16, categoria: "OROLOGI", nome: "SAITEK", quantita: "3", descrizione: "2 Mephisto e 1 modello 'astronave'" },
    { id: 17, categoria: "OROLOGI", nome: "Chess Clock Cinesi", quantita: "4", descrizione: "Da allenamento, tipo Saitek astronave" },
    { id: 18, categoria: "OROLOGI", nome: "HQT 101", quantita: "1", descrizione: "Orologio da torneo" },

    // SCACCHIERE DIDATTICHE
    { id: 19, categoria: "DIDATTICHE", nome: "Scacchiera Didattica Verde", quantita: "1", descrizione: "Plastica pieghevole colore verde completa di 2 set completi di pezzi in spugna" },
    { id: 20, categoria: "DIDATTICHE", nome: "Scacchiere Didattiche Avvolgibili Grandi", quantita: "2", descrizione: "Con tasche, complete di 2 serie di carte complete gialli contro marroni" },
    { id: 21, categoria: "DIDATTICHE", nome: "Scacchiere Didattiche Magnetiche", quantita: "2", descrizione: "Avvolgibili piccole magnetiche complete di 2 serie di pezzi gialli contro rossi" }
  ];

  // Filtra i materiali in base alla ricerca e alla categoria
  const filteredMateriali = materiali.filter(materiale => {
    const matchesSearch = materiale.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         materiale.descrizione.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "TUTTI" || materiale.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Statistiche
  const totalItems = materiali.length;
  const scacchiereCount = materiali.filter(m => m.categoria === "SCACCHIERE").length;
  const scacchiCount = materiali.filter(m => m.categoria === "SCACCHI").length;
  const orologiCount = materiali.filter(m => m.categoria === "OROLOGI").length;
  const didatticheCount = materiali.filter(m => m.categoria === "DIDATTICHE").length;

  const getIconForCategory = (category: string) => {
    switch(category) {
      case "SCACCHIERE": return <CheckSquare className="w-6 h-6" />;
      case "SCACCHI": return <CheckSquare className="w-6 h-6" />;
      case "OROLOGI": return <Clock className="w-6 h-6" />;
      case "DIDATTICHE": return <Layers className="w-6 h-6" />;
      default: return <Grid className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "SCACCHIERE": return "bg-emerald-100 text-emerald-700";
      case "SCACCHI": return "bg-amber-100 text-amber-700";
      case "OROLOGI": return "bg-blue-100 text-blue-700";
      case "DIDATTICHE": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-emerald-800 hover:text-emerald-900 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Indietro
          </button>
          <div className="flex items-center">
            <CheckSquare className="w-8 h-8 text-emerald-700 mr-3" />
            <h1 className="text-4xl font-bold text-emerald-900">Materiale Scacchistico</h1>
          </div>
        </div>

        <p className="text-lg text-emerald-700 mb-6 text-center max-w-3xl mx-auto">
          Inventario completo del materiale scacchistico disponibile: scacchiere, pezzi, orologi da torneo e materiale didattico.
        </p>

        {/* Statistiche */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow border border-emerald-200">
            <div className="text-xl font-bold text-emerald-700">{totalItems}</div>
            <div className="text-sm text-emerald-600">Tipi di Materiale</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow border border-emerald-200">
            <div className="text-xl font-bold text-emerald-700">{scacchiereCount}</div>
            <div className="text-sm text-emerald-600">Tipi di Scacchiere</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow border border-emerald-200">
            <div className="text-xl font-bold text-emerald-700">{scacchiCount}</div>
            <div className="text-sm text-emerald-600">Tipi di Set di Scacchi</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow border border-emerald-200">
            <div className="text-xl font-bold text-emerald-700">{orologiCount}</div>
            <div className="text-sm text-emerald-600">Tipi di Orologi</div>
          </div>
        </div>

        {/* Filtri e ricerca */}
        <div className="mb-8">
          {/* Barra di ricerca */}
          <div className="mb-4 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Cerca per nome o descrizione..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-emerald-900 placeholder-emerald-400"
              />
            </div>
          </div>

          {/* Filtri categoria */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categorie.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center px-4 py-2 rounded-full border transition-all duration-200 ${
                    isActive 
                      ? 'bg-emerald-600 text-white border-emerald-600' 
                      : 'bg-white text-emerald-700 border-emerald-300 hover:border-emerald-400 hover:bg-emerald-50'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {cat.nome}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid del materiale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMateriali.map((materiale) => (
            <div
              key={materiale.id}
              className="bg-white rounded-xl shadow-lg border border-emerald-200 hover:shadow-xl transition-all duration-300 p-6 hover:border-emerald-300"
            >
              {/* Icona categoria */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(materiale.categoria)}`}>
                  {getIconForCategory(materiale.categoria)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(materiale.categoria)}`}>
                  {materiale.categoria}
                </span>
              </div>
              
              {/* Contenuto */}
              <div>
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                  {materiale.nome}
                </h3>
                
                <div className="mb-3">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-emerald-700 mr-2">
                      Quantità:
                    </span>
                    <span className="text-emerald-800 font-medium">
                      {materiale.quantita}
                    </span>
                  </div>
                </div>
                
                <p className="text-emerald-600 text-sm leading-relaxed">
                  {materiale.descrizione}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Messaggio se nessun materiale trovato */}
        {filteredMateriali.length === 0 && (
          <div className="text-center py-12">
            <CheckSquare className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <p className="text-emerald-600 text-lg">
              Nessun materiale trovato per "{searchTerm}"
            </p>
            <button 
              onClick={() => {setSearchTerm(""); setSelectedCategory("TUTTI");}}
              className="mt-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-200 transition-colors"
            >
              Ripristina filtri
            </button>
          </div>
        )}

        {/* Totale items visualizzati */}
        {/* {filteredMateriali.length > 0 && (
          <div className="mt-8 pt-6 border-t border-emerald-200 text-center">
            <p className="text-emerald-600">
              Visualizzati {filteredMateriali.length} di {totalItems} materiali
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Scacchiere;