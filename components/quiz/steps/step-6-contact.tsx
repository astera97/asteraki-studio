"use client";

import { useState } from "react";
import { useQuiz } from "../quiz-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Step6Contact() {
  const { quizData, updateQuizData, nextStep } = useQuiz();
  
  // Initialisation des données avec les valeurs du quiz
  const [formData, setFormData] = useState({
    fullName: [quizData.contact?.firstName || "", quizData.contact?.lastName || ""]
      .filter(Boolean)
      .join(" ")
      .trim() || "",
    companyEmail: quizData.email || "",
    companyName: quizData.contact?.company || "",
    phoneNumber: quizData.contact?.phone || "",
    projectBudget: "",
    howDidYouFindUs: "",
    additionalNotes: quizData.contact?.additionalNotes || "",
  });
  
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
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
      setErrorMessage("Veuillez entrer une adresse e-mail professionnelle valide.");
      setIsSubmitting(false);
      return;
    }

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
          _email: {
            from: formData.companyEmail,
            replyTo: formData.companyEmail,
            subject: `Nouveau message de ${formData.fullName}`,
          },
        }),
      });

      // Mise à jour des données du quiz
      const [firstName, ...lastNameParts] = formData.fullName.split(" ");
      const lastName = lastNameParts.join(" ") || "";
      
      updateQuizData({
        email: formData.companyEmail,
        contact: {
          firstName,
          lastName,
          company: formData.companyName,
          phone: formData.phoneNumber,
          additionalNotes: formData.additionalNotes,
        },
        projectBudget: formData.projectBudget,
        howDidYouFindUs: formData.howDidYouFindUs,
      });

      // Passage à l'étape suivante après succès
      setTimeout(() => {
        nextStep();
      }, 1000);
    } catch (error) {
      console.warn("Erreur réseau, mais la soumission a peut-être fonctionné:", error);
      // Même si erreur, on passe à l'étape suivante
      setTimeout(() => {
        nextStep();
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center mr-3">
            <Image
              src="https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywVsSyyzZk9bJcHXMNUQfstv87OVhrZn4GzoAa"
              alt="Logo Asteraki"
              width={80}
              height={80}
              className="w-22 h-22 text-white"
            />
          </div>
        </Link>

        {/* Bouton Passer - Orange */}
        <Button
          onClick={nextStep}
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50"
        >
          Passer <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
        </Button>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-2">
        <div className="bg-orange-500 h-2 transition-all duration-300" style={{ width: "85%" }}></div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Presque terminé ! Encore quelques détails
        </h1>

        {/* Formulaire */}
        <div className="w-full max-w-4xl space-y-8">
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

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-xl transition duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
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
        </div>
      </div>
    </div>
  );
}