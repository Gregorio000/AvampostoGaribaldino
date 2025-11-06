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
              <a href="https://www.facebook.com/mentanascacchi?locale=it_IT" target="_blank" rel="noopener noreferrer" className="relative group" title="Facebook">
                <div className="w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2]/80 transition-colors">
                  <FaFacebookF className="text-white text-sm" />
                </div>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/avamposto.garibaldino" target="_blank" rel="noopener noreferrer" className="relative group" title="Instagram">
                <div className="w-8 h-8 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                  <FaInstagram className="text-white text-sm" />
                </div>
              </a>

              {/* Chess.com */}
              <a href="https://www.chess.com/club/asd-mentana-scacchi-avamposto-garibaldino" target="_blank" rel="noopener noreferrer" className="relative group" title="Chess.com">
                <div className="w-8 h-8 bg-[#7FA650] rounded-full flex items-center justify-center hover:bg-[#7FA650]/80 transition-colors">
                  <FaChessPawn className="text-white text-sm" />
                </div>
              </a>

              {/* Lichess.org */}
              <a href="https://lichess.org/team/avamposto-junior-online" target="_blank" rel="noopener noreferrer" className="relative group" title="Lichess.com">
                <div className="w-8 h-8 bg-[#C4C4C4] rounded-full flex items-center justify-center hover:bg-[#C4C4C4]/80 transition-colors">
                  <SiLichess className="text-gray-800 text-sm" />
                </div>
              </a>
            </div>
          </div>

          {/* Link rapidi */}
          <div>
            {/* <h4 className="text-lg font-semibold mb-4 text-chess-gold">Link Rapidi</h4> */}
            {/* <ul className="space-y-2">
              <li><a href="/ricordi" className="text-gray-300 hover:text-chess-gold transition-colors">Ricordi</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-chess-gold transition-colors">Contattaci</a></li>
            </ul> */}
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contattaci</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-300 text-sm">Via Giovanni Giolitti 21/23, Mentana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">+39 338 244 9032</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-300 text-sm">avamposto.garibaldino@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">avamposto.garibaldino@legalmail.it</span>
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
