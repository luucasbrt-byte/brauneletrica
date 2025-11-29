import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-braun-red selection:text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;