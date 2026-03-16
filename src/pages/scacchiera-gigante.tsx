import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ruler, Users, Star, MapPin, Heart, Hammer, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
const caratteristiche = [
  { icon: Ruler,   title: "Dimensioni",         description: "Scacchiera 8×8 metri con pezzi alti fino a 65 cm" },
  { icon: Users,   title: "Per Partite Speciali",description: "Perfetta per partite amichevoli, dimostrazioni e scacchi viventi" },
  { icon: Star,    title: "Materiali",           description: "Realizzata con resina sintetica resistente agli agenti atmosferici" },
  { icon: MapPin,  title: "Location",            description: "Esposta nella nostra sede principale a Mentana" },
];

const storia = [
  {
    anno: "",
    titolo: "Ideazione",
    descrizione: "L'idea è nata oltre dieci anni fa dal presidente Gherardo Gismondi ed è maturata quando ha identificato un'area pavimentata trascurata, ritenendola il luogo perfetto per realizzare il suo sogno.",
    icon: Heart,
    immagini: [
      "/foto-scacchiera-gigante/1000063495.jpg",
      "/foto-scacchiera-gigante/1000063360.jpg",
    ],
  },
  {
    anno: "Giugno 2023",
    titolo: "Progettazione",
    descrizione: "64 quadrati bianchi e blu su pavimentazione resinata, circondata da fascia verde. Il disegno fu realizzato da Vincenzo Gulino.",
    icon: Hammer,
    immagini: [
      "/foto-scacchiera-gigante/1000063499.jpg",
      "/foto-scacchiera-gigante/1000063586.jpg",
      "/foto-scacchiera-gigante/1000063588.jpg",
      "/foto-scacchiera-gigante/1000063599.jpg",
      "/foto-scacchiera-gigante/1000063656.jpg",
      "/foto-scacchiera-gigante/1000063658.jpg",
      "/foto-scacchiera-gigante/1000063671.jpg",
      "/foto-scacchiera-gigante/1000063713.jpg",
      "/foto-scacchiera-gigante/1000063715.jpg",
      "/foto-scacchiera-gigante/1000067314.jpg",
    ],
  },
  {
    anno: "Settembre 2023",
    titolo: "Realizzazione",
    descrizione: "Opera di riqualificazione urbana autofinanziata, portata a cabo manualmente dai soci nonostante le difficoltà tecniche, senza costi per le casse comunali.",
    icon: Clock,
    immagini: [
      "/foto-scacchiera-gigante/1000063792.jpg",
      "/foto-scacchiera-gigante/1000063796.jpg",
      "/foto-scacchiera-gigante/1000063798.jpg",
      "/foto-scacchiera-gigante/1000066514.jpg",
      "/foto-scacchiera-gigante/1000066707.jpg",
      "/foto-scacchiera-gigante/1000067835.jpg",
    ],
  },
  {
    anno: "Ottobre 2023",
    titolo: "Conclusione",
    descrizione: "La scacchiera è stata completata e inaugurata con una rappresentazione di scacchi viventi in stile garibaldino, diventando un bene per tutta la comunità.",
    icon: Star,
    immagini: [
      "/foto-scacchiera-gigante/realizzata1.jpg",
      "/foto-scacchiera-gigante/realizzata2.jpg",
      "/foto-scacchiera-gigante/realizzata3.jpg",
      "/foto-scacchiera-gigante/realizzata4.jpg",
      "/foto-scacchiera-gigante/realizzata5.jpg",
      "/foto-scacchiera-gigante/realizzata6.jpg",
      "/foto-scacchiera-gigante/realizzata7.jpg",
    ],
  },
];

/* ══════════════════════════════════════════════
   LIGHTBOX
══════════════════════════════════════════════ */
interface LightboxProps {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);

  const prev = useCallback(() => setIdx(i => (i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setIdx(i => (i === images.length - 1 ? 0 : i + 1)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        onClick={onClose}
      >
        <X className="h-7 w-7" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          className="absolute left-3 sm:left-6 text-white/70 hover:text-white transition-colors z-10 bg-black/30 rounded-full p-2"
          onClick={e => { e.stopPropagation(); prev(); }}
        >
          <ChevronLeft className="h-7 w-7" />
        </button>
      )}

      <img
        src={images[idx]}
        alt={`Foto ${idx + 1}`}
        className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
        onClick={e => e.stopPropagation()}
      />

      {/* Next */}
      {images.length > 1 && (
        <button
          className="absolute right-3 sm:right-6 text-white/70 hover:text-white transition-colors z-10 bg-black/30 rounded-full p-2"
          onClick={e => { e.stopPropagation(); next(); }}
        >
          <ChevronRight className="h-7 w-7" />
        </button>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
        {idx + 1} / {images.length}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   TIMELINE CARD
══════════════════════════════════════════════ */
interface LightboxState { images: string[]; index: number }

const TimelineCard: React.FC<{
  evento: typeof storia[0];
  index: number;
  onImageClick: (state: LightboxState) => void;
}> = ({ evento, index, onImageClick }) => {
  const Icon = evento.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start gap-6 md:gap-0`}>

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 bg-chess-gold rounded-full z-10 ring-4 ring-white shadow" />

      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:shadow-md transition-shadow">

          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-chess-gold/10 p-2.5 rounded-xl flex-shrink-0">
              <Icon className="h-5 w-5 text-chess-gold" />
            </div>
            <div>
              {evento.anno && <p className="text-chess-gold font-bold text-sm leading-none mb-0.5">{evento.anno}</p>}
              <h3 className="text-lg font-bold text-chess-dark leading-tight">{evento.titolo}</h3>
            </div>
          </div>

          <p className="text-chess-gray text-base leading-relaxed mb-4">{evento.descrizione}</p>

          {/* Photo grid */}
          {evento.immagini.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
              {evento.immagini.map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden cursor-pointer aspect-square"
                  onClick={() => onImageClick({ images: evento.immagini, index: i })}
                >
                  <img
                    src={img}
                    alt={`${evento.titolo} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
};

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
const ScacchieraGigante: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm">
            <Ruler className="h-3.5 w-3.5 text-chess-gold" />
            Attrazione Principale
          </div>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Avamposto Garibaldino
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            Scacchiera <span className="text-chess-gold">Gigante</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Dalla passione alla realtà — la storia completa della nostra scacchiera monumentale
          </p>
        </div>

        {/* ── Hero image ── */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl mb-16 cursor-pointer"
          onClick={() => setLightbox({ images: ["/images/Prova1.jpg"], index: 0 })}
        >
          <img
            src="/images/Prova1.jpg"
            alt="Scacchiera Gigante Avamposto Garibaldino"
            className="w-full h-64 sm:h-96 md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* ── Info grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-20">

          {/* Description */}
          <div>
            <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-chess-gold" />
              Un'esperienza unica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-chess-dark mb-5">Il Progetto</h2>
            <div className="space-y-4 text-chess-gray leading-relaxed">
              <p>
                L'ASD Mentana Scacchi – Avamposto Garibaldino, guidata dall'avvocato Gherardo Maria Gismondi,
                ha ideato, progettato e realizzato un'opera di riqualificazione urbana: una scacchiera
                pavimentale gigante in un'area pubblica precedentemente trascurata.
              </p>
              <p>
                L'idea, nata oltre dieci anni fa, si è concretizzata grazie alla collaborazione di soci,
                sostenitori, cittadini e istituzioni locali. L'opera, autofinanziata dall'associazione
                senza costi per il Comune, è stata completata nonostante le difficoltà tecniche.
              </p>
              <p>
                La sua piena operatività include giochi, eventi educativi e rievocazioni storiche
                garibaldine, rendendo gli scacchi parte integrante del tessuto sociale mentanese.
              </p>
            </div>
          </div>

          {/* Characteristics */}
          <div>
            <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-chess-gold" />
              Scheda tecnica
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-chess-dark mb-5">Caratteristiche</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caratteristiche.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                  <div className="bg-chess-gold/10 w-10 h-10 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-chess-gold" />
                  </div>
                  <h3 className="font-bold text-chess-dark text-sm mb-1">{title}</h3>
                  <p className="text-chess-gray text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Gallery 2-col ── */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-chess-gold" />
              Galleria
              <span className="w-8 h-px bg-chess-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-chess-dark">La Scacchiera in Azione</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["/images/Prova1.jpg", "/images/scacchiera-grossa.jpg"].map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setLightbox({ images: ["/images/Prova1.jpg", "/images/scacchiera-grossa.jpg"], index: i })}
              >
                <img
                  src={src}
                  alt={`Scacchiera ${i + 1}`}
                  className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline ── */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-chess-gold" />
              Cronologia
              <span className="w-8 h-px bg-chess-gold" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-chess-dark">Dalla Passione alla Realtà</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-chess-gold/25 md:-translate-x-px" />

            <div className="space-y-10">
              {storia.map((evento, i) => (
                <TimelineCard
                  key={i}
                  evento={evento}
                  index={i}
                  onImageClick={setLightbox}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            Scacchiera Gigante · Mentana · Avamposto Garibaldino
          </p>
        </div>

      </div>
    </div>
  );
};

export default ScacchieraGigante;
