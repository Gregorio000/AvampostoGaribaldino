import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const photos = [
  "/giochiamo-a-scacchi/CASALE FERONIA VILLAGE.jpg",
  "/giochiamo-a-scacchi/CIG 2021 Attimi di relax.jpg",
  "/giochiamo-a-scacchi/CIS 2025 4 TURNO.jpg",
  "/giochiamo-a-scacchi/domenica 15 nov 2020.jpg",
  "/giochiamo-a-scacchi/foto Collegio Arbitrale_.jpg",
  ...Array.from({ length: 125 }, (_, i) => `/giochiamo-a-scacchi/Foto da Gherardo Gismondi(${i + 1}).jpg`),
  "/giochiamo-a-scacchi/Foto da Gherardo Gismondi.jpg",
  "/giochiamo-a-scacchi/Foto lezione a Matias(1).jpg",
  "/giochiamo-a-scacchi/foto lezione a Matias.jpg",
  "/giochiamo-a-scacchi/Foto oggi_.jpg",
  "/giochiamo-a-scacchi/Foto sala da gioco con indicazione di Shanti.jpg",
  "/giochiamo-a-scacchi/Foto scacchi a Palombara Sabina_.jpg",
  "/giochiamo-a-scacchi/foto scacchi centro anziani_.jpg",
  "/giochiamo-a-scacchi/Foto scacchiera gigante.jpg",
  "/giochiamo-a-scacchi/Foto simultanea oggi 2.jpg",
  "/giochiamo-a-scacchi/Foto simultanea oggi 3.jpg",
  "/giochiamo-a-scacchi/Foto simultanea oggi 4.jpg",
  "/giochiamo-a-scacchi/foto simultanea oggi.jpg",
  "/giochiamo-a-scacchi/Gubbio_2018.jpg",
  "/giochiamo-a-scacchi/IMG-20151010-WA0000.jpg",
  "/giochiamo-a-scacchi/la_squadra_promossa_in_C.jpg",
  "/giochiamo-a-scacchi/lezione_IM_di_benedetto.jpg",
  "/giochiamo-a-scacchi/lezione_in_biblioteca.jpg",
  "/giochiamo-a-scacchi/lezione_scacchi_alessio(1).jpg",
  "/giochiamo-a-scacchi/lezione_scacchi_alessio.jpg",
  "/giochiamo-a-scacchi/momento scacchiera gigante_.jpg",
  "/giochiamo-a-scacchi/sala gioco.jpg",
  "/giochiamo-a-scacchi/scacchi a santa lucia_.jpg",
  "/giochiamo-a-scacchi/scacchi_a_palazzo_orsini.jpg",
  "/giochiamo-a-scacchi/scacchi_a_scuola.jpg",
  "/giochiamo-a-scacchi/scacchi_colorati.jpg",
  "/giochiamo-a-scacchi/scacchi_inclusivi.jpg",
  "/giochiamo-a-scacchi/scacchi_viventi_fasti_di_autunno.jpg",
  "/giochiamo-a-scacchi/scacchiera_tricolore.jpg",
  "/giochiamo-a-scacchi/scacchiste.jpg",
  "/giochiamo-a-scacchi/Screenshot.png",
  "/giochiamo-a-scacchi/scuola_di_scacchi_nel_500.jpg",
  "/giochiamo-a-scacchi/simultanea_gherardo.jpg",
  "/giochiamo-a-scacchi/simultanea_IM_Edoardo_Di_Benedetto_2450_elo.jpg",
  "/giochiamo-a-scacchi/torneo_in_piazza_palombara_sabina.jpg",
  "/giochiamo-a-scacchi/torneo_mentana_2023.jpg",
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
const AllenamentoQuotidiano = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = useCallback((i: number) => {
    setSelectedIndex(i);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

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
            Allenamento <span className="text-chess-gold">Quotidiano</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            I momenti di gioco, allenamento e condivisione che rendono vivo il nostro circolo ogni giorno
          </p>
        </div>

        {/* ── Hero ── */}
        <div
          className="rounded-2xl overflow-hidden shadow-xl mb-12 cursor-pointer max-w-3xl mx-auto"
          onClick={() => openModal(0)}
        >
          <img
            src={photos[2]}
            alt="Allenamento Quotidiano"
            className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* ── Gallery ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Galleria fotografica</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => openModal(i)}
              >
                <img
                  src={photo}
                  alt={`Allenamento ${i + 1}`}
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
            Allenamento Quotidiano · Avamposto Garibaldino · Mentana
          </p>
        </div>

      </div>
    </div>
  );
};

export default AllenamentoQuotidiano;
