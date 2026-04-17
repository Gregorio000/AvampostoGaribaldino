import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import SectionHeader from './SectionHeader';

const Iscrizione: React.FC = () => (
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
);

export default Iscrizione;
