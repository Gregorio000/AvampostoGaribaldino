import React from "react";
import { useNavigate } from "react-router-dom";
import { Chessboard } from "react-chessboard";
import { ArrowLeft } from "lucide-react";

const Scacchiere = () => {
  const navigate = useNavigate();

  const materiali = [
    {
      id: 1,
      nome: "Scacchiera e pezzi da torneo in legno",
      tipo: "Scacchiera in legno",
      anno: 2022,
      descrizione: "Scacchiera professionale in legno di noce con pezzi Staunton in ebano e bosso. Dimensioni 50x50cm, perfetta per tornei e partite ufficiali.",
      immagine: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      disponibilita: "Disponibile",
    },
    {
      id: 2,
      nome: "Scacchiera e pezzi normali",
      tipo: "Scacchiera pieghevole",
      anno: 2021,
      descrizione: "Set da viaggio compatto con pezzi magnetici. Scacchiera in pelle sintetica con chiusura a bottone, ideale per partite in movimento.",
      immagine: "https://images.unsplash.com/photo-1543092587-d3b0e5c9cd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      disponibilita: "In prestito",
    },
    {
      id: 3,
      nome: "Orologio Scacchi Digitale",
      tipo: "Orologio da torneo",
      anno: 2023,
      descrizione: "Orologio digitale professionale con display LCD, impostazioni per time control variabili e funzioni per tornei ufficiali.",
      immagine: "https://images.unsplash.com/photo-1604943051136-5c71e08cc44f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      disponibilita: "Disponibile",
    },
    {
      id: 4,
      nome: "Scacchiera Gigante da Giardino",
      tipo: "Scacchiera esterna",
      anno: 2020,
      descrizione: "Scacchiera da esterno con pezzi in resina alti 60cm. Utilizzata per eventi e dimostrazioni all'aperto nel cortile del circolo.",
      immagine: "https://images.unsplash.com/photo-1591328660071-8952c66791d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      disponibilita: "Disponibile",
    },
    // {
    //   id: 5,
    //   nome: "Set Artistico 'Battaglia Medievale'",
    //   tipo: "Scacchiera artistica",
    //   anno: 2019,
    //   descrizione: "Set unico con pezzi scolpiti a mano che rappresentano eserciti medievali. Opera di un artigiano locale, principalmente espositiva.",
    //   immagine: "https://images.unsplash.com/photo-1581235850685-2a309c6d9737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    //   disponibilita: "Solo esposizione",
    // },
    // {
    //   id: 6,
    //   nome: "Kit Iniziazione per Principianti",
    //   tipo: "Set didattico",
    //   anno: 2023,
    //   descrizione: "Set completo per principianti con scacchiera con coordinate, pezzi con simboli didattici e guida introduttiva illustrata.",
    //   immagine: "https://images.unsplash.com/photo-1622744441040-b3fbdee7d872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    //   disponibilita: "Disponibile",
    // }
  ];

 

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-teal-800 hover:text-teal-900 mr-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Indietro
          </button>
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-teal-900">Materiale del Circolo Scacchistico</h1>
          </div>
        </div>

        <p className="text-lg text-teal-700 mb-10 text-center max-w-3xl mx-auto">
          Scopri le scacchiere e il materiale a disposizione dei soci: set professionali per tornei, 
          scacchiere da viaggio, orologi digitali e set didattici per principianti.
        </p>

        {/* Grid del materiale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materiali.map((materiale) => (
            <div
              key={materiale.id}
              className="bg-white rounded-xl shadow-lg border border-teal-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={materiale.immagine} 
                    alt={materiale.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-semibold text-teal-900 mb-2">{materiale.nome}</h3>
                  <p className="text-teal-600 font-medium mb-1">{materiale.tipo}</p>
                  <p className="text-teal-500 text-sm mb-2">Anno: {materiale.anno}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium`}>
                    {materiale.disponibilita}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {materiale.descrizione}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scacchiere;