import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Oficina Mecânica" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block bg-braun-red px-4 py-1 text-white font-display text-sm font-bold skew-x-[-10deg] mb-6">
            <span className="skew-x-[10deg] inline-block uppercase tracking-widest">Desde 19XX</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Excelência em <span className="text-braun-red">Elétrica</span> e <span className="text-braun-red">Mecânica</span> Automotiva
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Diagnóstico preciso, peças de qualidade e serviço transparente. Sua oficina de confiança em Gravataí para som, alarmes, ar-condicionado e mais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-braun-red text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};