import type { Metadata } from "next"
import { Play, ArrowRight } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import ServicesSection from "@/components/services-section"
import ProcessTimeline from "@/components/shared/process-timeline"
import VideoTypesSection from "@/components/video-types-section"
import IndustriesSection from "@/components/industries-section"
import ClientsSection from "@/components/clients-section"
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
                Production vidéo pour les entreprises
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
                  Production vidéo de qualité professionnelle pour augmenter votre visibilité et accélérer votre croissance
                </h1>
                <p className="text-normal mb-5">
                  Chez Asteraki, nous créons des vidéos d’entreprise d’excellente qualité, avec un rendu rapide sans compromis sur le résultat. Que ce soit pour un événement professionnel, un témoignage client, une vidéo de recrutement ou un message institutionnel, nous vous livrons un contenu percutant, soigné et 100 % sur mesure.
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
              Nous avons accompagné plus de 250 entreprises en France
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
          </div>
        </section>


        {/* Portfolio */}
        <ServicesSection />


        {/* Process Timeline */}      
        <ProcessTimeline />





        {/* Unique Selling Point */}
<section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
  <div className="max-w-8xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1DkcaeojqztV0JATyZN26ohPfmBaei9cuLXR"
            alt="Livraison multi-format pour tous les canaux"
            className="w-full"
          />
        </div>
      </div>
      <div className="max-w-xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
          Maximisez votre ROI avec une diffusion multi-plateformes
        </h2>
        <div className="space-y-6 text-lg text-black leading-relaxed">
          <p>
            Nous savons que chaque euro investi en communication doit porter ses fruits. C’est pourquoi nous livrons chaque projet en <strong>plusieurs formats optimisés</strong> pour tous vos canaux : site web, réseaux sociaux, présentations commerciales, e-mails, et supports internes.
          </p>
          <p>
            Fini le contenu unique mal adapté. Nous créons des versions <strong>spécifiques à chaque usage</strong> (15s pour LinkedIn, 60s pour le site, version sans son pour les réseaux, etc.) afin que votre message ait le plus grand impact possible, partout où vos audiences se trouvent.
          </p>
          <p>
            Résultat ? Un <strong>ROI clairement mesurable</strong>, une cohérence de marque renforcée, et un contenu qui travaille pour vous sur tous les fronts.
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

        {/* Features - L'expérience Asteraki */}
<section className="py-24" style={{ backgroundColor: "#ffffff" }}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
        Ce qui rend votre projet avec Asteraki différent
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Pas juste une agence de production. Une expérience fluide, rapide et sans stress.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-12">
      {/* Offre spéciale pour nouveaux clients */}
      <div className="text-left border-2 border-orange-500 rounded-3xl p-12 bg-white hover:shadow-xl transition-shadow">
        <div className="w-16 h-16 mb-8 bg-orange-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.269-1.689-.73-3.048-1.924-3.048-3.491 0-1.133.645-2.088 1.688-2.636l.042-.021C7.72 1.17 8.152 1 8.5 1c.173 0 .344.026.51.077.143.043.275.109.39.194.115.084.215.186.298.301.083.114.148.24.194.371.046.13.07.266.07.404 0 .259-.093.495-.26.699-.168.204-.413.37-.732.488-.02.006-.04.013-.061.02-.02.007-.04.013-.06.02-.288.102-.61.156-.96.156-.349 0-.67-.054-.96-.156-.02-.007-.04-.014-.06-.02-.02-.006-.04-.013-.06-.02-.32-.118-.564-.284-.732-.488s-.26-.465-.26-.724c0-.138.024-.274.07-.404.046-.13.11-.247.194-.35.083-.103.183-.19.298-.26.115-.071.245-.125.39-.16.145-.034.296-.052.453-.052.221 0 .412.093.567.269.155.176.234.38.234.61 0 .23-.079.434-.234.61-.155.176-.346.269-.567.269-.221 0-.412-.093-.567-.269-.155-.176-.234-.38-.234-.61 0-.23.079-.434.234-.61.155-.176.346-.269.567-.269z"/>
            <path d="M10 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-black mb-6">Votre premier projet ? Les frais de pré-production sont offerts</h3>
        <p className="text-lg text-black mb-8 leading-relaxed">
          Chez Asteraki, on vous dit <strong>merci de nous faire confiance</strong>. Pour votre premier projet, on prend en charge les frais de pré-production : brief, scénario, storyboard, repérage. Vous commencez à 0€ de frais cachés.
        </p>
        <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
          Offre valable pour les nouveaux clients
        </div>
      </div>

      {/* Rapidité de livraison */}
      <div className="text-left border-2 border-blue-500 rounded-3xl p-12 bg-white hover:shadow-xl transition-shadow">
        <div className="w-16 h-16 mb-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-black mb-6">Livraison en 5 jours ouvrés après le tournage</h3>
        <p className="text-lg text-black mb-8 leading-relaxed">
          Fini les semaines d'attente. On vous livre votre vidéo <strong>en 5 jours ouvrés</strong> après le tournage. Pas de retards, pas de mauvaises surprises. Un planning respecté, un contenu prêt à diffuser.
        </p>
        <div className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
          Engagement de délai
        </div>
      </div>

      {/* Multi-format inclus */}
      <div className="text-left border-2 border-green-500 rounded-3xl p-12 bg-white hover:shadow-xl transition-shadow">
        <div className="w-16 h-16 mb-8 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/>
            <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-black mb-6">Livraison multi-format incluse</h3>
        <p className="text-lg text-black mb-8 leading-relaxed">
          Votre projet n’est pas qu’une seule vidéo. On vous livre <strong>plusieurs versions optimisées</strong> : version longue, teaser 15s, version sans son, format carré, etc. Prêt à diffuser sur tous vos canaux.
        </p>
        <div className="text-sm font-semibold text-green-500 uppercase tracking-wider">
          Valeur ajoutée incluse
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Video Types */}
        <VideoTypesSection />

        {/* Industries */}
        <IndustriesSection />




        









        
        {/* Pourquoi la vidéo pour les entreprises */}
<section className="py-24" style={{ backgroundColor: "#111111" }}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Column - Main Content */}
      <div>
        <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
          Vidéo corporate efficace
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Pourquoi les entreprises B2B choisissent la vidéo
        </h2>
        
        <p className="text-white mb-8 leading-relaxed">
          La vidéo n’est pas un gadget. C’est un outil stratégique pour capter l’attention, expliquer un message complexe, et renforcer votre image de marque avec impact.
        </p>
        
        <p className="text-white mb-10 leading-relaxed">
          Chez Asteraki, on ne fait pas de la vidéo pour faire joli. On crée des contenus qui <strong>fonctionnent</strong> : clairs, percutants, adaptés à chaque canal, et livrés vite.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Impact immédiat</h3>
              <p className="text-gray-400">Un message visuel clair capte l’attention 3x plus vite qu’un texte. Idéal pour les décideurs pressés.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Gain de temps</h3>
              <p className="text-gray-400">Un format vidéo remplace 10 slides de présentation. Vos équipes gagnent du temps, vos clients comprennent mieux.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Cohérence de marque</h3>
              <p className="text-gray-400">Un seul fournisseur = un seul ton, une seule qualité, partout. Plus de décalage entre vos supports.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Livraison rapide</h3>
              <p className="text-gray-400">Votre vidéo prête en 5 jours après le tournage. Pas de mois d’attente.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Multi-format inclus</h3>
              <p className="text-gray-400">On vous livre plusieurs versions : longue, teaser, sans son, etc. Prêt à diffuser partout.</p>
            </div>
          </div>
        </div>
        
        <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
          On ne fait pas de la vidéo pour impressionner. On la fait pour que votre message passe, vite et bien.
        </blockquote>
        
        <div className="mt-12">
          <Link href="/contact" passHref>
            <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg">
               Obtenir un devis
            </button>
          </Link>
        </div>
      </div>
      
      {/* Right Column - Visual Elements */}
      <div className="relative">
        {/* Main Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/corporate-video-demo.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">5 jours</div>
            <p className="text-gray-400 text-sm">De livraison après le tournage</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">+250</div>
            <p className="text-gray-400 text-sm">Entreprises accompagnées</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">1er projet</div>
            <p className="text-gray-400 text-sm">Frais de pré-production offerts</p>
          </div>
          
          <div className="bg-black/40 rounded-xl p-6 border border-white">
            <div className="text-3xl font-bold text-orange-400 mb-2">3 formats</div>
            <p className="text-gray-400 text-sm">Inclus par vidéo</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
         
        {/* Client Section */}
        <ClientsSection />



        {/* FAQ Section */}
        <B2BVideoFAQSection />     

        {/* Final CTA Section */}
        <FinalCTASection />  
      </main>
      <Footer />
    </>
  )
}