import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle }) => (
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

export default SectionHeader;
