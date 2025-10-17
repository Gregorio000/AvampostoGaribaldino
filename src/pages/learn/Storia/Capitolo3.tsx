import { useNavigate } from "react-router-dom";

const Capitolo3 = () => {
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
        }}
      >
        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
            textShadow: "1px 1px 0 #c2a40a",
            color: "#6b5700",
            userSelect: "text",
          }}
        >
          Capitolo 3: GLI SCACCHI E l’EPOCA CONTEMPORANEA. 
        </h1>

        <p>
          Giunti all'epoca di Philidor, seconda metà del settecento, è interessante notare
          che gli scacchi o, meglio, il gioco dei Re ha attraversato le diverse epoche della
          Storia antichissima, antica, medievale e moderna quale riflesso della società
          umana e chi possedeva il gioco dei re era anche la civiltà dominante sulle altre.
        </p>

        <p>
          Così notiamo che, dando al gioco dei Re una origine sumera, il medesimo
          gioco è una delle attività riservate agli "aristoi" o comunque agli iniziati alla Vera
          Conoscenza, che è riservata ai pochi che per il loro spiccato intelletto sono riconosciuti 
          quali portatori di un messaggio divino.
        </p>

        <p>
          E tale qualità del gioco dei Re permane nel periodo egizio e si incastra perfettamente 
          nella storia romana che ci ha lasciato prova della sua diffusione nel territorio 
          dell'Impero con le tavole da gioco, a volte disegnate a mosaico sui pavimenti 
          delle basiliche, come ad Aquileia o scolpite su pietra con quella ritrovata in Inghilterra 
          e anche numerose perline colorate e si incastra altresì ad Oriente nella storia 
          dell'impero cinese.
        </p>

        <p>
          Tra l'altro a Pompei è stato ritrovato il famoso latercolo pompeiano quello dove 
          campeggia, dall'alto in basso e da sinistra a destra e da destra a sinistra e dal basso 
          in alto, la stessa identica frase "SATOR, AREPO, TENET, OPERA, ROTAS".
        </p>

        <p>
          Una tesi suggestiva vorrebbe mettere questa enigmatica frase in contrapposizione 
          con l'ancor più misteriosa frase che si trova sul pavimento del Battistero di Firenze 
          il cui testo è EN GIRO TORTE SOL CICLOS ET ROTOR IGNE. Ma non è questo il punto, 
          il fatto è che il caso vuole che i saraceni dominino tra il 700 e il 1400 d.C., in gran 
          parte del mondo conosciuto e hanno con sé gli scacchi, i norreni, i cosiddetti vichinghi 
          dominano i mari nei secoli 800 e 900 d.C. e fino all'anno 1100 nel nord dell'Europa 
          e gli scacchi ritrovati nell'isola di Lewis testimoniano silenziosamente che costoro 
          conoscevano e ammiravano gli scacchi.
        </p>

        <p>
          Ed ancora nel 1400 e nel 1500 i signori degli scacchi sono gli spagnoli che scoprono 
          le nuove terre d'America e sono in quell'epoca la prima potenza mondiale. Nel seicento 
          e fino la prima metà del 1700, sono gli italici a dominare la scena dello scacchismo 
          mondiale e in quell'epoca a dominare il mondo economico sono i Medici e i grandi 
          banchieri fiorentini che sono la cassa dei sovrani europei e ne determinano le fortune.
        </p>

        <p>
          Così anche nei secoli 1700 e 1800, la storia si ripete, a dominare nel millesettecento 
          sono gli scacchisti francesi come Legal e Philidor e nel milleottocento quelli inglesi 
          come Blackburne e Staunton e Inghilterra e Francia sono le potenze coloniali dell'epoca.
        </p>

        <p>
          Ancora, nella seconda metà dell'Ottocento, dopo la breve parentesi dello statunitense 
          Paul Morphy, che comunque nasce in una nazione giovane divenuta Stato nel 1776 
          e pertanto, in cerca di affermazione nello scacchiere mondiale, la primazia negli 
          scacchi passa agli austriaci Andersen e Steinitz che è il primo campione mondiale 
          ufficiale dopo lo scontro contro il polacco Zukertort nel 1886 ed entrambi sono esponenti 
          dell'Impero Austro-Ungarico.
        </p>

        <p>
          Dopo di lui diviene campione del mondo nel 1897, lo statunitense Emanuel Lasker 
          che a sua volta lasciò lo scettro al cubano Josè Raoul Capablanca, che benché cubano 
          era di estrazione scacchistica statunitense, nel 1921.
        </p>

        <p>
          Nel 1927, Capablanca fu inaspettatamente battuto da un giovane talento russo, 
          Alexander Alechine e - guarda il caso - in quel periodo la Russia si afferma quale 
          potenza mondiale; la prima comunista.
        </p>

        <p>
          Alechine perde il titolo contro il belga Max Euwe ma lo recupera immediatamente 
          e mai concederà la rivincita a Capablanca portando con sé il titolo di campione del 
          mondo nella tomba, dopo essere stato indicato ingiustamente quale collaborazionista 
          dei nazisti.
        </p>

        <p>
          Voce messa in giro ad arte in realtà, e probabilmente causata dal fatto che, intorno 
          agli anni trenta aveva deciso di lasciare la ormai consolidata Unione Sovietica, dove 
          indubbiamente non era possibile fare la vita sopra le righe che lui conduceva in giro 
          per il mondo con gli scacchi, a base di donne, alcool, gioco d'azzardo e ampio dispendio 
          di denaro per mantenere i propri vizi e dove i giovani di provenienza aristocratica, 
          troppo liberi di pensiero e coscienza, come lui non erano in quel momento ben visti, 
          abbracciando la cittadinanza francese.
        </p>

        <p>
          Nel dopoguerra si pone la questione di procedere alla nomina di un nuovo Re degli 
          scacchi e il torneo che venne organizzato nel 1948, vide vincitore Mikhail Botvinnik.
        </p>

        <p>
          Da quel momento e fino alla fine degli anni novanta, il titolo di campione del mondo 
          di scacchi diviene di appartenenza di giocatori dell'area sovietica. Infatti, dopo Botvinnik 
          divengono campioni del mondo prima Vassilij Smyslov che riperde il titolo contro 
          Botvinnik l'anno seguente, poi il lettone Mikhail Tal che perde anche lui il titolo nella 
          rivincita dell'anno seguente contro Botvinnik ed infine l'armeno Tigran Petrosijan 
          nel 1963, que mantiene il titolo anche nella successiva rivincita con Botvinnik.
        </p>

        <p>
          Dopo Petrosijan, nel 1969 è la volta del russo Boris Spasskij. Questi nel 1972 mette 
          in palio il titolo contro lo statunitense Robert "Bobby" Fischer, il quale ottiene il 
          titolo dopo questa sfida giocata a Reykjavík che rimane immortale e leggendaria; 
          tanto che ne viene tratto un film negli anni 2000 dal titolo "la partita del secolo" 
          con Toby Maguire nei panni di Fischer.
        </p>

        <p>
          Nessuno può negare che la Storia dell'Umanità si trovi in piena "guerra fredda" 
          e che il predominio politico mondiale è appannaggio di Unione Sovietica e Stati 
          Uniti ed infatti anche la sfida del 1972 diviene motivo di propaganda politica per 
          dimostrare la superiorità dell'uno o dell'altra.
        </p>

        <p>
          Come pochi anni prima le due superpotenze mondiali si erano fronteggiate nella 
          corsa alla conquista dello Spazio: i russi con Yuri Gagarin e il volo nell'orbita terrestre 
          e gli Stati Uniti con la missione sulla Luna. Ed ancora i sovietici con i satelliti verso 
          Venere e gli Stati Uniti con le missioni Voyager.
        </p>

        <p>
          Dopo la vittoria nel 1972, tuttavia, Fischer mostra segni di instabilità psichica. In 
          realtà egli, con un giudizio a posteriori, vuole che i giocatori di scacchi siano riconosciuti 
          come dei professionisti e pagati con borse simili a quelli dei più forti pugili del momento 
          come Cassius Clay.
        </p>

        <p>
          Tuttavia, frequenti sono anche le sue invettive contro i sionisti benché in lui scorra 
          sangue ebraico da parte di madre. Così il suo mito viene offuscato dalla propaganda 
          Occidentale che, benché non possa cancellare con un colpo di spugna la leggenda 
          e il mito che Fischer incarna nell'immaginario collettivo di ogni singolo scacchista, 
          ne fa un pericoloso rompiscatole e lo isola fino a costringerlo a trovare rifugio solo 
          e dimenticato da tutto il mondo che lo aveva osannato, proprio in quell'isola di Islanda 
          dove lui aveva ottenuto il titolo di Campione del Mondo e dove muore nel silenzio 
          più sordo nel 2008.
        </p>

        <p>
          Nel 1975, il titolo passa a Anatoly Karpov che lo ottiene in quanto Fischer rinuncia 
          al proprio titolo senza difenderlo. Dopodiché Karpov difende vittoriosamente il titolo 
          in un'epica battaglia contro il connazionale Korchnoj e contro il giovane Gerry Kasparov.
        </p>

        <p>
          Questi però torna a sfidare Karpov e nel 1986 ottiene il titolo di Campione del Mondo 
          che Kasparov conserverà per i successivi sette anni allorquando per divergenze con 
          la FIDE lascia vacante il titolo che viene riconquistato da Karpov contro lo statunitense 
          Timman.
        </p>

        <p>
          Nel frattempo, Kasparov ha fondato, insieme ad altri giocatori di altissimo livello, 
          la PCA (acronimo di Professional Chess Association) e ne diviene subito campione 
          ma nel 2000 perde il titolo a favore di Vladimir Kramnik e si ritira dal mondo degli 
          scacchi giocati.
        </p>

        <p>
          Nel 2006 il Campionato del Mondo viene ufficialmente riunificato e Campione del 
          Mondo ufficiale della Federazione Internazionale degli Scacchi, finalmente riunificata, 
          è Vladimir Kramnik che sconfigge il bulgaro Veselin Topalov. Kramnik, tuttavia, 
          perde il titolo l'anno successivo e nuovo campione del mondo è l'indiano Viswanathan 
          ANAND ed anche in questo frangente possiamo notare che gli scacchi mostrano al 
          mondo intero che il piatto della bilancia dell'economia mondiale si stia gradualmente 
          spostando verso i paesi dello Estremo Oriente.
        </p>

        <p>
          ANAND detiene il titolo sino al 2013, allorquando a sfidarlo è un ragazzo emergente 
          proveniente dalla Norvegia: Magnus CARLSEN. CARLSEN vince contro Anand e mantiene 
          il titolo sino al 2021, difendendolo vittoriosamente contro, tra gli altri, l'italoamericano 
          Fabiano Caruana, allorché dopo aver battuto il russo Nepomnjaščij, decide di lasciare 
          vacante il titolo di Campione del Mondo.
        </p>

        <p>
          Rimesso in palio il Titolo di Campione del Mondo di Scacchi, rimasto vacante, esso 
          viene conquistato dal cinese Ding Liren nel 2023 e poi da questi ceduto nel 2024, 
          in una incredibile sfida a suon di errori gravi e meno gravi al più giovane campione 
          del mondo di scacchi di sempre, l'indiano Dommaraju Gukesh che si fregia del titolo 
          di Campione del Mondo di scacchi ad appena 18 anni, 6 mesi e 14 giorni che attende 
          di difenderlo contro il vincitore dei tradizionale torneo dei candidati.
        </p>

        <p>
          Ed a parere dello scrivente non è un caso che gli ultimi due campioni del mondo 
          siano provenienti dalle due Nazioni che oggi sono considerate se non le prime sicuramente 
          le più rilevanti dal punto di vista demografico e tra le prime cinque o sei entità 
          politiche, finanziarie ed economiche più importanti del mondo.
        </p>

        <p>
          Magnus CARLSEN, tuttavia è ancora oggi, a detta dei maggiori intenditori del settore, 
          il giocatore migliore del mondo; quello che più di tutti ha compreso nella sua radice 
          più profonda il gioco degli scacchi: la necessità di mantenere l'iniziativa. E le sue 
          partite sono espressione della sua approfondita conoscenza di come ottenere l'iniziativa 
          a scacchi.
        </p>

        <p>
          Ma in fondo, cari i miei lettori, cos'è o quanto vale la vita di un uomo senza iniziativa?
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
          — Gherardo Maria Gismondi
        </footer>
      </article>
    </div>
  );
};

export default Capitolo3;