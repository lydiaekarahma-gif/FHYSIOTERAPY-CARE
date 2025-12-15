import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="bg-brand-600 p-1.5 rounded text-xs font-bold">FC</div>
          <span className="text-xl font-bold">Fisiotherapy Care</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Melayani kesehatan wanita dan bayi dengan sepenuh hati untuk kualitas hidup yang lebih baik.
        </p>
        <div className="flex items-center justify-center gap-1 text-sm text-gray-500">
          <span>&copy; {new Date().getFullYear()} Fisiotherapy Care. All rights reserved.</span>
        </div>
        <div className="mt-4 text-xs text-gray-600 flex items-center justify-center gap-1">
          <span>Made with</span>
          <Heart size={12} className="text-brand-600 fill-current" />
          <span>for a healthier future</span>
        </div>
      </div>
    </footer>
  );
};