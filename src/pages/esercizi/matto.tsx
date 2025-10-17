import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, BookOpen, ZoomIn, ZoomOut } from "lucide-react";

const Matto = () => {
  const navigate = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(100);

  // Aumenta lo zoom
  const aumentaLivelloZoom = () => {
    if (zoomLevel < 150) {
      setZoomLevel(zoomLevel + 10);
    }
  };

  // Diminuisci lo zoom
  const diminuisciLivelloZoom = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 10);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-800 hover:text-blue-900 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Indietro
          </button>
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-blue-700 mr-3" />
            <h1 className="text-4xl font-bold text-blue-900">5334 Problems, Combinations, and Games</h1>
          </div>
        </div>

        <p className="text-lg text-blue-700 mb-10 text-center max-w-3xl mx-auto">
          La più completa raccolta di problemi scacchistici, combinazioni e giochi mai pubblicata.
          Un'opera essenziale per migliorare la tua abilità tattica e strategica.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pannello laterale con informazioni */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 mb-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Informazioni sul Libro</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-blue-800">Titolo:</h3>
                  <p className="text-gray-700">5334 Problems, Combinations, and Games</p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Autore:</h3>
                  <p className="text-gray-700">László Polgár</p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Pagine:</h3>
                  <p className="text-gray-700">1024</p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Contenuto:</h3>
                  <p className="text-gray-700">5334 problemi scacchistici</p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Difficoltà:</h3>
                  <p className="text-gray-700">Da principiante a maestro</p>
                </div>
                <div>
                  <h3 className="font-medium text-blue-800">Categorie:</h3>
                  <p className="text-gray-700">Scacchi matti, combinazioni, finali, partite complete</p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/public/laszlo-polgar-chess-5334-problems-combinations-games.pdf"
                  download="laszlo-polgar-chess-5334-problems-combinations-games.pdf"
                  className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Scarica PDF
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Struttura del Libro</h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800">Parte I: Problemi di Scacco Matto</h3>
                  <p className="text-sm text-gray-600 mt-1">1500+ problemi di matto in 1-5 mosse</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800">Parte II: Combinazioni Tattiche</h3>
                  <p className="text-sm text-gray-600 mt-1">2000+ combinazioni vincenti</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800">Parte III: Finali</h3>
                  <p className="text-sm text-gray-600 mt-1">800+ posizioni di finale</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800">Parte IV: Partite Complete</h3>
                  <p className="text-sm text-gray-600 mt-1">34 partite didattiche commentate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visualizzatore PDF */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-blue-900">Visualizzatore PDF</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={diminuisciLivelloZoom}
                    disabled={zoomLevel <= 50}
                    className="p-2 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium">
                    {zoomLevel}%
                  </span>
                  <button
                    onClick={aumentaLivelloZoom}
                    disabled={zoomLevel >= 150}
                    className="p-2 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50 min-h-[500px] flex items-center justify-center">
                <div className="max-w-md mx-auto">
                  <div className="text-blue-700 mb-4">
                    <BookOpen className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    5334 Problems, Combinations, and Games
                  </h3>
                  <p className="text-blue-700 mb-4">
                    <a 
                      href="/public/laszlo-polgar-chess-5334-problems-combinations-games.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      Clicca qui per visualizzare il PDF
                    </a>
                  </p>
                  <p className="text-sm text-blue-600">
                    Il file "laszlo-polgar-chess-5334-problems-combinations-games.pdf" è disponibile 
                    nella cartella public e può essere visualizzato o scaricato.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Nota sull'Autore</h3>
                <p className="text-blue-700 text-sm">
                  László Polgár è un pedagogo ungherese noto per il suo esperimento educativo 
                  con le sue tre figlie, che sono diventate tutte grandi maestre di scacchi. 
                  Questo libro è una delle più complete raccolte di problemi scacchistici mai pubblicate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matto;