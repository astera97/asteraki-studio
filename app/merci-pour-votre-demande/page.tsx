"use client"

import { Button } from "@/components/ui/button"
import { Check, ExternalLink, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function ThankYouPage() {
  // Add this to your thank-you page component
useEffect(() => {
  // Récupérer le GCLID de l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const gclid = urlParams.get('gclid');
  
  // Fonction pour envoyer l'événement de conversion
  const sendConversionEvent = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      try {
        // Format CORRECT pour Google Ads: AW-CONVERSION_ID/CONVERSION_LABEL
        const conversionId = 'AW-17350258945/RetLCObT_PQaEIHin9FA';
        
        // Paramètres de conversion
        const conversionParams: any = {
          'send_to': conversionId,
          'value': 1.0,
          'currency': 'EUR'
        };
        
        // Ajouter le GCLID si disponible
        if (gclid) {
          conversionParams.gclid = gclid;
        }
        
        // Envoyer l'événement de conversion
        (window as any).gtag('event', 'conversion', conversionParams);
        console.log('Conversion event sent successfully to Google Ads');
        
        // Vérification supplémentaire
        setTimeout(() => {
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion_debug', {
              'send_to': conversionId
            });
          }
        }, 1000);
      } catch (error) {
        console.error('Error sending conversion event:', error);
      }
    } else {
      // Réessayer si gtag n'est pas encore chargé
      console.log('gtag not available yet, retrying in 500ms...');
      setTimeout(sendConversionEvent, 500);
    }
  };

  // Démarrer le processus d'envoi de conversion
  sendConversionEvent();
  
  // Nettoyage
  return () => {
    // Aucun nettoyage nécessaire pour cet effet
  };
}, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Merci pour votre demande !</h1>
          <p className="text-xl text-gray-600 mb-8">
            Nous avons bien reçu votre demande. 
            Notre équipe est engagée à vous envoyer un devis personnalisé 
            dans les 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Ce que vous pouvez attendre</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Un devis détaillé basé sur vos besoins spécifiques</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Des recommandations sur les types de contenu les plus efficaces pour votre projet</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Un plan de production clair avec les délais et étapes clés</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Possibilité d'un appel de clarification pour affiner votre projet</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Besoin d'aide immédiate ?</h3>
            <p className="text-gray-700 mb-4">
              Vous souhaitez discuter de votre projet tout de suite ?
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                📞 Appelez-nous au <strong>+33 (7) 58 11 60 26</strong>
              </p>
              <p>
                ✉️ Écrivez-nous à <strong>info@asterakistudio.com</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="border-t pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">En attendant…</h2>
            <p className="text-gray-600">Explorez nos réalisations et trouvez l'inspiration pour votre projet à venir</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CTA Projets */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Découvrez nos projets</h3>
              <p className="text-gray-600 mb-6">
                Parcourez notre portfolio de campagnes vidéo réussies et découvrez ce que nous pouvons créer pour votre marque.
              </p>
              <Link href="/realisations">
                <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white font-semibold sm:text-lg mb-4 sm:mb-2">
                  Voir notre portfolio
                </button>
              </Link>
            </div>

            {/* CTA Blog */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lisez notre blog</h3>
              <p className="text-gray-600 mb-6">
                Obtenez des insights sur les tendances du marketing vidéo, les bonnes pratiques et les stratégies pour développer votre entreprise.
              </p>
              <Link href="/journal">
                <button className="bg-blue-600 hover:bg-blue-700 border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white font-semibold sm:text-lg mb-4 sm:mb-2">
                  Explorer notre blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}