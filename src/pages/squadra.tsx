import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Target, Medal, Flag, Shield, UserCheck } from 'lucide-react';

const Squadre = () => {
  const squadre = [
    {
      id: 1,
      nome: "RED",
      nomeCompleto: "SQUADRA RED",
      serie: "SERIE B",
      posizione: 3,
      colore: "red",
      coloreHex: "#EF4444",
      giocatori: [
        { nome: "STELLA EMANUELE" },
        { nome: "GRAMMATICO RICCARDO" },
        { nome: "MILITERNI PIERLUIGI" },
        { nome: "CAPARROTTA FEDERICO" },
        { nome: "MASTRODDI FABIO" },
        { nome: "ANGELI FRANCESCO" },
        { nome: "NUZZO DANIELE" },
        { nome: "FUMAGALLI MAURO" },
        { nome: "POIANI FERNANDO CELSO" },
        { nome: "BHATTI MOHAMMAD ADIL" },
        { nome: "GISMONDI GHERARDO MARIA" },
        { nome: "DI MARCO SIMONE" },
        { nome: "DE SIMONE ANDREA" },
        { nome: "IACOVELLI ENRICO" },
        { nome: "VENTURI RICCARDO" }
      ]
    },
    {
      id: 2,
      nome: "BLUE",
      nomeCompleto: "SQUADRA BLUE",
      serie: "PROMOZIONE",
      posizione: 2,
      colore: "blue",
      coloreHex: "#3B82F6",
      giocatori: [
        { nome: "NUZZO DANIELE" },
        { nome: "DE SIMONE ANDREA" },
        { nome: "FUMAGALLI MAURO" },
        { nome: "CUCKA ARGIS" },
        { nome: "IACOVELLI ENRICO" },
        { nome: "BOCCADORI LUIGI" },
        { nome: "FEDERICI SIMONE" },
        { nome: "SCORCELLETTI MATTEO" },
        { nome: "CAMPANILE ANGELO" },
        { nome: "CAMPANILE GIUSEPPE" },
        { nome: "LOIZOS PANAGYOTIS" },
        { nome: "CATALANO DOMENICO" },
        { nome: "MOROTTI GIAN PAOLO" },
        { nome: "RIGGIO SABATINO" },
        { nome: "GISMONDI GHERARDO MARIA" }
      ]
    },
    {
      id: 3,
      nome: "WHITE",
      nomeCompleto: "SQUADRA WHITE",
      serie: "UNDER 30",
      posizione: 1,
      colore: "gray",
      coloreHex: "#9CA3AF",
      giocatori: [
        { nome: "MILITERNI PIERLUIGI" },
        { nome: "DI MARCO SIMONE" },
        { nome: "VENTURI RICCARDO" },
        { nome: "RANIERI LEARCO" },
        { nome: "LAI MARIO" },
        { nome: "D'AMBROSIO ALESSANDRO" },
        { nome: "CARUSO SOFIA" },
        { nome: "CASTALDO EMANUEL" },
        { nome: "CAMPANILE GIUSEPPE" },
        { nome: "VERZILLI ASIA" },
        { nome: "SCORCELLETTI MATTEO" },
        { nome: "SPANU ANASTASIA" },
        { nome: "MUCCI PIETRO" },
        { nome: "CARUSO GREGORIO" },
        { nome: "CASCIANO DANIELE" }
      ]
    },
    {
      id: 4,
      nome: "BLACK",
      nomeCompleto: "SQUADRA BLACK",
      serie: "OVER 50",
      posizione: 4,
      colore: "black",
      coloreHex: "#1F2937",
      giocatori: [
        { nome: "ANGELI FRANCESCO" },
        { nome: "GISMONDI GHERARDO MARIA" },
        { nome: "BIAGIOLI ITALO" },
        { nome: "POLESE PIERLUIGI" },
        { nome: "BOCCADORI LUIGI" },     
        { nome: "TOMA FLORIN" },
        { nome: "CATALANO DOMENICO" },
        { nome: "CAMPANILE ANGELO" },
        { nome: "VENTILI ROBERTO" },
        { nome: "PAOLONI ROBERTO" },
        { nome: "PIERGOTTI GOFFREDO" },
        { nome: "MOROTTI GIAN PAOLO" },
        { nome: "PENCELLI MAURIZIO" },
        { nome: "GALIZIA CLAUDIO" },
        { nome: "RICCI ROLANDO" }
      ]
    }
  ];

  // Statistiche
  const totaleGiocatori = squadre.reduce((total, squadra) => total + squadra.giocatori.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-chess-dark/5 px-4 sm:px-6 lg:px-8 py-8">
      {/* Header con Torna alla Home */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center text-chess-gold hover:text-chess-dark transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Torna alla Home
          </Link>
          
          <div className="flex items-center text-sm text-gray-600">
            <Trophy className="h-4 w-4 mr-2" />
            <span>Serie B - Stagione 2025/2026</span>
          </div>
        </div>
      </div>

      {/* Intestazione */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-chess-gold to-chess-dark rounded-full blur opacity-30"></div>
              <div className="relative bg-white p-3 rounded-full">
                <Shield className="w-8 h-8 text-chess-dark" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
            Le Nostre Squadre
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Le formazioni ufficiali dell'Avamposto Garibaldino per la Serie B
          </p>
        </div>

        {/* Statistiche */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
            <Users className="h-8 w-8 text-chess-gold mx-auto mb-3" />
            <div className="text-2xl font-bold text-chess-dark">{squadre.length}</div>
            <div className="text-gray-600">Squadre</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
            <Trophy className="h-8 w-8 text-chess-gold mx-auto mb-3" />
            <div className="text-2xl font-bold text-chess-dark">SERIE B</div>
            <div className="text-gray-600">Campionato maggiore</div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
            <Users className="h-8 w-8 text-chess-gold mx-auto mb-3" />
            <div className="text-2xl font-bold text-chess-dark">{totaleGiocatori}</div>
            <div className="text-gray-600">Totale Giocatori</div>
          </div>
        </div>
      </div>

      {/* Grid delle squadre - ora 4 colonne su schermi grandi */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {squadre.map((squadra) => (
          <div 
            key={squadra.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Header squadra */}
            <div 
              className="relative h-40 p-6 flex flex-col justify-end"
              style={{ backgroundColor: squadra.coloreHex }}
            >
              <div className="absolute top-4 right-4">
                {/* <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  {getPodiumIcon(squadra.posizione)}
                </div> */}
              </div>
              
              <div className="relative">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                  <span className="text-white text-sm font-semibold">{squadra.serie}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{squadra.nomeCompleto}</h2>
                <div className="flex items-center">
                  {/* <div className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-bold">
                    LUGAR {squadra.posizione}°
                  </div> */}
                </div>
              </div>
            </div>

            {/* Contenuto squadra */}
            <div className="p-6">
              {/* Info squadra */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">Giocatori</div>
                  <div className="text-xl font-bold text-chess-dark">{squadra.giocatori.length}</div>
                </div>
              </div>

              {/* Lista giocatori */}
              <div>
                <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Formazione
                </h3>
                <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                  {squadra.giocatori.map((giocatore, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-700 font-bold text-sm mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">{giocatore.nome}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer squadra */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Squadra #{squadra.id}
                </div>
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: squadra.coloreHex }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">{squadra.nome}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          Serie B • Stagione 2025/2026 • Avamposto Garibaldino
        </p>
      </div>
    </div>
  );
};

export default Squadre;