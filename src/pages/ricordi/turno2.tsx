import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const photos = [
  "/turno2/turno2.jpg",
  "/turno2/turno2 (1).jpeg",
  "/turno2/turno2 (2).jpeg",
  "/turno2/turno2 (3).jpeg",
  "/turno2/turno2 (4).jpeg",
  "/turno2/turno2 (5).jpeg",
  "/turno2/turno2 (6).jpeg",
  "/turno2/turno2 (7).jpeg",
  "/turno2/turno2 (8).jpeg",
  "/turno2/turno2 (9).jpeg",
  "/turno2/turno2 (10).jpeg",
  "/turno2/turno2 (11).jpeg",
  "/turno2/classifica1.jpg",
  "/turno2/classifica2.jpg",
  "/turno2/classifica3.jpg",
];

const Lightbox = ({
  index, total, src, onClose, onPrev, onNext,
}: {
  index: number; total: number; src: string;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/30 rounded-full p-2 z-10" onClick={onClose}>
        <X className="h-6 w-6" />
      </button>
      <button className="absolute left-3 sm:left-5 text-white/70 hover:text-white bg-black/30 rounded-full p-2.5 z-10"
        onClick={e => { e.stopPropagation(); onPrev(); }}>
        <ChevronLeft className="h-6 w-6" />
      </button>
      <img src={src} alt={`Foto ${index + 1}`}
        className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()} />
      <button className="absolute right-3 sm:right-5 text-white/70 hover:text-white bg-black/30 rounded-full p-2.5 z-10"
        onClick={e => { e.stopPropagation(); onNext(); }}>
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center text-white/50 text-sm">
        {index + 1} / {total}
      </div>
    </div>
  );
};

const risultati = [
  {
    colore: "BLACK",
    barStyle: "bg-gray-900",
    badgeStyle: "bg-gray-900 text-white",
    esito: "SCONFITTA",
    esitoStyle: "bg-red-100 text-red-700",
    avversario: "Scacchi Valle Aniene 5",
    sede: "Fantasy Pub, Fonte Nuova",
    punteggio: "0,5 – 3,5",
    girone: "Girone 1",
    highlight: "Pesante sconfitta contro la capolista del girone.",
  },
  {
    colore: "BLUE",
    barStyle: "bg-blue-600",
    badgeStyle: "bg-blue-600 text-white",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
    avversario: "Scuolascacchi MB",
    sede: "Fantasy Pub, Fonte Nuova",
    punteggio: "3 – 1",
    girone: "Girone 2",
    highlight: "Splendida vittoria del Blue che supera nettamente gli avversari.",
  },
  {
    colore: "WHITE",
    barStyle: "bg-gray-300",
    badgeStyle: "bg-gray-100 text-gray-800 border border-gray-300",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
    avversario: "Scacchi Valle Aniene 4",
    sede: "Fumetteria Starshop, S. Lucia",
    punteggio: "3,5 – 0,5",
    girone: "Girone 3",
    highlight: "Travolgente successo! Speranze di qualificazione vive.",
  },
];

const Turno2 = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal  = useCallback((i: number) => { setSelectedIndex(i); document.body.style.overflow = "hidden"; window.history.pushState({ lightbox: true }, ""); }, []);
  const closeModal = useCallback(() => { setSelectedIndex(null); document.body.style.overflow = ""; }, []);

  // Intercetta il tasto indietro fisico di Android/browser
  useEffect(() => {
    const handlePopState = () => {
      if (selectedIndex !== null) {
        closeModal();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedIndex, closeModal]);
  const prev = useCallback(() => setSelectedIndex(i => (i === null ? 0 : i === 0 ? photos.length - 1 : i - 1)), []);
  const next = useCallback(() => setSelectedIndex(i => (i === null ? 0 : i === photos.length - 1 ? 0 : i + 1)), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {selectedIndex !== null && (
        <Lightbox index={selectedIndex} total={photos.length} src={photos[selectedIndex]}
          onClose={closeModal} onPrev={prev} onNext={next} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <button onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Torna indietro
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Camera className="h-3.5 w-3.5 text-chess-gold" />
            {photos.length} foto
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Serie Promozione Lazio
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-5">
            2° Turno <span className="text-chess-gold">Campionato a Squadre FSI</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-chess-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow">
            <Calendar className="h-4 w-4" />
            Domenica 8 Febbraio 2026
          </div>
        </div>

        {/* Risultati */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {risultati.map(r => (
            <div key={r.colore} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`h-1.5 w-full ${r.barStyle}`} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${r.badgeStyle} text-xs font-bold px-3 py-1 rounded-full`}>{r.colore}</span>
                  <span className={`${r.esitoStyle} text-xs font-bold px-2.5 py-1 rounded-full`}>{r.esito}</span>
                </div>
                <p className="text-lg font-bold text-chess-dark mb-1">{r.punteggio}</p>
                <p className="text-sm font-medium text-gray-600 mb-1">vs {r.avversario}</p>
                <p className="text-xs text-gray-400 mb-3">📍 {r.sede} · {r.girone}</p>
                <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">{r.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Galleria fotografica</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <div key={i}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => openModal(i)}>
                <img src={photo} alt={`Turno 2 foto ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">2° Turno Serie Promozione · 8 Febbraio 2026 · Avamposto Garibaldino</p>
        </div>

      </div>
    </div>
  );
};

export default Turno2;
