import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Users, DollarSign, Clock, MapPin, Trophy, ArrowLeft } from 'lucide-react';

interface Tournament {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  max_participants: number;
  entry_fee: number;
  prize_pool: number;
  status: 'upcoming' | 'completed';
  tournament_type: 'swiss' | 'round_robin' | 'knockout';
  created_at: string;
  image?: string; // <-- aggiunta la proprietà immagine
}

const mockTournaments: Tournament[] = [
  {
    id: '1',
    name: 'Torneo 10° Anniversario',
    description: 'Il prestigioso torneo per festeggiare il 10° anniversario del club. Aperto a tutti i livelli di gioco.',
    start_date: '2025-06-15T15:00:00Z',
    end_date: '2025-06-15T20:00:00Z',
    max_participants: 64,
    entry_fee: 50,
    prize_pool: 1500,
    status: 'completed',
    tournament_type: 'swiss',
    created_at: '2025-06-01T00:00:00Z',
    image: '/images/Torneo1.jpg',
  },
  {
    id: '2',
    name: 'Campionato Sociale 2025',
    description: 'Il campionato interno per determinare il campione sociale del club.',
    start_date: '2025-02-01T19:00:00Z',
    end_date: '2025-06-30T21:00:00Z',
    max_participants: 32,
    entry_fee: 30,
    prize_pool: 800,
    status: 'completed',
    tournament_type: 'round_robin',
    created_at: '2025-01-01T00:00:00Z',
    image: '/images/CampionatoSociale.jpg',
  },
  {
    id: '3',
    name: 'Torneo Lampo del Venerdì',
    description: 'Torneo settimanale di partite lampo per tutti i membri.',
    start_date: '2025-01-17T20:00:00Z',
    end_date: '2025-01-17T23:00:00Z',
    max_participants: 24,
    entry_fee: 10,
    prize_pool: 150,
    status: 'upcoming',
    tournament_type: 'knockout',
    created_at: '2025-01-01T00:00:00Z',
    image: '/images/LampoVenerdi.jpg',
  },
  {
    id: '4',
    name: 'Memorial Garibaldi 2024',
    description: 'Il torneo più prestigioso del club, dedicato al nostro patrono.',
    start_date: '2024-11-15T09:00:00Z',
    end_date: '2024-11-17T18:00:00Z',
    max_participants: 48,
    entry_fee: 75,
    prize_pool: 3000,
    status: 'completed',
    tournament_type: 'swiss',
    created_at: '2024-10-01T00:00:00Z',
    image: '/images/MemorialGaribaldi.jpg',
  },
  {
    id: '5',
    name: 'Torneo di Natale 2024',
    description: 'Torneo festivo con premiazioni speciali e atmosfera natalizia.',
    start_date: '2024-12-20T15:00:00Z',
    end_date: '2024-12-20T20:00:00Z',
    max_participants: 36,
    entry_fee: 25,
    prize_pool: 500,
    status: 'completed',
    tournament_type: 'knockout',
    created_at: '2024-11-01T00:00:00Z',
    image: '/images/TorneoNatale.jpg',
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getTournamentTypeText = (type: string) => {
  const types = {
    swiss: 'Sistema Svizzero',
    round_robin: 'Girone Unico',
    knockout: 'Eliminazione Diretta',
  };
  return types[type as keyof typeof types] || type;
};

const TournamentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const tournament = mockTournaments.find((t) => t.id === id);

  if (!tournament) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-chess-dark">Torneo non trovato</h2>
        <p className="text-chess-gray mt-2">Il torneo che stai cercando non esiste o è stato rimosso.</p>
      </div>
    );
  }

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-chess-dark hover:text-chess-gold mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Torna Indietro
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-chess-dark">{tournament.name}</h1>
            <Trophy className="h-10 w-10 text-chess-gold" />
          </div>
          <p className="text-chess-gray mb-6">{tournament.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-chess-gold" />
              <div className="text-sm text-chess-dark">
                Inizio: {formatDate(tournament.start_date)} — Fine: {formatDate(tournament.end_date)}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-chess-gold" />
              <span className="text-sm text-chess-dark">
                Massimo {tournament.max_participants} partecipanti
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-chess-gold" />
              <span className="text-sm text-chess-dark">{getTournamentTypeText(tournament.tournament_type)}</span>
            </div>

            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5 text-chess-gold" />
              <span className="text-sm text-chess-dark">
                Iscrizione: €{tournament.entry_fee} • Montepremi: €{tournament.prize_pool}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-chess-gold" />
              <span className="text-sm text-chess-dark">Sede del Club - Via Giuseppe Garibaldi 42, Milano</span>
            </div>
          </div>

          {tournament.status === 'completed' && (
            <div className="bg-gray-100 p-4 rounded-lg text-center text-chess-gray mt-8">
              Questo torneo è stato completato. I risultati sono disponibili per i partecipanti.
            </div>
          )}
        </div>

        <div className="flex-shrink-0 w-full lg:w-64">
          <img
            src={tournament.image || '/images/default.jpg'}
            alt={tournament.name}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
