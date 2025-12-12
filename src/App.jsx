import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import WeddingDemo from './components/WeddingDemo';
import WeddingBuilder from './components/WeddingBuilder';

// Landing Page Layout
const LandingPage = () => (
  <div className="min-h-screen bg-slate-50 selection:bg-brand-accent selection:text-white">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <div className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Decorative section/CTA */}
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Siap untuk Memulai?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Konsultasikan ide Anda bersama kami. Kami siap membantu mewujudkan visi "Serius" Anda.
          </p>
          <button className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-dark transition-all transform hover:scale-105 shadow-xl shadow-brand/20">
            Hubungi Tim SeriusMen
          </button>
        </div>
        {/* Background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-accent/5 to-purple-500/5 rounded-full blur-3xl -z-10" />
      </div>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wedding-demo" element={<WeddingDemo />} />
        <Route path="/wedding-builder" element={<WeddingBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
