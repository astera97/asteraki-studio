import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import ConsumerVideoFAQSection from "./consumer-video-faq"
import FinalCTASection from "./consumer-video-cta"

export const generateMetadata = async () => {
  return {
    title: "Production vidéo pour les marques B2C | Asteraki",
    description: "Production vidéo engageante pour les marques B2C. Nous créons des vidéos à fort impact qui établissent des connexions émotionnelles, fidélisent la clientèle et augmentent les ventes.",
  }
}

export default function ConsumerVideoProductionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        {/* Hero Section */}
        <section className="pt-16 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <div className="text-sm font-semibold text-black mb-3 tracking-widest">
                  PRODUCTION VIDÉO POUR MARQUES B2C
                </div>
                <h1 className="text-5xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Un storytelling B2C engageant qui stimule la fidélité à la marque et les ventes.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos authentiques et cinématographiques spécialement conçues pour les marques B2C qui établissent des connexions émotionnelles, stimulent l'engagement et transforment les spectateurs en clients fidèles. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production avec une expertise approfondie de la psychologie du consommateur et un storytelling créatif.
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
                    Votre navigateur ne supporte pas la balise vidéo.
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

        {/* Value Proposition */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV5j8jtbrsL7zTQVi2HU8O5SmBt4lP6dAIRbFv"
                    alt="Image de vidéo B2C avec interface Nike"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 leading-tight">
                  Connexion émotionnelle. Fidélité à la marque. Croissance des ventes.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos B2C constituent le moyen le plus efficace pour établir des connexions émotionnelles avec votre audience et stimuler les décisions d'achat. 
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

        {/* Features */}
        <section className="py-24" style={{ backgroundColor: "#ffffffff" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Comment nous assurons la livraison de vidéos B2C<br/> qui stimulent la connexion émotionnelle
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Storytelling émotionnel",
                  title: "Storytelling émotionnel",
                  desc: "Notre équipe comprend des psychologues du consommateur et des directeurs créatifs qui conçoivent des récits qui touchent les moteurs émotionnels spécifiques de votre public cible, créant des vidéos qui résonnent à un niveau plus profond et stimulent la fidélité à la marque.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q", 
                  alt: "Excellence créative",
                  title: "Excellence créative",
                  desc: "Nous combinons une direction créative primée avec des techniques de production de pointe pour créer des vidéos qui se démarquent dans les fils d'actualité saturés et capturent l'attention dans les 3 premières secondes critiques.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Approche centrée sur les réseaux sociaux",
                  title: "Approche centrée sur les réseaux sociaux",
                  desc: "Nos vidéos sont conçues dès le départ pour le partage social, avec un formatage spécifique aux plateformes, des versions avec et sans son, et des moments partageables qui stimulent la portée organique et la viralité.",
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

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Communicate with Clarity Section */}
        <section className="py-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Transformer les spectateurs en clients fidèles par le storytelling émotionnel.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos B2C fonctionnent parce qu'elles résolvent le défi fondamental du marketing grand public : établir des connexions émotionnelles qui stimulent les décisions d'achat. 
                    Lorsque des clients potentiels voient une vidéo de haute qualité qui résonne avec leurs valeurs et aspirations, 
                    cela crée une connexion plus profonde d'une manière que les caractéristiques du produit seules ne pourraient jamais atteindre.
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
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVifFx5TGcOpNoz2fj0GxlAQw71ZgD4a3WUYEF"
                    alt="Image de vidéo B2C Tag Heuer"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Why Consumer Videos Work */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  LA PUISSANCE DE LA CONNEXION ÉMOTIONNELLE
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  Pourquoi les vidéos B2C stimulent un meilleur engagement et des ventes
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Dans le marché concurrentiel actuel des consommateurs, la connexion émotionnelle est le facteur différenciateur clé. 
                  Le contenu vidéo stratégique associe l'excellence créative à la psychologie du consommateur pour 
                  fidéliser la marque, créer des moments partageables et stimuler les décisions d'achat dans un 
                  marché où 70 % des décisions d'achat sont motivées par l'émotion.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos B2C ne se contentent pas d'avoir un aspect professionnel - elles sont stratégiquement conçues avec une compréhension approfondie du comportement du consommateur 
                  pour créer des connexions émotionnelles qui stimulent la fidélité à la marque et les ventes, transformant la vidéo en un moteur de croissance 
                  plutôt qu'en une simple tactique marketing.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Stimule la connexion émotionnelle</h3>
                      <p className="text-gray-400">Les marques B2C utilisant un contenu vidéo émotionnellement résonnant constatent une mémorisation de marque 42 % supérieure et une connexion émotionnelle 37 % plus forte avec les clients comparé à celles utilisant un contenu axé sur les fonctionnalités, car le storytelling émotionnel crée des connexions psychologiques plus profondes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Augmente le partage social</h3>
                      <p className="text-gray-400">Les vidéos conçues avec la partageabilité en tête génèrent 39 % plus de partages sociaux que les vidéos marketing standard, créant une portée organique qui amplifie votre message sans dépense publicitaire supplémentaire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Booste les taux de conversion</h3>
                      <p className="text-gray-400">Les pages produit présentant des vidéos B2C émotionnellement engageantes convertissent 28 % mieux pour les ventes comparé aux pages avec uniquement des images et descriptions de produits, car les vidéos créent du désir et une connexion au-delà des fonctionnalités.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Fidélise la clientèle</h3>
                      <p className="text-gray-400">Les clients qui s'engagent avec des vidéos de marque émotionnellement résonnantes sont 33 % plus susceptibles de devenir des clients récurrents et de recommander la marque à d'autres, créant un cycle vertueux de fidélité et d'advocacy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Crée de la pertinence culturelle</h3>
                      <p className="text-gray-400">Les marques qui créent un contenu vidéo culturellement pertinent constatent un engagement 45 % plus élevé parmi leurs démographies cibles, car les vidéos qui s'appuient sur les moments culturels actuels paraissent authentiques et opportuns plutôt que forcés.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne créons pas seulement des vidéos pour les marques B2C - nous concevons des histoires émotionnellement résonnantes conçues pour connecter avec votre audience à un niveau plus profond et stimuler des résultats commerciaux significatifs. Laissez-nous vous aider à transformer les caractéristiques de vos produits en connexions émotionnelles qui stimulent la fidélité à la marque et la croissance des ventes.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Obtenir un devis
                    </button>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Visual Elements */}
              <div className="relative">
                {/* Main Video - Auto-looping, silent */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                  <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/consumer-video-demo.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">42%</div>
                    <p className="text-gray-400 text-sm">Mémorisation de marque supérieure vs. contenu axé sur les fonctionnalités</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">28%</div>
                    <p className="text-gray-400 text-sm">Taux de conversion plus élevés pour les ventes</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">39%</div>
                    <p className="text-gray-400 text-sm">Plus de partages sociaux vs. vidéos marketing standard</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">120+</div>
                    <p className="text-gray-400 text-sm">Marques B2C desservies avec des solutions vidéo émotionnellement résonnantes</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <ConsumerVideoFAQSection />     

        {/* Final CTA Section */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}