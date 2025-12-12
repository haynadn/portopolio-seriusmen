import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-white mb-4 block">SeriusMen</span>
                        <p className="max-w-xs text-slate-400">
                            Partner digital terpercaya untuk transformasi bisnis pertanian dan momen pernikahan Anda.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Layanan</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">SeriusTani</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">SeriusWedding</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} SeriusMen. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
