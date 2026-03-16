import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink, ArrowLeft, Download } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    color: "bg-red-100 text-red-500",
    label: "Indirizzo",
    content: <>Via Giovanni Giolitti 21/23<br />00013 Mentana, Italia</>,
    extra: (
      <a
        href="https://maps.google.com/?q=Via+Giovanni+Giolitti+21/23+Mentana"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-chess-gold text-sm mt-1.5 hover:underline"
      >
        Apri in Google Maps <ExternalLink className="h-3 w-3" />
      </a>
    ),
  },
  {
    icon: Phone,
    color: "bg-green-100 text-green-600",
    label: "Telefono",
    content: (
      <a href="tel:+393382449032" className="text-chess-gray hover:text-chess-gold transition-colors">
        +39 338 244 9032
      </a>
    ),
  },
  {
    icon: Mail,
    color: "bg-amber-100 text-amber-600",
    label: "Email",
    content: (
      <a href="https://mail.google.com/mail/?view=cm&to=avamposto.garibaldino@gmail.com" className="text-chess-gray hover:text-chess-gold transition-colors break-all" target="_blank" rel="noopener noreferrer">
        avamposto.garibaldino@gmail.com
      </a>
    ),
  },
  {
    icon: Mail,
    color: "bg-blue-100 text-blue-600",
    label: "PEC",
    content: (
      <a href="https://mail.google.com/mail/?view=cm&to=avamposto.garibaldino@legalmail.it" className="text-chess-gray hover:text-blue-500 transition-colors break-all" target="_blank" rel="noopener noreferrer">
        avamposto.garibaldino@legalmail.it
      </a>
    ),
  },
  {
    icon: Clock,
    color: "bg-gray-100 text-gray-500",
    label: "Orari di Apertura",
    content: (
      <div className="space-y-1 text-chess-gray">
        <p><span className="font-semibold text-chess-dark">Venerdì:</span> 16:00–18:00 / 21:00–00:00</p>
        <p><span className="font-semibold text-chess-dark">Sabato:</span> 10:00–13:00 / 15:30–19:30</p>
        <p><span className="font-semibold text-chess-dark">Domenica:</span> 09:00–12:00</p>
        <p className="text-xs text-gray-400 mt-1.5">* Gli orari possono variare durante i tornei.</p>
      </div>
    ),
  },
];

const steps = [
  "Scarica il modulo di iscrizione",
  "Compila tutti i campi richiesti",
  "Porta il modulo in sede durante gli orari di apertura",
  "Effettua il pagamento della quota associativa",
  "Diventa un socio ufficiale!",
];

const Contact: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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
          Contattaci<span className="text-chess-gold"></span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Vieni a trovarci per condividere la tua passione per gli scacchi!
        </p>
      </div>

      {/* ── Main grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

        {/* Contact info card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-chess-dark">Informazioni</h2>

          {contactInfo.map(({ icon: Icon, color, label, content, extra }) => (
            <div key={label} className="flex items-start gap-4">
              <div className={`${color} p-2.5 rounded-xl flex-shrink-0`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-chess-dark mb-0.5">{label}</p>
                <div className="text-sm text-chess-gray leading-relaxed">{content}</div>
                {extra}
              </div>
            </div>
          ))}
        </div>

        {/* Sede image card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col">
          <h2 className="text-xl font-bold text-chess-dark mb-5">La Nostra Sede</h2>
          <a
            href="https://maps.google.com/?q=Via+Giovanni+Giolitti+21/23+Mentana"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-md group flex-1"
          >
            <div className="relative h-56 sm:h-72 lg:h-full min-h-[220px]">
              <img
                src="/images/sede.jpg"
                alt="Sede del circolo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                  <ExternalLink className="h-5 w-5 text-chess-dark" />
                </div>
              </div>
            </div>
          </a>
          <p className="text-xs text-gray-400 text-center mt-3 flex items-center justify-center gap-1">
            Clicca sulla foto per aprire Google Maps
            <ExternalLink className="h-3 w-3" />
          </p>
          <p className="text-chess-gray text-sm text-center italic mt-2">
            Un ambiente accogliente dove giocare e socializzare
          </p>
        </div>
      </div>

      {/* ── Iscrizione ── */}
      <div className="bg-gradient-to-br from-chess-dark/5 to-chess-gold/5 rounded-2xl border border-chess-gold/15 p-6 sm:p-10 text-center">
        <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-4">
          <span className="w-8 h-px bg-chess-gold" />
          Unisciti a noi
          <span className="w-8 h-px bg-chess-gold" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-chess-dark mb-3">Vuoi Iscriverti Subito?</h2>
        <p className="text-chess-gray mb-7 max-w-xl mx-auto">
          Scarica il modulo, compilalo e portalo in sede per iniziare la tua avventura scacchistica!
        </p>

        <a
          href="/modulo_di_tesseramento_avamposto_garibaldino_2026.pdf"
          download="Iscrizione_Avamposto_Garibaldino.pdf"
          className="inline-flex items-center gap-2 bg-chess-gold text-chess-dark px-8 py-3.5 rounded-xl font-bold hover:bg-chess-gold/90 transition-all duration-300 shadow-lg hover:shadow-chess-gold/20 hover:-translate-y-1 mb-8"
        >
          <Download className="h-5 w-5" />
          Scarica Modulo di Iscrizione
        </a>

        <div className="bg-white/70 rounded-2xl p-5 max-w-sm mx-auto text-left">
          <h3 className="text-sm font-bold text-chess-dark mb-3 text-center">Come Iscriversi</h3>
          <ol className="space-y-2.5 list-none">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-chess-gray">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chess-gold text-chess-dark text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-6 text-gray-400 text-sm">
          Hai bisogno di aiuto?{' '}
          <a href="https://mail.google.com/mail/?view=cm&to=avamposto.garibaldino@gmail.com" target="_blank" rel="noopener noreferrer" className="text-chess-gold hover:underline font-semibold">
            Scrivici una email
          </a>
        </p>
      </div>

    </div>
  </div>
);

export default Contact;
