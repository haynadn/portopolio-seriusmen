import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Clock, Music, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingTemplate = ({ data, isPreview = false }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const {
        groomName = "Romeo",
        groomParents = "Putra Bpk. Montague & Ibu. Montague",
        groomPhoto = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        brideName = "Juliet",
        brideParents = "Putri Bpk. Capulet & Ibu. Capulet",
        bridePhoto = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date = "22 Desember 2025",
        timeAkad = "08:00 - 10:00 WIB",
        venueAkad = "Masjid Agung Al-Hikmah",
        timeResepsi = "11:00 - 13:00 WIB",
        venueResepsi = "Grand Ballroom Hotel SeriusMen"
    } = data || {};

    return (
        <div className="min-h-screen bg-stone-50 font-serif text-stone-800">
            {/* Floating Back Button - only show if not in small preview mode or controlled externally */}
            {!isPreview && (
                <div className="fixed top-6 left-6 z-50">
                    <Link to="/" className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white transition-all text-stone-600 hover:text-stone-900 border border-stone-200">
                        <ArrowLeft size={24} />
                    </Link>
                </div>
            )}

            {/* Hero Section */}
            <header className="h-screen relative flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225448526-0a029515582d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
                    <div className="mb-6 text-xl tracking-[0.2em] uppercase">The Wedding Of</div>
                    <h1 className="text-6xl md:text-8xl font-script mb-8">{groomName} & {brideName}</h1>
                    <div className="flex items-center justify-center gap-4 text-xl">
                        <span>Minggu</span>
                        <span className="w-2 h-2 bg-white rounded-full" />
                        <span>{date}</span>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
                    <p className="text-sm tracking-widest uppercase mb-2">Scroll Down</p>
                </div>
            </header>

            {/* Couple Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        <Heart className="text-rose-400 w-8 h-8" />
                    </div>
                    <p className="text-stone-500 italic mb-12 max-w-2xl mx-auto">
                        "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya."
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-100 shadow-xl">
                                <img src={groomPhoto} alt="Groom" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-3xl font-bold text-stone-800">{groomName}</h3>
                            <p className="text-stone-500">{groomParents}</p>
                        </div>

                        <div className="space-y-4">
                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-100 shadow-xl">
                                <img src={bridePhoto} alt="Bride" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-3xl font-bold text-stone-800">{brideName}</h3>
                            <p className="text-stone-500">{brideParents}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Details */}
            <section className="py-24 px-4 bg-stone-50 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />

                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl text-center mb-16 font-bold text-stone-800">Event Schedule</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow text-center">
                            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500">
                                <RingIcon />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Akad Nikah</h3>
                            <div className="space-y-2 text-stone-600 mb-6">
                                <div className="flex items-center justify-center gap-2">
                                    <Calendar size={18} />
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Clock size={18} />
                                    <span>{timeAkad}</span>
                                </div>
                            </div>
                            <p className="text-sm text-stone-500">{venueAkad}</p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-stone-100 hover:shadow-xl transition-shadow text-center">
                            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500">
                                <Music size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Resepsi</h3>
                            <div className="space-y-2 text-stone-600 mb-6">
                                <div className="flex items-center justify-center gap-2">
                                    <Calendar size={18} />
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Clock size={18} />
                                    <span>{timeResepsi}</span>
                                </div>
                            </div>
                            <p className="text-sm text-stone-500">{venueResepsi}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / RSVP */}
            <section className="py-24 px-4 bg-stone-900 text-white text-center">
                <h2 className="text-4xl mb-8">Are You Attending?</h2>
                <p className="mb-12 text-stone-400">Please confirm your attendance before the event.</p>
                <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-stone-200 transition-colors uppercase tracking-widest">
                    RSVP Now
                </button>
            </section>
        </div>
    );
};

const RingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" opacity="0" />
        <circle cx="12" cy="11" r="3" />
        <path d="M12 2v2" />
    </svg>
);

export default WeddingTemplate;
