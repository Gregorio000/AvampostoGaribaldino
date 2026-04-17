import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CardLink from './CardLink';

const GalleriaSect: React.FC = () => (
  <section className="pb-20">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
      <SectionHeader label="Galleria" title="I Momenti dell'Avamposto" />
      <Link
        to="/ricordi"
        className="text-chess-gold hover:text-chess-dark font-semibold transition-colors flex items-center gap-1 text-sm whitespace-nowrap mb-10 sm:mb-0"
      >
        Vedi tutte le foto
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardLink
        to="/ricordi/turno1"
        image="/turno1/black-0.jpeg"
        alt="1° Turno"
        badge="Evento"
        title="1° Turno Campionato a Squadre FSI"
        description="1° Turno Campionato a Squadre FSI – Serie Promozione. 02 Febbraio 2026."
        cta="Scopri di più"
      />
      <CardLink
        to="/ricordi/venafro"
        image="/venafro/venafro-0.jpeg"
        alt="Venafro"
        badge="Evento"
        title="Sfida a Venafro"
        description="Sfida amichevole contro il circolo Leopoldo Pilla – Venafro 1870. 16 Novembre 2025."
        cta="Scopri di più"
      />
      <CardLink
        to="/ricordi/scacchi-mentana"
        image="/scacchi-mentana/Foto da 2023-11-23T204132.759.jpg"
        alt="La nostra storia"
        badge="Storico"
        title="La Nostra Storia Scacchistica"
        description="Scopri l'evoluzione del nostro circolo attraverso gli anni."
        cta="Scopri di più"
      />
    </div>
  </section>
);

export default GalleriaSect;
