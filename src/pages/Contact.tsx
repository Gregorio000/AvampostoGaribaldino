import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Intestazione */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-chess-dark mb-4">
            Contattaci
          </h1>
          <p className="text-lg text-chess-gray mb-2">
            Ecco tutto quello che devi sapere sul nostro circolo, vieni a conoscerci!
          </p>
          <p className="text-lg text-chess-gray">
            L’iscrizione ufficiale avviene direttamente in sede.
          </p>
        </div>

        {/* Card Informazioni */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Indirizzo */}
          <div className="flex items-start space-x-4">
            <div className="bg-chess-gold/20 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-chess-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-chess-dark">Indirizzo</h3>
              <p className="text-chess-gray">
                Via Giovanni Giolitti 21/23<br />
                00013 Mentana, Italia
              </p>
            </div>
          </div>

          {/* Telefono */}
          <div className="flex items-start space-x-4">
            <div className="bg-chess-gold/20 p-3 rounded-full">
              <Phone className="h-6 w-6 text-chess-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-chess-dark">Telefono</h3>
              <p className="text-chess-gray">+39 338 244 9032</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="bg-chess-gold/20 p-3 rounded-full">
              <Mail className="h-6 w-6 text-chess-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-chess-dark">Email</h3>
              <p className="text-chess-gray">avamposto.garibaldino@gmail.com</p>
            </div>
          </div>

          {/* Orari */}
          <div className="flex items-start space-x-4">
            <div className="bg-chess-gold/20 p-3 rounded-full">
              <Clock className="h-6 w-6 text-chess-gold" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-chess-dark">Orari di Apertura</h3>
              <p className="text-chess-gray">Sabato e Domenica: 10:00 - 20:00</p>
            </div>
          </div>

          {/* Immagine sede */}
          <div className="rounded-lg overflow-hidden shadow-sm mt-6">
            <img
              src="/images/sede.jpg"
              alt="Foto della sede"
              className="w-full h-90 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
