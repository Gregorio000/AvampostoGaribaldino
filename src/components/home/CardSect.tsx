import React from 'react';
import SectionHeader from './SectionHeader';
import CardLink from './CardLink';

const CardSect: React.FC = () => (
  <>
    <section className="pb-4">
      <SectionHeader
        label="Il nostro circolo"
        title="I Nostri Soci"
        subtitle="Conosci le persone che rendono speciale la nostra community scacchistica"
      />
      <div className="max-w-3xl mx-auto">
        <CardLink
          to="/soci"
          image="/foto-scacchiera-gigante/realizzata2.jpg"
          alt="La Nostra Community"
          badge="Community"
          title="La Nostra Community"
          description="Scopri tutti i membri dell'Avamposto Garibaldino e le loro storie."
          cta="Conosci i nostri soci"
        />
      </div>
    </section>

    <section className="pb-4">
      <SectionHeader
        label="Esperienza unica"
        title="La Nostra Scacchiera Gigante"
        subtitle="Vivi l'emozione di giocare sulla nostra spettacolare scacchiera gigante"
      />
      <div className="max-w-3xl mx-auto">
        <CardLink
          to="/scacchiera-gigante"
          image="/images/scacchiera-grossa.jpg"
          alt="Scacchiera Gigante"
          badge="Iconica"
          title="Scacchiera Gigante"
          description="Dalla costruzione all'aspetto odierno — un'esperienza immersiva che ti farà sentire parte del gioco."
          cta="Scopri la Scacchiera Gigante"
        />
      </div>
    </section>

    <section className="pb-4">
      <SectionHeader
        label="Cultura scacchistica"
        title="Il Nostro Patrimonio"
        subtitle="Scopri il ricco patrimonio culturale e scacchistico dell'Avamposto Garibaldino"
      />
      <div className="max-w-3xl mx-auto">
        <CardLink
          to="/patrimonio"
          image="/libri/libris.jpg"
          alt="Patrimonio dell'Avamposto"
          badge="Collezioni"
          title="Il Nostro Patrimonio"
          description="Biblioteca scacchistica con libri storici, manuali tecnici, biografie dei campioni e saggi sulla cultura scacchistica."
          cta="Scopri il Patrimonio"
        />
      </div>
    </section>
  </>
);

export default CardSect;
