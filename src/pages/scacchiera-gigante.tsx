import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ruler, Users, Calendar, MapPin, Star, Hammer, Clock, Heart, X } from 'lucide-react';

const ScacchieraGigante: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const caratteristiche = [
    {
      icon: Ruler,
      title: "Dimensioni",
      description: "Scacchiera 8x8 metri con pezzi alti fino a 65cm"
    },
    {
      icon: Users,
      title: "Per Partite Speciali",
      description: "Perfetta per partite amichevoli, dimostrazioni e partite di scacchi vivente"
    },
    {
      icon: Star,
      title: "Materiali",
      description: "Realizzata con resina sintetica"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Esposta nella nostra sede principale a Mentana"
    }
  ];

  const eventi = [
    {
      data: "Tornei Mensili",
      descrizione: "Partecipa ai nostri tornei sulla scacchiera gigante"
    },
    {
      data: "Eventi Speciali",
      descrizione: "Aperture straordinarie per feste e celebrazioni"
    },
    {
      data: "Dimostrazioni",
      descrizione: "Esibizioni di maestri e partite commentate"
    }
  ];

  const storia = [
    {
      anno: "",
      titolo: "Ideazione",
      descrizione: "L'idea è nata oltre dieci anni fa dal presidente Gherardo Gismondi ed è maturata quando ha identificato l'area pavimentata trascurata, ritenendola il luogo perfetto per realizzare il suo sogno nel cassetto.",
      icon: Heart,
      immagini: [
        "/foto-scacchiera-gigante/1000063495.jpg",
        "/foto-scacchiera-gigante/1000063360.jpg",
      ]
    },
    {
      anno: "Giugno 2023",
      titolo: "Progettazione",
      descrizione: "La scacchiera è stata progettata con 64 quadrati (8x8) di colore bianco e blu su una pavimentazione resinata, circondata da una fascia verde, utilizzando un materiale resistente agli agenti atmosferici. Il disegno fu realizzato da Vincenzo Gulino.",
      icon: Hammer,
      immagini: [
        "/foto-scacchiera-gigante/1000063499.jpg",
        "/foto-scacchiera-gigante/1000063586.jpg", 
        "/foto-scacchiera-gigante/1000063588.jpg",
        "/foto-scacchiera-gigante/1000063599.jpg",
        "/foto-scacchiera-gigante/1000063656.jpg",
        "/foto-scacchiera-gigante/1000063658.jpg",
        "/foto-scacchiera-gigante/1000063671.jpg",
        "/foto-scacchiera-gigante/1000063713.jpg",
        "/foto-scacchiera-gigante/1000063715.jpg",
        "/foto-scacchiera-gigante/1000067314.jpg",
      ]
    },
    {
      anno: "Settembre 2023",
      titolo: "Realizzazione",
      descrizione: "La realizzazione è stata un'opera di riqualificazione urbana autofinanziata dall'associazione, portata a cabo manualmente dai soci nonostante le difficoltà tecniche, senza costi per le casse comunali.",
      icon: Clock,
      immagini: [
        "/foto-scacchiera-gigante/1000063792.jpg",
        "/foto-scacchiera-gigante/1000063796.jpg",
        "/foto-scacchiera-gigante/1000063798.jpg",
        "/foto-scacchiera-gigante/1000066514.jpg",
        "/foto-scacchiera-gigante/1000066707.jpg",
        "/foto-scacchiera-gigante/1000067835.jpg",
      ]
    },
    {
      anno: "Ottobre 2023",
      titolo: "Conclusione",
      descrizione: "La scacchiera è stata completata e verrà inaugurata con una rappresentazione di scacchi viventi in stile garibaldino, diventando un bene per tutta la comunità.",
      icon: Star,
      immagini: [
        "/foto-scacchiera-gigante/realizzata1.jpg",
        "/foto-scacchiera-gigante/realizzata2.jpg",
        "/foto-scacchiera-gigante/realizzata3.jpg",
        "/foto-scacchiera-gigante/realizzata4.jpg",
        "/foto-scacchiera-gigante/realizzata5.jpg",
        "/foto-scacchiera-gigante/realizzata6.jpg",
        "/foto-scacchiera-gigante/realizzata7.jpg",
      ]
    },
  ];

  // Lightbox Component
  const Lightbox = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <div className="relative max-w-4xl max-h-full">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-12 right-0 text-white hover:text-chess-gold transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Ingrandita"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Lightbox */}
      <Lightbox />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center text-chess-gold hover:text-chess-dark transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Torna alla Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-4 bg-chess-gold/20 px-4 py-2 rounded-full">
              <Ruler className="h-6 w-6 text-chess-gold mr-2" />
              <span className="text-chess-gold font-medium">Attrazione Principale</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent leading-[1.3]">
              Scacchiera Gigante
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-chess-dark to-chess-gold mx-auto mb-4"></div>
            <p className="text-xl text-chess-gray max-w-2xl mx-auto">
              La storia completa della nostra scacchiera monumentale, dall'idea alla realizzazione
            </p>
          </div>
        </div>

        {/* Immagine Principale */}
        <div className="mb-16">
          <div 
            className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-300"
            onClick={() => setSelectedImage("/images/Prova1.jpg")}
          >
            <img
              src="/images/Prova1.jpg"
              alt="Scacchiera Gigante Avamposto Garibaldino"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Storia Completa */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-chess-dark mb-8 text-center">
            La Nostra Storia: Dalla Passione alla Realtà
          </h2>
          
          <div className="relative">
            {/* Linea del tempo */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-chess-gold/30"></div>
            
            <div className="space-y-12">
              {storia.map((evento, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-start gap-8`}>
                  
                  {/* Punto sulla timeline */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-chess-gold rounded-full z-10"></div>
                  
                  {/* Contenuto */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} ml-16 md:ml-0`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center mb-4">
                        <div className="bg-chess-gold/10 p-2 rounded-lg mr-4">
                          <evento.icon className="h-6 w-6 text-chess-gold" />
                        </div>
                        <div>
                          <span className="text-chess-gold font-bold text-lg">{evento.anno}</span>
                          <h3 className="text-xl font-bold text-chess-dark">{evento.titolo}</h3>
                        </div>
                      </div>
                      <p className="text-chess-gray leading-relaxed mb-4">
                        {evento.descrizione}
                      </p>
                      
                      {/* Galleria Immagini */}
                      {evento.immagini && evento.immagini.length > 0 && (
                        <div className="mt-4">
                          <div className={`grid gap-2 ${
                            evento.immagini.length === 1 ? 'grid-cols-1' :
                            evento.immagini.length === 2 ? 'grid-cols-2' :
                            'grid-cols-2'
                          }`}>
                            {evento.immagini.map((img, imgIndex) => (
                              <div 
                                key={imgIndex} 
                                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                              >
                                <img
                                  src={img}
                                  alt={`${evento.titolo} - Immagine ${imgIndex + 1}`}
                                  className="w-full h-24 object-cover hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                          <p className="text-xs text-chess-gray/70 mt-2 text-center">
                            Clicca sulle immagini per ingrandirle
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Spazio vuoto per bilanciare il layout */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} hidden md:block`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contenuto Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Descrizione */}
          <div>
            <h2 className="text-3xl font-bold text-chess-dark mb-6">Un'Esperienza Unica</h2>
            <div className="space-y-4 text-chess-gray text-lg">
              <p>
                L'ASD Mentana Scacchi – Avamposto Garibaldino, guidata dall'avvocato Gherardo Maria Gismondi, 
                ha ideato, progettato e realizzato un'opera di riqualificazione urbana: 
                una scacchiera pavimentale gigante in un'area pubblica precedentemente trascurata.
              </p>
              <p>
                L'idea, nata oltre dieci anni fa, si è concretizzata grazie alla collaborazione di soci, 
                sostenitori, cittadini e istituzioni locali. L'opera, autofinanziata dall'associazione 
                senza costi per il Comune, è stata completata nonostante le difficoltà tecniche.
              </p>
              <p>
                La sua conclusione e piena operatività, che includerà l'uso per giochi, eventi educativi
                e una rievocazione storica garibaldina, è prevista per il 3 novembre, rendendo gli scacchi 
                parte integrante del tessuto sociale mentanese.
              </p>
            </div>
          </div>

          {/* Caratteristiche */}
          <div>
            <h2 className="text-3xl font-bold text-chess-dark mb-6">Caratteristiche Tecniche</h2>
            <div className="space-y-6">
              {caratteristiche.map((caratteristica, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-chess-gold/10 p-3 rounded-2xl">
                    <caratteristica.icon className="h-6 w-6 text-chess-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-chess-dark mb-2">
                      {caratteristica.title}
                    </h3>
                    <p className="text-chess-gray">
                      {caratteristica.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Eventi e Attività */}
        {/* <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-chess-dark mb-8 text-center">
            Eventi sulla Scacchiera Gigante
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventi.map((evento, index) => (
              <div key={index} className="bg-gradient-to-br from-chess-dark/5 to-chess-dark/10 rounded-2xl p-6 text-center">
                <Calendar className="h-8 w-8 text-chess-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-chess-dark mb-3">
                  {evento.data}
                </h3>
                <p className="text-chess-gray">
                  {evento.descrizione}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Galleria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-chess-dark mb-8 text-center">
            La Scacchiera in Azione
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage("/images/Prova1.jpg")}
            >
              <img
                src="/images/Prova1.jpg"
                alt="Torneo sulla scacchiera gigante"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div 
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage("/images/scacchiera-grossa.jpg")}
            >
              <img
                src="/images/scacchiera-grossa.jpg"
                alt="Dettaglio scacchiera gigante"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center bg-chess-dark rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Vuoi Provare la Scacchiera Gigante?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Vieni a trovarci e vivi l'emozione di giocare sulla nostra scacchiera monumentale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-chess-gold text-chess-dark px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold/90 transition-all duration-300 inline-flex items-center justify-center text-base shadow-lg"
            >
              Prenota una Visita
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
            <Link
              to="/tornei"
              className="border-2 border-chess-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-chess-gold hover:text-chess-dark transition-all duration-300 text-base"
            >
              Scopri i Prossimi Tornei
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ScacchieraGigante;