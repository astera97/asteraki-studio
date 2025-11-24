// src/app/templates/UspSection.tsx
'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { USPContent, getUspContent } from '../data/getUspContent';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface UspSectionProps {
  className?: string;
  pageIdentifier?: string; // ← make it optional
}

export default function UspSection({ 
  className = "",
  pageIdentifier // ← destructure it
}: UspSectionProps) {
  const pathname = usePathname();
  
  const content = useMemo(() => {
    // Use pageIdentifier if provided, otherwise fallback to pathname
    const key = pageIdentifier || pathname;
    if (!key) return null;
    return getUspContent(key);
  }, [pathname, pageIdentifier]); // ← add to deps

  // Loading state for initial render
  if (!content) {
    return (
      <section className={`py-20 bg-white overflow-hidden ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-6 bg-gray-100 rounded w-full"></div>
              <div className="space-y-3 mt-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-5 bg-gray-100 rounded w-full"></div>
                ))}
              </div>
              <div className="h-12 bg-gray-200 rounded w-48 mt-6"></div>
            </div>
            <div className="bg-gray-100 rounded-2xl border border-gray-200 h-80"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 bg-white overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Core Value Proposition */}
          <div className="relative">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-medium border border-orange-100">
                {content.badge}
              </span>
            </div>
            
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              dangerouslySetInnerHTML={{ __html: content.headline }}
            />
            
            <p className="text-gray-600 text-lg mb-10 max-w-2xl">
              {content.description}
            </p>

            <ul className="space-y-5 mb-10">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center">
                      <Check className="w-4 h-4 text-orange-600" />
                    </div>
                  </div>
                  <span className="text-gray-800 ml-4 text-lg transition-colors group-hover:text-gray-900">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link href={content.cta.link} passHref>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl overflow-hidden transition-all duration-300 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <span className="relative z-10 font-bold text-white text-lg flex items-center">
                  {content.cta.text}
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

          {/* Right Column - Static Image (4:5 ratio) */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-lg">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/team_agency.webp"
                  alt="Équipe professionnelle d'Asteraki Studio en action"
                  fill
                  className="object-cover rounded-t-2xl"
                  priority
                />
              </div>
              
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-center mb-3">
                  <div className="w-1.5 h-6 bg-orange-500 rounded-r-lg mr-3"></div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Notre Équipe Créative
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Découvrez les professionnels passionnés qui donnent vie à vos projets vidéo avec expertise et créativité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}