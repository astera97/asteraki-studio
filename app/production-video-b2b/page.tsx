import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import B2BVideoFAQSection from "./b2b-faq"
import FinalCTASection from "./b2b-cta"

export const generateMetadata = async () => {
  return {
    title: "Production vidéo pour les entreprises B2B | Asteraki",
    description: "Production vidéo pour les organisations B2B. Nous créons des vidéos à fort impact qui s'adaptent aux différentes régions, respectent les normes de marque et délivrent un ROI mesurable.",
  }
}

export default function B2BVideoProductionPage() {
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
                Production vidéo B2B 
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Production vidéo de qualité professionnelle qui s'adapte mondialement avec cohérence de marque.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos authentiques et cinématographiques spécialement conçues pour les organisations B2B qui ont besoin d'évolutivité mondiale, de cohérence de marque et de conformité avec des exigences de gouvernance complexes. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production avec des processus de qualité professionnelle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir une consultation gratuite
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
                    poster="/b2b-video-poster.jpg"
                  >
                    <source src="/b2b-video-demo.mp4" type="video/mp4" />
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
              Fiable par 100+ marques B2B – 5/5 avis Google
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
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV26fQMQ7WJBOGwHyYpLQ8mtukDFsr9nVZ07eK  "
                    alt="Image de vidéo B2B avec interface Microsoft"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Adaptation mondiale. Cohérence de marque. Impact mesurable.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos B2B constituent le moyen le plus efficace pour communiquer de manière cohérente à travers les marchés mondiaux tout en maintenant l'intégrité de la marque. Elles associent le storytelling stratégique à des processus de production de qualité professionnelle pour stimuler l'engagement, soutenir les efforts commerciaux et délivrer un ROI mesurable à grande échelle.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Obtenir une consultation gratuite
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
                Comment nous assurons la livraison de vidéos B2B<br/> qui s'adaptent mondialement
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Processus de qualité professionnelle",
                  title: "Processus de qualité professionnelle",
                  desc: "Nous mettons en œuvre des flux de travail conçus spécifiquement pour les besoins B2B, incluant le contrôle de version, les hiérarchies d'approbation, les vérifications de conformité et les capacités de localisation mondiale qui répondent aux normes les plus élevées de gouvernance B2B.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ", 
                  alt: "Cohérence de marque",
                  title: "Cohérence de marque",
                  desc: "Notre système de gestion de marque propriétaire garantit un respect parfait des directives de votre marque dans toutes les vidéos, régions et langues, en maintenant la cohérence visuelle tout en permettant des adaptations spécifiques au marché.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Mesure du ROI",
                  title: "Mesure du ROI",
                  desc: "Nous intégrons des cadres de mesure directement dans votre stratégie vidéo, en suivant les indicateurs d'engagement, l'impact commercial et le renforcement de la marque pour démontrer un ROI clair et orienter les futurs investissements en contenu.",
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
                  Transformer la complexité mondiale en impact cohérent.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos B2B fonctionnent parce qu'elles résolvent le défi fondamental de la communication mondiale : maintenir la cohérence de marque tout en s'adaptant aux marchés locaux. 
                    Lorsque votre message est délivré avec la même qualité et l'intégrité de marque dans toutes les régions, 
                    cela renforce la confiance et la reconnaissance d'une manière que le contenu fragmenté, produit localement, ne pourra jamais atteindre.
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
                    src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTA9kki0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2  "
                    alt="Démonstration B2B"
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
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1xD1dlojqztV0JATyZN26ohPfmBaei9cuLXR  "
                  alt="Logo Microsoft"
                  className="w-30 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "Le programme vidéo B2B qu'Asteraki a créé pour notre stimulation des ventes mondiale a été essentiel pour standardiser notre message à travers 40+ pays. 
                Nous avons constaté une augmentation de 22 % de la productivité des ventes et une amélioration de 31 % des scores de cohérence de marque après avoir mis en œuvre leur système. 
                Les processus de qualité professionnelle et les capacités de gestion de marque correspondaient exactement à ce dont notre équipe marketing mondiale avait besoin pour adapter efficacement notre contenu vidéo."
              </blockquote>
              <div className="text-black font-semibold mb-4">Scott Allen, Directeur Général de la Transformation du Marketing Mondial</div>
            </div>
          </div>
        </section>

        {/* Why B2B Videos Work */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  LA PUISSANCE DE LA STRATÉGIE VIDÉO MONDIALE
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi les vidéos B2B stimulent une meilleure cohérence mondiale et un ROI
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Dans le marché mondial actuel, une communication incohérente entre les régions érode la valeur de la marque et déroute les clients. 
                  Les programmes vidéo B2B stratégiques associent le contrôle qualité centralisé à l'adaptation localisée pour 
                  maintenir l'intégrité de la marque tout en respectant les différences régionales, stimulant des résultats commerciaux mesurables.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos B2B ne se contentent pas d'avoir un aspect professionnel - elles sont stratégiquement conçues avec des processus de qualité professionnelle 
                  qui assurent la cohérence, la conformité et l'impact mesurable dans tous les marchés et unités commerciales, 
                  transformant la vidéo en un actif stratégique plutôt qu'en un outil marketing tactique.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Améliore la cohérence de marque mondiale</h3>
                      <p className="text-gray-400">Les entreprises utilisant une production vidéo centralisée constatent des scores de cohérence de marque 31 % plus élevés à travers les marchés mondiaux comparé aux approches décentralisées, renforçant la reconnaissance et la confiance de la marque dans le monde entier.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Augmente la productivité des ventes</h3>
                      <p className="text-gray-400">Les équipes commerciales mondiales utilisant du contenu vidéo standardisé sont 22 % plus productives, car elles passent moins de temps à créer du contenu local et plus de temps à vendre, avec un message cohérent qui résonne dans toutes les régions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit les coûts de production</h3>
                      <p className="text-gray-400">Les entreprises avec une production vidéo centralisée atteignent un coût par vidéo 37 % inférieur à grande échelle comparé à la production décentralisée, avec des gains d'efficacité grâce à la réutilisation de modèles, aux licences groupées et à l'optimisation des processus.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accélère le time-to-market</h3>
                      <p className="text-gray-400">Les entreprises mondiales utilisant notre système de production basé sur des modèles lancent des vidéos 45 % plus rapidement dans plusieurs marchés, avec des éléments de marque pré-approuvés et des flux de travail d'adaptation localisée.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Stimule un engagement plus élevé</h3>
                      <p className="text-gray-400">Les vidéos B2B produites avec des principes de cohérence mondiale atteignent des taux d'engagement 28 % plus élevés dans tous les marchés comparé au contenu produit localement qui manque de cohésion de marque.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne créons pas seulement des vidéos pour les entreprises - nous construisons des systèmes vidéo de qualité professionnelle conçus pour s'adapter mondialement tout en maintenant l'intégrité de la marque et en délivrant un ROI mesurable. Laissez-nous vous aider à transformer la vidéo d'un levier marketing en un actif commercial stratégique.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Obtenir une consultation vidéo B2B gratuite
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
                      <source src="/b2b-video-demo.mp4" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">31%</div>
                    <p className="text-gray-400 text-sm">Scores de cohérence de marque plus élevés à travers les marchés mondiaux</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">22%</div>
                    <p className="text-gray-400 text-sm">Plus de productivité des ventes avec du contenu vidéo standardisé</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">37%</div>
                    <p className="text-gray-400 text-sm">Coût inférieur par vidéo à grande échelle</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
                    <p className="text-gray-400 text-sm">Entreprises mondiales desservies avec des solutions vidéo de qualité professionnelle</p>
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
        <B2BVideoFAQSection />     

        {/* Final CTA Section */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}