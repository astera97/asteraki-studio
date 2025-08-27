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
                  <Link href="/quiz" passHref>
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
                    <source src="/consumer-video-demo.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
              Fiable par 120+ marques B2C – 5/5 avis Google
            </p>

            {/* Logo Carousel */}
            <div className="relative overflow-hidden mb-8 sm:mb-12 inverted">
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
            
              <div className="flex animate-scroll-seamless invert-images">
                {[
                  { name: "airbnb", src: "/airbnb.png?height=40&width=120&text=AIRBNB" },
                  { name: "azus", src: "/azus.png?height=40&width=120&text=AZUS." },
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
                    { name: "azus", src: "/azus.png?height=40&width=120&text=AZUS." },
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
                        alt={`${logo.name} logo`}
                        width={120}
                        height={40}
                        className="opacity-60 hover:opacity-80 transition-opacity object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Google Reviews Widget */}
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
                  <p className="text-black text-xs sm:text-sm">Basé sur 50+ avis</p>
                </div>
              </a>
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
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV5j8jtbrsL7zTQVi2HU8O5SmBt4lP6dAIRbFv  "
                    alt="Image de vidéo B2C avec interface Nike"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Connexion émotionnelle. Fidélité à la marque. Croissance des ventes.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos B2C constituent le moyen le plus efficace pour établir des connexions émotionnelles avec votre audience et stimuler les décisions d'achat. Elles associent le storytelling stratégique à l'exécution créative pour fidéliser la marque, créer des moments partageables et transformer les spectateurs en clients fidèles dans un marché où la connexion émotionnelle influence 70 % des décisions d'achat.
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
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Storytelling émotionnel",
                  title: "Storytelling émotionnel",
                  desc: "Notre équipe comprend des psychologues du consommateur et des directeurs créatifs qui conçoivent des récits qui touchent les moteurs émotionnels spécifiques de votre public cible, créant des vidéos qui résonnent à un niveau plus profond et stimulent la fidélité à la marque.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ", 
                  alt: "Excellence créative",
                  title: "Excellence créative",
                  desc: "Nous combinons une direction créative primée avec des techniques de production de pointe pour créer des vidéos qui se démarquent dans les fils d'actualité saturés et capturent l'attention dans les 3 premières secondes critiques.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
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
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
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
                    Obtenir une consultation gratuite
                  </button>
                </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVifFx5TGcOpNoz2fj0GxlAQw71ZgD4a3WUYEF  "
                    alt="Image de vidéo B2C Tag Heuer"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-xl">
              <div className="flex items-center mb-5">
                <img
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVyOFjjVf7jHwWMkUO0E4Y25ImLfS3X8vyRBib  "
                  alt="Logo Nike"
                  className="w-24 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "La campagne vidéo qu'Asteraki a créée pour notre série réinterprétée 'Just Do It' a été essentielle pour revitaliser notre connexion de marque avec les jeunes audiences. 
                Nous avons constaté une augmentation de 39 % de l'engagement social et une hausse de 28 % des ventes parmi la démographie 18-34 ans après le lancement de leurs vidéos sur nos canaux sociaux. 
                La compréhension approfondie de la psychologie du consommateur combinée à l'excellence créative correspondait exactement à ce dont notre équipe marketing avait besoin pour créer un contenu véritablement partageable."
              </blockquote>
              <div className="text-black font-semibold mb-4">Jason MacLeod, Responsable Marketing</div>
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
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
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
                       Obtenir une consultation vidéo B2C gratuite
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