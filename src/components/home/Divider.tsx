import React from 'react';

const Divider: React.FC = () => (
  <div className="flex items-center gap-4 my-12 max-w-xl mx-auto px-4">
    <div className="flex-1 h-px bg-chess-gold/30" />
    <div className="w-2 h-2 rotate-45 bg-chess-gold" />
    <div className="flex-1 h-px bg-chess-gold/30" />
  </div>
);

export default Divider;
