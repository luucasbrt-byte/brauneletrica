import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { PHONE_NUMBER } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md border-t-4 border-braun-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 h-full py-2">
            <a href="#" className="h-full block">
              <Logo className="h-full w-auto" />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display font-medium text-gray-800 hover:text-braun-red transition-colors duration-200 px-3 py-2 rounded-md text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-braun-dark text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-braun-red transition-colors"
              >
                <Phone size={16} />
                <span>{PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-braun-red focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-braun-red hover:bg-gray-50 uppercase font-display"
              >
                {link.name}
              </a>
            ))}
             <a 
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full text-center mt-4 bg-braun-red text-white px-4 py-2 rounded-md text-base font-bold"
              >
                Ligar Agora: {PHONE_NUMBER}
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};