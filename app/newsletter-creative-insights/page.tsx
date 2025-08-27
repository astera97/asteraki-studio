"use client"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function NewsletterPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && validateEmail(email)) {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail("")
      
      // Réinitialiser le formulaire après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000)
    }
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      
    <Header />

      {/* Section Héro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-6">
              Newsletter Creative Insights
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              La <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Newsletter Motion</span>
              <br />
              Tendances & tactiques pour créer du contenu créatif à fort impact
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Rejoignez plus de 2 960 marketeurs et responsables marketing qui lisent The Motion pour un plongeon hebdomadaire dans tout ce qui concerne la stratégie créative, 
              le marketing vidéo et le storytelling de marque.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre email professionnel"
                    className={`w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all ${
                      isSubmitted 
                        ? 'border-green-500' 
                        : 'border-gray-200 focus:border-orange-500'
                    }`}
                    disabled={isSubmitted}
                  />
                  {isSubmitted && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted || !email}
                  className={`w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ${
                    isSubmitted 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:from-orange-600 hover:to-pink-600'
                  }`}
                >
                  {isSubmitted ? 'Bienvenue à bord ! 🎉' : 'Rejoindre la newsletter'}
                </button>
              </form>
              
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Gratuit
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Une fois par semaine
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Lecture de 5 min
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <Image
                src="/emi.webp"
                alt="Lecteur"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <Image
                src="/kayli.webp"
                alt="Lecteur"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              />
              <Image
                src="/Laurent_deschaux.webp?height=80&width=80&text=CP"
                alt="Lecteur"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-white -ml-2"
              />
              <span>Rejoignez plus de 2 960 marketeurs déjà abonnés</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFNQUngCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  "
                alt="Aperçu de la newsletter"
                width={500}
                height={600}
                className="rounded-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                      <path d="M12 2L2 20h20L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Creative Insights</p>
                    <p className="text-sm text-gray-600">Newsletter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ce que vous recevrez chaque semaine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  <a 
    href="/topics" 
    className="text-orange-500 underline-none hover:text-orange-500"
    style={{ textDecoration: 'none' }}
  >
    Des conseils pratiques
  </a>
  , des stratégies éprouvées et des exemples concrets pour vous aider à créer du contenu créatif à fort impact
</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Avantage 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-600">
                <path d="M12 2L2 20h20L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stratégie Créative</h3>
            <p className="text-gray-600 mb-6">
              Découvrez comment les grandes marques utilisent la vidéo et le contenu visuel pour se démarquer sur des marchés saturés et toucher leur audience.
            </p>
            <Link href="#" className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
              Voir des exemples →
            </Link>
          </div>
          
          {/* Avantage 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-600">
                <path d="M12 2L2 20h20L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Vidéo</h3>
            <p className="text-gray-600 mb-6">
              Découvrez les dernières tendances en matière de contenu vidéo, du format court au format long, et apprenez à créer des vidéos qui convertissent.
            </p>
            <Link href="#" className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors">
              Regarder des tutoriels →
            </Link>
          </div>
          
          {/* Avantage 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-600">
                <path d="M12 2L2 20h20L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Storytelling de Marque</h3>
            <p className="text-gray-600 mb-6">
              Maîtrisez l'art du storytelling qui résonne avec votre audience et construit une fidélité durable à la marque.
            </p>
            <Link href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Lire des études de cas →
            </Link>
          </div>
        </div>
      </section>

      {/* Section Preuve Sociale */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#111111] rounded-3xl shadow-lg my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Aimé par les équipes marketing des principales entreprises
          </h2>
          <p className="text-white">
            Rejoignez les professionnels des marques leaders qui comptent sur The Creative Insights pour leurs idées créatives
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          <Image src="/airbnb.png?height=40&width=120&text=AIRBNB" alt="Airbnb" width={120} height={40} />
          <Image src="/azus.png?height=40&width=120&text=AZUS" alt="Azus" width={120} height={40} />
          <Image src="/dell.png?height=40&width=120&text=DELL" alt="Dell" width={120} height={40} />
          <Image src="/salesforce.png?height=40&width=120&text=SALESFORCE" alt="Salesforce" width={120} height={40} />
          <Image src="/sanofi.png?height=40&width=120&text=SANOFI" alt="Sanofi" width={120} height={40} />
          <Image src="/zapier.png?height=40&width=120&text=ZAPIER" alt="Zapier" width={120} height={40} />
        </div>
      </section>

      {/* Section Témoignage */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
                    <path d="M11.645 20.91l-.007-.003c-.381 2.066-2.23 3.939-4.28 2.053a48.508 48.508 0 01-7.888-7.888c-2.066-.381-3.939-2.23-2.053-4.281l.003-.007a49.693 49.693 0 0111.314-3.818l.006.002a49.716 49.716 0 0111.313 3.818c1.939 1.939 1.939 5.084 0 7.023l-.002.006c-1.939 1.939-5.084 1.939-7.023 0zm1.314-12.534c2.59 0 4.633-2.096 4.633-4.633s-2.096-4.633-4.633-4.633-4.633 2.096-4.633 4.633 2.096 4.633 4.633 4.633z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-medium mb-6 leading-relaxed">
                "The Creative Insights a complètement changé la façon dont notre équipe aborde le contenu vidéo. 
                Nous avons constaté une augmentation de 47 % de l'engagement depuis la mise en œuvre de leurs stratégies."
              </blockquote>
              
              <div className="flex items-center">
                <Image
                  src="https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVLOhknJbf8wJFWPDVs4Ky3z2UpGML7SAeE10r  "
                  alt="Mathieu Piriou"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">Oona Vilermo</p>
                  <p className="text-orange-100">Directrice Stratégie, Framery</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <Image
                src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywa6Nj6vQW6cbV58LvMdJS0skQ9yGeoPAiFT3Y  "
                alt="Vidéo de témoignage"
                width={400}
                height={300}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Aperçu du Contenu */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Découvrez ce qu'il y a dans The Motion
          </h2>
          <p className="text-xl text-gray-600">
            Obtenez un aperçu du contenu précieux que vous recevrez chaque semaine
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contenu 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywq1LZrUfyucagDQM1fypRjomx7Ct05zsVwrhk  "
              alt="Aperçu du contenu"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-3">
                Stratégie
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3 façons de gagner gros avec le marketing vidéo à tout le funil
              </h3>
              <p className="text-gray-600 mb-4">
                La plupart des entreprises ont du mal à obtenir un retour sur investissement de leurs efforts de marketing vidéo parce qu'elles utilisent la vidéo simplement comme une tactique parmi d'autres.
              </p>
              <Link href="#" className="text-orange-600 font-medium hover:text-orange-700 transition-colors">
                Lire la suite →
              </Link>
            </div>
          </div>
          
          {/* Contenu 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt06sFn134vBTOxF8dARqINU9EX5yck2foZjG  "
              alt="Aperçu du contenu"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-800 text-sm font-medium rounded-full mb-3">
                Étude de Cas
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comment mesurer la performance vidéo + atteindre vos objectifs marketing
              </h3>
              <p className="text-gray-600 mb-4">
                Aligner la performance de votre vidéo avec les objectifs marketing pour prouver le retour sur investissement peut s'avérer un défi de taille.
              </p>
              <Link href="#" className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                Lire la suite ici →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Prêt à transformer votre stratégie de marketing vidéo ?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Rejoignez des milliers de professionnels du marketing qui utilisent déjà The Motion pour créer du contenu plus efficace et engageant qui génère des résultats.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email professionnel"
              className="flex-1 p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-500"
            />
            <button
              type="submit"
              disabled={isSubmitted || !email}
              className={`bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 ${
                isSubmitted 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:from-orange-600 hover:to-pink-600'
              }`}
            >
              {isSubmitted ? 'Bienvenue ! 🎉' : 'Commencer gratuitement'}
            </button>
          </div>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          Pas de spam. Désabonnez-vous à tout moment.
        </p>
      </section>
      {/* Pied de page */}
      <Footer />
    </div>
  )
}