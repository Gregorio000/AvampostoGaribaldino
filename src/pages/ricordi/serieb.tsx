import { useState, useEffect, useCallback } from "react";
import { Calendar, ArrowLeft, Camera, ChevronLeft, ChevronRight, X, ZoomIn, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const photos: string[] = [
  "/serieb/serieb (1).jpeg",
  "/serieb/serieb (2).jpeg",
  "/serieb/serieb (3).jpeg",
  "/serieb/serieb (4).jpeg",
  "/serieb/serieb (5).jpeg",
  "/serieb/serieb (6).jpeg",
  "/serieb/serieb (7).jpeg",
  "/serieb/serieb (8).jpeg",
  "/serieb/serieb (9).jpeg",
  "/serieb/serieb (10).jpeg",
  "/serieb/serieb (11).jpeg",
  "/serieb/serieb (12).jpeg",
  "/serieb/serieb (13).jpeg",
  "/serieb/serieb (14).jpeg",
  "/serieb/serieb (15).jpeg",
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
   DATI TURNI
══════════════════════════════════════════════ */
const turni = [
  {
    numero: 1,
    data: "13 Marzo 2026",
    casa: false,
    avversario: "Circolo Mario Albano A",
    punteggio: "2 – 2",
    squadra: "1 – 1",
    esito: "PAREGGIO",
    esitoStyle: "bg-yellow-100 text-yellow-700",
  },
  {
    numero: 2,
    data: "14 Marzo 2026",
    casa: false,
    avversario: "Valleaniene Tivoli P",
    punteggio: "0.5 – 3.5",
    squadra: "0 – 2",
    esito: "SCONFITTA",
    esitoStyle: "bg-red-100 text-red-700",
  },
  {
    numero: 3,
    data: "14 Marzo 2026",
    casa: false,
    avversario: "ASD Alfieri Della Tuscia 2",
    punteggio: "3 – 1",
    squadra: "2 – 0",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
  },
  {
    numero: 4,
    data: "15 Marzo 2026",
    casa: false,
    avversario: "Scacchianiene Tivoli 1",
    punteggio: "1 – 3",
    squadra: "0 – 2",
    esito: "SCONFITTA",
    esitoStyle: "bg-red-100 text-red-700",
  },
  {
    numero: 5,
    data: "15 Marzo 2026",
    casa: false,
    avversario: "Circolo Scacchi Vitinia",
    punteggio: "1 – 0",
    squadra: "2 – 0",
    esito: "VITTORIA",
    esitoStyle: "bg-green-100 text-green-700",
  },
];

const classifica = [
  { pos: 1, nome: "Scacchianiene Tivoli 1",    pt: 9, ind: 15.0, garibaldini: false },
  { pos: 2, nome: "Circolo Scacchi Vitinia",   pt: 6, ind: 12.0, garibaldini: false },
  { pos: 3, nome: "Circolo Mario Albano A",    pt: 6, ind: 10.5, garibaldini: false },
  { pos: 4, nome: "Valleaniene Tivoli P",       pt: 4, ind: 8.5,  garibaldini: false },
  { pos: 5, nome: "Avamposto Garibaldino RED", pt: 3, ind: 9.0,  garibaldini: true  },
  { pos: 6, nome: "ASD Alfieri Della Tuscia 2",pt: 0, ind: 5.0,  garibaldini: false },
];

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const Serieb1 = () => {
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
            Campionato a Squadre FSI · Serie B Lazio
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight mb-5">
            Avamposto Garibaldino <span className="text-chess-gold">RED</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-chess-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow">
            <Calendar className="h-4 w-4" />
            13 – 15 Marzo 2026
          </div>
        </div>

        {/* ── Banner ricorso ── */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Ricorso in corso</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                Secondo la classifica finale siamo retrocessi. Ma presenteremo ricorso perché ci sono stati levati 2 punti.
                Faremo tutto il possibile per ottenere giustizia. State calmi — nulla è perduto.{" "}
                <span className="font-bold">Noi non ci arrenderemo MAI.</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Classifica finale ── */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Classifica Finale</span>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-chess-dark via-chess-gold to-chess-dark" />
            <div className="divide-y divide-gray-50">
              {/* Header */}
              <div className="grid grid-cols-12 px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide">
                <span className="col-span-1">#</span>
                <span className="col-span-7">Squadra</span>
                <span className="col-span-2 text-center">Pt</span>
                <span className="col-span-2 text-center">Ind.</span>
              </div>
              {classifica.map((s) => (
                <div
                  key={s.pos}
                  className={`grid grid-cols-12 px-4 py-3 items-center ${s.garibaldini ? "bg-chess-gold/5 border-l-4 border-chess-gold" : ""}`}
                >
                  <span className={`col-span-1 text-sm font-bold ${s.garibaldini ? "text-chess-gold" : "text-gray-400"}`}>
                    {s.pos}
                  </span>
                  <span className={`col-span-7 text-sm font-semibold ${s.garibaldini ? "text-chess-dark" : "text-gray-700"}`}>
                    {s.nome}
                    {s.garibaldini && (
                      <span className="ml-2 text-xs bg-chess-gold/20 text-chess-gold px-2 py-0.5 rounded-full font-bold">NOI</span>
                    )}
                  </span>
                  <span className={`col-span-2 text-center text-sm font-bold ${s.garibaldini ? "text-chess-gold" : "text-chess-dark"}`}>
                    {s.pt}
                  </span>
                  <span className="col-span-2 text-center text-sm text-gray-400">{s.ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Riepilogo turni ── */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Riepilogo 5 Turni</span>
          </div>
          <div className="space-y-3">
            {turni.map((t) => (
              <div key={t.numero} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-chess-dark text-white text-xs font-bold flex items-center justify-center">
                      T{t.numero}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-chess-dark">vs {t.avversario}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${t.casa ? "bg-blue-50 text-blue-600" : "bg-gray-100 text-gray-500"}`}>
                          {t.casa ? "Casa" : "Trasferta"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{t.data} · Villanova di Guidonia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Punti ind.</p>
                      <p className="text-sm font-bold text-chess-dark">{t.punteggio}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Squadra</p>
                      <p className="text-sm font-bold text-chess-dark">{t.squadra}</p>
                    </div>
                    <span className={`${t.esitoStyle} text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {t.esito}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totale */}
          {/* <div className="mt-4 bg-chess-dark rounded-2xl p-4 flex items-center justify-between">
            <span className="text-white font-bold text-sm">Totale campionato</span>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">2V · 2S · 1P</span>
              <span className="bg-chess-gold text-chess-dark font-bold px-3 py-1 rounded-full">
                3 punti (contestati)
              </span>
            </div>
          </div> */}
        </div>

        {/* ── Cronaca turno 1 ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 bg-chess-gold rounded-full" />
            <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Cronaca</span>
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            Dopo il buon esordio con il pareggio contro il <span className="font-semibold text-chess-dark">Mario Albano</span>, il secondo turno è stato segnato da un episodio sfortunato: la vibrazione di un cellulare — pur fuori dall'area di gioco — ha causato l'interruzione e la perdita della partita della prima scacchiera, destabilizzando l'intera squadra (0,5–3,5).
          </p>
          <p className="text-base text-gray-700 leading-relaxed mt-3">
            Nel terzo turno, con <span className="font-semibold">Di Marco</span> in sostituzione, la squadra ha vinto 3-1 sul campo ma l'arbitro ha applicato una <span className="font-semibold text-chess-dark">penalizzazione in classifica</span>, ritenendo Di Marco non abilitato a giocare, retrocedendo il RED all'ultimo posto del girone.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mt-3">
            La domenica, senza <span className="font-semibold">Caparrotta</span>, ha esordito <span className="font-semibold">Militerni</span> con una bella vittoria, ma la squadra è stata sconfitta 3-1 dalla capolista Tivoli. All'ultimo turno vittoria meritata contro Vitinia (2,5–1,5): <span className="font-semibold">Stella</span> batte in venti mosse il 2150 Magini, vincono <span className="font-semibold">Ciufolini</span> e patta <span className="font-semibold">Militerni</span>.
          </p>
          <p className="text-sm text-chess-gold font-semibold mt-5 italic border-t border-gray-100 pt-4">
            "5 punti sul campo, solo 3 in classifica per la penalizzazione. Qualora vi fossero nuovi sviluppi, vi terremo aggiornati."
          </p>
        </div>

        {/* ── Galleria fotografica ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-1 h-5 bg-chess-gold rounded-full" />
              <span className="text-xs font-bold text-chess-gold uppercase tracking-widest">Galleria fotografica</span>
            </div>
            <span className="text-xs text-gray-400">{photos.length} foto</span>
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
                  alt={`Serie B foto ${i + 1}`}
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
            Serie B Lazio · 13–15 Marzo 2026 · Avamposto Garibaldino RED
          </p>
        </div>

      </div>
    </div>
  );
};

export default Serieb1;
