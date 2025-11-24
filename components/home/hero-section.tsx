"use client";

import { useState } from "react";
import React from 'react';
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

        {/* Right side - Single Video Preview */}
        <div className="w-full lg:flex-1 flex justify-center">
          <div className="relative rounded-lg overflow-hidden max-w-md mx-auto lg:max-w-none">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-gray-800 flex items-center justify-center h-96">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel — Updated with real clients & clean URLs */}

      <div className="relative overflow-hidden mb-8 sm:mb-12">
        <p className="text-center text-black mt-6 sm:mt-8 text-sm sm:text-base px-4">
        Plus de 250 entreprises accompagnées en France
      </p>
        {/* Left fade gradient */}
        <div
          className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(237, 237, 237, 0), transparent)",
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

        <div className="flex animate-scroll-seamless">
          {[
            { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
            { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
            { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
            { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
            { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
            { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
            { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
            { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
            { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
          ]
            .concat([
              { name: "sage", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV4bnvwY2lTHSXo8DmjG0ZWyuahPUIeOpds65E" },
              { name: "notion", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRjuai5V8xN4tsZSVcawW35TIh0CgyLOYHAiX" },
              { name: "dell", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyVJ83Vf7jHwWMkUO0E4Y25ImLfS3X8vyRBib" },
              { name: "deloitte", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVufQdOSMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2" },
              { name: "malt", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVN72SnQD45FgMDujBmTbOY28pnK0y4lkrZfWx" },
              { name: "aircall", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlYofGSq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
              { name: "sanofi", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUlVYsEdq2CrN5MjsDJkoHGX6AzxuROT8Sgfw" },
              { name: "uber", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVci8fmc9r3QfKI0dziE8sFt4BVwMqT2bChkLN" },
              { name: "zapier", src: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNLoseK45FgMDujBmTbOY28pnK0y4lkrZfWxe" },
            ])
            .map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] mx-2 sm:mx-4"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                />
              </div>
            ))}
        </div>
      </div>
    
      
    </main>
  );
}