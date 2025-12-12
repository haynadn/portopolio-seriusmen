import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-600">Profesional & Terpercaya</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
                        Mewujudkan Ide <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-accent">
                            Menjadi Nyata
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        SeriusMen menghadirkan solusi teknologi terdepan untuk berbagai kebutuhan industri, mulai dari inovasi pertanian hingga momen pernikahan spesial Anda.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-full font-semibold hover:bg-brand-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-brand/20 flex items-center justify-center gap-2 group">
                            Jelajahi Layanan
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
