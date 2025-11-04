import type { Metadata } from "next";
import { Play, ArrowRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import PortfolioSection from "./portfolio-section";
import AppVideoFAQSection from "./app-video-faq";
import AppVideoFinalCTASection from "./app-video-cta";

export const generateMetadata = async () => {
  return {
    title: "Production de vidéos d'applications | Asteraki",
    description: "Boostez l'engagement des utilisateurs et la conversion avec des vidéos d'applications professionnelles. Notre équipe crée des vidéos attrayantes qui guident les utilisateurs et favorisent la réussite.",
  };
};

export default function AppVideoProductionPage() {
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
                  Services de production de vidéos d'applications
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Transformez les utilisateurs d'applications en utilisateurs experts.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos d'applications intuitives et engageantes qui guident les utilisateurs à travers l'intégration, la découverte de fonctionnalités et les flux de travail avancés. Des info-bulles simples aux tutoriels complets, nous aidons les utilisateurs à tirer le meilleur parti de votre application.
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
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRY6y0WhV8xN4tsZSVcawW35TIh0CgyLOYHAi?height=400&width=800&text=App+Video+Illustration"
                    alt="Vidéo d'intégration d'application avec interface mobile"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Expérience guidée. Adoption plus rapide. Meilleurs résultats.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos d'applications sont essentielles pour l'intégration des utilisateurs et la découverte de fonctionnalités. Elles guident les utilisateurs à travers votre application, démontrent les flux de travail clés et aident les utilisateurs à atteindre leurs objectifs plus rapidement, en réduisant la friction et en augmentant l'engagement.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un devis gratuit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Comment nous garantissons la livraison de vidéos d'applications<br/> qui transforment l'expérience utilisateur
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Intégration utilisateur",
                  title: "Intégration utilisateur",
                  desc: "Nous créons des vidéos d'intégration intuitives qui guident les nouveaux utilisateurs à travers les fonctionnalités et les flux de travail essentiels de votre application, en réduisant le temps jusqu'au premier succès et en augmentant la fidélisation.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ", 
                  alt: "Visites guidées des fonctionnalités",
                  title: "Visites guidées des fonctionnalités",
                  desc: "Nous mettons en valeur les nouvelles fonctionnalités et les fonctionnalités avancées grâce à des vidéos ciblées qui aident les utilisateurs à découvrir et maîtriser les fonctionnalités qu'ils pourraient autrement négliger.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Support et dépannage",
                  title: "Support et dépannage",
                  desc: "Nous développons des vidéos concises qui traitent des questions et problèmes courants des utilisateurs, en réduisant les tickets d'assistance et en améliorant la satisfaction des utilisateurs.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-left border border-black rounded-3xl p-12 bg-beige-200"
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
                  <p className="text-lg text-black mb-8 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Portfolio */}
        {/*<PortfolioSection />*/}

        {/* Section Communiquer avec clarté */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Aidez les utilisateurs à réussir avec votre application.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos d'applications fonctionnent parce qu'elles fournissent un guide visuel immédiat que les utilisateurs peuvent suivre en temps réel. 
                    Lorsque les utilisateurs peuvent voir exactement comment accomplir des tâches dans votre application, 
                    cela réduit la frustration et augmente la confiance dans l'utilisation de votre produit.
                  </p>
                </div>
                <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir un script gratuit
                    </button>
                  </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMRYpodX6YLO1BSGiKj2D5WhHcuQrys4MloaJ?height=400&width=500&text=App+Walkthrough"
                    alt="Visite guidée de l'application"
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
              <div className="flex items-center mb-5">
                <img
                  src="  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRY6y0WhV8xN4tsZSVcawW35TIh0CgyLOYHAi?height=32&width=32&text=APP"
                  alt="Logo Vidéo d'Application"
                  className="w-30 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "Les vidéos d'applications créées par Asteraki pour notre produit ont considérablement amélioré l'intégration des utilisateurs. 
                Nous avons constaté une augmentation de 38 % de la conversion payante à partir des essais gratuits et une réduction de 52 % des tickets d'assistance 
                liés à l'utilisation basique des fonctionnalités. La clarté et la qualité de production étaient exceptionnelles."
              </blockquote>
              <div className="text-black font-semibold mb-4">David Park, Responsable Produit</div>
            </div>
          </div>
        </section>

        {/* Pourquoi les vidéos d'applications fonctionnent */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne de gauche - Contenu principal */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  La puissance de la vidéo d'application
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi les vidéos d'applications sont essentielles pour la réussite des utilisateurs
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Sur le marché concurrentiel des applications d'aujourd'hui, les utilisateurs ne passeront pas de temps à comprendre comment utiliser votre produit. 
                  Ils attendent une valeur immédiate et des expériences intuitives. Les vidéos d'applications constituent le moyen le plus efficace 
                  pour guider les utilisateurs vers la réussite et les maintenir engagés.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos d'applications ne se contentent pas de montrer des fonctionnalités - elles démontrent des flux de travail réels, résolvent les problèmes des utilisateurs 
                  et aident les utilisateurs à atteindre leurs objectifs plus rapidement, en créant une expérience fluide qui les incite à revenir.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit le temps d'intégration</h3>
                      <p className="text-gray-400">Les utilisateurs qui regardent des vidéos d'intégration atteignent le premier succès 3 à 5 fois plus rapidement que ceux qui ne le font pas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Augmente l'adoption des fonctionnalités</h3>
                      <p className="text-gray-400">Les vidéos de fonctionnalités ciblées peuvent augmenter l'utilisation de fonctionnalités spécifiques de 40 à 60 %.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit les coûts d'assistance</h3>
                      <p className="text-gray-400">Des bibliothèques vidéo complètes peuvent réduire les tickets d'assistance de 30 à 50 % pour les problèmes courants.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Améliore les taux de conversion</h3>
                      <p className="text-gray-400">Les applications avec des vidéos d'intégration efficaces constatent des taux de conversion 25 à 40 % plus élevés du passage des offres gratuites aux offres payantes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Booste la fidélisation des utilisateurs</h3>
                      <p className="text-gray-400">Les utilisateurs qui interagissent avec des vidéos d'applications ont des taux de fidélisation à 30 jours 35 à 50 % plus élevés.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne créons pas seulement des démos d'applications génériques - nous concevons des expériences vidéo ciblées qui résolvent de vrais problèmes d'utilisateurs et génèrent des résultats commerciaux mesurables. Laissez-nous vous aider à créer le contenu qui transformera la façon dont les utilisateurs expérimentent votre application.
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
                {/* Vidéo principale - Boucle automatique, silencieuse */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRY6y0WhV8xN4tsZSVcawW35TIh0CgyLOYHAi  " type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Cartes de statistiques */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">38%</div>
                    <p className="text-gray-400 text-sm">Augmentation moyenne de la conversion payante à partir des essais gratuits pour les clients utilisant des vidéos d'intégration d'applications</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">52%</div>
                    <p className="text-gray-400 text-sm">Réduction des tickets d'assistance liés à l'utilisation basique des fonctionnalités</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">3x</div>
                    <p className="text-gray-400 text-sm">Temps jusqu'au premier succès plus rapide pour les utilisateurs qui regardent des vidéos d'intégration</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
                    <p className="text-gray-400 text-sm">Vidéos d'applications produites pour nos clients</p>
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
        <AppVideoFAQSection />     

        {/* Section CTA finale */}
        <AppVideoFinalCTASection />  
      </main>
      <Footer />
    </>
  );
}
