import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { ADDRESS_CITY, ADDRESS_STREET, ADDRESS_ZIP, PHONE_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-braun-dark text-white pt-16 pb-8 border-t-8 border-braun-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-6 scale-90 origin-left" />
            <p className="text-gray-400 max-w-sm">
              Especialistas em injeção eletrônica, som, alarmes e manutenção preventiva. Tecnologia e confiança para o seu veículo em Gravataí.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-braun-red uppercase tracking-wider">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="shrink-0 text-braun-red" size={20} />
                <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_STREET + ' ' + ADDRESS_CITY)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                >
                  {ADDRESS_STREET}<br />
                  {ADDRESS_CITY}, {ADDRESS_ZIP}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="shrink-0 text-braun-red" size={20} />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-white transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-braun-red uppercase tracking-wider">Horário</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span>Seg - Sex: 08:00 - 18:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span>Sábado: 08:00 - 12:00</span>
              </li>
              <li className="text-gray-500 ml-6">Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Auto Elétrica Braun. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             {/* Social placeholders */}
             <a href="#" className="hover:text-white transition-colors">Facebook</a>
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};