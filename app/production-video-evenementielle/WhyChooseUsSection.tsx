// src/app/production-audiovisuelle/[city]/templates/WhyChooseUsSection.tsx

import { ChevronRight } from "lucide-react";

const advantages = [
  {
    title: "Livraison ultra-rapide",
    desc: "Temps forts livrés dès le lendemain de l’événement, version complète en 5 jours max. Idéal pour capitaliser sur l’actualité de votre salon, conférence ou lancement produit.",
    icon: (
      <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </div>
    ),
  },
  {
    title: "Expertise événementielle B2B",
    desc: "Spécialisés dans les formats corporate — séminaires, conventions, keynotes, salons — nous savons capter l’essentiel avec discrétion, professionnalisme et un regard narratif.",
    icon: (
      <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </div>
    ),
  },
  {
    title: "Couverture nationale & internationale",
    desc: "Grâce à notre réseau de collaborateurs certifiés, nous intervenons partout en France et à l’international, sans frais de déplacement supplémentaires ni perte de qualité.",
    icon: (
      <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center">
        <ChevronRight className="w-6 h-6" />
      </div>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Pourquoi choisir Asteraki pour la captation de votre événement ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parce que chaque événement mérite une captation à la hauteur de son enjeu — rapide, stratégique et sans contrainte logistique.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">{advantage.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {advantage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}