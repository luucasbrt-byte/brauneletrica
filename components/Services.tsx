import React from 'react';
import { Wrench, Droplet, Snowflake, Speaker, Shield, Zap } from 'lucide-react';
import { SERVICES_LIST } from '../constants';
import { ServiceItem } from '../types';

const iconMap = {
  Wrench: Wrench,
  Droplet: Droplet,
  Snowflake: Snowflake,
  Speaker: Speaker,
  Shield: Shield,
  Zap: Zap
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-braun-red font-display font-bold text-lg uppercase tracking-widest mb-2">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Serviços Especializados</h3>
          <div className="w-24 h-1 bg-braun-red mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-braun-red group">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-braun-red transition-colors">
                  <Icon className="w-7 h-7 text-braun-dark group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};