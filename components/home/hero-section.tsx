// src/app/production-audiovisuelle/[city]/templates/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  // Static content aligned with your brand voice
  const heading = "Agence audiovisuelle en France pour entreprises ambitieuses";
  const description =
    "Créez des vidéos percutantes avec notre agence audiovisuelle spécialisée. Livraison rapide, tournage partout en France, et accompagnement stratégique de A à Z.";

  // Video from your original section
  const videoSrc = "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy";

  return (
    <main className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">

      {/* MOBILE LAYOUT */}
      <div className="block lg:hidden">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-black mb-4 sm:mb-6 mx-auto max-w-3xl">
            {heading}
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Mobile Video */}
        <div className="w-full max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 sm:mb-6">
            <Link href="/contact" passHref>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg transition-colors duration-200 flex items-center justify-center min-h-[42px] w-full sm:w-auto">
                Obtenir un devis
              </button>
            </Link>

            <Link href="/realisations" passHref>
              <div className="flex items-center text-black hover:text-orange-500 transition-colors min-h-[42px]">
                <span className="text-base sm:text-lg">Voir nos réalisations</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Reviews */}
          <div className="flex items-center justify-center mt-3 sm:mt-4 text-sm">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-black">5.0/5 basé sur 100+ avis</span>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex lg:flex-row gap-8 sm:gap-12 items-center lg:items-start mt-4">
        {/* Left */}
        <div className="w-1/2 text-left">
          <h1 className="text-5xl font-bold leading-tight text-black mb-6 max-w-3xl">
            {heading}
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <Link href="/contact" passHref>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center min-h-[42px]">
                Obtenir un devis
              </button>
            </Link>
            <Link href="/realisations" passHref>
              <div className="flex items-center text-black hover:text-orange-500 transition-colors min-h-[42px] ml-4">
                <span className="text-lg">Voir nos réalisations</span>
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-start mt-3 sm:mt-4 text-sm">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-black">5.0/5 basé sur 50+ avis</span>
          </div>
        </div>

        {/* Right — Video */}
        <div className="w-1/2 mt-0">
          <div className="relative w-full h-full aspect-video rounded-xl overflow-hidden bg-black">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src={videoSrc} type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </div>
      </div>

      {/* Client Logos — Static block (not carousel) */}
      <div className="mt-16 sm:mt-12 lg:mt-8 py-12">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-black font-semibold">Plus de 250 entreprises accompagnées.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <Image
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsQn5WOa93bxoLyhcW8aNnVRf0tO2vu4mHdZ"
            alt="Aircall logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztViizPmUGcOpNoz2fj0GxlAQw71ZgD4a3WUYEF"
            alt="Engie logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVtpzj77dTBWldAyg2P0M5Chku4INecjLo9UbH"
            alt="société générale logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsAyQkxa93bxoLyhcW8aNnVRf0tO2vu4mHdZ"
            alt="Zapier logo"
            width={100}
            height={40}
            className="h-8 w-auto"
          />
          <Image
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVkLHDKroAhbiZtmIuAMQFryqe8O5PRW9JcB2o"
            alt="Deloitte logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </div>
      
      {/* Sortlist — Badge */}
      {/* Centered Sortlist Badge */}
  <div className="flex justify-center">
    <a
      href="https://www.sortlist.com/agency/asteraki-studio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsLZlIpa93bxoLyhcW8aNnVRf0tO2vu4mHdZ"
        alt="Agence recommandée - Sortlist"
        width={400}
        height={120}
        className="h-auto w-auto max-w-[200px]"
      />
    </a>
  </div>
    </main>
  );
}