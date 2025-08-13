import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const mockNews = [
  {
    id: '1',
    title: 'Torneo 10° Anniversario',
    content:
      'Il prestigioso torneo si terrà il 15 Giugno 2025 a partire dalle ore 15:00, offrendo a tutti gli appassionati di scacchi un’occasione imperdibile per assistere e partecipare a una competizione di alto livello. La sede scelta per l’evento è l’APS Centro Anziani di Mentana, situato in Via Giovanni Giolitti 21/23, nel cuore di Mentana (RM), una location accogliente e facilmente raggiungibile, che garantisce un ambiente ideale per sfide avvincenti e momenti di convivialità tra giocatori e spettatori. Non perdere l’opportunità di vivere l’emozione del torneo e di confrontarti con i migliori talenti del circolo!',
    author_id: 'Gregorio Caruso',
    published_at: '2025-06-01',
    featured_image: '/images/Torneo1.jpg',
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
      featured_image: '/LogoAvampGarib.svg',
      created_at: '2025-06-06',
    },
];

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;

    const found = mockNews.find((item) => item.id === id);
    if (found) {
      setArticle(found);
    } else {
      navigate('/news', { replace: true });
    }
  }, [id, navigate]);

  if (!article) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg">Caricamento articolo...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-lg p-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-chess-dark hover:text-chess-gold mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Torna Indietro
      </button>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{article.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Testo a sinistra */}
          <div className="flex-1 text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {article.content}
          </div>

          {/* Immagine a destra */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={article.featured_image}
              alt={article.title}
              className="max-w-full max-h-[700px] rounded-md shadow-md object-contain"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
