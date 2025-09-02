"use client" // ←←← Critique pour utiliser useState/useEffect dans le routeur App de Next.js

import { useState, useEffect } from "react"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CityTime {
  city: string
  code: string
  timezone: string
  time: string
  address: string[]
}

export default function Footer() {
  const [cityTimes, setCityTimes] = useState<CityTime[]>([
    {
  city: "Paris",
  code: "PAR",
  timezone: "Europe/Paris",
  time: "",
  address: ["15 Rue de la Paix", "75001 Paris, France"],
},
  ])

  const updateTimes = () => {
    setCityTimes((prevCities) =>
      prevCities.map((city) => ({
        ...city,
        time: new Intl.DateTimeFormat("en-US", {
          timeZone: city.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      })),
    )
  }

  useEffect(() => {
    updateTimes()
    const interval = setInterval(updateTimes, 60000) // Mettre à jour chaque minute
    return () => clearInterval(interval) // Nettoyage au démontage
  }, [])

  return (
    <footer className="bg-black text-white">
      {/* Section supérieure - Contact & Fuseaux horaires */}
      <div className="border-b border-gray-700 py-8 sm:py-12">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-400 text-sm font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-white text-sm sm:text-base">info@asterakistudio.com</p>
              </div>
            </div>

            {/* Fuseaux horaires des villes */}
            {cityTimes.map((city, index) => (
              <div key={index} className="text-center sm:text-left">
                <h3 className="text-orange text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{city.code}</h3>
                <p className="text-orange text-lg sm:text-xl lg:text-2xl mb-4">{city.time || "Chargement..."}</p>
                <div className="text-white text-xs sm:text-sm space-y-1">
                  {city.address.map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                  {/* Numéro de téléphone */}
                  <p className="font-medium">
                    <a 
                      href="tel:+33758116026" 
                      className="hover:text-gray-300 transition-colors"
                    >
                      +33 (7) 58 11 60 26
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pied de page principal */}
      <div className="py-12 sm:py-16">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <Link href="/" className="inline-block mb-4 sm:mb-6">
                <Image
                  src="/asteraki_logo.webp?height=80&width=240&text=ASTERAKI+LOGO"
                  alt="Logo Asteraki"
                  width={240}
                  height={80}
                  className="h-16 sm:h-20 w-auto"
                />
              </Link>
              <p className="text-white text-sm leading-relaxed">
                Production créative et vidéo qui transforme votre marque en leader de marché.
              </p>
            </div>

            {/* Vidéos */}
            <div className="text-center sm:text-left">
              <h4 className="text-gray-400 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">VIDÉOS</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="/production-video-marque" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Vidéo de marque
                  </a>
                </li>
                <li>
                  <a href="/production-video-entreprise" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Vidéos d'entreprise
                  </a>
                </li>
                <li>
                  <a href="/production-video-evenementielle" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Vidéos évènementielles
                  </a>
                </li>
              </ul>
            </div>

            {/* Régions desservies */}
            <div className="text-center sm:text-left">
              <h4 className="text-gray-400 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">
                Expertise
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="production-video-b2b" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    B2B
                  </a>
                </li>
                <li>
                  <a href="production-video-b2c" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    B2C
                  </a>
                </li>
                <li>
                  <a href="production-video-tech" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Technologie & SaaS
                  </a>
                </li>
              </ul>
            </div>

            {/* Entreprise */}
            <div className="text-center sm:text-left">
              <h4 className="text-gray-400 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">L'agence</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="/a-propos" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="/journal" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Ressources & Légal */}
            <div className="text-center sm:text-left">
              <h4 className="text-gray-400 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">LÉGAL</h4>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li>
                  <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Conditions
                  </a>
                </li>
                <li>
                  <a href="politique-de-confidentialite" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Confidentialité
                  </a>
                </li>
              </ul>

              <h4 className="text-gray-400 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">RESSOURCES</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href="/journal" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="newsletter-creative-insights" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
                    Newsletter motion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section inférieure */}
      <div className="border-t border-gray-700 py-6 sm:py-8">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              Tous droits réservés © 2025 Asteraki
            </p>

            {/* Icônes des réseaux sociaux */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/asteraki_studio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/company/asteraki-agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}