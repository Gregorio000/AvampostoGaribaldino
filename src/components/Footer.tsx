import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaChessKnight, FaChess } from 'react-icons/fa';
import { SiLichess } from 'react-icons/si';
import { FaChessPawn } from 'react-icons/fa';
import { FaChessRook } from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <footer className="bg-chess-black text-chess-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LOGO + SOCIAL */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/LogoAvampGarib.png" 
                alt="Avamposto Garibaldino" 
                className="h-8 w-8" 
              />
              <h3 className="text-xl font-bold">Avamposto Garibaldino - Circolo Scacchistico</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Uniamo tradizione e innovazione per promuovere l'arte degli scacchi.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/avampostogaribaldino" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <FaFacebookF className="text-chess-black text-sm" />
                </div>
              </a>

              {/* Telegram */}
              <a href="https://www.telegram.org/avampostogaribaldino" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <FaTelegramPlane className="text-chess-black text-sm" />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/avampostogaribaldino" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <FaInstagram className="text-chess-black text-sm" />
                </div>
              </a>

              {/* Chess.com */}
              <a href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <FaChessPawn className="text-chess-black text-sm" />
                </div>
              </a>

              {/* Lichess.org */}
              <a href="https://lichess.org/team/avamposto-junior-online" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <SiLichess className="text-chess-black text-sm" />
                </div>
              </a>

              {/* Vesus.org */}
              <a href="https://vesus.org" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-chess-gold rounded-full flex items-center justify-center hover:bg-chess-gold/80 transition-colors">
                  <FaChessRook className="text-chess-black text-sm" />
                </div>
              </a>
            </div>
          </div>

          {/* Link rapidi */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-chess-gold">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="/ricordi" className="text-gray-300 hover:text-chess-gold transition-colors">Ricordi</a></li>
              <li><a href="/learn" className="text-gray-300 hover:text-chess-gold transition-colors">Impara</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-chess-gold transition-colors">Contattaci</a></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-chess-gold">Contattaci</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-chess-gold" />
                <span className="text-gray-300 text-sm">Via Giovanni Giolitti 21/23, Mentana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-chess-gold" />
                <span className="text-gray-300 text-sm">+39 338 244 9032</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-chess-gold" />
                <span className="text-gray-300 text-sm">avamposto.garibaldino@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-chess-gray/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Avamposto Garibaldino. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
