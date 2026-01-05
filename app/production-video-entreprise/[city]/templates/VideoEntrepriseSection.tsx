'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

export default function VideoEntrepriseSection({
  data
}: {
  data: {
    title: string;
    description: string;
    features: string[];
  };
}) {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Colonne gauche - texte */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              {data.title}
            </h2>
            <p className="text-lg text-black mb-8">
              {data.description}
            </p>

            <ul className="space-y-4 mb-8">
              {data.features.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" passHref>
              <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white font-semibold sm:text-lg">
                Démarrer votre projet vidéo
              </button>
            </Link>
          </div>

          {/* Colonne droite - exemple de projet */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="relative aspect-video mb-6">
              <iframe
                src="https://player.vimeo.com/video/1111696360"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title={`Exemple de vidéo d'entreprise à ${data.title}`}
              ></iframe>
            </div>

            <div>
              <h3 className="text-normal font-bold text-black mb-2">
                Exemple d'une vidéo d'entreprise
              </h3>
              <p className="text-black mb-4">
                Vidéo d'entreprise réalisée pour présenter la solution de Kuehne+Nagel, myFairLOG sous forme d'une vidéo motion design.
              </p>
              <div className="text-sm text-black">Kuehne+Nagel</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
