import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import StartupVideoFAQSection from "./startup-video-faq"
import FinalCTASection from "./startup-video-cta"

export const generateMetadata = async () => {
  return {
    title: "Production vidéo pour startups | Asteraki",
    description: "Obtenez une production vidéo conçue pour les startups. Nous créons des vidéos à fort impact avec des prix adaptés aux startups, des délais rapides et une orientation stratégique sur les indicateurs de croissance.",
  }
}

export default function StartupVideoProductionPage() {
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
                  Production vidéo pour startups
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Des vidéos à fort impact avec des prix et des délais adaptés aux startups.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos authentiques et cinématographiques spécialement conçues pour les startups aux budgets limités mais aux objectifs de croissance ambitieux. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production avec des prix adaptés aux startups et des délais rapides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Contactez-nous
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
                    <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywYDYsbzMBbdoyAp3vE5DRa9SFiUfT6lkr4qsN" type="video/mp4" />
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
              Nous avons accompagné plus de 50 startups – 5/5 avis Google
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
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtSZvvQ134vBTOxF8dARqINU9EX5yck2foZjG"
                    alt="Image de vidéo de startup avec des employés de Salesforce"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Budget limité. Impact maximum. Croissance startup.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos de startup constituent le moyen le plus efficace de maximiser les budgets marketing limités. Elles associent un message stratégique à une production de haute qualité pour favoriser l'acquisition d'utilisateurs, sécuriser des financements et renforcer la notoriété de la marque, même avec des ressources contraintes.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Contactez-nous
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
                Comment nous assurons la livraison de vidéos startup<br/> qui stimulent la croissance
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Tarification adaptée aux startups",
                  title: "Tarification adaptée aux startups",
                  desc: "Nous proposons des modèles de tarification flexibles, notamment des options en actions pour les startups en phase précoce, des paiements basés sur les jalons et des forfaits évolutifs qui s'adaptent à votre stade de croissance et à vos levées de fonds.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q", 
                  alt: "Délais rapides",
                  title: "Délais rapides",
                  desc: "Notre processus de production rationalisé livre des vidéos de haute qualité en 2 à 3 semaines (et non en mois), avec des options accélérées pour les échéances de financement urgentes ou les lancements de produits.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
                  alt: "Stratégie axée sur la croissance",
                  title: "Stratégie axée sur la croissance",
                  desc: "Nous créons des vidéos conçues pour stimuler des indicateurs de croissance spécifiques : acquisition d'utilisateurs, taux de conversion ou intérêt des investisseurs, avec des KPI clairs et des cadres de mesure.",
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
                  Transformez des ressources limitées en impact maximum.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos de startup fonctionnent parce qu'elles maximisent l'impact des budgets marketing limités. 
                    Lorsque des utilisateurs potentiels, des investisseurs ou des partenaires voient une vidéo de haute qualité 
                    qui communique clairement votre proposition de valeur, cela crée de la crédibilité et de l'intérêt d'une manière 
                    que les descriptions textuelles ne peuvent jamais atteindre.
                  </p>
                </div>
                <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Contactez-nous
                    </button>
                  </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywbclKbhOiCeEItjw1VXN8kvL65WuUqFRDcO24"
                    alt="Démonstration de startup"
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
                  src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWPFgmCOiab8RMjqt25cZzSeDlVIhg1Y3fnXC"
                  alt="Logo Clickup"
                  className="w-24 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "La vidéo qu'Asteraki a créée pour notre levée de fonds Series A a été absolument cruciale pour notre succès. 
                Nous avons sécurisé 15 millions de dollars en financement dans les 6 semaines suivant le lancement de la vidéo auprès des investisseurs. 
                L'accent stratégique mis sur nos indicateurs de croissance et notre opportunité de marché, combiné à la tarification adaptée aux startups, 
                correspondait exactement à ce dont nous avions besoin à notre stade."
              </blockquote>
              <div className="text-black font-semibold mb-4">Brian Chesky, PDG de Clickup</div>
            </div>
          </div>
        </section>

        {/* Why Startup Videos Work */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Main Content */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  Le Pouvoir du Storytelling Startup
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi les vidéos de startup stimulent une meilleure croissance avec des ressources limitées
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Pour les startups, se démarquer avec des ressources limitées est essentiel. 
                  Le contenu vidéo stratégique combine une valeur de production élevée avec un message axé sur la croissance pour 
                  maximiser l'impact des budgets marketing contraints, favorisant l'acquisition d'utilisateurs, l'intérêt des investisseurs 
                  et la crédibilité de la marque.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos de startup ne se contentent pas d'avoir un aspect professionnel - elles sont stratégiquement conçues pour stimuler des 
                  indicateurs de croissance spécifiques à chaque étape de votre parcours, que vous soyez en phase pré-seed, Series A ou en pleine expansion. 
                  Nous comprenons les défis uniques auxquels les startups sont confrontées et créons des vidéos qui offrent un ROI maximum.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Maximise les Budgets Marketing Limités</h3>
                      <p className="text-gray-400">Les startups utilisant une vidéo stratégique constatent un ROI 3,2 fois supérieur sur leurs dépenses marketing par rapport à celles qui s'appuient uniquement sur du contenu textuel, faisant travailler chaque dollar plus dur.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accélère le Succès du Financement</h3>
                      <p className="text-gray-400">Les fondateurs qui utilisent des vidéos de pitch professionnelles sécurisent des financements 27 % plus rapidement et lèvent 35 % plus de capitaux en moyenne comparé à ceux utilisant uniquement des présentations de diapositives.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Favorise une Meilleure Acquisition d'Utilisateurs</h3>
                      <p className="text-gray-400">Les pages de destination avec des vidéos de démonstration axées sur la startup convertissent 41 % mieux pour les inscriptions d'utilisateurs, transformant les visiteurs du site en utilisateurs actifs plus efficacement.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Bâtit Instantanément de la Crédibilité</h3>
                      <p className="text-gray-400">Les startups avec des vidéos professionnelles sont perçues comme 68 % plus crédibles par les clients potentiels et les investisseurs, surmontant le désavantage de la "nouvelle entreprise".</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Crée des Boucles de Croissance Partageables</h3>
                      <p className="text-gray-400">Les vidéos de startup sont partagées 4,7 fois plus que le contenu textuel, créant des boucles de croissance organique qui stimulent la notoriété sans dépense publicitaire supplémentaire.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne créons pas seulement des vidéos pour les startups - nous concevons des actifs axés sur la croissance, conçus pour stimuler des indicateurs spécifiques à votre stade de développement. Laissez-nous vous aider à maximiser l'impact de vos ressources limitées grâce à une vidéo stratégique qui délivre de vrais résultats commerciaux.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Contactez-nous
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
                      <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywS0fG7CH9FOVjf6AcwC1na825YUxusmo4KNgE" type="video/mp4" />
                      Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">41%</div>
                    <p className="text-gray-400 text-sm">Taux de conversion plus élevé pour les inscriptions d'utilisateurs vs. pages de destination textuelles</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">35%</div>
                    <p className="text-gray-400 text-sm">Plus de capitaux levés vs. startups utilisant uniquement des présentations de diapositives</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">4.7x</div>
                    <p className="text-gray-400 text-sm">Plus de partages vs. contenu textuel</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">150+</div>
                    <p className="text-gray-400 text-sm">Startups aidées à atteindre leurs objectifs de croissance grâce à la vidéo</p>
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
        <StartupVideoFAQSection />     

        {/* Final CTA Section */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}