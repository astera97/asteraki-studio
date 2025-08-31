"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <main className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-15">
        {/* Left side - Title, Description and CTA */}
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-5 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Des vidéos sur mesure pour augmenter votre visibilité et accélérer votre croissance
          </h1>
          <p className="text-black text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Chez Asteraki, nous accompagnons les entreprises de toutes tailles avec des vidéos claires, 
            engageantes et accessibles. Du film corporate au motion design, chaque projet est conçu pour 
            renforcer votre image, booster vos ventes et maximiser votre retour sur investissement.
          </p>
          <div className="pt-4">
            <Link href="/quiz" passHref>
              <Button className="btn-luxury text-white hover:text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg border-0">
                Estimer votre projet en 1-min
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Single Video Preview (No Blue Border) */}
<div className="w-full lg:flex-1 flex justify-center">
  <div className="relative rounded-lg overflow-hidden max-w-md mx-auto lg:max-w-none">
    <div className="rounded-2xl overflow-hidden flex items-center justify-center h-96">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                  >
                    <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywO1YZG6DldM8Th1Y46jXqf7KG5xJvzIoicVbS    " type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos.
                  </video>
                </div>
  </div>
</div>
      </div>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden mb-8 sm:mb-12 inverted">
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(238, 238, 238, 0), hsla(0, 0%, 93%, 0.00), transparent)",
          }}
        ></div>
        {/* Right fade gradient */}
        <div
          className="absolute right-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsla(0, 0%, 100%, 0.00), rgba(237, 237, 237, 0), transparent)",
          }}
        ></div>

        <div className="flex animate-scroll-seamless invert-images">
          {[{
              name: "airbnb",
              src: "/airbnb.png?height=40&width=120&text=AIRBNB"
            },
            {
              name: "azus",
              src: "/azus.png?height=40&width=120&text=AZUS."
            },
            {
              name: "dell",
              src: "/dell.png?height=40&width=120&text=DELL"
            },
            {
              name: "lions",
              src: "/lions.png?height=40&width=120&text=LIONS"
            },
            {
              name: "logitech",
              src: "/logitech.png?height=40&width=120&text=LOGITECH"
            },
            {
              name: "salesforce",
              src: "/salesforce.png?height=40&width=120&text=SALESFORCE"
            },
            {
              name: "sanofi",
              src: "/sanofi.png?height=40&width=120&text=SANOFI"
            },
            {
              name: "toyota",
              src: "/toyota.png?height=40&width=120&text=TOYOTA"
            },
            {
              name: "uber",
              src: "/uber.png?height=40&width=120&text=UBER"
            },
            {
              name: "zapier",
              src: "/zapier.png?height=40&width=120&text=ZAPIER"
            }
          ]
            .concat([{
                name: "airbnb",
                src: "/airbnb.png?height=40&width=120&text=AIRBNB"
              },
              {
                name: "azus",
                src: "/azus.png?height=40&width=120&text=AZUS."
              },
              {
                name: "dell",
                src: "/dell.png?height=40&width=120&text=DELL"
              },
              {
                name: "lions",
                src: "/lions.png?height=40&width=120&text=LIONS"
              },
              {
                name: "logitech",
                src: "/logitech.png?height=40&width=120&text=LOGITECH"
              },
              {
                name: "salesforce",
                src: "/salesforce.png?height=40&width=120&text=SALESFORCE"
              },
              {
                name: "sanofi",
                src: "/sanofi.png?height=40&width=120&text=SANOFI"
              },
              {
                name: "toyota",
                src: "/toyota.png?height=40&width=120&text=TOYOTA"
              },
              {
                name: "uber",
                src: "/uber.png?height=40&width=120&text=UBER"
              },
              {
                name: "zapier",
                src: "/zapier.png?height=40&width=120&text=ZAPIER"
              }
            ])
            .map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] mx-2 sm:mx-4"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                />
              </div>
            ))}
        </div>
      </div>

      <p className="text-center text-black mt-6 sm:mt-8 text-sm sm:text-base px-4">
        Plus de 250 marques accompagnées en France <br/>5/5 avis Google
      </p>

      {/* Google Reviews Widget */}
      <div className="flex justify-center mt-6 sm:mt-8 px-4">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-4 flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity cursor-pointer max-w-sm sm:max-w-none"
        >
          {/* Google Logo */}
          <div className="flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          {/* Content */}
          <div className="border-l border-gray-600 pl-3 sm:pl-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-black font-bold text-base sm:text-lg">Google</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-black font-bold text-lg sm:text-xl">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
          </div>
        </a>
      </div>
    </main>
  );
}