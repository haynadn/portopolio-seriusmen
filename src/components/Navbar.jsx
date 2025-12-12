import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src={logo} alt="SeriusMen Logo" className="h-10 w-auto rounded-md" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                            SeriusMen
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-slate-600 hover:text-brand transition-colors font-medium">Home</a>
                        <a href="#services" className="text-slate-600 hover:text-brand transition-colors font-medium">Layanan</a>
                        <a href="#about" className="text-slate-600 hover:text-brand transition-colors font-medium">Tentang</a>
                        <button className="bg-brand text-white px-6 py-2 rounded-full font-medium hover:bg-brand-dark transition-all transform hover:scale-105 shadow-lg shadow-brand/20">
                            Hubungi Kami
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-slate-100 shadow-lg animate-in slide-in-from-top-10 fade-in">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Layanan</a>
                        <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 font-medium">Tentang</a>
                        <div className="pt-4">
                            <button className="w-full bg-brand text-white px-6 py-2 rounded-full font-medium">
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
