import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const photos = [
  "/scacchi-al-camybar/IMG-20201108-WA0004.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0005.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0006.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0007.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0009.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0010.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0011.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0012.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0013.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0014.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0015.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0016.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0017.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0018.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0019.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0020.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0021.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0022.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0023.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0024.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0025.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0026.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0027.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0028.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0029.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0030.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0031.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0032.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0033.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0034.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0035.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0042.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0043.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0044.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0045.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0046.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0047.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0048.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0049.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0050.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0051.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0052.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0053.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0054.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0055.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0056.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0058.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0059.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0061.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0062.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0063.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0064.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0065.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0066.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0067.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0068.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0069.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0070.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0071.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0072.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0073.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0074.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0075.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0076.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0077.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0078.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0079.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0080.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0081.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0082.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0083.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0084.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0086.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0087.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0088.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0089.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0090.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0091.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0092.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0093.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0094.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0095.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0096.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0097.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0098.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0099.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0100.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0101.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0102.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0103.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0104.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0105.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0106.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0107.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0108.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0109.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0110.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0111.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0112.jpg",
  "/scacchi-al-camybar/IMG-20201108-WA0113.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0001.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0002.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0003.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0004.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0005.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0006.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0007.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0008.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0009.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0010.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0011.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0012.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0013.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0014.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0015.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0016.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0017.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0018.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0019.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0020.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0021.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0023.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0024.jpg",
  "/scacchi-al-camybar/IMG-20201109-WA0025.jpg",
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
const ScacchiAlCamybar = () => {
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
            Novembre 2020
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-4">
            Scacchi al <span className="text-chess-gold">Camybar</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Partite, tornei e momenti di vita del circolo raccolti in un archivio fotografico
          </p>
        </div>

        {/* ── Descrizione ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12 max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            La vita del circolo prende forma tra le partite quotidiane e l'emozione dei tornei.
            In questa pagina raccogliamo i momenti più salienti della nostra storia scacchistica.
          </p>
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
                  alt={`Camybar ${i + 1}`}
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
            Scacchi al Camybar · Novembre 2020 · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default ScacchiAlCamybar;
