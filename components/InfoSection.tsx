import React from 'react';
import { Clock, Phone, MapPin, CalendarX, MessageCircle, ExternalLink, Home } from 'lucide-react';

export const InfoSection: React.FC = () => {
  const phoneNumber = "081227558988";
  const formattedPhone = "+62 812-2755-8988";
  const whatsappUrl = `https://wa.me/6281227558988?text=Halo,%20saya%20ingin%20reservasi%20di%20Fisiotherapy%20Care`;
  const address = "Dk Jenengan RT 01/RW 01, Selodoko, Ampel, Boyolali";
  const mapUrl = "https://maps.google.com/maps?q=Selodoko,+Ampel,+Boyolali&t=&z=14&ie=UTF8&iwloc=&output=embed";
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Dk+Jenengan+RT+01/RW+01,+Selodoko,+Ampel,+Boyolali";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left Side: Contact & Hours & Address */}
            <div className="p-10 md:p-14 bg-brand-600 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-8">Informasi & Reservasi</h2>
              
              <div className="space-y-8">
                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-brand-50 font-medium">Senin - Sabtu</p>
                    <p className="text-2xl font-bold">08.00 - 21.00 WIB</p>
                    <div className="mt-2 flex items-center gap-2 text-brand-100 bg-brand-800/50 inline-block px-3 py-1 rounded-lg">
                      <CalendarX size={16} />
                      <span className="text-sm font-semibold uppercase tracking-wide">Hari Minggu Libur</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Lokasi Praktek</h3>
                    <p className="text-brand-50 leading-relaxed max-w-xs font-medium text-lg">
                      {address}
                    </p>
                    <a 
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-brand-100 hover:text-white underline text-sm transition-colors"
                    >
                      Buka di Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Contact & Home Visit */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Hubungi Kami</h3>
                    <div className="mb-3">
                      <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-white px-2 py-0.5 rounded text-sm font-medium mb-1 border border-green-400/30">
                        <Home size={12} />
                        <span>Bisa Home Visit</span>
                      </div>
                    </div>
                    <a 
                      href={whatsappUrl} 
                      className="text-2xl font-bold hover:text-brand-100 transition-colors block mb-4"
                    >
                      {formattedPhone}
                    </a>
                    <a 
                      href={whatsappUrl} 
                      className="inline-flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-all"
                    >
                      <MessageCircle size={20} />
                      Chat WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="relative h-96 md:h-auto bg-gray-100 min-h-[400px]">
              <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Praktek"
                className="w-full h-full object-cover"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};