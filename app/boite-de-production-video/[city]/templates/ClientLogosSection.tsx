// src/app/boite-de-production-video/[city]/templates/ClientLogosSection.tsx

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ClientLogosSection() {
  // You can add interactivity here if needed
  return (
    <section className="pt-0 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
          Nous avons accompagné plus de 250 entreprises en France
        </p>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden mb-8 sm:mb-12">
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
      </div>
    </section>
  );
}