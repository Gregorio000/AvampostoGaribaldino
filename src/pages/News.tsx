import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, Heart } from 'lucide-react';

// Definizione tipo NewsPost
interface NewsPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author_id: string;
  published_at: string;
  featured_image?: string;
  created_at: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Dati mock delle notizie
  const mockNews: NewsPost[] = [
    {
      id: '1',
      title: 'Torneo 10° Anniversario',
      content: 'Contenuto dettagliato della notizia...',
      excerpt:
        'Il prestigioso torneo inizierà il 15 Giugno 2025 dalle ore 15,00. Sede di Gioco: APS Centro Anziani di Mentana (Via Giovanni Giolitti N. 21/23, Mentana RM)',
      author_id: 'Gregorio Caruso',
      published_at: '2025-06-01',
      featured_image: '/images/ScacchiFoto.jpg',
      created_at: '2025-06-01',
    },

    {
      id: '2',
      title: 'Torneo Estivo',
      content: 'Contenuto dettagliato della notizia...',
      excerpt:
        'Torneo Estivo',
      author_id: 'Gregorio Caruso',
      published_at: '2025-06-15',
      featured_image: '/images/Prova1.jpg',
      created_at: '2025-06-01',
    },
    {
      id: '3',
      title: 'Nuova Scacchiera Digitale',
      content: 'Contenuto dettagliato della notizia...',
      excerpt:
        'Nuova Scacchiera Digitale in arrivo',
      author_id: 'Gregorio Caruso',
      published_at: '2025-06-06',
      featured_image: '/TorreScacchi.svg',
      created_at: '2025-06-06',
    },
    {
      id: '4',
      title: 'Nuovo Grande Maestro',
      content: 'Contenuto dettagliato della notizia...',
      excerpt:
        'Nuovo Grande Maestro ha messo piede nel circolo',
      author_id: 'Gregorio Caruso',
      published_at: '2025-06-06',
      featured_image: '/images/ScacchiFoto2.jpg',
      created_at: '2025-06-06',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setNews(mockNews);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getAuthorName = (authorId: string) => {
    const authors: { [key: string]: string } = {
      'alessandro-bianchi': 'Alessandro Bianchi',
      'maria-rossi': 'Maria Rossi',
      'marco-verdi': 'Marco Verdi',
      'Gregorio Caruso': 'Gregorio Caruso',
    };
    return authors[authorId] || 'Redazione';
  };

  if (loading) {
    return (
      <div className="py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chess-gold mx-auto mb-4"></div>
          <p className="text-chess-gray">Caricamento notizie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-chess-dark mb-6">
            Notizie del Circolo
          </h1>
          <p className="text-xl text-chess-gray max-w-3xl mx-auto">
            Rimani aggiornato sulle ultime novità, eventi e risultati dell'Avamposto Garibaldino.
          </p>
        </div>

        {/* Featured Article */}
        {news.length > 0 && (
          <div className="mb-12">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="lg:order-2">
                  <img
                    src={news[0].featured_image || '/images/ScacchiFoto.jpg'}
                    alt={news[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:order-1">
                  <div className="flex items-center space-x-4 text-sm text-chess-gray mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(news[0].published_at)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{getAuthorName(news[0].author_id)}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-chess-dark mb-4">
                    {news[0].title}
                  </h2>
                  <p className="text-chess-gray mb-6 text-lg leading-relaxed">{news[0].excerpt}</p>
                  <Link
                    to={`/news/${news[0].id}`}
                    className="inline-block bg-chess-gold text-black font-semibold px-6 py-3 rounded-lg hover:bg-chess-gold/90 transition-colors"
                  >
                    Leggi l'articolo completo
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(1).map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={article.featured_image || '/images/ScacchiFoto.jpg'}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-chess-gray mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(article.published_at)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{getAuthorName(article.author_id)}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-chess-dark mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-chess-gray mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/news/${article.id}`}
                    className="text-chess-gold hover:text-chess-dark font-medium transition-colors"
                  >
                    Leggi di più →
                  </Link>
                  <div className="flex items-center space-x-3 text-sm text-chess-gray">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>127</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>23</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-chess-gray mb-2">Nessuna notizia disponibile</h3>
            <p className="text-chess-gray">Controlla di nuovo presto per nuovi aggiornamenti!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
