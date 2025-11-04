import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import SaaSVideoFAQSection from "./saas-video-faq"
import FinalCTASection from "./saas-video-cta"

export const generateMetadata = async () => {
  return {
    title: "Vidéos pour logiciels SaaS | Asteraki",
    description: "Développez votre logiciel (SaaS) avec des vidéos professionnelles. Nous créons des démonstrations de produits captivantes, des histoires de clients et du contenu qui transforme les utilisateurs gratuits en clients payants.",
  }
}

export default function SaaSVideoProductionPage() {
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
                  Vidéos pour logiciels SaaS
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Transformez vos utilisateurs gratuits en clients payants avec des vidéos stratégiques.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos de qualité pour les logiciels SaaS qui aident les gens à adopter votre produit, réduisent le nombre de personnes qui partent et convertissent les utilisateurs gratuits en clients payants. Nous gérons tout le processus, de l'idée initiale jusqu'à la vidéo finale.
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
                    Votre navigateur ne supporte pas les vidéos.
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
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywmp7JyRX9KywSWq0Ob7e64m32pHZ8kCQuLAfB"
                    alt="Exemple de vidéo SaaS avec Kandji"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Essai gratuit. Valeur claire. Client payant.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos pour logiciels SaaS sont le meilleur moyen de montrer la valeur de votre produit au bon moment. Elles combinent des démonstrations du produit avec un message bien pensé pour transformer les utilisateurs gratuits en clients payants, réduire les départs et augmenter la valeur de chaque client.
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
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Comment nous créons des vidéos SaaS<br/> qui rapportent de l'argent
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Histoires centrées sur la valeur",
                  title: "Histoires centrées sur la valeur",
                  desc: "Nous racontons des histoires qui montrent clairement la valeur de votre produit pour différents types d'utilisateurs, en expliquant comment il résout leurs problèmes et en montrant le bénéfice concret.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q", 
                  alt: "Approche centrée sur le produit",
                  title: "Approche centrée sur le produit",
                  desc: "Nos vidéos s'intègrent parfaitement dans votre stratégie de croissance. Elles créent du contenu qui aide les utilisateurs à découvrir, utiliser et aimer votre produit à chaque étape.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Optimisé pour la conversion",
                  title: "Optimisé pour la conversion",
                  desc: "Nous utilisons des données concrètes pour créer des vidéos qui poussent les gens à agir : terminer leur inscription, utiliser des fonctionnalités importantes ou passer à une version payante.",
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
        <PortfolioSection />

        {/* Section Communiquer avec clarté */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Transformez les utilisateurs d'essai en clients fidèles.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos SaaS marchent parce qu'elles montrent aux utilisateurs comment votre produit résout *leurs* problèmes spécifiques. 
                    Cela crée le « moment magique » qui les pousse à devenir des clients payants, bien mieux que de simples textes ou visites guidées.
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
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT"
                    alt="Démo SaaS"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Pourquoi les vidéos SaaS fonctionnent */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne de gauche - Contenu principal */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  La puissance de la vidéo pour les SaaS
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Pourquoi les vidéos SaaS améliorent la conversion et la fidélité
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Aujourd'hui, les utilisateurs gratuits ont beaucoup de choix. 
                  Des vidéos bien placées montrent clairement la valeur de votre produit au bon moment, ce qui augmente les conversions, réduit les départs et augmente la valeur de chaque client.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos SaaS ne se contentent pas de montrer les fonctionnalités - elles expliquent comment votre produit résout les vrais problèmes de vos utilisateurs à chaque étape de leur parcours, créant ces « moments magiques » qui transforment les utilisateurs gratuits en clients fidèles.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Plus de conversions gratuites vers payantes</h3>
                      <p className="text-gray-400">Les entreprises SaaS qui utilisent des vidéos d'intégration voient jusqu'à 29 % de conversions en plus, car les vidéos aident les utilisateurs à comprendre rapidement la valeur du produit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Moins de départs précoces</h3>
                      <p className="text-gray-400">Les utilisateurs qui regardent les vidéos d'intégration ont 22 % de chances en moins de partir dans les 30 premiers jours, car ils comprennent et utilisent mieux le produit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Valeur atteinte plus vite</h3>
                      <p className="text-gray-400">Les utilisateurs qui regardent les vidéos atteignent les étapes importantes 37 % plus rapidement, réduisant le temps avant de voir l'utilité du produit.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Plus d'adoption des fonctionnalités</h3>
                      <p className="text-gray-400">Les utilisateurs qui regardent des vidéos sur des fonctionnalités spécifiques sont 3,1 fois plus susceptibles de les utiliser régulièrement, ce qui augmente leur engagement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Plus de revenus complémentaires</h3>
                      <p className="text-gray-400">Les clients qui regardent des vidéos de vente complémentaire sont 2,4 fois plus susceptibles de passer à des offres supérieures ou d'acheter des options supplémentaires.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne faisons pas que des démonstrations de produits - nous créons des vidéos stratégiques qui aident vos utilisateurs à franchir les étapes clés vers l'achat. Laissez-nous vous aider à transformer les utilisateurs gratuits en clients fidèles grâce à la puissance de la vidéo.
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
                      <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywrTtvjzYmuwfKNGhJOVdR9k1bQE3sWzcXegDS" type="video/mp4" />
                      Votre navigateur ne supporte pas les vidéos.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Cartes de statistiques */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">29%</div>
                    <p className="text-gray-400 text-sm">De conversions en plus par rapport au contenu statique</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">22%</div>
                    <p className="text-gray-400 text-sm">De départs en moins par rapport à aucune vidéo</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">37%</div>
                    <p className="text-gray-400 text-sm">Plus rapide pour atteindre la valeur du produit</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">180+</div>
                    <p className="text-gray-400 text-sm">Projets de vidéos SaaS réalisés pour nos clients</p>
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
        <SaaSVideoFAQSection />     

        {/* Section CTA finale */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}