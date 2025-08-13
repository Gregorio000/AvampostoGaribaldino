import { useNavigate } from "react-router-dom";

const Capitolo1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 flex flex-col items-center p-8 font-serif text-gray-800">
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 text-yellow-700 hover:text-yellow-900 font-semibold"
      >
        ← Torna indietro
      </button>

      <article
        style={{
          maxWidth: "700px",
          background:
            "linear-gradient(135deg, #f7f1d1 0%, #e6d4a1 100%)",
          border: "6px double #a67c00",
          borderRadius: "16px",
          padding: "3rem 2.5rem",
          boxShadow:
            "0 0 25px rgba(166, 124, 0, 0.7), inset 0 0 25px rgba(255, 255, 255, 0.5)",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          position: "relative",
          fontFamily: "'Georgia', serif",
          color: "#5b4b00",
          // userSelect rimosso per permettere copia/incolla
        }}
      >
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: "700",
            fontSize: "3rem",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "1px 1px 0 #c2a40a",
            color: "#6b5700",
            userSelect: "text",
          }}
        >
          Capitolo 1: Origini degli Scacchi
        </h1>

        <p>
          Gli scacchi affondano le loro radici in antichissime civiltà. La loro
          origine più accreditata è l’India, intorno al VI secolo d.C., con un
          gioco chiamato <em>Chaturanga</em>, che rappresentava le quattro
          divisioni dell’esercito: fanteria, cavalleria, elefanti e carri da guerra.
        </p>

        <p>
          Da qui il gioco si diffuse in Persia, dove divenne noto come{' '}
          <em>Shatranj</em>. In questo periodo molte delle regole iniziarono a
          prendere forma e il gioco iniziò a somigliare sempre più agli
          scacchi moderni. La parola "scacchi" deriva proprio dal termine
          persiano <strong>"shah"</strong>, che significa "re".
        </p>

        <p>
          Nel Medioevo, grazie al contatto tra Oriente e Occidente, il gioco si
          diffuse in Europa, evolvendosi ulteriormente fino a diventare lo
          scacchi che conosciamo oggi.
        </p>

        <footer
          style={{
            marginTop: "3rem",
            fontSize: "0.9rem",
            fontStyle: "italic",
            textAlign: "right",
            color: "#7a6d00",
            userSelect: "text",
          }}
        >
          — Tratto da studi storici sugli scacchi
        </footer>
      </article>
    </div>
  );
};

export default Capitolo1;
