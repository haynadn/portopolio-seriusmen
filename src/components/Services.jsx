import React from 'react';
import { Sprout, Heart, ArrowRight, ShoppingCart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Layanan Unggulan Kami</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Fokus kami adalah memberikan pengalaman digital terbaik di dua sektor utama yang kami kuasai.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Card 1: Agriculture */}
                    <div className="group relative bg-slate-50 rounded-3xl p-8 lg:p-12 overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-tani-primary/10 rounded-full blur-3xl group-hover:bg-tani-primary/20 transition-all" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8 border border-slate-100">
                                <Sprout className="w-8 h-8 text-tani-primary" />
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-tani-primary transition-colors">
                                SeriusTani - Bibit
                            </h3>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Platform e-commerce modern khusus untuk petani dan penjual bibit. Kelola inventaris, jangkau pasar lebih luas, dan tingkatkan penjualan dengan sistem manajemen yang terintegrasi.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <ShoppingCart className="w-5 h-5 text-tani-primary" />
                                    <span>Sistem Penjualan Bibit Online</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-tani-primary/20 flex items-center justify-center text-xs font-bold text-tani-primary">✓</div>
                                    <span>Manajemen Stok & Pesanan</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-tani-primary/20 flex items-center justify-center text-xs font-bold text-tani-primary">✓</div>
                                    <span>Dashboard Petani Interaktif</span>
                                </div>
                            </div>

                            <a href="#" className="inline-flex items-center gap-2 text-tani-primary font-semibold hover:gap-3 transition-all">
                                Mulai Berjualan <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Wedding */}
                    <div className="group relative bg-slate-50 rounded-3xl p-8 lg:p-12 overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-wedding-primary/10 rounded-full blur-3xl group-hover:bg-wedding-primary/20 transition-all" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8 border border-slate-100">
                                <Heart className="w-8 h-8 text-wedding-primary" />
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-wedding-primary transition-colors">
                                SeriusWedding
                            </h3>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Buat undangan pernikahan digital yang elegan dan tak terlupakan. Fitur lengkap mulai dari galeri foto, peta lokasi, hingga buku tamu digital yang terintegrasi.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Calendar className="w-5 h-5 text-wedding-primary" />
                                    <span>RSVP & Digital Invitation</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-wedding-primary/20 flex items-center justify-center text-xs font-bold text-wedding-primary">✓</div>
                                    <span>Tema Premium & Elegan</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="w-5 h-5 rounded-full bg-wedding-primary/20 flex items-center justify-center text-xs font-bold text-wedding-primary">✓</div>
                                    <span>Fitur Angpao Digital & Maps</span>
                                </div>
                            </div>

                            {/* Updated Link to Wedding Demo */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/wedding-demo" className="inline-flex items-center gap-2 text-wedding-primary font-semibold hover:gap-3 transition-all">
                                    Lihat Contoh Web <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/wedding-builder" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-slate-900 transition-all">
                                    Buat Sendiri
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
