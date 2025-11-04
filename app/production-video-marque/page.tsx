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
                    className="w-full h-full object-cover"
                  >
                    <source src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKCUwvV3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy" type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
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

        {/* Proposition de valeur */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT"
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
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Stratégie créative",
                  title: "Stratégie créative",
                  desc: "Nous commençons par comprendre votre marque, votre audience et vos objectifs pour créer une vidéo qui s'aligne sur votre vision et génère des résultats.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Production complète",
                  title: "Production complète",
                  desc: "Du storyboard et du scénario au tournage, à l'animation et à la conception sonore — nous gérons chaque détail avec précision.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
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
                <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis
                    </button>
                  </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK"
                    alt="Visualisation des données et du récit"
                    className="w-full"
                  />
                </div>
              </div>
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

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
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
                      Obtenir un devis
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
                      <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqC3fguyucagDQM1fypRjomx7Ct05zsVwrhkY" type="video/mp4" />
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