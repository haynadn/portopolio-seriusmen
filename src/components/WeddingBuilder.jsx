import React, { useState } from 'react';
import WeddingTemplate from './WeddingTemplate';
import { ArrowLeft, Save, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingBuilder = () => {
    const [activeTab, setActiveTab] = useState('data'); // data | preview
    const [formData, setFormData] = useState({
        groomName: "Nama Pria",
        groomParents: "Putra Bpk... & Ibu...",
        groomPhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        brideName: "Nama Wanita",
        brideParents: "Putri Bpk... & Ibu...",
        bridePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: "1 Januari 2026",
        timeAkad: "08:00 WIB",
        venueAkad: "Masjid...",
        timeResepsi: "11:00 WIB",
        venueResepsi: "Gedung..."
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
            {/* Sidebar Editor */}
            <div className="w-full md:w-1/3 min-w-[350px] bg-white border-r border-slate-200 flex flex-col z-20 shadow-xl">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                            <ArrowLeft size={20} />
                        </Link>
                        <h2 className="text-xl font-bold text-slate-800">Wedding Builder</h2>
                    </div>
                    <button className="text-brand-accent hover:text-brand font-medium text-sm flex items-center gap-1">
                        <Save size={16} /> Simpan
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Section: Mempelai */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Data Mempelai</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Pria</label>
                                <input
                                    type="text"
                                    name="groomName"
                                    value={formData.groomName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Orang Tua Pria</label>
                                <input
                                    type="text"
                                    name="groomParents"
                                    value={formData.groomParents}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Wanita</label>
                                <input
                                    type="text"
                                    name="brideName"
                                    value={formData.brideName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Orang Tua Wanita</label>
                                <input
                                    type="text"
                                    name="brideParents"
                                    value={formData.brideParents}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 my-2"></div>

                    {/* Section: Acara */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Detail Acara</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Tanggal</label>
                                <input
                                    type="text"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Waktu Akad</label>
                                    <input
                                        type="text"
                                        name="timeAkad"
                                        value={formData.timeAkad}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Lokasi Akad</label>
                                    <input
                                        type="text"
                                        name="venueAkad"
                                        value={formData.venueAkad}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Waktu Resepsi</label>
                                    <input
                                        type="text"
                                        name="timeResepsi"
                                        value={formData.timeResepsi}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Lokasi Resepsi</label>
                                    <input
                                        type="text"
                                        name="venueResepsi"
                                        value={formData.venueResepsi}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Area */}
            <div className="flex-1 bg-slate-100 flex flex-col h-full overflow-hidden relative">
                <div className="absolute top-4 right-4 z-30 bg-white rounded-lg shadow-sm p-1 flex space-x-1">
                    <button
                        onClick={() => setActiveTab('desktop')}
                        className={`px-3 py-1 text-sm rounded-md font-medium transition-all ${activeTab !== 'mobile' ? 'bg-brand/10 text-brand' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        Desktop
                    </button>
                    <button
                        onClick={() => setActiveTab('mobile')}
                        className={`px-3 py-1 text-sm rounded-md font-medium transition-all ${activeTab === 'mobile' ? 'bg-brand/10 text-brand' : 'text-slate-500 hover:bg-slate-50'}`}
                    >
                        Mobile
                    </button>
                </div>

                <div className="flex-1 overflow-auto p-8 flex justify-center">
                    <div className={`transition-all duration-500 bg-white shadow-2xl overflow-hidden overflow-y-auto
                ${activeTab === 'mobile'
                            ? 'w-[375px] h-[812px] rounded-[30px] border-[8px] border-slate-900'
                            : 'w-full h-full rounded-xl border border-slate-200'
                        }`
                    }>
                        {/* Pass isPreview to hide fixed elements like back button which might conflict */}
                        <WeddingTemplate data={formData} isPreview={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingBuilder;
