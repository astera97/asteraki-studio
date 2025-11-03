// src/app/production-audiovisuelle/[city]/templates/HeroSection.tsx

import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  heroContent: {
    heading: string;
    description: string;
    videoSrc: string;
  };
}

export default function HeroSection({ heroContent }: HeroSectionProps) {
  return (
    <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-black mb-3 tracking-widest">
              Production audiovisuelle à {heroContent.heading.split('à ')[1]?.split(' ')[0] || 'Ville'} {/* Dynamic badge */}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              {heroContent.heading} {/* Use the dynamic heading */}
            </h1>
            <p className="text-normal mb-5">
              {heroContent.description} {/* Use the dynamic description */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" passHref>
                <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                  Obtenir un devis
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center h-96">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={heroContent.videoSrc} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}