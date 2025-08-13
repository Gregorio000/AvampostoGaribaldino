import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Users, DollarSign, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';



interface Tournament {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  max_participants: number;
  entry_fee: number;
  prize_pool: number;
  status: 'upcoming' |  'completed';
  tournament_type: 'swiss' | 'round_robin' | 'knockout';
  created_at: string;
}

const Tournaments: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [activeTab, setActiveTab] = useState<'upcoming' |  'completed'>('upcoming');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      setTournaments(mockTournaments);
    } catch (error) {
      console.error('Error loading tournaments:', error);
      setTournaments(mockTournaments);
    } finally {
      setLoading(false);
    }
  };

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
  created_at: '2025-06-01T00:00:00Z'
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
      created_at: '2025-01-01T00:00:00Z'
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
      created_at: '2025-01-01T00:00:00Z'
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
      created_at: '2024-10-01T00:00:00Z'
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
      created_at: '2024-11-01T00:00:00Z'
    }
  ];

  const filteredTournaments = tournaments.filter(tournament => tournament.status === activeTab);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      upcoming: { color: 'bg-blue-100 text-blue-800', text: 'Prossimo' },
      // ongoing: { color: 'bg-green-100 text-green-800', text: 'In Corso' },
      completed: { color: 'bg-gray-100 text-gray-800', text: 'Completato' }
    };
    return badges[status as keyof typeof badges] || badges.upcoming;
  };

  const getTournamentTypeText = (type: string) => {
    const types = {
      swiss: 'Sistema Svizzero',
      round_robin: 'Girone Unico',
      knockout: 'Eliminazione Diretta'
    };
    return types[type as keyof typeof types] || type;
  };

  // Loading screen inline
  if (loading) {
    return (
      <div className="py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chess-gold mx-auto mb-4"></div>
          <p className="text-chess-gray">Caricamento tornei...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-chess-dark mb-6">Tornei</h1>
          <p className="text-xl text-chess-gray max-w-3xl mx-auto">
            Partecipa ai nostri prestigiosi tornei e metti alla prova le tue abilità scacchistiche.
          </p>
        </div>

<div className="flex justify-center mb-8">
  <div className="bg-gray-100 p-1 rounded-lg">
    {['upcoming', 'completed'].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab as any)}
        className={`px-6 py-2 rounded-md font-medium transition-colors ${
          activeTab === tab
            ? 'bg-chess-gold text-chess-black'
            : 'text-chess-gray hover:text-chess-dark'
        }`}
      >
        {tab === 'upcoming' ? 'Prossimi' : 'Completati'}
      </button>
    ))}
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTournaments.map((tournament) => {
            const badge = getStatusBadge(tournament.status);
            return (
              <div
                key={tournament.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-chess-dark mb-2">
                        {tournament.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>
                    <Trophy className="h-8 w-8 text-chess-gold" />
                  </div>

                  <p className="text-chess-gray mb-6">{tournament.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-chess-gold" />
                      <div>
                        <div className="text-sm font-medium text-chess-dark">
                          Inizio: {formatDate(tournament.start_date)}
                        </div>
                        <div className="text-sm text-chess-gray">
                          Fine: {formatDate(tournament.end_date)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-chess-gold" />
                      <span className="text-sm text-chess-gray">
                        Massimo {tournament.max_participants} partecipanti
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-chess-gold" />
                      <span className="text-sm text-chess-gray">
                        {getTournamentTypeText(tournament.tournament_type)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-chess-gold" />
                      <div className="text-sm">
                        <span className="text-chess-gray">Iscrizione: </span>
                        <span className="font-medium text-chess-dark">€{tournament.entry_fee}</span>
                        <span className="text-chess-gray"> • Montepremi: </span>
                        <span className="font-medium text-chess-dark">€{tournament.prize_pool}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-chess-gold" />
                      <span className="text-sm text-chess-gray">
                        Sede del Club - Via Giuseppe Garibaldi 42, Milano
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    {/* {tournament.status === 'upcoming' && (
                      // <button className="w-full bg-chess-gold text-chess-black font-semibold py-3 px-4 rounded-lg hover:bg-chess-gold/90 transition-colors">
                      //   Iscriviti al Torneo
                      // </button>
                    )} */}
                    {/* {tournament.status === 'ongoing' && (
                      <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors">
                        Vedi Classifica
                      </button>
                    )} */}
  {tournament.status === 'completed' && (
    <Link
      to={`/tournaments/${tournament.id}`}
      className="block w-full bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
    >
      Vedi Risultati
    </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Trophy className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-chess-gray mb-2">
              Nessun torneo {activeTab === 'upcoming' ? 'prossimo' : 'completato'}
            </h3>
            <p className="text-chess-gray">
              Controlla di nuovo presto per nuovi tornei!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournaments;
