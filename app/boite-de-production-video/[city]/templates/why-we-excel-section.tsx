// src/app/components/why-we-excel-section.tsx
'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

export default function WhyWeExcelSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Core Value Proposition */}
          <div className="relative">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-100">
                Excellence Cinématographique
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Pourquoi nos productions <span className="text-orange-500">marquent durablement</span> les esprits
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              Chez Asterakis Studio, chaque projet est traité comme une œuvre cinématographique. Notre approche holistique garantit une qualité exceptionnelle, de la première idée à la diffusion finale.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Équipe pluridisciplinaire : Réalisation, direction photo, montage, et motion design sous un même toit",
                "Chef de projet dédié pour chaque production, garantissant respect des délais et qualité constante",
                "Technologie de pointe : Caméras RED, drones cinématographiques, et studio d'étalonnage professionnel",
                "Stratégie globale : Création de contenu adaptable pour réseaux sociaux, publicités, et supports événementiels"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <span className="text-gray-800 ml-4 text-lg transition-colors group-hover:text-gray-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link href="/contact" passHref>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl overflow-hidden transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="relative z-10 font-bold text-white text-lg flex items-center">
                  Discutons de votre projet
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </button>
            </Link>
          </div>

          {/* Right Column - Cinematic Showcase */}
          <div className="relative">
            {/* Subtle decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-16 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl"></div>
            
            {/* Video Showcase Card */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Embedded Vimeo Video */}
              <div className="relative aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/987654321?h=abcdefg" // Replace with your showreel ID
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; accelerometer; gyroscope"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                ></iframe>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                      <path d="M8.53 14.22a1 1 0 0 0 1.47.38l6-4a1 1 0 0 0 0-1.6l-6-4a1 1 0 0 0-1.47 1.38V14.22z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-7">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-orange-500 rounded-r-lg mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">Notre Approche Créative</h3>
                </div>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  Découvrez comment nous transformons chaque brief en récit visuel captivant. Notre showreel présente notre expertise en direction photo, montage narratif, et création de contenu sur mesure pour des marques ambitieuses.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-orange-600 font-medium mb-1">Production Signature</div>
                    <div className="text-gray-500 text-sm">Showreel 2025</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500 text-sm font-medium">4K HDR • Dolby Atmos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}