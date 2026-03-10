import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impara from './pages/Impara';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AnimatedRoutes from './components/AnimatedRoutes';
import Ricordi from './pages/ricordi';
import News from './pages/news';
import Squadre from './pages/squadra';
import Patrimonio from './pages/Patrimonio';
import ScrollToTop from './components/ScrollToTop';

import CentroEstivo from './pages/ricordi/centro-estivo';
import ScacchiMentana from './pages/ricordi/scacchi-mentana';
import GliInizi from './pages/ricordi/gli-inizi';
import ScacchiAlCamybar from './pages/ricordi/scacchi-al-camybar';
import AllenamentoQuotidiano from './pages/ricordi/allenamento-quotidiano';
import Loghi from './pages/ricordi/loghi';
import Venafro from './pages/ricordi/venafro';
import Starshop from './pages/ricordi/starshop';
import Quartotorneo from './pages/ricordi/quarto-torneo';
import Decimo from './pages/ricordi/decimo-anniversario';
import Torneoragazzi from './pages/ricordi/torneo-ragazzi';
import FantasyPub from './pages/ricordi/fantasy-pub';
import Turno1 from './pages/ricordi/turno1';
import Turno2 from './pages/ricordi/turno2';
import Turno3 from './pages/ricordi/turno3';
import Turno4 from './pages/ricordi/turno4';
import Turno5 from './pages/ricordi/turno5';



import Soci from './pages/soci';
import ScacchieraGigante from './pages/scacchiera-gigante';

import Regole from './pages/learn/Regole';
import ComeGiocare from './pages/learn/Regole/ComeGiocare';
import ComeVincere from './pages/learn/Regole/ComeVincere';
import RegoleFondamentali from './pages/learn/Regole/RegoleFondamentali';
import Stallo from './pages/learn/Regole/Stallo';
import Patta from './pages/learn/Regole/Patta';
import Tempo from './pages/learn/Regole/Tempo';

import Aperture from './pages/learn/Aperture';
import Italiana from './pages/learn/Aperture/Italiana';
import Siciliana from './pages/learn/Aperture/Siciliana';
import GambettoRe from './pages/learn/Aperture/GambettoRe';
import GambettoDonna from './pages/learn/Aperture/GambettoDonna';
import Aperte from './pages/learn/Aperture/Aperte';
import Chiuse from './pages/learn/Aperture/Chiuse';
import Semichiuse from './pages/learn/Aperture/Semichiuse';
import Francese from './pages/learn/Aperture/Francese';
import Spagnola from './pages/learn/Aperture/Spagnola';
import Inglese from './pages/learn/Aperture/Inglese';
import CaroKann from './pages/learn/Aperture/CaroKann';
import Scandinava from './pages/learn/Aperture/Scandinava';
import Pirc from './pages/learn/Aperture/Pirc';
import Alekhine from './pages/learn/Aperture/Alekhine';
import Reti from './pages/learn/Aperture/Reti';
import Moderna from './pages/learn/Aperture/Moderna';
import NimzoIndiana from './pages/learn/Aperture/NimzoIndiana';
import IndianaRe from './pages/learn/Aperture/IndianaRe';
import Benoni from './pages/learn/Aperture/Benoni';
import Trompowsky from './pages/learn/Aperture/Trompowsky';
import London from './pages/learn/Aperture/London';
import Grunfeld from './pages/learn/Aperture/Grunfeld';
import Bird from './pages/learn/Aperture/Bird';

import Tattiche from './pages/learn/Tattiche';
import DoppioAttacco from './pages/learn/Tattiche/DoppioAttacco';
import Inchiodatura from './pages/learn/Tattiche/Inchiodatura';
import ScaccoDoppio from './pages/learn/Tattiche/ScaccoDoppio';
import Zugzwang from './pages/learn/Tattiche/Zugzwang';
import Sacrificio from './pages/learn/Tattiche/Sacrificio';

import Strategie from './pages/learn/Strategie';
import Centro from './pages/learn/Strategie/Centro';
import Coordinazione from './pages/learn/Strategie/Coordinazione';

import Finali from './pages/learn/Finali';
import TorrevsRe from './pages/learn/Finali/TorrevsRe';
import Opposizione from './pages/learn/Finali/Opposizione';
import FinalePedoni from './pages/learn/Finali/FinalePedoni';
import DueTorri from './pages/learn/Finali/DueTorri';

import Storia from './pages/learn/Storia';
import Capitolo1 from './pages/learn/Storia/Capitolo1';
import Capitolo2 from './pages/learn/Storia/Capitolo2';
import Capitolo3 from './pages/learn/Storia/Capitolo3';

import Libri from './pages/patrimonio/libri';
import Scacchiere from './pages/patrimonio/scacchiere';

import Matto from './pages/esercizi/matto';
import Esercizi from './pages/Esercizi';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="ricordi" element={<Ricordi />} />
            <Route path="squadra" element={<Squadre />} />
            <Route path="news" element={<News />} />
            <Route path="patrimonio" element={<Patrimonio />} />
            <Route path="ricordi/centro-estivo" element={<CentroEstivo />} />
            <Route path="ricordi/scacchi-mentana" element={<ScacchiMentana />} />
            <Route path="ricordi/gli-inizi" element={<GliInizi />} />
            <Route path="ricordi/scacchi-al-camybar" element={<ScacchiAlCamybar />} />
            <Route path="ricordi/allenamento-quotidiano" element={<AllenamentoQuotidiano />} />
            <Route path="ricordi/loghi" element={<Loghi />} />
            <Route path="ricordi/venafro" element={<Venafro />} />
            <Route path="ricordi/starshop" element={<Starshop />} />
            <Route path="ricordi/turno1" element={<Turno1 />} />
            <Route path="ricordi/turno2" element={<Turno2 />} />
            <Route path="ricordi/turno3" element={<Turno3 />} />
            <Route path="ricordi/turno4" element={<Turno4 />} />
            <Route path="ricordi/turno5" element={<Turno5 />} />


            <Route path="ricordi/quarto-torneo" element={<Quartotorneo />} />
            <Route path="ricordi/decimo-anniversario" element={<Decimo />} />
            <Route path="ricordi/torneo-ragazzi" element={<Torneoragazzi />} />
            <Route path="ricordi/fantasy-pub" element={<FantasyPub />} />

            <Route path="soci" element={<Soci />} />
            <Route path="scacchiera-gigante" element={<ScacchieraGigante />} />

            <Route path="learn" element={<Impara />} />

            <Route path="learn/regole" element={<Regole />} />
            <Route path="learn/regole/come-giocare" element={<ComeGiocare />} />
            <Route path="learn/regole/come-vincere" element={<ComeVincere />} />
            <Route path="learn/regole/regole-fondamentali" element={<RegoleFondamentali />} />
            <Route path="learn/regole/stallo" element={<Stallo />} />
            <Route path="learn/regole/patta" element={<Patta />} />
            <Route path="learn/regole/tempo" element={<Tempo />} />

            <Route path="learn/aperture" element={<Aperture />} />
            <Route path="learn/aperture/aperte" element={<Aperte />} />
            <Route path="learn/aperture/chiuse" element={<Chiuse />} />
            <Route path="learn/aperture/semichiuse" element={<Semichiuse />} />
            <Route path="learn/aperture/italiana" element={<Italiana />} />
            <Route path="learn/aperture/siciliana" element={<Siciliana />} />
            <Route path="learn/aperture/gambetto-re" element={<GambettoRe />} />
            <Route path="learn/aperture/gambetto-donna" element={<GambettoDonna />} />
            <Route path="learn/aperture/francese" element={<Francese />} />
            <Route path="learn/aperture/spagnola" element={<Spagnola />} />
            <Route path="learn/aperture/inglese" element={<Inglese />} />
            <Route path="learn/aperture/caro-kann" element={<CaroKann />} />
            <Route path="learn/aperture/scandinava" element={<Scandinava />} />
            <Route path="learn/aperture/pirc" element={<Pirc />} />
            <Route path="learn/aperture/alekhine" element={<Alekhine />} />
            <Route path="learn/aperture/reti" element={<Reti />} />
            <Route path="learn/aperture/moderna" element={<Moderna />} />
            <Route path="learn/aperture/nimzo-indiana" element={<NimzoIndiana />} />
            <Route path="learn/aperture/indiana-re" element={<IndianaRe />} />
            <Route path="learn/aperture/benoni" element={<Benoni />} />
            <Route path="learn/aperture/trompowsky" element={<Trompowsky />} />
            <Route path="learn/aperture/london" element={<London />} />
            <Route path="learn/aperture/grunfeld" element={<Grunfeld />} />
            <Route path="learn/aperture/bird" element={<Bird />} />

            <Route path="learn/tattiche" element={<Tattiche />} />
            <Route path="learn/tattiche/doppio-attacco" element={<DoppioAttacco />} />
            <Route path="learn/tattiche/inchiodatura" element={<Inchiodatura />} />
            <Route path="learn/tattiche/scacco-doppio" element={<ScaccoDoppio />} />
            <Route path="learn/tattiche/zugzwang" element={<Zugzwang />} />
            <Route path="learn/tattiche/sacrificio" element={<Sacrificio />} />

            <Route path="learn/strategie" element={<Strategie />} />
            <Route path="learn/strategie/centro" element={<Centro />} />
            <Route path="learn/strategie/coordinazione" element={<Coordinazione />} />

            <Route path="learn/finali" element={<Finali />} />
            <Route path="learn/finali/torre-vs-re" element={<TorrevsRe />} />
            <Route path="learn/finali/opposizione" element={<Opposizione />} />
            <Route path="learn/finali/finale-pedoni" element={<FinalePedoni />} />
            <Route path="learn/finali/due-torri" element={<DueTorri />} />

            <Route path="learn/storia" element={<Storia />} />
            <Route path="learn/storia/capitolo-1" element={<Capitolo1 />} />
            <Route path="learn/storia/capitolo-2" element={<Capitolo2 />} />
            <Route path="learn/storia/capitolo-3" element={<Capitolo3 />} />

            <Route path="patrimonio/libri" element={<Libri />} />
            <Route path="patrimonio/scacchiere" element={<Scacchiere />} />

            <Route path="esercizi" element={<Esercizi />} />
            <Route path="esercizi/matto" element={<Matto />} />

            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Fallback route для 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatedRoutes>
    </Router>
  );
}

// Компонент для 404 страницы
function NotFound() {
  return (
    <div style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
        ERRORE 404 - La pagina non esiste
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
       
      </p>
      <a 
        href="/" 
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold'
        }}
      >
        Torna alla Home
      </a>
    </div>
  );
}

export default App;