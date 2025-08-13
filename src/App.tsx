import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Impara from './pages/Impara';
import Tournaments from './pages/Tournaments';
import TournamentDetails from './pages/TournamentDetails';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AnimatedRoutes from './components/AnimatedRoutes';
import ArticleDetailPage from './pages/ArticleDetailPage';
import Profilo from './pages/Profilo';
import Ricordi from './pages/ricordi';
import Patrimonio from './pages/Patrimonio';

import ScrollToTop from './components/ScrollToTop'; // 👈 NUOVO IMPORT

import CentroEstivo from './pages/ricordi/centro-estivo';
import ScacchiMentana from './pages/ricordi/scacchi-mentana';
import GliInizi from './pages/ricordi/gli-inizi';
// Nuove pagine delle sezioni Impara

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

import Esercizi from './pages/learn/Esercizi';


function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 AGGIUNTO QUI */}
      <AnimatedRoutes>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ricordi" element={<Ricordi />} />
            <Route path="Patrimonio" element={<Patrimonio />} />
            <Route path="ricordi/centro-estivo" element={<CentroEstivo />} />
            <Route path="ricordi/scacchi-mentana" element={<ScacchiMentana />} />
            <Route path="ricordi/gli-inizi" element={<GliInizi />} />
            
            <Route path="learn" element={<Impara />} />

            <Route path="learn/regole" element={<Regole />} />
            <Route path="learn/Regole/ComeGiocare" element={<ComeGiocare />} />
            <Route path="learn/Regole/ComeVincere" element={<ComeVincere />} />
            <Route path="learn/Regole/RegoleFondamentali" element={<RegoleFondamentali />} />
            <Route path="learn/Regole/stallo" element={<Stallo />} />
            <Route path="learn/Regole/Patta" element={<Patta />} />
            <Route path="learn/Regole/tempo" element={<Tempo />} />

            <Route path="learn/aperture" element={<Aperture />} />
            <Route path="learn/aperture/aperte" element={<Aperte />} />
            <Route path="learn/aperture/chiuse" element={<Chiuse />} />
            <Route path="learn/aperture/semichiuse" element={<Semichiuse />} />
            <Route path="learn/Aperture/Italiana" element={<Italiana />} />
            <Route path="learn/Aperture/Siciliana" element={<Siciliana />} />
            <Route path="learn/Aperture/GambettoRe" element={<GambettoRe />} />
            <Route path="learn/Aperture/GambettoDonna" element={<GambettoDonna />} />
            <Route path="learn/Aperture/Francese" element={<Francese />} />
            <Route path="learn/Aperture/Spagnola" element={<Spagnola />} /> */
            <Route path="learn/Aperture/Inglese" element={<Inglese />} />
            <Route path="learn/Aperture/CaroKann" element={<CaroKann />} />
            <Route path="learn/Aperture/Scandinava" element={<Scandinava />} />
            <Route path="learn/Aperture/Pirc" element={<Pirc />} />
            <Route path="learn/Aperture/Alekhine" element={<Alekhine />} />
            <Route path="learn/Aperture/Reti" element={<Reti />} />
            <Route path="learn/Aperture/Moderna" element={<Moderna />} />
            <Route path="learn/Aperture/NimzoIndiana" element={<NimzoIndiana />} />
            <Route path="learn/Aperture/IndianaRe" element={<IndianaRe />} />
            <Route path="learn/Aperture/Benoni" element={<Benoni />} />
            <Route path="learn/Aperture/Trompowsky" element={<Trompowsky />} />
            <Route path="learn/Aperture/London" element={<London />} />
            <Route path="learn/Aperture/Grunfeld" element={<Grunfeld />} />
            <Route path="learn/Aperture/Bird" element={<Bird />} /> 

            <Route path="learn/tattiche" element={<Tattiche />} />
            <Route path="learn/Tattiche/DoppioAttacco" element={<DoppioAttacco />} />
            <Route path="learn/Tattiche/Inchiodatura" element={<Inchiodatura />} />
            <Route path="learn/Tattiche/ScaccoDoppio" element={<ScaccoDoppio />} />
            <Route path="learn/Tattiche/Zugzwang" element={<Zugzwang />} />
            <Route path="learn/Tattiche/Sacrificio" element={<Sacrificio />} />

            <Route path="learn/Strategie" element={<Strategie />} />
            <Route path="learn/Strategie/Centro" element={<Centro />} />
            <Route path="learn/Strategie/Coordinazione" element={<Coordinazione />} />

            <Route path="learn/finali" element={<Finali />} />
            <Route path="learn/finali/TorrevsRe" element={<TorrevsRe />} />
            <Route path="learn/finali/Opposizione" element={<Opposizione />} />
            <Route path="learn/finali/FinalePedoni" element={<FinalePedoni />} />
            <Route path="learn/finali/DueTorri" element={<DueTorri />} />

            <Route path="learn/Storia" element={<Storia />} />
            <Route path="learn/Storia/Capitolo1" element={<Capitolo1 />} />

            <Route path="learn/Esercizi" element={<Esercizi />} />

            <Route path="tournaments" element={<Tournaments />} />
            <Route path="/tournaments/:id" element={<TournamentDetails />} />
            <Route path="news" element={<News />} />
            <Route path="news/:id" element={<ArticleDetailPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profilo" element={<Profilo />} />
          </Route>
        </Routes>
      </AnimatedRoutes>
    </Router>
  );
}

export default App;
