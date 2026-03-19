import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const photos = [
  "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
  "/scacchi-mentana/torneo_mentana_2023 (1).jpg",
  "/scacchi-mentana/la_squadra_promossa_in_C.jpg",
  "/scacchi-mentana/Gubbio_2018.jpg",
  "/scacchi-mentana/lezione_IM_di_benedetto.jpg",
  "/scacchi-mentana/lezione_in_biblioteca (1).jpg",
  "/scacchi-mentana/lezione_scacchi_alessio (1).jpg",
  "/scacchi-mentana/scuola_di_scacchi_nel_500 (1).jpg",
  "/scacchi-mentana/simultanea_IM_Edoardo_Di_Benedetto.jpg",
  "/scacchi-mentana/simultanea_gherardo (1).jpg",
  "/scacchi-mentana/foto simultanea oggi.jpg",
  "/scacchi-mentana/scacchi_a_palazzo_orsini (1).jpg",
  "/scacchi-mentana/scacchi_a_scuola.jpg",
  "/scacchi-mentana/foto scacchi centro anziani .jpg",
  "/scacchi-mentana/domenica 15 nov 2020.jpg",
  "/scacchi-mentana/CIG 2021 Attimi di relax.jpg",
  "/scacchi-mentana/Foto oggi .jpg",
  "/scacchi-mentana/Foto scacchi a Palombara Sabina .jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (1).jpg",
  "/scacchi-mentana/Foto lezione a Matias (1).jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204024.438.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204032.772.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204037.266.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204042.915.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204045.612.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204048.629.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204052.886.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204058.849.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204118.718.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204123.222.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204127.790.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204130.471.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204136.994.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204140.396.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204144.088.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204146.782.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204149.719.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204152.862.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204159.104.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204203.432.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204206.042.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204208.629.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204211.412.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204214.085.jpg",
  "/scacchi-mentana/Foto da 2023-11-23T204315.916.jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi.jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (3).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (14).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (15).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (16).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (18).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (19).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (20).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (21).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (22).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (23).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (24).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (25).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (26).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (27).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (28).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (29).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (30).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (31).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (32).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (33).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (34).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (35).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (36).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (37).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (38).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (39).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (40).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (41).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (42).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (43).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (44).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (45).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (46).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (47).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (48).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (49).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (50).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (51).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (52).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (53).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (54).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (55).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (56).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (57).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (58).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (59).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (60).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (61).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (62).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (63).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (64).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (65).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (66).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (67).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (68).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (69).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (70).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (71).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (72).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (73).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (74).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (75).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (76).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (77).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (78).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (79).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (80).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (81).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (82).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (84).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (85).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (86).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (87).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (88).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (89).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (90).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (91).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (92).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (93).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (94).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (95).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (96).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (97).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (98).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (99).jpg",
  "/scacchi-mentana/Foto da Gherardo Gismondi (100).jpg",
  "/scacchi-mentana/foto lezione a Matias.jpg",
  "/scacchi-mentana/Foto simultanea oggi 2.jpg",
  "/scacchi-mentana/Foto simultanea oggi 3.jpg",
  "/scacchi-mentana/Foto simultanea oggi 4.jpg",
  "/scacchi-mentana/lezione_scacchi_alessio (2).jpg",
];

const highlights = [
  { label: "Fondata il", value: "6 Giugno 2015" },
  { label: "Campionato FSI", value: "Dal 2018" },
  { label: "Sede", value: "Mentana, RM" },
  { label: "Archivio foto", value: `${photos.length} foto` },
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
const ScacchiMentana = () => {
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
            Archivio Storico
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-4">
            Scacchi a <span className="text-chess-gold">Mentana</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Dieci anni di passione, tornei, lezioni e comunità
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {highlights.map(h => (
            <div key={h.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center">
              <p className="text-lg font-bold text-chess-dark">{h.value}</p>
              <p className="text-xs text-gray-400 mt-1">{h.label}</p>
            </div>
          ))}
        </div>

        {/* ── Chi siamo ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-12 max-w-4xl mx-auto space-y-4">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-chess-dark">L'ASD Mentana Scacchi Avamposto Garibaldino</span> è nata il{" "}
            <span className="text-chess-gold font-semibold">6 giugno 2015</span> con l'obiettivo di promuovere e diffondere
            il gioco degli scacchi nelle zone di Mentana, Fonte Nuova e Monterotondo.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Nel corso degli anni ha organizzato tornei amatoriali e ufficiali anche in realtà limitrofe come Palombara
            Sabina, Moricone e Fiano Romano, e dal 2018 partecipa al campionato a squadre FSI con più formazioni.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            Alcuni giovani tesserati hanno preso parte ai campionati individuali nazionali, regionali e provinciali di
            categoria juniores. Punto di orgoglio dell'associazione è la{" "}
            <span className="font-semibold text-chess-dark">Scacchiera Gigante</span> realizzata di fronte alla sede
            operativa in Via Giovanni Giolitti 21/23, pienamente operativa per grandi e piccini.
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
                  alt={`Scacchi a Mentana ${i + 1}`}
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
            Scacchi a Mentana · Dal 2015 · ASD Mentana Scacchi Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default ScacchiMentana;
