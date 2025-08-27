import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./PortfolioSection"
import BrandVideoFAQSection from "./brand-video-faq"
import FinalCTASection from "./brand-cta"

export const generateMetadata = async () => {
  return {
    title: "Production de vidéos de marque professionnelles | Asteraki",
    description:
      "Nous créons des vidéos de marque à haute conversion pour les entreprises. De la conception à la livraison, notre équipe créative vous aide à raconter votre histoire avec impact.",
  }
}

export default function BrandVideosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Section Héro */}
        <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="text-sm font-semibold text-black mb-3 tracking-widest">
                  Services de production de vidéos de marque
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Du récit qui construit des marques.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos de marque percutantes qui suscitent l'émotion, communiquent clairement et convertissent les spectateurs en clients. 
                  De la conception à la coupe finale, notre équipe créative s'associe à vous pour donner vie à l'histoire de votre marque avec une qualité cinématographique et une précision stratégique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Entrer en contact
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
                    className="w-full h-full object-cover"
                  >
                    <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywYQvV1RMBbdoyAp3vE5DRa9SFiUfT6lkr4qsN  " type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section des logos clients */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
              Fait confiance à des marques innovantes – 5/5 avis Google
            </p>

            {/* Carrousel de logos */}
            <div className="relative overflow-hidden mb-8 sm:mb-12 inverted">
              {/* Dégradé de fondu gauche */}
              <div
                className="absolute left-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(237, 237, 237, 0), transparent)",
                }}
              ></div>
              {/* Dégradé de fondu droit */}
              <div
                className="absolute right-0 top-0 w-16 sm:w-32 h-full z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, hsla(0, 0%, 100%, 0.00), rgba(237, 237, 237, 0), transparent)",
                }}
              ></div>

              <div className="flex animate-scroll-seamless invert-images">
                {[
                  { name: "airbnb", src: "/airbnb.png?height=40&width=120&text=AIRBNB" },
                  { name: "azus", src: "/azus.png?height=40&width=120&text=AZUS" },
                  { name: "dell", src: "/dell.png?height=40&width=120&text=DELL" },
                  { name: "lions", src: "/lions.png?height=40&width=120&text=LIONS" },
                  { name: "logitech", src: "/logitech.png?height=40&width=120&text=LOGITECH" },
                  { name: "salesforce", src: "/salesforce.png?height=40&width=120&text=SALESFORCE" },
                  { name: "sanofi", src: "/sanofi.png?height=40&width=120&text=SANOFI" },
                  { name: "toyota", src: "/toyota.png?height=40&width=120&text=TOYOTA" },
                  { name: "uber", src: "/uber.png?height=40&width=120&text=UBER" },
                  { name: "zapier", src: "/zapier.png?height=40&width=120&text=ZAPIER" },
                ]
                  .concat([
                    { name: "airbnb", src: "/airbnb.png?height=40&width=120&text=AIRBNB" },
                    { name: "azus", src: "/azus.png?height=40&width=120&text=AZUS" },
                    { name: "dell", src: "/dell.png?height=40&width=120&text=DELL" },
                    { name: "lions", src: "/lions.png?height=40&width=120&text=LIONS" },
                    { name: "logitech", src: "/logitech.png?height=40&width=120&text=LOGITECH" },
                    { name: "salesforce", src: "/salesforce.png?height=40&width=120&text=SALESFORCE" },
                    { name: "sanofi", src: "/sanofi.png?height=40&width=120&text=SANOFI" },
                    { name: "toyota", src: "/toyota.png?height=40&width=120&text=TOYOTA" },
                    { name: "uber", src: "/uber.png?height=40&width=120&text=UBER" },
                    { name: "zapier", src: "/zapier.png?height=40&width=120&text=ZAPIER" },
                  ])
                  .map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center min-w-[120px] sm:min-w-[160px] mx-2 sm:mx-4"
                    >
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={`Logo ${logo.name}`}
                        width={120}
                        height={40}
                        className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Widget Avis Google */}
            <div className="flex justify-center mt-6 sm:mt-8 px-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-4 flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity cursor-pointer max-w-sm sm:max-w-none"
              >
                <div className="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
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
                  <p className="text-black text-xs sm:text-sm">Basé sur plus de 50 avis</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Proposition de valeur */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT  "
                    alt="Illustration de récit créatif"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Du récit qui construit la confiance.
                </h2>
                <div className="space-y-6 text-black leading-relaxed">
                  <p>
                    Une vidéo de marque puissante n'informe pas seulement — elle connecte. Nous travaillons avec vous pour synthétiser votre mission, 
                    vos valeurs et votre vision en un récit qui résonne émotionnellement et incite à l'action.
                  </p>
                  <p>
                    Que vous lanciez un nouveau produit, repositionniez votre marque ou développiez votre présence numérique, 
                    nos vidéos sont conçues pour avoir un impact immédiat.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Production vidéo complète, conçue pour les marques
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Stratégie créative",
                  title: "Stratégie créative",
                  desc: "Nous commençons par comprendre votre marque, votre audience et vos objectifs pour créer une vidéo qui s'aligne sur votre vision et génère des résultats.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Production complète",
                  title: "Production complète",
                  desc: "Du storyboard et du scénario au tournage, à l'animation et à la conception sonore — nous gérons chaque détail avec précision.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Réutilisation du contenu",
                  title: "Maximisez votre investissement",
                  desc: "Une vidéo devient des dizaines d'actifs : clips sociaux, en-têtes d'e-mails, pages de destination, et plus encore — tous adaptés à vos canaux.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-left border border-[#979797ff] rounded-3xl p-12 bg-beige-200"
                >
                  <div className="w-16 h-16 mb-8">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain invert-0 sepia saturate-200 hue-rotate-12"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-6">{item.title}</h3>
                  <p className="text-black mb-8 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Portfolio */}
        <PortfolioSection />

        {/* Section Communiquer avec clarté */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Libérez la puissance du récit de marque.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Nous avons aidé des sociétés SaaS, des startups fintech, des marques de mode, des restaurants et des promoteurs immobiliers 
                    à clarifier leur message et à développer leur audience avec un contenu vidéo percutant. 
                    Que vous cherchiez à accroître la notoriété, à stimuler les conversions ou à vous lancer à l'international — 
                    la vidéo est votre outil le plus puissant.
                  </p>
                </div>
                <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                  Obtenir un devis
                </button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK  "
                    alt="Visualisation des données et du récit"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Témoignage */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center mb-1">
                <img
                  src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywRg40T1b8OzUNk9MpYQHDLngqS5jCPli03eFw  "
                  alt="Témoignage client"
                  className="w-24 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "Travailler avec cette équipe a été exceptionnel. Ils ont immédiatement compris notre marque et créé une vidéo 
                qui capturait parfaitement notre essence. L'inspiration créative et l'attention aux détails ont élevé notre histoire 
                et nous ont aidés à nous connecter avec les clients d'une toute nouvelle manière."
              </blockquote>
              <div className="text-black font-semibold mb-4">Sarah Chen, Directrice Créative</div>
            </div>
          </div>
        </section>

        {/* Pourquoi la vidéo de marque ? – Section améliorée */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne de gauche - Contenu principal */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  La puissance de la vidéo de marque
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi votre marque a besoin d'une vidéo percutante
                </h2>

                <p className="text-white mb-8 leading-relaxed">
                  Dans le monde numérique d'aujourd'hui, l'attention est fugace. 
                  Si votre message n'atteint pas sa cible en quelques secondes, il est déjà perdu. 
                  Une <span className="text-orange-400 font-bold">vidéo de marque professionnelle</span> perce le bruit 
                  et communique votre valeur — rapidement, clairement et mémorablement.
                </p>

                <p className="text-white mb-10 leading-relaxed">
                  Une vidéo de marque est plus qu'un logo ou un slogan. C'est un outil de récit stratégique qui construit la confiance, 
                  explique la complexité et inspire l'action — le tout en moins de 90 secondes. Que vous soyez une start-up ou une marque établie, 
                  une excellente vidéo peut faire la différence entre être ignoré et être mémorisé.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Les gens retiennent mieux la vidéo que le texte</h3>
                      <p className="text-gray-400">Les spectateurs retiennent <span className="text-orange-400 font-bold">95 % d'un message</span> lorsqu'ils le regardent dans une vidéo, contre seulement 10 % lorsqu'ils lisent du texte.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Construisez la confiance et humanisez votre marque</h3>
                      <p className="text-gray-400">Une vidéo donne un visage à votre marque — même les vidéos animées transmettent l'émotion, le ton et l'authenticité qui aident les clients à se sentir connectés.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Boostez les taux de conversion à chaque étape du parcours</h3>
                      <p className="text-gray-400">Les sites web avec une vidéo de marque voient leurs taux de conversion augmenter jusqu'à <span className="text-orange-400 font-bold">80 %</span>. Les pages de destination avec vidéo convertissent 86 % mieux.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Démarquez-vous dans un marché saturé</h3>
                      <p className="text-gray-400">Tout le monde a un site web. Tout le monde fait de la publicité. Mais peu investissent dans un récit vraiment percutant qui les positionne comme leaders.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Contenu réutilisable pour chaque canal</h3>
                      <p className="text-gray-400">Une vidéo devient des dizaines d'actifs : reels Instagram, clips TikTok, publications LinkedIn, présentations commerciales, et plus encore.</p>
                    </div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Nous ne créons pas seulement des vidéos — nous concevons des expériences de marque qui convertissent les spectateurs en clients. 
                  Si vous êtes prêt à raconter votre histoire d'une manière qui résonne et génère des résultats, créons ensemble votre vidéo de marque.
                </blockquote>

                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Entrer en contact
                    </button>
                  </Link>
                </div>
              </div>

              {/* Colonne de droite - Éléments visuels */}
              <div className="relative">
                {/* Vidéo principale */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqC3fguyucagDQM1fypRjomx7Ct05zsVwrhkY  " type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Cartes de statistiques */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                    <p className="text-gray-400 text-sm">Rétention du message avec vidéo</p>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">80%</div>
                    <p className="text-gray-400 text-sm">Taux de conversion plus élevé avec la vidéo d'accueil</p>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">86%</div>
                    <p className="text-gray-400 text-sm">Augmentation de conversion sur les pages de destination avec vidéo</p>
                  </div>
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">580+</div>
                    <p className="text-gray-400 text-sm">Vidéos produites pour les clients</p>
                  </div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <BrandVideoFAQSection />

        {/* Section CTA finale */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}