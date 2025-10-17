import { useNavigate } from "react-router-dom";

const Capitolo2 = () => {
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
          Capitolo 2: La Diffusione degli Scacchi
        </h1>

        <p>
          La data certa di origine degli scacchi così come noi li conosciamo è, dunque per 
          tradizione, riconducibile al 615 d.C. sempreché ovviamente non si voglia ritenere 
          che, in realtà, si tratta di un gioco che è nato all'epoca dei sumeri circa quattromilaseicento 
          anni prima e lentamente si è diffuso dalla penisola mediorientale in Oriente verso 
          l'India e in Occidente verso l'Egitto.
        </p>

        <p>
          E in quel periodo, intorno all'anno 600 d.C., si diffonde, per opera di Muhammad 
          - Mohammad o Mohammed e che noi conosciamo come Maometto – la religione 
          musulmana nell'area della penisola araba. Vale a dire proprio nei possedimenti della Persia.
        </p>

        <p>
          L'opera di proselitismo di Maometto e del Corano - che di fatto è una reinterpretazione 
          della Bibbia e del Nuovo Testamento diffuso da Gesù e dai suoi discepoli - è certosina 
          ed evidentemente il suo pensiero viene ritenuto dalla popolazione di quelle zone 
          più rispondente alle proprie esigenze rispetto a quello cristiano, tanto che la maggior 
          parte delle popolazioni di quei luoghi si converte alla religione dell'Islam di cui Maometto 
          è unico e solo profeta.
        </p>

        <p>
          Come è noto, nel 622 d.C. Mohammad o Maometto che dir si voglia, muore e i suoi 
          discepoli riescono a convertire i piccoli signori locali denominati califfi che aiutano 
          i discepoli di Maometto alla conversione all'Islam di ogni loro tribù. Costoro però 
          non si limitano a questo! Si pongono in armi e iniziano a diffondere il Verbo di Maometto 
          per i loro scopi di conquista di territori vicini più fertili e, dunque, un po' con l'opera 
          capillare di proselitismo e un po' con le vittorie sul campo a cui seguono uccisioni 
          o conversioni forzate delle popolazioni cristiane o pagane che venivano sottomesse, 
          il Verbo dell'Islam si diffonde sempre più efficacemente.
        </p>

        <p>
          Di vittoria in vittoria gli Arabi, altrimenti conosciuti anche con l'appellativo di Saraceni, 
          convertono le popolazioni di tutta la penisola araba, poi di quella anatolica, poi 
          dell'intera Persia, giungendo a diffondere e a conquistare territori anche nella penisola 
          indiana (nel territorio corrispondente all'India del Nord, del Nepal e del Bangladesh 
          attuali).
        </p>

        <p>
          Non si fermano tuttavia; califfati con la mezzaluna islamica sorgono in Turkmenistan, 
          in Kazakistan, in Azerbajan, in Uzbekistan e in Tagikistan. Musulmane divengono, 
          inoltre, popolazioni europea caucasiche quali i Circassi, il Tatarstan, il Daghestan, 
          la Cecenia, la Inguscezia, nonché le popolazioni dei Balcari e dei Baschiri.
        </p>

        <p>
          Verso occidente, i califfi musulmani sottopongono a conversione forzata e conquistano 
          le popolazioni dell'Egitto, della Libia, della Tunisia, dell'Algeria e del Marocco, 
          e poi superano lo stretto di Gibilterra e giungono in Spagna, conquistandola e la 
          convertono forzatamente quasi per intero. Dalla Libia, i Saraceni giungono in Sicilia, 
          Calabria, Basilicata e Puglia.
        </p>

        <p>
          Contemporaneamente, gli arabi conquistano Malta e ne fanno la propria base per 
          le proprie scorrerie nel Mar Mediterraneo e tentano di invadere l'Impero Romano 
          d'Oriente governato da Bisanzio che ovviamente oppone resistenza anche con l'aiuto 
          dei sovrani europei, fino al 1436 d.C. quando Maometto II riesce a far cadere Bisanzio/Costantinopoli 
          ponendo termine definitivamente all'Impero Romano.
        </p>

        <p>
          Da lì, gli arabi, di origine turca e conosciuti come Ottomani, che, nel corso dei secoli, 
          si sono sostituiti nel governo dei domini arabi ai precedenti saraceni, a mezzo dei 
          propri sultani conquistano e sottopongono a conversione forzata la popolazione greca, 
          quella albanese, quella macedone, i bulgari gli ungheresi tentano di farlo anche coi 
          Romeni ma incontrano il principe Vlad che li sconfigge e ne impala i cadaveri ad 
          uno ad uno lungo la via e coi georgiani che oppongono fiera resistenza e non crollano.
        </p>

        <p>
          In ogni caso i turchi arrivano a Vienna e solo con la battaglia di Lepanto (anno 1571 
          d.C.) e la morte di Ali Pascià, il sogno degli Ottomani di convertire tutte le popolazioni 
          europee in popolazioni islamiche termina definitivamente.
        </p>

        <p>
          Per vero dire, va ricordato che - già in precedenza - gli arabi saraceni erano stati 
          fermati nel loro sogno di dominazione dei territori del fu Impero Romano di Occidente, 
          nel 732 d.C. da Carlo Martello a Poitiers, località che si trova nella Francia Centrale 
          a pochi km in definitiva da Parigi.
        </p>

        <p>
          Tale devastante sconfitta subita dagli arabi saraceni, rimedia alle conseguenze nefaste 
          derivate dalla cocente sconfitta dell'esercito dei Franchi a Roncisvalle che diede origine 
          alla leggenda della figura di Rolando o Orlando cantato da Torquato Tasso e dal Boiardo 
          e che è divenuto protagonista di numerosissime canzoni e saghe e racconti che danno 
          origine al mito comunemente denominato con la canzone di Rolando che, nell'epoca 
          moderna, è il tema principale di tanti film anche hollywoodiani e di una celebre canzone 
          il cui testo è stato scritto dall'attore Paolo Villaggio e cantata da Fabrizio de André 
          che invito Voi - che spero divenuti nel frattempo 48 – lettori, ad ascoltare, dal titolo 
          Carlo Martello ritorna dalla battaglia di Poitiers.
        </p>

        <p>
          La vittoria di Poitiers fu di fatto la pietra miliare della storia medievale europea (oggi 
          si direbbe, con termine anglofono, che rappresenta una sliding door) e segna l'inizio 
          della moderna storia europea, benché gli storici ormai senza discussioni, preferiscano 
          a tale evento, la scoperta dell'America del 1492 d.C. ma tale convinzione, a mio personale 
          parere, è del tutto opinabile.
        </p>

        <p>
          Infatti, se Re Carlo Martello fosse stato sconfitto, mai sarebbe nato o se già nato sarebbe 
          stato ucciso, Carlo Magno né sarebbe mai esistito il Sacro Romano Impero. Ben difficilmente, 
          pertanto, si sarebbero originate le monarchie assolute né gli Stati di Francia e di 
          Spagna né l'Impero Germanico di Federico I il Barbarossa o l'Impero Austro-Ungarico 
          di Carlo V.
        </p>

        <p>
          Ancora, conquistati i Franchi, gli arabi si sarebbero trovati a poter fare pressione nella 
          penisola italica da Nord e da Sud, dove avevano già basi in Sicilia, Calabria, Basilicata 
          e Puglia e per il Regno Longobardo sarebbe stata probabilmente la fine così stretto 
          tra due fuochi.
        </p>

        <p>
          Eliminato anche il regno Longobardo, gli Arabi avrebbero avuto ragione facilmente 
          del Papa e Roma sarebbe caduta e al posto della Croce di Cristo su San Giovanni in 
          Laterano (San Pietro verrà costruita in epoca rinascimentale e finita intorno al 1700) 
          e su tutte le chiese di Europa e d'Italia avrebbe campeggiato la mezzaluna araba e 
          le chiese sarebbero divenute tutte moschee.
        </p>

        <p>
          Quindi se la battaglia di Poitiers avesse visto prevalere il sovrano dei Saraceni, la 
          storia dell'Europa sarebbe stata completamente stravolta. La stessa Europa sarebbe 
          stata ridotta ad una mera espressione geografica e chissà magari la scoperta dell'America 
          sarebbe avvenuta per opera di un esploratore di origine araba molto prima del 1492 
          e l'America non si sarebbe chiamata America. Magari, i musulmani avrebbero combattuto 
          con i pellerossa e con la popolazione tolteca piuttosto che con i Maya oppure no. 
          Magari gli arabi saraceni avrebbero intrattenuto rapporti commerciali di reciproco 
          rispetto con le popolazioni locali.
        </p>

        <p>
          Ovviamente tutto ciò è mera suggestione ma sta di fatto che è la battaglia di Poitiers 
          che segna il corso degli eventi della Storia dell'Europa come oggi noi la conosciamo.
        </p>

        <p>
          Terminata questa digressione in cui ho compendiato in due pagine secoli di storia 
          con una opinione personale su quello che avrebbero potuto essere gli eventi, dobbiamo 
          far ritorno al tema di questo scritto.
        </p>

        <p>
          Gli arabi portano con sé i numeri, l'algebra e il gioco dei Re. Sugli scacchi arabo-persiani 
          - lo Shatranij - sappiamo tutto per diretta conoscenza della documentazione scritta 
          che gli arabi ci hanno lasciato nei loro mansubat.
        </p>

        <p>
          I mansubat erano una sorta di raccolte de quiz o, meglio, di studi che i giocatori arabi 
          dell'epoca scrivevano affinché chi li leggesse desse la sua soluzione, seguendo il 
          ragionamento e le regole del gioco dei re. Insomma, gli arabi danno origine alla problemistica 
          scacchistica.
        </p>

        <p>
          Non solo! Per vero dire è un arabo, nato ad Aleppo e morto a Parigi, circa mille anni 
          dopo, a creare una nuova metodologia di notazione delle partite di scacchi che da 
          descrittiva diviene algebrica e che è quella che oggi praticamente tutti i giocatori 
          utilizzano nelle partite amatoriali e ufficiali. I mansubat più antichi a noi pervenuti 
          sono dell'VIII e IX secolo d.C.
        </p>

        <p>
          Gli scacchi si diffondono rapidamente nella penisola spagnola e in quella italica. 
          Dalla Spagna giungono in Francia e poi in Italia del Nord e dalla Sicilia e dalla Calabria 
          e dalla Puglia si diffondono nell'Italia Centrale.
        </p>

        <p>
          Invece dalla Persia e dalle dominazioni caucasiche gli scacchi giungono in Russia 
          e alle popolazioni scandinave – I russi, in lingua scandinava "i rematori", sono infatti 
          discendenti dei vichinghi e dunque gli scacchi vengono conosciuti, almeno inizialmente, 
          dai vichinghi – quelli con le corna sull'elmo anche se in realtà le corna adornavano 
          elmi per i rituali religiosi dei sacerdoti di quei popoli e non gli elmi da battaglia 
          dei soldati – nella foggia persiana e non in quella europea.
        </p>

        <p>
          Negli scacchi russi più antichi che sono giunti fino a noi è del tutto evidente, infatti, 
          che non c'è la torre ma la nave da guerra e gli alfieri non sono guardie del corpo o 
          consiglieri (il bishop inglese) o buffoni di corte (il fou francese) ma sono proprio 
          elefanti!
        </p>

        <p>
          Gli scacchi, dunque dal secolo ottavo conoscono una rapida diffusione in tutta Europa 
          e come la musica, forse anche di più, divengono linguaggio universale con il quale 
          un qualsiasi viaggiatore di qualsiasi provenienza può entrare in contatto con qualunque 
          abitante dell'orbe terracqueo allora conosciuto dal Portogallo alla Cina (si diffonde 
          infatti in Cina anche una versione degli scacchi chiamati scacchi cinesi) dalla Russia 
          all'India al nord Africa.
        </p>

        <p>
          In alcune zone si originano versioni del gioco dei Re con leggere differenze di regolamento, 
          come quella - a noi ancora conosciuta - nella quale il giocatore che tiene il colore 
          bianco può, ad inizio partita, muovere due pedoni laterali di un passo (i pedoni b 
          e g 2) invece che un pedone di uno o due passi. O ancora che l'arrocco si giochi in 
          due mosse distinte invece che in una sola (che la tradizione vuole sia una modifica 
          da attribuirsi a Leonardo da Vinci perché citata da lui stesso in uno dei suoi codici). 
          Od ancora che la regina possa muoversi liberamente in orizzontale, verticale e diagonale 
          a differenza che negli scacchi arabo-persiani nei quali il visir si muove come lo Sha 
          (modifica che la tradizione vuole sia attribuita alla Regina Isabella di Castiglia – 
          proprio quella delle tre caravelle di Colombo – che appassionata di scacchi chiese 
          ai suoi consiglieri di far divenire la regina il pezzo più forte di attacco a disposizione 
          del gioco).
        </p>

        <p>
          Si deve ad Alfonso X detto "il saggio", re di Castiglia, nel 1283 il primo manoscritto 
          a noi pervenuto dove si descrive il gioco degli scacchi. Ed ancora in Spagna si diffonde 
          il libro scritto da Marcos de Otañez chiamato il libro degli scacchi.
        </p>

        <p>
          A scacchi si gioca ovunque e in qualunque momento. Frequenti sono le liti nelle osterie 
          che terminano a suon di coltellate per asseriti episodi di mossa non lecita e tanti 
          sacerdoti cristiani giocano a scacchi dimenticando di dire la messa nei giorni delle 
          festività come la Pasqua o il Natale o nel giorno della domenica. Tant'è che nel 1066 
          Fra Pier Damiani lancia un'invettiva contro gli scacchi e ne chiede la messa all'indice 
          al Papa.
        </p>

        <p>
          Questi acconsente e per almeno cinquecento anni gli scacchi divengono in molte parti 
          d'Europa, quelle più osservanti alle regole del cristianesimo cattolico, clandestini. 
          Ma in Italia e Spagna in particolare, gli scacchi sono diffusissimi e così abbiamo 
          testimonianza di forti giocatori che venivano protetti dall'opera di mecenatismo di 
          signorotti locali, feudatari e monarchi europei.
        </p>

        <p>
          Lo stesso Papa Innocenzo III (quello dello schiaffo di Anagni al Sovrano di Francia 
          Pipino il Breve) è un amatore del gioco e tollera che si giochi a scacchi purché non 
          si assistano a episodi di violenza. Il sommo poeta Dante Alighieri è un convinto appassionato 
          di scacchi e ne dà sfoggio in un verso del Paradiso. Petrarca invece non li ama particolarmente, 
          preferendogli altri giochi ma li tollera; Boccaccio è invece un cultore e spesso gli 
          scacchi sono da sfondo alle sue novelle.
        </p>

        <p>
          Nota è l'ammirazione per gli scacchi dell'Imperatore Federico II di Svevia e del nipote 
          Corradino relativamente al quale, un artista tedesco della metà del 1800, volle farne 
          un ritratto immaginando che Corradino abbia conosciuto la sua sorte da un messaggero 
          inviatogli in carcere, a Castel dell'Ovo dove era imprigionato a Napoli, dal Re di 
          Francia Carlo d'Angiò, che lo aveva sconfitto a Tagliacozzo, mentre era impegnato 
          in una partita a scacchi con il proprio attendente.
        </p>

        <p>
          Uno dei più noti giocatori del 1500, è il calabrese Leonardo da Cutro che ottenne per 
          aver sconfitto a scacchi Mons. Ruy Lopez de Segura, consigliere del Re di Spagna e considerato 
          il più forte giocatore di scacchi dell'epoca, nonché a capo della congregazione dei 
          Gesuiti, oltreché un corposo compenso in scudi d'oro, che alla propria cittadina, 
          Cutro, fosse imposto il titolo di Città.
        </p>

        <p>
          Sarà poi Santa Maria Teresa d'Avila a perorare con tal forza e fervore mistico la causa 
          degli scacchi, lodandone le qualità di perfezione e dimostrando che il gioco dei re 
          è quello che più di tutti incarna la perfezione di Dio e a riuscire, di fatto, a far 
          uscire gli scacchi dai giochi messi all'indice.
        </p>

        <p>
          Nella prima metà del 1600, è ancora la Calabria che afferma la propria superiorità 
          nel gioco degli scacchi grazie a Gioachino Greco detto il Calabrese. Di costui sono 
          giunte sino a noi numerose partite da lui, asseritamente giocate con splendide combinazioni 
          di matto. A Gioachino Greco è dedicato il tatticismo del "dono Greco" e il cosiddetto 
          "controgambetto Greco" oggi anche chiamato controgambetto lettone.
        </p>

        <p>
          Greco è stata una figura straordinaria del mondo degli scacchi. Particolarmente vivace 
          e ardimentosa. Si racconta infatti che, catturato dai saraceni vinse la propria libertà, 
          battendo ripetutamente a scacchi il comandante della nave saracena che lo aveva catturato 
          e che lo teneva prigioniero.
        </p>

        <p>
          Grazie all'opera de giocatori come Leonardo da Cutro e Gioachino Greco nonché a 
          quella legata ad altri famosi giocatori come i modenesi Giambattista Lolli, Ercole 
          del Rio e Domenico Lorenzo Ponziani nonché all'abruzzese Giulio Poleri, la penisola 
          italica ha il primato del gioco degli scacchi.
        </p>

        <p>
          Tuttavia, se dalla seconda metà del 1500 fino a quasi tutto il secolo seicento, i giocatori 
          italiani siano considerati indiscutibilmente i migliori nel mondo conosciuto, la eccessiva 
          diffusione di usanze locali nel gioco degli scacchi praticato nelle diverse signorie 
          italiche non permette loro di mantenere la primazia. Così, ecco che verso la fine del 
          secolo XVII e poi stabilmente da circa la metà del secolo XVIII, la supremazia nel 
          gioco passa nelle mani dei francesi.
        </p>

        <p>
          Due nomi si ergono su tutti: il Duca di Legal (o Legall) e il musicista alla Corte di 
          Luigi XIV (meglio conosciuto come il Re Sole), François-André Danican Philidor, nato 
          a Dreux il 7 settembre 1726, morto a Londra il 31 agosto 1795. Questi, fin dall'infanzia, 
          divenne noto per la sua abilità nel gioco degli scacchi. Dal 1745, egli viaggiò in Olanda, 
          in Germania e in Inghilterra per misurarsi con i più celebri giocatori del tempo, trionfando 
          dappertutto.
        </p>

        <p>
          Nel 1748 Philidor pubblicò a Aix-la-Chapelle la sua famosa analisi del gioco degli 
          scacchi - in lingua francese "Analyse du jeu des échecs" - che fu considerata la Bibbia 
          degli scacchi per i giocatori contemporanei e per quelli successivi sino all'avvento 
          del giocatore statunitense Paul Morphy che, dal 1858 e sino a pochi anni prima della 
          sua morte, avvenuta nel 1884 a soli 47 anni, dominò praticamente incontrastato la 
          scena scacchistica mondiale.
        </p>

        <p>
          Prima di concludere questo secondo capitolo, miei cari affezionati lettori, mi sia 
          concesso riportare qui i versi di una poesia che ricorda il famoso scacco matto che 
          il Duca di Legal diede al cavaliere di Saint-Brie e che fu scritta da Tommaso conte 
          di Cambray-Digny: "Scacchisti, udite! Un'immortal tenzone in brevi tratti il verso 
          mio dipinge; Inoltra il Re dei Bianchi il suo pedone, quel del Re Nero contro a lui 
          si stringe. L'assalta un Cavalier, ma gli si oppone quel della Donna e colpi suoi respinge. 
          Alla quarta d'Alfier, l'Alfier si pone, La Donna il suo pedon d'un passo spinge. 
          L'altro Cavallo accorre. Al primo è sopra l'Alfiere e il preme. Egli il pedone uccide, 
          benché al nemico acciar la Donna scopra. Ed essa muor, ma non indarno. In fallo cadde 
          il duce dei Neri: ei non previde Scacco d'Alfiere e matto di Cavallo!"
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

export default Capitolo2;