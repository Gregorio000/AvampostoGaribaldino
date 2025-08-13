import React from "react";
import { LogOut, Pencil, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Profilo() {
  const navigate = useNavigate();

  const utente = {
    nome: "Mario Rossi",
    livello: "Intermedio",
    email: "mario.rossi@email.com",
    punteggio: 1450,
    partiteGiocate: 120,
    vittorie: 65,
  };

  const handleLogout = () => {
    // TODO: inserire logica per logout
    navigate("/login");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-5xl font-bold mt-8 mb-6 text-center">Il mio profilo</h1>

      <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center">
          <User className="w-10 h-10 text-gray-600" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{utente.nome}</h2>
          <p className="text-gray-500">{utente.email}</p>
          <p className="mt-1 text-sm text-blue-600">Livello: {utente.livello}</p>
        </div>
        <button
          onClick={() => navigate("/profilo/modifica")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Pencil className="w-4 h-4" />
          Modifica
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{utente.punteggio}</p>
          <p className="text-sm text-gray-600">Punteggio Elo</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{utente.partiteGiocate}</p>
          <p className="text-sm text-gray-600">Partite giocate</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-2xl font-bold">{utente.vittorie}</p>
          <p className="text-sm text-gray-600">Vittorie</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          <LogOut className="w-4 h-4" />
          Esci
        </button>
      </div>
    </div>
  );
}

export default Profilo;
