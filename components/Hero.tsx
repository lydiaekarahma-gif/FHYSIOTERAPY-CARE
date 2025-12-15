import React from 'react';
import { Clock, CalendarCheck, ShieldCheck, Home } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-brand-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative background elements since image is removed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-24 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10">
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 text-brand-700 font-semibold text-sm shadow-sm">
            <ShieldCheck size={16} />
            <span>Profesional & Terpercaya</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 font-bold text-sm shadow-sm animate-pulse">
            <Home size={16} />
            <span>Bisa Home Visit</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
          Solusi Kesehatan <br/>
          <span className="text-brand-600">Wanita & Bayi</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Layanan fisioterapi khusus yang menangani keluhan syaraf, otot, pernapasan, hingga tumbuh kembang bayi dengan pendekatan yang aman dan nyaman.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a 
            href="#contact" 
            className="bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-brand-700 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <CalendarCheck size={20} />
            Buat Janji Sekarang
          </a>
          <a 
            href="#services" 
            className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center"
          >
            Lihat Layanan
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Clock className="text-brand-500" size={18} />
            <span>Senin - Sabtu: 08.00 - 21.00</span>
          </div>
        </div>

      </div>
    </div>
  );
};