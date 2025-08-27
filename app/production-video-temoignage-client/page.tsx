import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import PortfolioSection from "./portfolio-section"
import CustomerStoryFAQSection from "./customer-story-faq"
import FinalCTASection from "./customer-story-cta"

export const generateMetadata = async () => {
  return {
    title: "Production de vidéos témoignages clients | Asteraki",
    description: "Créez de la preuve sociale avec des témoignages de premier plan. Notre équipe s'assure d'obtenir des vidéos témoignages clients cinématographiques qui convertissent les prospects en clients.",
  }
}

export default function CustomerStoryVideoPage() {
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
                  Production de vidéos témoignages clients
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                  Transformez vos clients en vos meilleurs vendeurs.
                </h1>
                <p className="text-normal mb-5">
                  Nous créons des vidéos témoignages clients authentiques et cinématographiques qui renforcent la confiance, démontrent de vrais résultats et convertissent les prospects en clients. De la conception initiale à la livraison finale, nous gérons tous les aspects de la production.
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
                    poster="/customer-story-poster.jpg"
                  >
                    <source src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywsg1Juach9tIXKsu1OETl2SqkiA0bH7zG5eao  " type="video/mp4" />
                    Votre navigateur ne prend pas en charge la balise vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section des Logos Clients */}
        <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-center text-black font-normal mt-4 sm:mt-6 text-sm sm:text-base px-4">
              Fait confiance à plus de 250 marques – 5/5 avis Google
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
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnrVMma2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE?height=400&width=800&text=Customer+Story+Illustration"
                    alt="image d'interview avec un client HP ; le PDG de Digital Etikett"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                  Histoires réelles. Résultats réels. Confiance réelle.
                </h2>
                <div className="space-y-6 text-lg text-black leading-relaxed">
                  <p>
                    Les vidéos témoignages clients constituent la forme la plus puissante de preuve sociale. 
                    Elles mettent en valeur de vraies personnes obtenant de vrais résultats avec votre produit ou service, 
                    renforçant la confiance et la crédibilité auprès des prospects qui envisagent votre solution.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Entrer en contact
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
                Comment nous garantissons la livraison de témoignages clients<br/> qui convertissent mieux
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-16">
              {[
                {
                  image: "  https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Récit authentique",
                  title: "Récit authentique",
                  desc: "Nous nous concentrons sur des moments réels et non scénarisés qui mettent en valeur des émotions authentiques et des résultats spécifiques obtenus par vos clients.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ", 
                  alt: "Production de bout en bout",
                  title: "Production de bout en bout",
                  desc: "De l'identification des bons clients au tournage sur site et au montage de la pièce finale, nous gérons tout pour que vous puissiez vous concentrer sur votre entreprise.",
                },
                {
                  image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVh2BelJLDI024dcPOMo9lrEN6UY8eWLTbkv3Q  ",
                  alt: "Distribution multi-canaux",
                  title: "Distribution multi-canaux",
                  desc: "Nous livrons votre témoignage client dans plusieurs formats optimisés pour le site web, les présentations commerciales, les réseaux sociaux et les campagnes par e-mail.",
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
                  Transformez les clients satisfaits en votre équipe commerciale.
                </h2>
                <div className="text-lg text-black mb-10 leading-relaxed">
                  <p className="mb-6">
                    Les vidéos témoignages clients fonctionnent parce qu'elles proviennent d'un lieu d'authenticité. 
                    Lorsque les prospects voient de vraies personnes comme eux réussir avec votre solution, 
                    cela crée de la confiance et réduit le risque perçu d'une manière que le texte marketing ne pourra jamais atteindre.
                  </p>
                </div>
                <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                      Entrer en contact
                    </button>
                  </Link>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywLGDK1jBEFAvwOdGUzS8rfWxIcVho5ekmLqYl?height=400&width=500&text=Customer+Testimonial"
                    alt="Témoignage client"
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
                  src="/logos/dell-logo-black.svg?height=32&width=32&text=DO"
                  alt="Logo Dell"
                  className="w-24 h-20 mr-3"
                />
              </div>
              <blockquote className="font-normal text-black mb-3 leading-relaxed">
                "Les vidéos témoignages clients créées par Asteraki ont été des éléments déclencheurs pour nous. 
                Notre équipe commerciale les utilise dans chaque présentation, et nous avons constaté une augmentation de 35 % 
                des taux de conversion depuis leur mise en œuvre. La qualité et l'authenticité sont exceptionnelles."
              </blockquote>
              <div className="text-black font-semibold mb-4">Geraldine Tunnell, Directrice Marketing</div>
            </div>
          </div>
        </section>

        {/* Pourquoi les témoignages clients fonctionnent */}
        <section className="py-24" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Colonne de gauche - Contenu principal */}
              <div>
                <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
                  La puissance de la preuve sociale
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Pourquoi les témoignages clients convertissent mieux que tout autre contenu
                </h2>
                
                <p className="text-white mb-8 leading-relaxed">
                  Sur le marché sceptique d'aujourd'hui, les clients ne croient pas aux affirmations marketing. 
                  Ils croient aux autres clients. Une vidéo témoignage client bien conçue est la forme la plus puissante 
                  de preuve sociale que vous puissiez avoir.
                </p>
                
                <p className="text-white mb-10 leading-relaxed">
                  Nos vidéos témoignages clients ne se contentent pas de présenter des clients satisfaits - elles démontrent 
                  le parcours spécifique du défi à la solution, mettant en valeur les résultats tangibles 
                  que votre produit ou service a livrés.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Renforce instantanément la confiance</h3>
                      <p className="text-gray-400">De vrais clients partageant leurs expériences authentiques renforcent la crédibilité plus rapidement que n'importe quel message marketing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Réduit le risque perçu</h3>
                      <p className="text-gray-400">Lorsque les prospects voient d'autres personnes comme eux réussir, cela réduit la peur de prendre une mauvaise décision.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accélère le cycle de vente</h3>
                      <p className="text-gray-400">Les histoires clientes répondent aux objections et questions courantes avant même qu'elles ne soient posées, faisant avancer les prospects plus rapidement dans l'entonnoir.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Démontre des résultats concrets</h3>
                      <p className="text-gray-400">Au lieu d'avantages abstraits, vous montrez des résultats concrets auxquels vos clients idéaux peuvent s'identifier.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Crée une connexion émotionnelle</h3>
                      <p className="text-gray-400">Des histoires authentiques avec une émotion sincère résonnent plus profondément qu'un argument de vente, créant un impact durable.</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
                  Chez Asteraki, nous ne filmions pas seulement des témoignages - nous créons des récits percutants qui mettent en valeur la transformation que vos clients vivent. Laissez-nous vous aider à transformer vos clients satisfaits en vos vendeurs les plus persuasifs.
                </blockquote>
                
                <div className="mt-12">
                  <Link href="/contact" passHref>
                    <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                       Parler à un expert
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
                      <source src="  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7IlAPs3wavFUfw5SNg3PlOHYAIuB0yjRm1hp  " type="video/mp4" />
                      Votre navigateur ne prend pas en charge la balise vidéo.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Cartes de statistiques */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">35%</div>
                    <p className="text-gray-400 text-sm">Augmentation moyenne des taux de conversion pour les clients utilisant des vidéos témoignages clients</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">4.2x</div>
                    <p className="text-gray-400 text-sm">Taux d'engagement plus élevé vs. vidéos de démonstration de produits</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">2.8x</div>
                    <p className="text-gray-400 text-sm">Durée moyenne de visionnage plus longue vs. vidéos explicatives</p>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-6 border border-white">
                    <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
                    <p className="text-gray-400 text-sm">Vidéos témoignages clients produites pour nos clients</p>
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
        <CustomerStoryFAQSection />     

        {/* Section CTA finale */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}
