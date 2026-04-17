import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardLinkProps {
  to: string;
  image: string;
  alt: string;
  badge?: string;
  title: string;
  description: string;
  cta: string;
}

const CardLink: React.FC<CardLinkProps> = ({ to, image, alt, badge, title, description, cta }) => (
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

export default CardLink;
