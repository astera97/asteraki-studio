import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import ClientsSection from "@/components/clients-section"

export default function WhyAsterakiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* Left Column: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Nous optimisons votre investissement créatif pour obtenir des résultats maximum dans les limites de votre budget.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Nous avons simplifié le processus créatif afin que vous puissiez transformer une idée puissante en plusieurs supports, maximisant ainsi votre portée sans complexité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="https://calendly.com/elsir_hatim/discovery-call  " 
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
                  Réserver un appel
                </button>
              </Link>
            </div>
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <p className="text-gray-700 mb-4 italic text-center lg:text-left">
                "Asteraki a été un partenaire d'agence créative incroyable, et nous ne pourrions pas être plus satisfaits de leur travail. De la conception graphique à la production vidéo et à la rédaction publicitaire, ils livrent constamment des résultats de haute qualité, rapidement, de manière fiable et à un prix juste."
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <Image
                  src="/kayli.webp"
                  alt="Jenna Blau"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="text-center lg:text-left">
                  <p className="font-semibold text-gray-900">Jenna Blau</p>
                  <p className="text-gray-600">Responsable mondiale de la croissance des éditeurs, TikTok</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Images */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative">
                <Image
                  src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywq1LZrUfyucagDQM1fypRjomx7Ct05zsVwrhk  "
                  alt="Supports créatifs"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <p className="font-semibold text-gray-900">150+ supports créatifs</p>
                  <p className="text-sm text-gray-600">produits mensuellement</p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7xIgDBwavFUfw5SNg3PlOHYAIuB0yjRm1hpK  "
                  alt="Processus de production vidéo"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  3x plus rapide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs. Asteraki Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
           La production traditionnelle a ses limites.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Alors que d'autres restreignent votre production créative, nous la libérons.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Column 1 */}
            <div className="p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 text-center">Équipe dédiée d'experts de la production</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asteraki</span>
                  <span className="text-green-600 font-medium">Toujours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditionnel</span>
                  <span className="text-red-600 font-medium">Rare</span>
                </div>
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 text-center">Prise de vue réelle, animation et social</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asteraki</span>
                  <span className="text-green-600 font-medium">Toujours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditionnel</span>
                  <span className="text-red-600 font-medium">Rare</span>
                </div>
              </div>
            </div>
            
            {/* Column 3 */}
            <div className="p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 text-center">Accessibilité et rapport qualité-prix</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asteraki</span>
                  <span className="text-green-600 font-medium">Toujours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditionnel</span>
                  <span className="text-red-600 font-medium">Rare</span>
                </div>
              </div>
            </div>
            
            {/* Column 4 */}
            <div className="p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 text-center">Prévisibilité des prix et transparence</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Asteraki</span>
                  <span className="text-green-600 font-medium">Toujours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Traditionnel</span>
                  <span className="text-red-600 font-medium">Rare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            <strong>Nos clients économisent généralement de 40 à 60 % sur les coûts de production</strong> tout en bénéficiant d'une meilleure qualité et de délais de livraison plus rapides.
          </p>
        </div>
      </section>

      {/* Key Elements to Scale Creative Production */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Nos 4 piliers essentiels pour amplifier la production créative
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Nous optimisons la production créative pour offrir une valeur de contenu maximale pour chaque euro investi dans le marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="space-y-8">
            {/* Element 1 */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 text-orange-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Distiller des insights clients uniques</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Nous partons de votre brief pour en faire une stratégie créative qui comprend vraiment vos clients et aboutit à un concept unique.
              </p>
            </div>
            
            {/* Element 2 */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-pink-100 text-pink-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Trouver l'adéquation audience-création</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Nous développons un style créatif qui résonne avec votre audience, en tenant compte de leur étape dans le parcours et des canaux de diffusion.
              </p>
            </div>
            
            {/* Element 3 */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Diversifier la création</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Nous créons plusieurs ouvertures en utilisant des éléments modulables, vous permettant de tester 10 fois plus de variations créatives sans multiplier les coûts.
              </p>
            </div>
            
            {/* Element 4 */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Modulariser via un système de design</h3>
              <p className="text-base sm:text-lg text-gray-600">
                Nous construisons des systèmes de design sur mesure qui créent une bibliothèque de supports de marque de haute qualité et accélèrent la production dans le temps.
              </p>
            </div>
          </div>
          
          {/* Right Column: Images */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywLCrpsUEFAvwOdGUzS8rfWxIcVho5ekmLqYls  "
                alt="Processus créatif"
                width={500}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ClientsSection />

      {/* Download Full Deck */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Découvrez en détail notre processus créatif 10x
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 text-center">
            Apprenez comment nous maximisons la performance vidéo pour les grandes marques et amplifions la production créative sans compromettre la qualité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-semibold w-full sm:w-auto"
            >
              Télécharger le deck complet
            </button>
            
            <Link 
              href="https://calendly.com/elsir_hatim/discovery-call  " 
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-orange-50 transition-colors font-semibold w-full sm:w-auto">
                Planifier un appel
              </button>
            </Link>
          </div>
        </div>
      </section>

      
          
      {/* Footer */}
      <Footer />
    </div>
  )
}