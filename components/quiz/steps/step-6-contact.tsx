"use client";

import { useState } from "react";
import { useQuiz } from "../quiz-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Step6Contact() {
  const { quizData, updateQuizData, nextStep } = useQuiz();

  // Initialisation sécurisée des données du formulaire
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
    getExtraHooks: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.companyEmail || !formData.additionalNotes) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyEmail)) {
      setErrorMessage("Veuillez entrer une adresse e-mail professionnelle valide.");
      return;
    }

    setErrorMessage("");

    try {
      await fetch("https://submit-form.com/8wJcGYxuL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyEmail: formData.companyEmail,
          companyName: formData.companyName,
          phoneNumber: formData.phoneNumber,
          projectBudget: formData.projectBudget,
          howDidYouFindUs: formData.howDidYouFindUs,
          message: formData.additionalNotes,
          getExtraHooks: formData.getExtraHooks ? "Oui" : "Non",
          _email: {
            from: formData.companyEmail,
            replyTo: formData.companyEmail,
            subject: `Nouvelle demande de devis de ${formData.fullName}`,
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
          getExtraHooks: formData.getExtraHooks,
        },
        projectBudget: formData.projectBudget,
        howDidYouFindUs: formData.howDidYouFindUs,
      });

      // Afficher le succès et passer à l'étape suivante
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        nextStep();
      }, 1000);
    } catch (error) {
      console.warn("La soumission a peut-être réussi :", error);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
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
          disabled={showSuccess}
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
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nom complet & Numéro de contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Nom complet *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Numéro de contact *</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                    <span className="text-lg mr-2">🇫🇷</span>
                  </div>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full pl-16 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Nom de l'entreprise & Email professionnel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Nom de l'entreprise *</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email professionnel *</label>
                <input
                  type="email"
                  value={formData.companyEmail}
                  onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="vous@entreprise.com"
                  required
                />
              </div>
            </div>

            {/* Notes supplémentaires */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Notes supplémentaires *</label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                placeholder="Ajoutez les détails de votre projet ainsi que le délai souhaité pour la livraison."
                required
              />
            </div>

            {/* Case à cocher */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="getExtraHooks"
                checked={formData.getExtraHooks}
                onChange={(e) => setFormData({ ...formData, getExtraHooks: e.target.checked })}
                className="mt-1 w-4 h-4 text-orange-500 border-2 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="getExtraHooks" className="text-sm text-gray-700">
                Obtenir 5 variations de capsules vidéo supplémentaires sans frais supplémentaires
              </label>
            </div>

            {/* Avertissement */}
            <p className="text-sm text-gray-600 text-center">
              *Vous devez avoir un appel de découverte dans les 7 jours pour être éligible.
            </p>

            {/* Bouton de soumission */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                disabled={showSuccess}
                className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-lg text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full md:w-auto"
              >
                Obtenir votre devis
              </button>
            </div>

            {/* Message de succès */}
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 text-sm">
                  ✅ Merci ! Votre devis est en chemin.
                </p>
              </div>
            )}

            {/* Message d'erreur */}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}