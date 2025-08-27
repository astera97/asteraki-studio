import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <Header />

      {/* Section Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Nous accélérons la croissance des marques grâce à une création qui produit des résultats mesurables.
            </h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/team_agency.webp"
              alt="Équipe Asteraki"
              width={500}
              height={300}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Déclaration de mission */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
          Nous comprenons que les équipes marketing modernes doivent relever le défi de maintenir la qualité tout en développant leurs efforts. Asteraki comble ce fossé en devenant votre partenaire créatif dédié, transformant chaque campagne en un moteur productif qui fournit à la fois un contenu vidéo percutant et une collection croissante d'éléments graphiques, de motion design et visuels sur mesure.
        </p>
      </section>

      {/* Notre histoire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-900 text-center">
          Notre histoire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/about_us.webp"
              alt="Collaboration d'équipe"
              width={500}
              height={350}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Nous réunissons des créatifs experts, des stratèges et des producteurs expérimentés pour développer des systèmes de contenu haute performance pour les clients SaaS, entreprises et technologiques. Nous avons bâti notre réputation sur une production vidéo exceptionnelle, mais nos compétences vont bien au-delà de la vidéo.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Chaque avis depuis 2015 est de cinq étoiles, reflétant notre engagement inébranlable envers la qualité. Travailler avec Asteraki, c'est vivre l'excellence créative à son meilleur.
            </p>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-900 text-center">
          Notre processus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Nous avons conçu notre production créative pour être complète et stratégique de A à Z. Inspirés par des méthodes de narration éprouvées à travers des centaines de campagnes, nous développons chaque concept avec soin grâce à des storyboards détaillés. Nous créons l'infrastructure créative dont votre marque a besoin pour avancer rapidement.
            </p>
            <ul className="space-y-3 text-gray-700 text-left">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
                <span>Pour l'animation, nous collaborons avec certains des illustrateurs les plus reconnus au monde.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
                <span>Pour le tournage en prise de vue réelle, nos vidéos sont filmées avec les mêmes caméras utilisées pour les productions Netflix — nous sommes obsédés par la clarté et la performance.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0">
                  <path d="M12 2L2 20h20L12 2Z" />
                </svg>
                <span>Pour le design, nous construisons des systèmes permettant à votre équipe marketing de produire 10 fois plus d'éléments utilisables à chaque étape de l'entonnoir.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/creative_process.webp"
              alt="Processus créatif"
              width={500}
              height={350}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Nos résultats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-900 text-center">
          Nos résultats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 flex flex-col items-center">
            <Image
              src="/social_ads_vt.webp"
              alt="Vidéo résultat 1"
              width={500}
              height={280}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Asteraki travaille avec des leaders de leur secteur. Notre communauté de plus de 920 clients inclut TikTok, Square, Spotify, Vimeo, Amazon, Uber, Samsung, Koala, Airwallex, Temple & Webster, et bien d'autres.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Avec plus de 1,5 milliard de vues, il est très probable que vous ayez déjà vu nos vidéos si vous vivez aux États-Unis, au Canada, au Royaume-Uni ou en Australie.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Des vidéos explicatives et publicités courtes aux graphismes animés et spots TV, nous vous aidons à construire une infrastructure créative — donc si vous êtes une entreprise qui souhaite réussir grâce à la création, créons ensemble quelque chose de mémorable.
            </p>
          </div>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Prêt à développer votre entreprise ?
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">
          Créons un contenu qui évolue avec votre marque.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="https://calendly.com/elsir_hatim/discovery-call" 
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border-2 border-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-[200px]">
              Réserver un appel
            </button>
          </Link>
        </div>
      </section>

      {/* Pied de page */}
      <Footer />
    </div>
  )
}