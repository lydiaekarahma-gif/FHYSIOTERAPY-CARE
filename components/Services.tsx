import React from 'react';
import { Activity, User, Wind, Baby, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Musculoskeletal & Saraf",
      description: "Terapi untuk sakit pinggang, saraf terjepit (HNP), osteoporosis, dan cedera keseleo.",
      icon: <Activity className="w-8 h-8 text-white" />,
      tags: ["Sakit Pinggang", "Saraf Terjepit", "Osteoporosis", "Keseleo"]
    },
    {
      title: "Rehabilitasi Neurologi",
      description: "Penanganan pasien stroke, tengeng (kaku leher), susah tidur (insomnia), tangan kesemutan, dan rematik.",
      icon: <User className="w-8 h-8 text-white" />,
      tags: ["Stroke", "Kaku Leher", "Insomnia", "Rematik"]
    },
    {
      title: "Pernapasan (Inhalasi)",
      description: "Layanan Nebulizer uap untuk pasien asma, batuk, dan pilek untuk melegakan pernapasan.",
      icon: <Wind className="w-8 h-8 text-white" />,
      tags: ["Asma", "Batuk", "Pilek", "Nebulizer"]
    },
    {
      title: "Tumbuh Kembang Bayi",
      description: "Massage / Pijat khusus untuk bayi dan anak-anak untuk merangsang motorik dan relaksasi.",
      icon: <Baby className="w-8 h-8 text-white" />,
      tags: ["Pijat Bayi", "Motorik Anak", "Relaksasi", "Nafsu Makan"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan perawatan fisioterapi komprehensif yang disesuaikan dengan kebutuhan wanita, bayi, dan anak-anak.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:bg-brand-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">
                    <CheckCircle2 size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};