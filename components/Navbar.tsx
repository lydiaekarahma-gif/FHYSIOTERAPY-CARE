import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Jadwal & Kontak', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <span className="text-white font-bold text-xl">FC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">Fisiotherapy Care</span>
              <span className="text-xs text-brand-600 font-semibold tracking-wider">KHUSUS WANITA & BAYI</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281227558988"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-700 transition-colors flex items-center gap-2 shadow-lg shadow-brand-200"
            >
              <Phone size={18} />
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6281227558988"
              className="block w-full text-center mt-4 bg-brand-600 text-white px-5 py-3 rounded-lg font-bold"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};