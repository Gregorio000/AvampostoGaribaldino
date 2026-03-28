import { useState, useEffect, useCallback } from "react";
import { Calendar, ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const photos: string[] = [
  "/turno5/turno5 (6).jpg",
  "/turno5/turno5.jpeg",
  "/turno5/turno5 (1).jpg",
  "/turno5/turno5 (2).jpg",
  "/turno5/turno5 (3).jpg",
  "/turno5/turno5 (4).jpg",
  "/turno5/turno5 (5).jpg",
  
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
   RISULTATI
══════════════════════════════════════════════ */
const risultati = [
  {
    colore: "BLACK",
    barStyle: "bg-gray-900",
    badgeStyle: "bg-gray-900 text-white",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
    avversario: "Frascati 4",
    sede: "Fumetteria Star Shop, Fonte Nuova",
    punteggio: "2,5 – 1,5",
    girone: "Girone 1",
    highlight: "Ventilii decisivo in quarta scacchiera, Gismondi batte De Angelis in prima. Patta di Polese.",
  },
  {
    colore: "WHITE",
    barStyle: "bg-gray-300",
    badgeStyle: "bg-gray-100 text-gray-800 border border-gray-300",
    esito: "SCONFITTA",
    esitoStyle: "bg-red-100 text-red-700",
    avversario: "Alvise Zichichi B",
    sede: "Fantasy Pub, Fonte Nuova",
    punteggio: "1 – 3",
    girone: "Girone 2",
    highlight: "Venturi vince in prima contro il 1N Bruno. Esordio per Giuseppe Campanile in quarta — pianista eccezionale proveniente dalla provincia di Napoli.",
  },
  {
    colore: "BLUE",
    barStyle: "bg-blue-600",
    badgeStyle: "bg-blue-600 text-white",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
    avversario: "Alvise Zichichi C",
    sede: "Fantasy Pub, Fonte Nuova",
    punteggio: "3 – 1",
    girone: "Girone 3",
    highlight: "Esordio di Angelo Campanile in quarta con una bella patta alla prima partita in campionato.",
  },
];

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const Turno5 = () => {
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

  const prev = useCallback(() =>
    setSelectedIndex(i => (i === null ? 0 : i === 0 ? photos.length - 1 : i - 1)), []);

  const next = useCallback(() =>
    setSelectedIndex(i => (i === null ? 0 : i === photos.length - 1 ? 0 : i + 1)), []);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedIndex !== null) closeModal();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedIndex, closeModal]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {selectedIndex !== null && photos.length > 0 && (
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
          {photos.length > 0 && (
            <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
              <Camera className="h-3.5 w-3.5 text-chess-gold" />
              {photos.length} foto
            </div>
          )}
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Serie Promozione Lazio · Turno Finale
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-5">
            5° Turno <span className="text-chess-gold">Campionato a Squadre FSI</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-chess-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow">
            <Calendar className="h-4 w-4" />
            Domenica 22 Marzo 2026
          </div>
        </div>

        {/* ── Banner ── */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-gradient-to-r from-gray-50 to-amber-50 border border-gray-200 rounded-2xl p-5 text-center">
            <p className="text-xl font-bold text-chess-dark mb-1">5° Turno — Sipario sul campionato</p>
            <p className="text-sm text-gray-500">Black e Blue vincono · White cede 1–3 a Ladispoli</p>
          </div>
        </div>

        {/* ── Risultati cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {risultati.map(r => (
            <div key={r.colore} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`h-1.5 w-full ${r.barStyle}`} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${r.badgeStyle} text-xs font-bold px-3 py-1 rounded-full`}>
                    {r.colore}
                  </span>
                  <span className={`${r.esitoStyle} text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {r.esito}
                  </span>
                </div>
                <p className="text-lg font-bold text-chess-dark mb-1">{r.punteggio}</p>
                <p className="text-sm font-medium text-gray-600 mb-1">vs {r.avversario}</p>
                <p className="text-xs text-gray-400 mb-3">📍 {r.sede} · {r.girone}</p>
                <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {r.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Cronaca ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Cronaca</span>
          </div>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Tutte le partite si sono svolte in mattinata per permettere ai giocatori di tornare alle proprie famiglie in orario consono, anche nel rispetto del referendum. Un turno non decisivo per la promozione in Serie C ormai definita, ma importante per la classifica finale dei gironi.
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Nel <span className="font-semibold text-chess-dark">Girone 1</span>, l'Avamposto Garibaldino <span className="font-semibold">Black</span> vince 2,5–1,5 contro Frascati 4 alla fumetteria Star Shop di Fonte Nuova. Decisivi <span className="font-semibold">Ventilii</span> in quarta scacchiera, ormai completamente ritrovato, e il presidente <span className="font-semibold">Gismondi</span> in prima che batte nettamente il tenace De Angelis. <span className="font-semibold">Polese</span> chiude con una patta contro il giovane avversario, allievo di Ragonese.
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Nel <span className="font-semibold text-chess-dark">Girone 2</span>, la squadra <span className="font-semibold">White</span> — decimata dalle defezioni — schiera <span className="font-semibold">Venturi</span> in prima, i giovani <span className="font-semibold">Alessandro</span> ed <span className="font-semibold">Emanuel</span> in seconda e terza, e l'esordiente <span className="font-semibold">Giuseppe Campanile</span> in quarta. Venturi conquista una bella vittoria contro il 1N Bruno, ma la squadra cede 1–3 alla capolista Alvise Zichichi B.
          </p>

          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Nel <span className="font-semibold text-chess-dark">Girone 3</span>, il <span className="font-semibold">Blue</span> batte Alvise Zichichi C per 3–1 al Fantasy Pub. In quarta scacchiera esordisce <span className="font-semibold">Angelo Campanile</span>, papà di Giuseppe — alla sua prima partita in campionato conquista subito una bella patta.
          </p>

          <p className="text-sm text-chess-gold font-semibold italic border-t border-gray-100 pt-4">
            "Dopo le partite, tra i componenti delle squadre garibaldine e di Ladispoli si è svolto un gustoso terzo tempo a tavola! 😅"
          </p>
        </div>

        {/* ── Galleria fotografica ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 bg-chess-gold rounded-full" />
              <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Galleria fotografica</span>
            </div>
            {photos.length > 0 && (
              <span className="text-xs text-gray-400">{photos.length} foto</span>
            )}
          </div>

          {photos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <div
                  key={i}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => openModal(i)}
                >
                  <img
                    src={photo}
                    alt={`Turno 5 foto ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center">
              <Camera className="h-8 w-8 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Le foto saranno disponibili a breve</p>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            5° Turno Serie Promozione · 22 Marzo 2026 · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default Turno5;
