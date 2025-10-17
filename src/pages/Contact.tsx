import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-chess-light/30 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intestazione migliorata */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
              Contattaci
            </h1>
          </div>
          <p className="text-xl text-chess-gray max-w-2xl mx-auto leading-relaxed">
            Scopri la nostra comunità di appassionati scacchisti. Vieni a trovarci per condividere la tua passione!
          </p>
          <div className="w-24 h-1 bg-chess-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Container principale */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Informazioni */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-chess-dark flex items-center">
              <span className="bg-chess-gold/10 p-2 rounded-lg mr-3">
              </span>
              Informazioni
            </h2>
            
            {/* Indirizzo */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors">
                <MapPin className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-chess-dark">Indirizzo</h3>
                <p className="text-chess-gray">
                  Via Giovanni Giolitti 21/23<br />
                  00013 Mentana, Italia
                </p>
                <a 
                  href="https://maps.google.com/?q=Via+Giovanni+Giolitti+21/23+Mentana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-chess-gold mt-2 text-sm hover:underline"
                >
                  Apri in Google Maps <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Telefono */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30 transition-colors">
                <Phone className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-chess-dark">Telefono</h3>
                <a href="tel:+393382449032" className="text-chess-gray hover:text-chess-gold transition-colors">
                  +39 338 244 9032
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 group">
              <div className="bg-chess-gold/20 p-3 rounded-full group-hover:bg-chess-gold/30 transition-colors">
                <Mail className="h-6 w-6 text-chess-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-chess-dark">Email</h3>
                <a 
                  href="mailto:avamposto.garibaldino@gmail.com" 
                  className="text-chess-gray hover:text-chess-gold transition-colors break-all"
                >
                  avamposto.garibaldino@gmail.com
                </a>
              </div>
            </div>


               <div className="flex items-start space-x-4 group">
              <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition-colors">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-chess-dark">PEC</h3>
                <a 
                  href="mailto:avamposto.garibaldino@legalmail.it " 
                  className="text-chess-gray hover:text-blue-500 transition-colors break-all"
                >
                  avamposto.garibaldino@legalmail.it 
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gray-500/20 p-3 rounded-full group-hover:bg-gray-500/30 transition-colors">
                <Clock className="h-6 w-6 text-gray-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-chess-dark">Orari di Apertura</h3>
                <div className="text-chess-gray space-y-1">
                  <p><span className="font-medium">Venerdì:</span> 16:00 - 18:00 / 21:00 - 00:00</p>
                  <p><span className="font-medium">Sabato:</span> 10:00 - 13:00 / 15:30 - 19:30</p>
                  <p><span className="font-medium">Domenica:</span> 09:00 - 12:00</p>
                </div>
                <p className="text-sm text-chess-gray/70 mt-2">
                  * Gli orari potrebbero variare durante i tornei. 
                </p>
              </div>
            </div>
          </div>

          {/* Sezione Immagine e Mappa */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h2 className="text-3xl font-bold text-chess-dark mb-6 text-center">La nostra sede</h2>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/images/sede.jpg"
                    alt="Foto della sede del circolo scacchi"
                    className="w-full h-96 object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
                <p className="text-chess-gray mt-6 text-center italic text-lg">
                  Un ambiente accogliente dove giocare e socializzare
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-chess-dark mb-4">Dove siamo</h2>
              <div className="rounded-xl overflow-hidden shadow-md h-64 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-chess-light to-chess-dark/20">
                  <div className="text-center p-4">
                    <MapPin className="h-12 w-12 text-chess-gold mx-auto mb-2" />
                    <p className="text-chess-dark font-medium">Mappa interattiva</p>
                    <p className="text-chess-gray text-sm">Via Giovanni Giolitti 21/23, Mentana</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Messaggio finale */}
        <div className="text-center mt-12 bg-chess-gold/10 p-6 rounded-2xl border border-chess-gold/20">
          <p className="text-chess-dark text-lg font-medium">
            L'iscrizione ufficiale avviene direttamente in sede. Ti aspettiamo!
          </p>
        </div>
      </div>
    
  );
};

export default Contact;