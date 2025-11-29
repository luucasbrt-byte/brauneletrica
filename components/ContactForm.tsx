import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    issue: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    // Simple phone mask
    if (e.target.name === 'phone') {
      value = value.replace(/\D/g, '');
      if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
      }
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.issue) {
        alert('Por favor, preencha os campos obrigatórios.');
        return;
    }

    // Construct WhatsApp message
    const message = `*Solicitação de Orçamento - Site*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*Veículo:* ${formData.vehicle}\n` +
      `*Problema:* ${formData.issue}`;

    const phoneNumber = "555195152973"; // 55 (BR) + 51 (DDD) + Number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h2 className="text-braun-red font-display font-bold text-lg uppercase tracking-widest mb-2">Contato</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicite seu Orçamento</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo para enviar uma mensagem diretamente para nossa equipe no WhatsApp. 
              Responderemos o mais breve possível.
            </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu Nome *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:ring-braun-red focus:border-braun-red outline-none transition-all placeholder-gray-500"
                        placeholder="Ex: Carlos Silva"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp) *</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:ring-braun-red focus:border-braun-red outline-none transition-all placeholder-gray-500"
                        placeholder="(51) 99999-9999"
                        required
                    />
                </div>
            </div>

            <div>
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Modelo do Veículo</label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:ring-braun-red focus:border-braun-red outline-none transition-all placeholder-gray-500"
                placeholder="Ex: Chevrolet Onix 2018"
              />
            </div>

            <div>
              <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Descrição do Problema *</label>
              <textarea
                id="issue"
                name="issue"
                rows={4}
                value={formData.issue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-md focus:ring-braun-red focus:border-braun-red outline-none transition-all placeholder-gray-500"
                placeholder="Ex: O ar condicionado parou de gelar..."
                required
              />
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-lg shadow-md hover:shadow-lg"
            >
                <Send size={20} />
                Enviar Mensagem no WhatsApp
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp Web ou App.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};