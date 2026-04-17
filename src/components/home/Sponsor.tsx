import React from 'react';

const Sponsor: React.FC = () => (
  <section className="bg-white border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-row flex-nowrap items-center justify-center gap-[8vw] sm:gap-10">
        <img src="/sponsor/bcc.jpg" alt="BCC" className="h-[6vw] sm:h-12 max-h-12 min-h-6 w-auto object-contain flex-shrink-0" />
        <div className="h-8 w-px bg-gray-200 flex-shrink-0" />
        <img src="/sponsor/amatriciamo.jpg" alt="Amatriciamo" className="h-[5vw] sm:h-12 max-h-12 min-h-6 w-auto object-contain flex-shrink-0" />
        <div className="h-8 w-px bg-gray-200 flex-shrink-0" />
        <img src="/sponsor/faraglia.jpg" alt="Faraglia" className="h-[5vw] sm:h-12 max-h-12 min-h-6 w-auto object-contain flex-shrink-0" />
        <div className="h-8 w-px bg-gray-200 flex-shrink-0" />
        <img src="/sponsor/hotel-serena.jpg" alt="Hotel Serena" className="h-[7vw] sm:h-12 max-h-12 min-h-6 w-auto object-contain flex-shrink-0" />
      </div>
    </div>
  </section>
);

export default Sponsor;
