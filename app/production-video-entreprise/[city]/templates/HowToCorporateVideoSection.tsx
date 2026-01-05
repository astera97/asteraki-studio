"use client";

import Link from 'next/link';
import Image from 'next/image';

interface Props {
  city: string;
  data: {
    heading: string;
    description: string;
    images: { src: string; alt: string }[];
  };
}

export default function HowToCorporateVideoSection({ city, data }: Props) {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Colonne gauche */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Guide Vidéo d’entreprise
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {data.heading}
            </h2>

            <p className="text-gray-700 mb-8 leading-relaxed">
              {data.description}
            </p>

            <div className="space-y-7">
              {[
                { title: 'Mettez en avant les résultats de votre entreprise', desc: 'Montrez clairement ce que votre vidéo d’entreprise apporte : impact, valeur et bénéfices pour vos clients ou collaborateurs.' },
                { title: 'Utilisez un langage clair et humain', desc: 'Évitez le jargon. Communiquez de manière simple et directe pour que votre message soit compris par tous.' },
                { title: 'Montrez votre entreprise en action', desc: 'Présentez vos locaux, vos produits, vos équipes ou vos services pour renforcer la crédibilité et la confiance.' },
                { title: 'Optimisez pour le visionnage silencieux', desc: 'La majorité des vidéos d’entreprise sont regardées sans son. Ajoutez sous-titres et visuels explicites.' },
                { title: 'Prévoyez plusieurs formats', desc: 'Une vidéo principale peut être déclinée en formats carrés, verticaux et horizontaux pour vos réseaux et campagnes marketing.' },
                { title: 'Utilisez des voix réelles', desc: 'Des voix humaines apportent authenticité et proximité, contrairement aux voix synthétiques.' }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 text-gray-700 italic border-l-4 border-blue-400 pl-5 py-1">
              Une vidéo d’entreprise réussie ne se limite pas à l’image : elle doit être claire, authentique et orientée résultats. Montrez la valeur rapidement et captez l’attention.
            </blockquote>

            <div className="mt-10">
              <Link href="/contact" passHref>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full text-base font-medium transition duration-300 shadow-sm hover:shadow-md">
                  Planifiez votre vidéo d’entreprise
                </button>
              </Link>
            </div>
          </div>

          {/* Colonne droite */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-blue-400 mb-6">
              <div className="aspect-video w-full">
                <div className="relative pt-[56.25%]">
                  <video
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtEDDuqI134vBTOxF8dARqINU9EX5yck2foZj"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full"
                    title={`Exemple de vidéo d’entreprise à ${city}`}
                  ></video>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {data.images.map((img, idx) => (
                <div key={idx} className="aspect-square rounded-xl border-2 border-blue-400 overflow-hidden">
                  {img.src && (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
