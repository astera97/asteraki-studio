// src/app/templates/VideoAdvantagesSection.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAvantagesContent } from '../data/getAvantagesContent';
import { AvantagesContent } from '../data/getAvantagesContent';
import Link from "next/link";


export default function VideoAdvantagesSection() {
  const pathname = usePathname();
  const [content, setContent] = useState<AvantagesContent | null>(null);

  useEffect(() => {
    if (pathname) {
      // Get unique content based on the page path
      const pageContent = getAvantagesContent(pathname);
      setContent(pageContent);
    }
  }, [pathname]);

  // Fallback content while loading or if no pathname is available
  if (!content) {
    return (
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="p-8 inline-block max-w-4xl w-full bg-gray-900 animate-pulse rounded-2xl">
              <div className="h-8 bg-gray-700 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 animate-pulse">
                <div className="w-14 h-14 bg-gray-800 rounded-full mb-6 mx-auto"></div>
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title Section */}
        <div className="text-center mb-16">
          <div className="p-8 inline-block max-w-4xl w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {content.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Dans un monde où 85% des consommateurs consultent des vidéos avant d'acheter, votre présence vidéo n'est plus optionnelle. 
              Découvrez comment une vidéo professionnelle transforme votre communication et génère des résultats tangibles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
          {/* First Advantage */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 hover:border-orange-400 transition-colors">
            <div className="w-14 h-14 bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">
              {content.cardOne.title}
            </h3>
            
            <p className="text-gray-300">
              {content.cardOne.description}
            </p>
          </div>
          
          {/* Second Advantage */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 hover:border-orange-400 transition-colors">
            <div className="w-14 h-14 bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">
              {content.cardTwo.title}
            </h3>
            
            <p className="text-gray-300">
              {content.cardTwo.description}
            </p>
          </div>
          
          {/* Third Advantage */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-neutral-900 hover:border-orange-400 transition-colors">
            <div className="w-14 h-14 bg-orange-400/20 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">
              {content.cardThree.title}
            </h3>
            
            <p className="text-gray-300">
              {content.cardThree.description}
            </p>
          </div>
        </div>
        
        {/* Single Button instead of CTA Section */}
        <div className="text-center pt-8 border-t border-neutral-900">
          <Link href="/quiz" passHref>
              <button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-normal text-white sm:text-lg mb-4 sm:mb-6">
            Estimer votre projet en 1-min
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}