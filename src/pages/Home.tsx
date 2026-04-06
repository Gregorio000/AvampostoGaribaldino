import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Bell, CalendarDays, Download } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg",
    "/images-circolo/Importante.jpg",
    "/images/scacchiera-grossa.jpg",
    "/ricordi-vecchi/ricordo-vecchio1.jpg",
    "/foto-scacchiera-gigante/realizzata1.jpg",
    "/scacchi-mentana/domenica 15 nov 2020.jpg",
    "/decimo-anniversario/decimo-anniversario-00.jpeg",
    "/images/Prova1.jpg",
    "/turno3/turno3 (3).jpeg",
    "/turno4/turno4 (1).jpeg",
    "/turno4/turno4 (4).jpeg",
    "/turno5/turno5 (6).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Avamposto Garibaldino ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-110 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'brightness(1.1) contrast(1.2)' }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-chess-gold w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Divider: React.FC = () => (
  <div className="flex items-center gap-4 my-12 max-w-xl mx-auto px-4">
    <div className="flex-1 h-px bg-chess-gold/30" />
    <div className="w-2 h-2 rotate-45 bg-chess-gold" />
    <div className="flex-1 h-px bg-chess-gold/30" />
  </div>
);

const SectionHeader: React.FC<{ label?: string; title: string; subtitle?: string }> = ({
  label, title, subtitle,
}) => (
  <div className="text-center mb-10 md:mb-14 px-4">
    {label && (
      <div className="inline-flex items-center gap-3 text-chess-gold font-semibold text-sm uppercase tracking-widest mb-3">
        <span className="w-8 h-px bg-chess-gold" />
        {label}
        <span className="w-8 h-px bg-chess-gold" />
      </div>
    )}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark leading-tight">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-lg md:text-xl text-chess-gray max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const CardLink: React.FC<{
  to: string; image: string; alt: string; badge?: string;
  title: string; description: string; cta: string;
}> = ({ to, image, alt, badge, title, description, cta }) => (
  <Link
    to={to}
    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col hover:-translate-y-2 border border-gray-100"
  >
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img src={image} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {badge && (
        <div className="absolute top-3 right-3 bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-xs font-bold shadow">
          {badge}
        </div>
      )}
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-chess-dark mb-2 group-hover:text-chess-gold transition-colors">{title}</h3>
      <p className="text-chess-gray leading-relaxed flex-1">{description}</p>
      <div className="mt-5 pt-4 border-t border-gray-100">
        <span className="text-chess-gold font-semibold flex items-center gap-1 text-sm">
          {cta}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </Link>
);

/* ══════════════════════════════════════════════
   HOME
══════════════════════════════════════════════ */
const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">

      {/* ── HERO — leggermente più compatto ── */}
      <section className="relative text-white min-h-[70vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <ImageCarousel />
          <div className="absolute inset-0 bg-gradient-to-r from-chess-dark/85 via-chess-dark/55 to-chess-dark/70" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-chess-gold border border-chess-gold/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-chess-gold animate-pulse" />
            Mentana, dal 2015
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Benvenuti all'<br className="hidden sm:block" />
            <span className="text-chess-gold">Avamposto Garibaldino</span>
          </h1>

          <p className="text-lg sm:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Tradizione, eccellenza e passione per gli scacchi nel cuore di Mentana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/soci"
              className="bg-chess-gold text-chess-dark px-8 py-3.5 rounded-xl font-bold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-chess-gold/20 hover:-translate-y-1"
            >
              Scopri il Nostro Circolo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/70 text-white px-8 py-3.5 rounded-xl font-bold hover:border-chess-gold hover:text-chess-gold transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Contattaci ed Iscriviti
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-7 w-7 text-white/60 rotate-90" />
        </div>
      </section>

      {/* ── SPONSOR ── */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
            In Collaborazione Con
          </p> */}
          
          <div className="flex flex-row items-center justify-center gap-10 sm:gap-16">
            {/* <a href="https://www.amatriciamo.it" target="_blank" rel="noopener noreferrer" className="group opacity-1000 hover:opacity-100 transition-opacity duration-300"> */}
              <img src="/sponsor/bcc.jpg" alt="Amatriciamo" className="h-12 w-auto object-contain" />
            {/* </a> */}
            <div className="h-8 w-px bg-gray-200" />
            {/* <a href="https://faraglia.net" target="_blank" rel="noopener noreferrer" className="group opacity-1000 hover:opacity-100 transition-opacity duration-300"> */}
              <img src="/sponsor/amatriciamo.jpg" alt="Partner 2" className="h-12 w-auto object-contain" />
            {/* </a> */}
            <div className="h-8 w-px bg-gray-200" />
            {/* <a href="https://faraglia.net" target="_blank" rel="noopener noreferrer" className="group opacity-1000 hover:opacity-100 transition-opacity duration-300"> */}
              <img src="/sponsor/faraglia.jpg" alt="Partner 2" className="h-12 w-auto object-contain" />
            {/* </a> */}
            <div className="h-8 w-px bg-gray-200" />
            {/* <a href="https://.net" target="_blank" rel="noopener noreferrer" className="group opacity-1000 hover:opacity-100 transition-opacity duration-300"> */}
              <img src="/sponsor/hotel-serena.jpg" alt="Partner 2" className="h-12 w-auto object-contain" />
            {/* </a> */}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── ULTIMA NOTIZIA ── */}
        <section className="pt-8 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Bell className="h-7 w-7 text-chess-gold flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-chess-dark">Ultima Notizia</h2>
            </div>
            <Link to="/news" className="text-chess-gold hover:text-chess-dark font-semibold transition-colors flex items-center gap-1 text-sm sm:text-base whitespace-nowrap">
              Vedi tutte le notizie
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link to="/news" className="group block bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-chess-gold text-chess-dark px-3 py-1 rounded-full text-xs font-bold">CORSO</span>
                  <span className="text-chess-gray text-sm flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    Ogni Sabato · 15:30–17:30
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-chess-dark mb-3 leading-tight group-hover:text-chess-gold transition-colors">
                  Corso di Scacchi per Neofiti ed Esordienti
                </h3>
                <p className="text-chess-gray mb-6 leading-relaxed">
                  L'ASD Avamposto Garibaldino presenta il corso di scacchi per neofiti ed esordienti. Ogni sabato dalle 15:30 alle 17:30 presso Villa Dominedò, Via Nomentana 233. Solo 7€ a lezione — in collaborazione con CEAS e BCC Roma.
                </p>
                <div className="space-y-2">
                  <div className="bg-chess-gold/10 rounded-xl p-3 border-l-4 border-chess-gold">
                    <p className="font-semibold text-chess-dark text-sm">DOVE E QUANDO</p>
                    <p className="text-chess-gray text-sm">Villa Dominedò · Via Nomentana 233 · Sabato 15:30–17:30</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 border-l-4 border-gray-400">
                    <p className="font-semibold text-chess-dark text-sm">INFO E ISCRIZIONI</p>
                    <p className="text-chess-gray text-sm">Gherardo · 338 244 9032 · avamposto.garibaldino@gmail.com · 7€/lezione</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/5 h-56 sm:h-64 lg:h-auto relative flex-shrink-0">
                <img src="/images/corso-neofiti.jpeg" alt="Corso di Scacchi per Neofiti" className="w-full h-full object-cover" />
              </div>
            </div>
          </Link>
        </section>

        <Divider />

        {/* ── STORIA ── */}
        <section className="pb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            <div>
              <div className="inline-flex items-center mb-4 text-chess-gold font-semibold text-sm uppercase tracking-widest">
                <span className="w-10 h-px bg-chess-gold mr-3" />
                LA NOSTRA STORIA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-chess-dark mb-6 leading-tight">
                La nostra Storia
              </h2>
              <div className="space-y-4 text-chess-gray text-lg leading-relaxed">
                <p>L'Avamposto Garibaldino rappresenta anni di tradizione scacchistica a Mentana, ispirandosi all'eroica storia locale mentre guarda con innovazione al futuro.</p>
                <p>L'Associazione ha lo scopo di divulgare il gioco degli scacchi.</p>
                <p>Oggi, con sede moderna e attrezzature all'avanguardia, offriamo tornei, corsi e eventi per appassionati di ogni livello ed età.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/ricordi-vecchi/ricordo-vecchio5.jpg"
                  alt="Scacchiera Grande"
                  className="w-full h-72 sm:h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chess-dark/20 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-chess-gold text-chess-dark px-5 py-2.5 rounded-xl shadow-lg font-bold text-sm">
                <span>2015</span>
                <span className="ml-2 font-normal">Anno di Fondazione</span>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── ISCRIZIONE ── */}
        <section className="pb-4 text-center">
          <SectionHeader
            label="Unisciti a noi"
            title="Vuoi Iscriverti Subito?"
            subtitle="Scarica il modulo di iscrizione, compilalo e portalo in sede per iniziare la tua avventura scacchistica!"
          />
          <a
            href="/modulo_di_tesseramento_avamposto_garibaldino_2026.pdf"
            download="Iscrizione_Avamposto_Garibaldino.pdf"
            className="inline-flex items-center gap-2 bg-chess-gold text-chess-dark px-8 py-3.5 rounded-xl font-bold hover:bg-chess-gold/90 transition-all duration-300 shadow-lg hover:shadow-chess-gold/20 hover:-translate-y-1"
          >
            <Download className="h-5 w-5" />
            Scarica Modulo di Iscrizione
          </a>
          <div className="mt-10 max-w-sm mx-auto bg-gray-50 rounded-2xl p-6 border border-gray-200 text-left">
            <h3 className="text-base font-bold text-chess-dark mb-3 text-center">Come Iscriversi</h3>
            <ol className="space-y-2 text-chess-gray text-sm list-none">
              {[
                'Scarica il modulo di iscrizione',
                'Compila tutti i campi richiesti',
                'Porta il modulo in sede durante gli orari di apertura',
                'Effettua il pagamento della quota associativa',
                'Diventa un socio ufficiale!',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chess-gold text-chess-dark text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-6 text-chess-gray text-sm">
            Hai bisogno di aiuto?{' '}
            <Link to="/contact" className="text-chess-gold hover:underline font-medium">Contattaci</Link>
          </p>
        </section>

        <Divider />

        {/* ── GIOCA ONLINE ── */}
        <section className="pb-4">
          <SectionHeader label="Community digitale" title="Gioca con Noi Online" subtitle="Unisciti alla nostra community digitale e continua a giocare anche da casa" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <img src="/images/chesscom.png" alt="Chess.com" className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-chess-dark mb-3">ASD Mentana Scacchi</h3>
              <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">Unisciti al nostro club su Chess.com per giocare online, partecipare a tornei e migliorare il tuo gioco.</p>
              <a href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                Unisciti su Chess.com
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
              <div className="bg-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <img src="/images/lichess.png" alt="Lichess" className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-bold text-chess-dark mb-3">Avamposto Junior Online</h3>
              <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">Il team Lichess dedicato ai giovani giocatori. Impara con i nostri istruttori esperti.</p>
              <a href="https://lichess.org/team/avamposto-junior-online" target="_blank" rel="noopener noreferrer" className="bg-green-800 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-900 transition-colors text-sm">
                Unisciti su Lichess
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SOCIAL ── */}
        <section className="pb-4">
          <SectionHeader label="Resta connesso" title="Seguici sui Social" subtitle="Resta aggiornato su tutti gli eventi, tornei e novità del nostro circolo" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FaFacebookF className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-chess-dark mb-3">Facebook</h3>
              <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">Segui la nostra pagina per news, eventi e foto dei tornei in tempo reale.</p>
              <a href="https://www.facebook.com/mentanascacchi?locale=it_IT" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-colors text-sm">
                Seguici su Facebook
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-7 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <FaInstagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-chess-dark mb-3">Instagram</h3>
              <p className="text-chess-gray text-sm leading-relaxed flex-1 mb-5">Guarda le stories dei tornei e le foto più belle della community.</p>
              <a href="https://instagram.com/avamposto.garibaldino" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm">
                Seguici su Instagram
              </a>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SEZIONI CARD ── */}
        <section className="pb-4">
          <SectionHeader label="Il nostro circolo" title="I Nostri Soci" subtitle="Conosci le persone che rendono speciale la nostra community scacchistica" />
          <div className="max-w-3xl mx-auto">
            <CardLink to="/soci" image="/foto-scacchiera-gigante/realizzata2.jpg" alt="La Nostra Community" badge="Community" title="La Nostra Community" description="Scopri tutti i membri dell'Avamposto Garibaldino e le loro storie." cta="Conosci i nostri soci" />
          </div>
        </section>

        <Divider />

        <section className="pb-4">
          <SectionHeader label="Esperienza unica" title="La Nostra Scacchiera Gigante" subtitle="Vivi l'emozione di giocare sulla nostra spettacolare scacchiera gigante" />
          <div className="max-w-3xl mx-auto">
            <CardLink to="/scacchiera-gigante" image="/images/scacchiera-grossa.jpg" alt="Scacchiera Gigante" badge="Iconica" title="Scacchiera Gigante" description="Dalla costruzione all'aspetto odierno — un'esperienza immersiva che ti farà sentire parte del gioco." cta="Scopri la Scacchiera Gigante" />
          </div>
        </section>

        <Divider />

        <section className="pb-4">
          <SectionHeader label="Cultura scacchistica" title="Il Nostro Patrimonio" subtitle="Scopri il ricco patrimonio culturale e scacchistico dell'Avamposto Garibaldino" />
          <div className="max-w-3xl mx-auto">
            <CardLink to="/patrimonio" image="/libri/libris.jpg" alt="Patrimonio dell'Avamposto" badge="Collezioni" title="Il Nostro Patrimonio" description="Biblioteca scacchistica con libri storici, manuali tecnici, biografie dei campioni e saggi sulla cultura scacchistica." cta="Scopri il Patrimonio" />
          </div>
        </section>

        <Divider />

        {/* ── GALLERY / RICORDI ── */}
        <section className="pb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeader label="Galleria" title="I Momenti dell'Avamposto" />
            <Link to="/ricordi" className="text-chess-gold hover:text-chess-dark font-semibold transition-colors flex items-center gap-1 text-sm whitespace-nowrap mb-10 sm:mb-0">
              Vedi tutte le foto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardLink to="/ricordi/turno1" image="/turno1/black-0.jpeg" alt="1° Turno" badge="Evento" title="1° Turno Campionato a Squadre FSI" description="1° Turno Campionato a Squadre FSI – Serie Promozione. 02 Febbraio 2026." cta="Scopri di più" />
            <CardLink to="/ricordi/venafro" image="/venafro/venafro-0.jpeg" alt="Venafro" badge="Evento" title="Sfida a Venafro" description="Sfida amichevole contro il circolo Leopoldo Pilla – Venafro 1870. 16 Novembre 2025." cta="Scopri di più" />
            <CardLink to="/ricordi/scacchi-mentana" image="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg" alt="La nostra storia" badge="Storico" title="La Nostra Storia Scacchistica" description="Scopri l'evoluzione del nostro circolo attraverso gli anni." cta="Scopri di più" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
