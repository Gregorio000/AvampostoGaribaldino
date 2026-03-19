import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const photos = [
  "/evento-starshop/evento-starshop.jpeg",
  "/evento-starshop/evento-starshop-0.jpeg",
  "/evento-starshop/evento-starshop-00.jpeg",
  "/evento-starshop/evento-starshop-1.jpeg",
  "/evento-starshop/evento-starshop-2.jpeg",
  "/evento-starshop/evento-starshop-3.jpeg",
  "/evento-starshop/evento-starshop-4.jpeg",
  "/evento-starshop/evento-starshop-5.jpeg",
  "/evento-starshop/evento-starshop-6.jpeg",
  "/evento-starshop/evento-starshop-7.jpeg",
  "/evento-starshop/evento-starshop-8.jpeg",
  "/evento-starshop/evento-starshop-9.jpeg",
];

/* ══════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════ */
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
      <button
        className="absolute left-3 sm:left-5 text-white/70 hover:text-white bg-black/30 rounded-full p-2.5 z-10"
        onClick={e => { e.stopPropagation(); onPrev(); }}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <img
        src={src}
        alt={`Foto ${index + 1}`}
        className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      />
      <button
        className="absolute right-3 sm:right-5 text-white/70 hover:text-white bg-black/30 rounded-full p-2.5 z-10"
        onClick={e => { e.stopPropagation(); onNext(); }}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center text-white/50 text-sm">
        {index + 1} / {total}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const Starshop = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((i: number) => {
    setSelectedIndex(i);
    document.body.style.overflow = "hidden";
    window.history.pushState({ lightbox: true }, "");
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }, []);

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

  const prev = useCallback(() =>
    setSelectedIndex(i => (i === null ? 0 : i === 0 ? photos.length - 1 : i - 1)), []);

  const next = useCallback(() =>
    setSelectedIndex(i => (i === null ? 0 : i === photos.length - 1 ? 0 : i + 1)), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {selectedIndex !== null && (
        <Lightbox
          index={selectedIndex}
          total={photos.length}
          src={photos[selectedIndex]}
          onClose={closeModal}
          onPrev={prev}
          onNext={next}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna indietro
          </button>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Camera className="h-3.5 w-3.5 text-chess-gold" />
            {photos.length} foto
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Avamposto Garibaldino
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-4">
            Evento <span className="text-chess-gold">Starshop</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            13 Aprile · 15 Novembre 2025 · Starshop, Fonte Nuova
          </p>
        </div>

        {/* ── Descrizione ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-10 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            In due occasioni l'Avamposto Garibaldino ha collaborato con la{" "}
            <span className="font-semibold text-chess-dark">Fumetteria Starshop</span> di Fonte Nuova
            per diffondere la passione degli scacchi tra i più giovani e la comunità locale.
          </p>
        </div>

        {/* ── Hero ── */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl mb-12 cursor-pointer max-w-3xl mx-auto"
          onClick={() => openModal(0)}
        >
          <img
            src={photos[0]}
            alt="Evento Starshop"
            className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* ── Gallery ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Galleria fotografica</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => openModal(i)}
              >
                <img
                  src={photo}
                  alt={`Starshop ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            Evento Starshop · Aprile & Novembre 2025 · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default Starshop;
