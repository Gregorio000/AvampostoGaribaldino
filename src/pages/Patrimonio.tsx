import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Grid, FileText, Award, ClipboardList, DollarSign } from "lucide-react";

type Categoria = {
  titolo: string;
  descrizione: string;
  icona: JSX.Element;
  pathSezione: string;
  elementi: { nome: string; descrizione?: string }[];
};

const patrimonio: Categoria[] = [
  {
    titolo: "Libri",
    descrizione: "La nostra biblioteca scacchistica, disponibile per i soci.",
    icona: <BookOpen className="w-6 h-6 text-blue-600" />,
    pathSezione: "/patrimonio/libri",
    elementi: [
      { nome: "My System – Aron Nimzowitsch" },
      { nome: "Il mio sistema aperto – Garry Kasparov" },
      { nome: "Strategia degli scacchi – Ludek Pachman" },
      { nome: "Scacchi per principianti – Bruce Pandolfini" },
    ],
  },
  {
    titolo: "Scacchiere",
    descrizione: "Materiale per tornei e allenamenti.",
    icona: <Grid className="w-6 h-6 text-green-600" />,
    pathSezione: "/patrimonio/scacchiere",
    elementi: [
      { nome: "Scacchiere in legno (5)" },
      { nome: "Scacchiere in plastica arrotolabili (10)" },
      { nome: "Set pezzi Staunton n.5 (15)" },
      { nome: "Orologi digitali (8)" },
    ],
  },
  {
    titolo: "Documenti Trasparenti",
    descrizione: "Documentazione consultabile dai soci.",
    icona: <FileText className="w-6 h-6 text-gray-600" />,
    pathSezione: "/patrimonio/documenti",
    elementi: [
      { nome: "Statuto e regolamento" },
      { nome: "Registro soci" },
    ],
  },
  {
    titolo: "Attestati e Riconoscimenti",
    descrizione: "Premi e riconoscimenti ottenuti dal circolo.",
    icona: <Award className="w-6 h-6 text-yellow-600" />,
    pathSezione: "/patrimonio/attestati",
    elementi: [
      { nome: "Affiliazione FSI" },
      { nome: "Premio Torneo Provinciale 2023" },
    ],
  },
  {
    titolo: "Verbali",
    descrizione: "Resoconti delle riunioni del direttivo.",
    icona: <ClipboardList className="w-6 h-6 text-purple-600" />,
    pathSezione: "/patrimonio/verbali",
    elementi: [
      { nome: "Verbale Assemblea Ordinaria 2024" },
      { nome: "Verbale Riunione Straordinaria 2023" },
    ],
  },
  {
    titolo: "Bilanci",
    descrizione: "Situazione economica annuale del circolo.",
    icona: <DollarSign className="w-6 h-6 text-red-600" />,
    pathSezione: "/patrimonio/bilanci",
    elementi: [
      { nome: "Bilancio 2024" },
      { nome: "Bilancio 2023" },
    ],
  },
];

function Patrimonio() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mt-8 mb-6 text-center">
        Patrimonio del Circolo
      </h1>
      <p className="text-lg text-center mb-10 text-gray-600">
        Elenco del patrimonio materiale e documentale del circolo scacchi.
      </p>

      <div className="grid gap-8 sm:grid-cols-2">
        {patrimonio.map((cat) => (
          <div
            key={cat.titolo}
            className="p-6 bg-gray-50 rounded-xl shadow-md border border-gray-200"
          >
            <div
              className="cursor-pointer flex items-center gap-3 mb-4 group"
              onClick={() => navigate(cat.pathSezione)}
            >
              <div className="group-hover:scale-110 transition-transform">
                {cat.icona}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {cat.titolo}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">{cat.descrizione}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {cat.elementi.map((el) => (
                <li key={el.nome}>
                  <span className="font-medium">{el.nome}</span>
                  {el.descrizione && <span>: {el.descrizione}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patrimonio;
