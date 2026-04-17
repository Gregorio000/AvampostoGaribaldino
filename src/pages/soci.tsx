import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Trophy, Star } from 'lucide-react';

const soci = [
  { id: 1, nome: "Gherardo Maria Gismondi", ruolo: "Socio Fondatore", immagine: "/soci/Gherardo-Gismondi-2.jpg", descrizione: "Ideatore, Socio fondatore e presidente, guida del circolo dal 2015, grande appassionato degli scacchi" },
  { id: 2, nome: "Luigi Marini", ruolo: "Socio Fondatore", immagine: "/soci/marini-luigi.jpeg", descrizione: "Uno dei soci fondatori storici del circolo" },
  { id: 3, nome: "Raffaele Bizziccari", ruolo: "Socio Fondatore", immagine: "/soci/bizziccari-raffaele.jpeg", descrizione: "Uno dei soci fondatori storici del circolo" },
  { id: 4, nome: "Luca Gambetti", ruolo: "Socio Fondatore", immagine: "/soci/gambetti-luca.jpeg", descrizione: "Uno dei soci fondatori storici del circolo" },
  { id: 5, nome: "Di Deodato Lucia", ruolo: "Socio Fondatore", immagine: "/images/LogoNuovo2.png", descrizione: "Uno dei soci fondatori storici del circolo" },
  { id: 6, nome: "Francesco Pandolfi", ruolo: "Socio Fondatore", immagine: "/soci/pandolfi.jpeg", descrizione: "Uno dei soci fondatori storici del circolo" },
  { id: 7, nome: "Riccardo Grammatico", ruolo: "Istruttore", immagine: "/soci/grammatico-riccardo.jpeg", descrizione: "Socio Onorario" },
  { id: 8, nome: "Emanuele Stella", ruolo: "Istruttore", immagine: "/soci/stella-emanuele.jpeg", descrizione: "Socio Onorario" },
  { id: 9, nome: "Domenico 'Mimmo' Catalano", ruolo: "Istruttore", immagine: "/soci/domenico-mimmo-catalano.jpeg", descrizione: "Divulgatore e promoter di eventi" },
  { id: 10, nome: "Angeli Francesco", ruolo: "Socio Onorario", immagine: "/soci/angeli-francesco.jpeg", descrizione: "" },
  { id: 11, nome: "Campanile Angelo", ruolo: "Socio Onorario", immagine: "/soci/campanile-angelo.jpeg", descrizione: "" },
  { id: 12, nome: "Caruso Gregorio", ruolo: "Socio Onorario", immagine: "/soci/gregorio-caruso.jpg", descrizione: "" },
  { id: 13, nome: "Di Benedetto Edoardo", ruolo: "Socio Onorario", immagine: "/soci/di-benedetto-edoardo-2.jpeg", descrizione: "" },
  { id: 14, nome: "De Simone Andrea", ruolo: "Socio Onorario", immagine: "/soci/de-simone-andrea.jpeg", descrizione: "" },
  { id: 15, nome: "Piergotti Goffredo", ruolo: "Socio Onorario", immagine: "/soci/piergotti-goffredo.jpeg", descrizione: "" },
  { id: 16, nome: "Poiani Fernando Celso", ruolo: "Socio Onorario", immagine: "/soci/fernando-celso-poiani.jpeg", descrizione: "" },
  { id: 17, nome: "Rocchetti Sergio", ruolo: "Socio Onorario", immagine: "/soci/rocchetti-sergio.jpeg", descrizione: "" },
  { id: 18, nome: "Rosselli Massimo del Turco", ruolo: "Socio Onorario", immagine: "/images/LogoNuovo2.png", descrizione: "" },
  { id: 19, nome: "Scorca Eugenio", ruolo: "Socio Onorario", immagine: "/soci/scorca-eugenio.jpeg", descrizione: "Artigiano delle scacchiere in legno" },
  { id: 20, nome: "Ventilii Roberto", ruolo: "Socio Onorario", immagine: "/soci/ventili-roberto.jpeg", descrizione: "" },
  { id: 21, nome: "Biagioli Italo", ruolo: "Socio Ordinario", immagine: "/soci/biagioli-italo.jpeg", descrizione: "" },
  { id: 22, nome: "Boccadori Luigi", ruolo: "Socio Ordinario", immagine: "/soci/boccadori-luigi.jpeg", descrizione: "" },
  { id: 23, nome: "Caparrotta Federico", ruolo: "Socio Ordinario", immagine: "/soci/caparrotta-federico.jpeg", descrizione: "" },
  { id: 24, nome: "Cucka Argis", ruolo: "Socio Ordinario", immagine: "/soci/argis-cucka.jpeg", descrizione: "" },
  { id: 25, nome: "Di Marco Simone", ruolo: "Socio Ordinario", immagine: "/soci/di-marco-simone.jpeg", descrizione: "" },
  { id: 26, nome: "Federici Simone", ruolo: "Socio Ordinario", immagine: "/images/LogoNuovo2.png", descrizione: "" },
  { id: 27, nome: "Fumagalli Mauro", ruolo: "Socio Ordinario", immagine: "/soci/fumagalli-mauro.jpeg", descrizione: "Tesoriere" },
  { id: 28, nome: "Iacovelli Enrico", ruolo: "Socio Ordinario", immagine: "/soci/iacovelli-enrico.jpeg", descrizione: "" },
  { id: 29, nome: "Militerni Pier Luigi", ruolo: "Socio Ordinario", immagine: "/soci/pier-luigi-militerni-3.jpeg", descrizione: "" },
  { id: 30, nome: "Nuzzo Daniele", ruolo: "Socio Ordinario", immagine: "/images/LogoNuovo2.png", descrizione: "" },
  { id: 31, nome: "Paoloni Roberto", ruolo: "Socio Ordinario", immagine: "/soci/paoloni-roberto2.jpeg", descrizione: "" },
  { id: 32, nome: "Polese Pierluigi", ruolo: "Socio Ordinario", immagine: "/soci/polese-gigi-2.jpeg", descrizione: "Vicepresidente" },
  { id: 33, nome: "Scorcelletti Matteo", ruolo: "Socio Ordinario", immagine: "/soci/scorcelletti-matteo.jpeg", descrizione: "" },
  { id: 34, nome: "Campanile Giuseppe", ruolo: "Socio Junior", immagine: "/soci/campanile-giuseppe.jpeg", descrizione: "" },
  { id: 35, nome: "Caruso Sofia", ruolo: "Socio Junior", immagine: "/soci/caruso-sofia.jpeg", descrizione: "" },
  { id: 36, nome: "Castaldo Emanuel", ruolo: "Socio Junior", immagine: "/soci/castaldo-emanuel.jpeg", descrizione: "" },
  { id: 37, nome: "D'Ambrosio Alessandro", ruolo: "Socio Junior", immagine: "/soci/dambrosio-alessandro.jpeg", descrizione: "" },
  { id: 38, nome: "Lai Mario", ruolo: "Socio Junior", immagine: "/soci/lai-mario.jpeg", descrizione: "" },
  { id: 39, nome: "Perrotti Emanuele", ruolo: "Socio Junior", immagine: "/soci/perrotti.jpg", descrizione: "" },
  { id: 40, nome: "Salvati Claudio", ruolo: "Socio Junior", immagine: "/soci/salvati-claudio.jpg", descrizione: "" },
  { id: 41, nome: "Ranieri Learco", ruolo: "Socio Junior", immagine: "/soci/ranieri-learco.jpeg", descrizione: "" },
  { id: 42, nome: "Venturi Riccardo", ruolo: "Socio Junior", immagine: "/soci/venturi-riccardo.jpeg", descrizione: "" },
];

const getRuoloColor = (ruolo: string) => {
  switch (ruolo) {
    case "Socio Fondatore":   return "bg-yellow-500 text-black";
    case "Istruttore":        return "bg-green-600 text-white";
    case "Socio Onorario":    return "bg-red-600 text-white";
    case "Socio Ordinario":   return "bg-yellow-400 text-black";
    case "Socio Junior":      return "bg-blue-600 text-white";
    default:                  return "bg-gray-600 text-white";
  }
};

const RUOLI = ["Tutti", "Socio Fondatore", "Istruttore", "Socio Onorario", "Socio Ordinario", "Socio Junior"];

const Soci: React.FC = () => {
  const [filtro, setFiltro] = useState("Tutti");

  const sociAttivi   = soci.length;
  const Fondatori    = soci.filter(s => s.ruolo === "Socio Fondatore").length;
  const istruttori   = soci.filter(s => s.ruolo === "Istruttore").length;
  const SociJunior   = soci.filter(s => s.ruolo === "Socio Junior").length;

  const sociFiltrati = filtro === "Tutti" ? soci : soci.filter(s => s.ruolo === filtro);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Top bar ── */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-chess-gold hover:text-chess-dark font-semibold transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Torna alla Home
          </Link>
        </div>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-chess-gold" />
            Avamposto Garibaldino
            <span className="w-8 h-px bg-chess-gold" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chess-dark leading-tight mb-4">
            I Nostri <span className="text-chess-gold">Soci</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Conosci le persone che rendono vivo l'Avamposto Garibaldino
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Users,  value: sociAttivi,  label: "Soci Totali" },
            { icon: Star,   value: istruttori,  label: "Istruttori" },
            { icon: Trophy, value: Fondatori,   label: "Fondatori" },
            { icon: Users,  value: SociJunior,  label: "Soci Junior" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center hover:shadow-md transition-shadow">
              <Icon className="h-7 w-7 text-chess-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-chess-dark">{value}</div>
              <div className="text-sm text-chess-gray mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* ── Filter pills ── */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {RUOLI.map(ruolo => (
            <button
              key={ruolo}
              onClick={() => setFiltro(ruolo)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                filtro === ruolo
                  ? 'bg-chess-dark text-white border-chess-dark shadow-md'
                  : 'bg-white text-chess-gray border-gray-200 hover:border-chess-gold hover:text-chess-gold'
              }`}
            >
              {ruolo}
              {ruolo !== "Tutti" && (
                <span className="ml-1.5 opacity-60 text-xs">
                  ({soci.filter(s => s.ruolo === ruolo).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Count label ── */}
        <p className="text-center text-sm text-gray-400 mb-8">
          {sociFiltrati.length} {sociFiltrati.length === 1 ? 'socio' : 'soci'}{filtro !== "Tutti" ? ` — ${filtro}` : ''}
        </p>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          {sociFiltrati.map((socio) => (
            <div
              key={`${socio.id}-${socio.nome}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative">
                <div className="h-36 sm:h-44 overflow-hidden bg-gray-100">
                  <img
                    src={socio.immagine}
                    alt={socio.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className={`absolute top-2 right-2 ${getRuoloColor(socio.ruolo)} px-2 py-0.5 rounded-full text-xs font-bold shadow`}>
                  {socio.ruolo.replace('Socio ', '')}
                </div>
              </div>

              {/* Info */}
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-bold text-chess-dark leading-snug mb-1">
                  {socio.nome}
                </h3>
                {socio.descrizione ? (
                  <p className="text-xs text-chess-gray leading-relaxed mt-auto pt-1 border-t border-gray-50">
                    {socio.descrizione}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            Vuoi far parte della nostra community?{' '}
            <Link to="/contact" className="text-chess-gold hover:underline font-semibold">
              Contattaci
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Soci;
