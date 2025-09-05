"use client";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Déclaration TypeScript pour Google reCAPTCHA
declare global {
  interface Window {
    grecaptcha: any;
    __RECAPTCHA_INITIALIZED__?: boolean;
  }
}

export default function ContactPage() {
  const [isClient, setIsClient] = useState(false);
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    companyName: "",
    phoneNumber: "",
    projectBudget: "",
    howDidYouFindUs: "",
    additionalNotes: "",
    recaptchaToken: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Initialisation du composant
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Chargement et gestion de reCAPTCHA
  useEffect(() => {
    if (!isClient) return;

    let script: HTMLScriptElement | null = null;
    let attempts = 0;
    const maxAttempts = 3;

    const loadRecaptcha = () => {
      // Nettoyage préalable
      cleanupRecaptcha();
      
      script = document.createElement('script');
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        // Attendre que grecaptcha soit disponible
        const checkGrecaptcha = setInterval(() => {
          if (window.grecaptcha && typeof window.grecaptcha.render === 'function') {
            clearInterval(checkGrecaptcha);
            initializeRecaptcha();
          } else if (attempts >= maxAttempts) {
            clearInterval(checkGrecaptcha);
            handleRecaptchaError();
          }
        }, 500);
      };

      script.onerror = () => {
        if (attempts < maxAttempts) {
          attempts++;
          setTimeout(loadRecaptcha, 1000 * attempts);
        } else {
          handleRecaptchaError();
        }
      };

      document.head.appendChild(script);
    };

    const initializeRecaptcha = () => {
      try {
        // Vérifier si déjà initialisé
        const container = document.getElementById('recaptcha-container');
        if (container && container.hasChildNodes()) {
          container.innerHTML = '';
        }

        window.grecaptcha.render('recaptcha-container', {
          'sitekey': '6LenzrsrAAAAAILCsTdrFPX5oXdEkFyIdq1wHC18',
          'callback': (token: string) => {
            setFormData(prev => ({ ...prev, recaptchaToken: token }));
          },
          'expired-callback': () => {
            setFormData(prev => ({ ...prev, recaptchaToken: '' }));
          }
        });

        setIsRecaptchaReady(true);
        setRecaptchaError(false);
        window.__RECAPTCHA_INITIALIZED__ = true;
      } catch (error) {
        console.error('Erreur d\'initialisation reCAPTCHA:', error);
        handleRecaptchaError();
      }
    };

    const handleRecaptchaError = () => {
      setRecaptchaError(true);
      setIsRecaptchaReady(false);
      console.warn('reCAPTCHA n\'a pas pu être chargé après plusieurs tentatives');
    };

    const cleanupRecaptcha = () => {
      // Nettoyer les scripts existants
      const existingScripts = document.querySelectorAll('script[src*="google.com/recaptcha"]');
      existingScripts.forEach(s => s.remove());

      // Nettoyer l'élément reCAPTCHA
      const container = document.getElementById('recaptcha-container');
      if (container) {
        container.innerHTML = '';
      }

      // Nettoyer la variable globale
      if (window.grecaptcha) {
        delete window.grecaptcha;
      }
      
      window.__RECAPTCHA_INITIALIZED__ = false;
    };

    // Charger reCAPTCHA
    loadRecaptcha();

    // Nettoyage lors du démontage
    return () => {
      cleanupRecaptcha();
      if (script) {
        script.onload = null;
        script.onerror = null;
      }
    };
  }, [isClient]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Validation des champs obligatoires
    if (!formData.fullName || !formData.companyEmail || !formData.additionalNotes) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyEmail)) {
      setErrorMessage("Veuillez entrer une adresse e-mail valide.");
      setIsSubmitting(false);
      return;
    }
    
    // Validation des emails professionnels
    const personalEmailDomains = [
      'gmail.com', 'googlemail.com', 
      'outlook.com', 'hotmail.com', 'live.com', 'msn.com',
      'yahoo.com', 'ymail.com',
      'aol.com',
      'icloud.com', 'me.com', 'mac.com',
      'protonmail.com', 'proton.me',
      'zoho.com',
      'mail.com'
    ];
    
    const emailDomain = formData.companyEmail.split('@')[1]?.toLowerCase();
    if (emailDomain && personalEmailDomains.includes(emailDomain)) {
      setErrorMessage("Veuillez utiliser une adresse email professionnelle (votreentreprise.com)");
      setIsSubmitting(false);
      return;
    }

    // Vérification reCAPTCHA (optionnelle si erreur de chargement)
    if (!recaptchaError && (!formData.recaptchaToken || formData.recaptchaToken.length === 0)) {
      setErrorMessage("Veuillez compléter le test de sécurité.");
      setIsSubmitting(false);
      return;
    }

    setErrorMessage("");

    try {
      // Récupérer le GCLID depuis l'URL actuelle
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get('gclid');
      
      await fetch("https://submit-form.com/8wJcGYxuL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyEmail: formData.companyEmail,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          projectBudget: formData.projectBudget,
          howDidYouFindUs: formData.howDidYouFindUs,
          message: formData.additionalNotes,
          'g-recaptcha-response': formData.recaptchaToken,
          _redirect: "/thank-you",
          _email: {
            from: formData.companyEmail,
            replyTo: formData.companyEmail,
            subject: `Nouveau message de ${formData.fullName}`,
          },
        }),
      });

      // Redirection avec conservation du GCLID
      const thankYouUrl = gclid ? `/merci-pour-votre-demande?gclid=${gclid}` : '/merci-pour-votre-demande';
      router.push(thankYouUrl);

    } catch (error: any) {
      console.warn("Erreur réseau, mais la soumission a peut-être fonctionné:", error);
      // Même redirection en cas d'erreur
      const urlParams = new URLSearchParams(window.location.search);
      const gclid = urlParams.get('gclid');
      const thankYouUrl = gclid ? `/merci-pour-votre-demande?gclid=${gclid}` : '/merci-pour-votre-demande';
      router.push(thankYouUrl);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="h-16 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-3"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Besoin d'une vidéo ?</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Un projet en tête ? Nous aimerions beaucoup vous entendre.
            <br />
            Contactez-nous et créons quelque chose d'exceptionnel ensemble.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Contactez-nous</h2>
            <p className="text-xl text-gray-600 mb-10">Nous aimerions beaucoup vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-lg font-medium text-gray-900 mb-3">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Entrez votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="companyEmail" className="block text-lg font-medium text-gray-900 mb-3">
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="votre@entreprise.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-900 mb-3">
                    Numéro de contact
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-lg font-medium text-gray-900 mb-3">
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="projectBudget" className="block text-lg font-medium text-gray-900 mb-3">
                    Budget du projet
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  >
                    <option value="">Sélectionnez une fourchette de budget</option>
                    <option value="Moins de 5 000 €">Moins de 5 000 €</option>
                    <option value="5 000 € - 10 000 €">5 000 € - 10 000 €</option>
                    <option value="10 000 € - 25 000 €">10 000 € - 25 000 €</option>
                    <option value="25 000 €+">25 000 €+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="howDidYouFindUs" className="block text-lg font-medium text-gray-900 mb-3">
                    Comment nous avez-vous trouvé ?
                  </label>
                  <select
                    id="howDidYouFindUs"
                    name="howDidYouFindUs"
                    value={formData.howDidYouFindUs}
                    onChange={(e) => setFormData({ ...formData, howDidYouFindUs: e.target.value })}
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  >
                    <option value="">Sélectionnez une option</option>
                    <option value="Recherche Google">Recherche Google</option>
                    <option value="Parrainage">Parrainage</option>
                    <option value="Réseaux sociaux">Réseaux sociaux</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalNotes" className="block text-lg font-medium text-gray-900 mb-3">
                  Votre message * (Parlez-nous de votre projet)
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={6}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                  placeholder="Parlez-nous de votre campagne marketing—quel est son objectif principal, et qu'est-ce qui vous a amené à envisager ce projet ?"
                  required
                ></textarea>
              </div>

              {/* Conteneur reCAPTCHA */}
              <div className="mb-6">
                {recaptchaError ? (
                  <div className="text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
                    <p className="font-medium">Problème de sécurité détecté</p>
                    <p className="text-sm mt-1">Veuillez actualiser la page et réessayer.</p>
                  </div>
                ) : (
                  <div 
                    id="recaptcha-container" 
                    className="flex justify-center min-h-[78px]"
                  ></div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || recaptchaError}
                  className={`w-full md:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl transition duration-300 text-lg font-medium shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
                {errorMessage && (
                  <p className="text-red-500 mt-4 text-lg">{errorMessage}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}