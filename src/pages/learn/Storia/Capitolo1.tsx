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
          Capitolo 1: Origini degli Scacchi
        </h1>

        <p>
          Sin dall'alba dei tempi, ogni essere animale che abbia messo piede sulla terra, 
          utilizza il gioco per la propria formazione, crescita e sviluppo. 
          Ovviamente, l'animale selvaggio non ha coscienza del fatto che quanto sta facendo, 
          cioè il gioco, gli sarà utile per la sua sopravvivenza ma in ogni caso lo fa.
        </p>

        <p>
          Giocare dunque è un elemento essenziale della formazione, della crescita e 
          dello sviluppo di un individuo da cucciolo ad adulto. 
          Attraverso il gioco il cucciolo apprende la forma e le abilità del proprio corpo, 
          affina i propri sensi, articola i propri versi e dunque la comunicazione con animali 
          della sua specie e di specie diversa, impara a svolgere la funzione della procreazione 
          magari sottomettendo il fratello e a nutrirsi se è preda, a cacciare se predatore.
        </p>

        <p>
          Premesso tutto ciò, appare evidente che anche per gli ominidi valga quanto 
          sopra affermato. Il gioco è parte fondamentale e non secondaria della formazione, 
          della crescita e dello sviluppo del bambino e dunque, si può essere certi di questa 
          evidenza: qualunque ominide, in età pre- e postpuberale giocava.
        </p>

        <p>
          Ma l'essere vivente una volta divenuto adulto continua a giocare perché – solo – 
          attraverso il gioco continua a definire i propri limiti e ha piena contezza di 
          quello che può fare e non può fare.
        </p>

        <p>
          Affermato quanto sopra e venendo più nello specifico al tema di questo 
          scritto, l'ominide nel tempo ha iniziato a sviluppare giochi sempre più complessi 
          per poter utilizzare l'unico organo che naturalmente ha intuito essere di maggior 
          capacità abilitante rispetto agli altri animali: il cervello e dunque l'intelletto. 
          Di qui e siamo ormai entrati nella storia, lo sviluppo di giochi che sviluppassero 
          il pensiero astratto.
        </p>

        <p>
          Scavi archeologici degli anni trenta, hanno riportato alla luce nella zona di 
          Tepe Gawra nell'attuale Iraq nord-occidentale, interessanti reperti risalenti a 
          circa 6000 anni fa della civiltà sumera a foggia di figurine in terracotta che, a 
          detta degli esperti, farebbero parte di un gioco di cui manca tuttavia il tavoliere 
          sopra il quale queste figurine sarebbero state utilizzate.
        </p>

        <p>
          La domanda sorge spontanea vedendo che i due set ritrovati entrambi composti 
          da sedici figurine sembrano proprio due eserciti con elementi di diversa 
          forma: si tratta dell'antenato dei moderni scacchi? Si tratta proprio del gioco dei 
          re? Ovviamente, non lo sappiamo perché purtroppo mancano le attestazioni che 
          lo confermano. Tuttavia, il fondato dubbio rimane.
        </p>

        <p>
          Altri reperti archeologici ci rivelano che anche in Cina all'incirca un paio di 
          migliaia di anni dopo, figurine simili erano utilizzate probabilmente per rituali 
          sacerdotali. E più o meno nello stesso periodo storico nel Regno dell'Antico Egitto i faraoni 
          e i notabili di quello Stato si trastullavano con il senet che - guarda il caso – 
          si giocava con figurine di diversa forma e dimensione su una tavoletta rettangolare 
          di pochi centimetri di lunghezza e ancora meno di larghezza su tre file a 
          caselle di colore alternato.
        </p>

        <p>
          Tuttavia, proprio da un ritrovamento archeologico significativo, lo scrivente 
          ha maturato la personale idea che nell'Antico Egitto non si giocasse solo a senet 
          ma fossero a disposizione, magari del solo faraone, altri giochi più complessi. 
          Tra questi se non proprio il gioco dei Re un suo antenato, probabilmente di 
          provenienza sumera perché, come noto, gli Egizi furono invasi e governati dagli 
          Hyksos vale a dire gli Ittiti che, per l'appunto erano una popolazione di origine 
          mediorientale e che sconfissero gli Egizi grazie a una innovazione tecnologica, 
          l'uso per i carri da guerra delle ruote a raggi che erano più snelle e leggere di 
          quelle piene usate dagli egizi.
        </p>

        <p>
          Questa mia convinzione è maturata osservando attentamente l'affresco sito 
          nella tomba della regina Nefertari. Infatti, i reperti relativi al gioco chiamato senet che sono stati ritrovati, fanno 
          pensare ad una tavoletta di piccole dimensioni. Invece nell'affresco presente nella tomba della regina Nefertari la medesima 
          è seduta comodamente dinanzi a un grande tavolo ed ivi gioca con il dio Thot.
        </p>

        <p>
          La domanda è semplice in fondo, vale a dire: perché mai i pittori della tomba 
          della Regina Nefertari, si siano scomodati a raffigurare la defunta seduta davanti 
          ad un tavoliere se i ritrovamenti ci evidenziano che il senet è di dimensione ridotte. 
          Indubbiamente non può escludersi che il senet fosse giocato anche su tavole 
          più grandi di quelle a noi pervenute e ritrovate quali corredo di tombe funerarie 
          di faraoni e di vari dignitari di alto rango e che, pertanto, la regina possedesse 
          un tavoliere più grande e più ricco per giocare al senet.
        </p>

        <p>
          Ma non è possibile nemmeno escludere a priori che ella giocasse a quel tavolo 
          ad un gioco più antico e complesso vale a dire un antenato vero e proprio degli 
          scacchi se non addirittura il gioco dei Re vero e proprio. Ovviamente un interlocutore potrebbe opporre che le figurine rappresentate 
          nell'affresco di cui sopra sono quelle del senet ma la risposta a tale osservazione 
          è altrettanto semplice. Chi ha dipinto quell'affresco conosceva il senet che era diffuso in tutto l'Egitto 
          ma è possibile che appartenesse al volgo e che pertanto non fosse un iniziato alla 
          vera conoscenza e quindi potesse non sapere che in realtà la regina Nefertari con 
          il dio Thot non stesse giocando affatto a senet ma a un gioco diverso che solo 
          una elite di persone conosceva.
        </p>

        <p>
          In fondo, quanto scrivo ha notevoli precedenti nei sacerdoti greci dei misteri 
          eleusini, nella figura del pontefice massimo a Roma, unico che poteva consultare 
          gli antichi scritti per costruire i ponti. Insomma, i precedenti storici confermano che la vera conoscenza era solo per 
          gli iniziati; agli altri era concessa una conoscenza limitata e sufficiente per vivere 
          e sopravvivere.
        </p>

        <p>
          Gli scacchi o il suo progenitore - probabilmente sumero o comunque di origine 
          mediorientale - di cui alle figurine di almeno due o tremila anni prima, era 
          parte di questa conoscenza superiore. Che il gioco degli scacchi abbia un progenitore antichissimo e sia origine 
          mediorientale è una ipotesi affascinante e per certi suggestiva che viene messa in 
          dubbio da parte dalla vulgata predominante che vorrebbe gli scacchi nati in India 
          intorno al secondo secolo d.C.
        </p>

        <p>
          Eppure, già da quanto sopra detto, sappiamo che: già nell'antichità del periodo 
          egizio e in quello ancora precedente erano in uso tavole e tavolette con 
          caselle a colore chiaro e scuro alternato e che nell'area del mediterraneo orientale 
          erano diffusi giochi da tavoliere con figurine di varia foggia e colore.
        </p>

        <p>
          Altresì, una ulteriore argomentazione a sostegno di questa mia personale tesi, 
          è che l'esercito raffigurato negli scacchi più antichi a noi pervenuti, è un esercito 
          molto più antico di un esercito del primo o secondo secolo dopo Cristo. Infatti, 
          negli scacchi persiani (l'etnia che parla la lingua farsi) sono presenti le navi o 
          i carri da guerra, e sono presenti gli elefanti.
        </p>

        <p>
          L'uso dell'elefante da guerra risale, come notorio anche ai bambini della primaria, 
          al tempo quanto meno dei fenici e dei babilonesi. I Romani li conobbero come 
          avversari da Pirro re dell'Epiro (più o meno corrispondente a parte delle attuali 
          nazioni di Macedonia e dell'Albania) e da Annibale che addirittura li utilizzò 
          vittoriosamente a Canne, dopo averli fatti passare attraverso le Alpi. I Romani 
          di Crasso furono sconfitti a Carre dall'esercito Parto (I Parti erano quelli che 
          per noi sono i babilonesi post-ellenistici e che successivamente divennero persiani) 
          che utilizzava mirabilmente la cavalleria pesante costituita dagli Elefanti.
        </p>

        <p>
          Pertanto, da quanto sopra e per semplice uso della logica - semmai - sono gli 
          Indiani che hanno conosciuto gli scacchi e/o il suo gioco antenato dai popoli 
          mediorientali e non il contrario. Tra l'altro è attestato che gli elefanti che usavano 
          i Cartaginesi e che usava Pirro erano di origine africana ed è notorio che gli elefanti 
          africani sono difficilmente addomesticabili.
        </p>

        <p>
          Dunque, come facevano i Cartaginesi e gli abitanti dell'Epiro a utilizzare gli 
          elefanti in battaglia non avendo a disposizione in buon numero quelli asiatici di 
          mole meno massiccia di quello africano? E la risposta è assolutamente ovvia! 
          Qualcuno probabilmente gli assiro-babilonesi, che si trovavano esattamente a metà 
          tra l'India e la penisola araba e dunque commerciavano con gli Egizi a ovest e con 
          gli indiani a est lungo la via della Seta, conoscevano entrambe le razze di elefanti: 
          quello africano e quello asiatico e li hanno incrociati per giungere ad una razza 
          di elefante ibrida che avesse una mole simile a quella dell'elefante africano e un 
          carattere docile simile all'elefante asiatico e dunque fosse in grado di rispondere 
          agli ordini di un cavaliere al suo arcione. Del resto, noi ancora oggi, incrociamo 
          l'asino e la cavalla e il cavallo con l'asina e otteniamo i bardotti e i muli.
        </p>

        <p>
          Conclusa con ragionevolezza la digressione sugli elefanti ("alfil" in lingua 
          farsi da cui alfiere), possiamo dire che, successivamente al periodo sumero e a 
          quello egizio, i ritrovamenti archeologici ci indicano che nell'area mediterranea 
          fosse molto diffuso il gioco della patteia, una sorta di dama. Tale gioco ovviamente 
          si diffuse velocemente e capillarmente anche nell'antica repubblica di Roma.
        </p>

        <p>
          Tuttavia, Roma è un crocevia di culture diverse e oltre alla patteia si diffondono 
          sul suo territorio anche altri giochi da tavoliere. Dagli scritti di alcuni storici 
          in particolare del periodo che dalla fine della Repubblica di Roma giunge fino 
          alla fine dell'Impero Romano, emerge che a Roma vi fossero due tipi di giocatori: 
          gli aleatores che giocavano a giochi d'azzardo come i dadi e gli astragalos greci 
          e i tesserari che giocavano a giochi di abilità intellettuale senza il soccorso della 
          fortuna accidentale.
        </p>

        <p>
          In alcuni casi è notorio che il gioco "intelligente" venisse alterato utilizzando 
          dei dadi a sei facce per rendere al medesimo svago una aleatorietà altrimenti 
          impossibile e quindi permettere anche al giocatore meno abile - ma più fortunato - 
          di vincere contro uno meno fortunato ma più abile. Da ciò il detto popolare: 
          "quando la fortuna con l'abilità contrasta la fortuna vince l'abilità non basta!".
        </p>

        <p>
          Ovviamente ciò contribuiva all'emergere del fenomeno del gioco clandestino 
          e delle scommesse con forti somme di danaro sul tavolo e come ulteriore conseguenza 
          allo sviluppo del fenomeno del gioco sleale e scorretto e del ricorso alla violenza 
          e dunque alla rissa qualora il baro fosse stato scoperto.
        </p>

        <p>
          Durante l'Impero Romano, dunque, in conseguenza della crescente espansione 
          dei suoi confini, si diffondono dei giochi su tavoliere diversi dalla patteia, tra 
          questi il gioco che noi conosciamo come ludus latrunculorum o latrunculorum lusus. 
          Questo gioco si svolgeva su una tavola a forma per lo più quadrata denominata 
          tabula lusoria che era composta di 18 o 32 o 64 caselle anch'esse quadrate di 
          colore chiaro e scuro alternato, come nella patteia tra two contendenti che erano 
          appunto chiamati tesserari perché le caselle erano denominate tesserae. Sulla 
          tabula lusoria si muovevano delle pietrine lavorate o meno ognuna colorata o di 
          foggia diversa.
        </p>

        <p>
          Della tabula lusoria abbiamo un esempio mirabile in un reperto ritrovato in 
          Inghilterra e delle pietrine colorate molte sono state ritrovate durante gli scavi 
          di Pompei. Tuttavia, il maggior esempio di una figurina riconducibile al gioco del 
          latrunculorum lusus lo ritroviamo in un reperto ritrovato in una villa romana del 
          400 d.c. circa e rappresenta senza ombra di dubbio la figura di un re.
        </p>

        <p>
          Va chiarito, ove ce ne fosse bisogno, che questo gioco, che sia o meno il progenitore 
          degli scacchi o il nome che i romani gli avevano dato per riconoscere quello che 
          per i mediorientali era il gioco dei re, era diffuso soprattutto nel Medio-Oriente 
          che era alla periferia orientale dell'Impero Romano e si diffuse anche nelle zone 
          di confine del Nord e dell'Ovest e del Sud perché i romani, per difendere i confini 
          dell'Impero, facevano largo uso de mercenari in particolare mediorientali che tra 
          i vari appellativi erano riconosciuti come latrunculi che significava in latino: 
          "briganti", "ladruncoli" persone dedite a furti e a razzie, insomma dei cosiddetti 
          "poco di buono".
        </p>

        <p>
          Dunque, è dal medio oriente che probabilmente il gioco dei ladruncoli si diffonde, 
          passando dalle terre del Caucaso a nord e passando per il Mediterraneo a sud sino 
          a Roma e dintorni ma, essendo denominato e identificato come il gioco dei ladruncoli, 
          dubito avesse diffusione capillare nella società romana che sostanzialmente si distingueva 
          in classi sociali al cui apice erano i patrizi, ai quali sicuramente ripugnava giocare 
          a qualcosa che provenisse dalle classi inferiori e al cui pedice erano a grandi linee, 
          quali rappresentanti dell'istruzione bassa o inesistente, i plebei, i liberti e i 
          reprobi come appunto i mercenari di cui sopra. E ovviamente chi abitava a Roma si 
          sentiva "diverso" se vogliamo "superiore" a tutti gli altri, fatta eccezione dei 
          Greci che ritenevano loro pari ed infatti preferivano giocare a patteia.
        </p>

        <p>
          Ma non è da escludere che con la caduta della Repubblica di Roma e il sorgere 
          dell'Impero Romano, il gioco dei Re sia tornato ad essere diffuso in ogni provincia 
          romana anche considerato il fatto che molti imperatori romani dopo la fine della 
          famiglia Giulio-Claudia, sono provenienti da famiglie di origine mediorientale.
        </p>

        <p>
          Nello stesso periodo, in India, prendono piede alcuni giochi da tavola che oggi 
          noi definiamo backgammon che sembra in qualche modo discendere dalla suddetta 
          patteia greca e il chaturanga o chatranga che era basato su quattro tipi di figurine 
          di foggia differente (e chaturanga o chatranga in indiano antico sembra proprio 
          significare diviso in quattro parti) ed entrambi questi giochi erano svolti su tavole 
          di forma quadrata ma con disegni diversi dalle classiche caselle che compongono 
          la scacchiera.
        </p>

        <p>
          Con la caduta dell'Impero Romano, in Europa avvengono stravolgimenti che minano 
          le fondamenta della società romana e di certo mancava materialmente il tempo al 
          popolo, devastato da continue guerre e saccheggi, di dilettarsi ad un gioco dal 
          pensiero astratto, dovendo necessariamente far fronte prima di tutto alla propria 
          sopravvivenza. Perciò, per circa due secoli il gioco da tavola cadde in disuso, 
          relegato al trastullo di qualche filosofo o matematico o signorotto che del tempo 
          per la riflessione astratta ne aveva.
        </p>

        <p>
          Con l'avvento dei saraceni, intorno al 630 d.C. (Maometto come sappiamo muore 
          nel 622 d.C.) e la conquista da parte di costoro delle antiche province romane 
          dell'Egitto, della Libia, e della Spagna nonché della Sicilia, della Calabria e 
          della Puglia, torna ovviamente in quelle zone la stabilità di regole e di leggi nonché 
          dell'Ordinamento giuridico arabo e ciò permette di nuovo lo sviluppo del pensiero 
          astratto e di quei giochi che a quel pensiero si rifanno.
        </p>

        <p>
          Costoro, gli arabi, provenienti dalla Persia e che parlano e scrivono in farsi, 
          portano con sé un gioco da tavola e danno a questo gioco un nome e, soprattutto, 
          gli danno delle regole uguali per chiunque volesse giocare. Eh sì, cari i miei 24 
          lettori, di manzoniana memoria, nasce lo "Shatranij" il "gioco dei re". 
        </p>

<h2
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
          In Italia gli scacchi!
        </h2>
          

        <p>
          Le fonti storiche e leggendarie collocano la nascita degli scacchi nel 615 d.C. 
          allorquando il re persiano Kushraw II (italianizzato in Cosroe II) soprannominato 
          il vittorioso, essedo divenuto assai vecchio ebbe a dire ai suoi ministri e consiglieri: 
          "Mi annoio! mi annoio! mi annoio! Io Kushraw II, il re dei re, il sovrano più ricco 
          del mondo, possibile che non abbia un modo per passare piacevolmente le giornate? 
          Non ho più l'età per le donne e per la caccia! Perciò datevi da fare o miei consiglieri 
          e trovate una soluzione, altrimenti vi farò mozzare la testa!" e proseguì: "se qualcuno 
          di voi riuscirà nell'intento, lo premierò esaudendo un qualunque suo desiderio che 
          sia metà del mio regno, o mia figlia in sposa o un enorme moltitudine di ricchezze 
          o un palazzo ricco quanto quello di un Re".
        </p>

        <p>
          La tradizione vuole che questo sfogo sia realmente avvenuto e che i Ministri del 
          re fecero davvero di tutto per soddisfare il desiderio del re di trovare un passatempo 
          piacevole quando aveva del tempo libero. Ma quanto proposto dai vari Ministri non 
          recava alcuna soddisfazione dei desideri del Re Kushraw. Quando ormai la loro sorte 
          sembrava essere segnata, si appropinquò uno dei dignitari più giovani, tal Sissa 
          Nassir che stese dinanzi al Re un tappeto sul quale aveva disegnato un reticolato 
          di forma quadrata composto da 64 caselle di forma anch'essa quadrata, sulla quale 
          mise in ordine una serie di figurine di pietra spiegando che si trattava di due eserciti 
          contrapposti: fanti, cavalieri, salmerie (o navi da guerra come negli antichi scacchi 
          russi), armata pesante composta da elefanti con sopra un conducente, un Visir (o 
          generale dell'esercito) e un Re.
        </p>

        <p>
          Ognuna delle figure poteva compiere dei movimenti prestabiliti sulla scacchiera 
          e lo scopo del gioco era riuscire a impedire al Re di potersi muovere una volta che 
          fosse sotto attacco diretto da parte di uno dei personaggi dell'esercito avversario. 
          A seguito del raggiungimento dello scopo del gioco il giocatore che era riuscito 
          nell'impresa di imprigionare il Re dell'avversario pronunciava la frase "Sha mat!" 
          che aveva il significato di "il Re è morto" o imprigionato, che nell'uso moderno 
          in italiano è divenuta la frase "Scacco Matto".
        </p>

        <p>
          Il Re Kushraw II imparò le regole e iniziò a giocare e soprattutto a vincere, ciò 
          fece crescere in lui la passione per il gioco dei re. Ovviamente vincendo, si divertiva 
          moltissimo il Re ma ciò lo portò a ricordare la promessa fatta: quella di concedere 
          a chi fosse riuscito a trovare il passatempo che lui chiedeva, di veder esaudire 
          un qualunque suo desiderio. Perciò fece convocare Sissa Nassir e gli chiese quale 
          desiderio lui volesse che il Re esaudisse. Sissa alla richiesta del Re così rispose: 
          "vorrei del grano mio signore. Fai porre un chicco sulla prima casella della scacchiera 
          e poi ad ogni casella raddoppierai il numero dei chicchi della casella precedente."
        </p>

        <p>
          Il Re rimase stupito dall'originale richiesta ma ovviamente non poté che acconsentire 
          perciò diede ordine al suo conestabile di svolgere il compito richiesto da Sissa e 
          pose alla prima casella sulla sua sinistra un chicco, nella successiva due chicchi, 
          nella terza quattro chicchi, nella quarta otto chicchi, nella quinta sedici chicchi, 
          nella sesta trentadue chicchi, nella settima sessantaquattro chicchi, nell'ottava 
          centoventotto chicchi. Nella nona duecentocinquantasei chicchi, nella decima cinquecentododici 
          chicchi e così via.
        </p>

        <p>
          Ad ogni casella il numero dei chicchi cresceva esponenzialmente tanto che giunti 
          a circa metà della scacchiera, il Conestabile e il Re si resero conto che non sarebbe 
          bastato l'intero raccolto di grano dell'intero Stato persiano per esaudire la richiesta 
          di Sissa Nassir. Solo con i moderni computer è stato calcolato che il numero corrispondente 
          alla quantità di chicchi di grano richiesti da Sissa quale compenso per aver regalato 
          gli scacchi al Re era pari a: 18.446.744.073.709.551.615 corrispondente a 2^64-1.
        </p>

        <p>
          Leggenda vuole che il Re sentendosi deriso abbia fatto incarcerare Sissa Nassir 
          e successivamente lo abbia fatto giustiziare per aver presentato al Re una richiesta 
          impudente. La morale di questa storia può essere sorprendentemente riassunta con 
          due modi dire popolarissimi: "Chi troppo vuole nulla stringe" e "ogni promessa è 
          debito."
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

export default Capitolo1;