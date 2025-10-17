import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Grid, 
  FileText, 
  Award, 
  ClipboardList, 
  DollarSign,
  ArrowRight,
  ChevronRight,
  Library,
  Shield,
  Users
} from "lucide-react";

type Categoria = {
  titolo: string;
  descrizione: string;
  icona: JSX.Element;
  pathSezione: string;
  elementi: { nome: string; descrizione?: string }[];
  colore: string;
  coloreIcona: string;
  coloreTesto: string;
};

const patrimonio: Categoria[] = [
  {
    titolo: "Biblioteca Scacchistica",
    descrizione: "Libri e pubblicazioni specializzate per i soci.",
    icona: <BookOpen className="w-8 h-8" />,
    pathSezione: "/patrimonio/libri",
    elementi: [
      // { nome: "Manuali di apertura", descrizione: "Oltre 50 volumi" },
      // { nome: "Biografie di grandi maestri", descrizione: "Storie appassionanti" },
      // { nome: "Riviste specializzate", descrizione: "Collezione completa" }
    ],
    colore: "from-blue-500 to-blue-700",
    coloreIcona: "text-blue-100",
    coloreTesto: "text-blue-800"
  },
  {
    titolo: "Scacchiere e Materiali",
    descrizione: "Set professionali e attrezzature per tornei.",
    icona: <Grid className="w-8 h-8" />,
    pathSezione: "/patrimonio/scacchiere",
    elementi: [
      // { nome: "Scacchiere torneo", descrizione: "10 set professionali" },
      // { nome: "Orologi digitali", descrizione: "Tecnologia avanzata" },
      // { nome: "Set viaggio", descrizione: "Per partite in movimento" }
    ],
    colore: "from-emerald-500 to-emerald-700",
    coloreIcona: "text-emerald-100",
    coloreTesto: "text-emerald-800"
  },
  // {
  //   titolo: "Archivio Storico",
  //   descrizione: "Documenti e fotografie della nostra storia.",
  //   icona: <Library className="w-8 h-8" />,
  //   pathSezione: "/patrimonio/archivio",
  //   elementi: [
      
  //   ],
  //   colore: "from-amber-500 to-amber-700",
  //   coloreIcona: "text-amber-100",
  //   coloreTesto: "text-amber-800"
  // },
  // {
  //   titolo: "Trofee e Premi",
  //   descrizione: "Coppe e riconoscimenti dei nostri soci.",
  //   icona: <Award className="w-8 h-8" />,
  //   pathSezione: "/patrimonio/trofei",
  //   elementi: [
     
  //   ],
  //   colore: "from-purple-500 to-purple-700",
  //   coloreIcona: "text-purple-100",
  //   coloreTesto: "text-purple-800"
  // },
  // {
  //   titolo: "Materiale Didattico",
  //   descrizione: "Risorse per insegnamento e apprendimento.",
  //   icona: <ClipboardList className="w-8 h-8" />,
  //   pathSezione: "/patrimonio/didattica",
  //   elementi: [
      
  //   ],
  //   colore: "from-rose-500 to-rose-700",
  //   coloreIcona: "text-rose-100",
  //   coloreTesto: "text-rose-800"
  // },
  // {
  //   titolo: "Risorse Digitali",
  //   descrizione: "Accesso a piattaforme online e database.",
  //   icona: <Shield className="w-8 h-8" />,
  //   pathSezione: "/patrimonio/digitale",
  //   elementi: [
      
  //   ],
  //   colore: "from-indigo-500 to-indigo-700",
  //   coloreIcona: "text-indigo-100",
  //   coloreTesto: "text-indigo-800"
  // }
];

function Patrimonio() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header migliorato */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center mb-4 bg-amber-100 px-4 py-2 rounded-full">
            <Shield className="h-5 w-5 text-amber-700 mr-2" />
            <span className="text-amber-700 font-medium">Patrimonio Condiviso</span>
          </div>
          
          <h1 className="text-5xl font-bold text-chess-dark mb-4 bg-gradient-to-r from-chess-dark to-chess-gold bg-clip-text text-transparent">
            Il Patrimonio del Circolo 
          </h1>
          
          <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
            Scopri le risorse, i materiali e le collezioni che rendono speciale il nostro circolo scacchistico
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Statistiche */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-700">50+</div>
            <div className="text-sm text-amber-600">Libri</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-700">30+</div>
            <div className="text-sm text-amber-600">Scacchiere</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-700">10</div>
            <div className="text-sm text-amber-600">Anni di Storia</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <div className="text-2xl font-bold text-amber-700">SOLO</div>
            <div className="text-sm text-amber-600">Accessibile ai Soci</div>
          </div>
        </div>

        {/* Grid delle categorie migliorata */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patrimonio.map((cat) => (
            <div
              key={cat.titolo}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(cat.pathSezione)}
            >
              {/* Header con gradiente */}
              <div className={`p-6 bg-gradient-to-r ${cat.colore} text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-white/20 ${cat.coloreIcona}`}>
                      {cat.icona}
                    </div>
                    <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-2">{cat.titolo}</h2>
                  <p className="text-sm opacity-90">{cat.descrizione}</p>
                </div>
              </div>
              
              {/* Contenuto */}
              <div className="p-6">
                {cat.elementi.length > 0 && (
                  <>
                    <h3 className={`text-sm font-semibold uppercase tracking-wide ${cat.coloreTesto} mb-4`}>
                      Contenuti Principali
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {cat.elementi.map((el, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${cat.coloreTesto} mt-2 mr-3 flex-shrink-0`}></div>
                          <div>
                            <span className="font-medium text-gray-800">{el.nome}</span>
                            {el.descrizione && (
                              <p className="text-sm text-gray-500 mt-1">{el.descrizione}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className={`text-sm font-medium ${cat.coloreTesto}`}>Disponibile per i soci</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(cat.pathSezione);
                    }}
                    className={`flex items-center gap-2 py-2 px-4 rounded-lg font-medium transition-all group-hover:${cat.coloreTesto} group-hover:bg-opacity-10 ${cat.coloreTesto} bg-opacity-5`}
                  >
                    Esplora
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action finale */}
        {/* <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 text-center mt-16 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Diventa parte della nostra comunità
            </h2>
            <p className="text-amber-100 mb-6">
              Unisciti a noi per accedere a tutto il patrimonio del circolo e partecipare alla vita scacchistica mentanese
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors inline-flex items-center"
            >
              Diventa Socio
              <Users className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Patrimonio;