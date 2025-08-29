"use client"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { useState, useMemo } from "react"
import PortfolioFilters from "@/components/portfolio/portfolio-filters"
import PortfolioGrid from "@/components/portfolio/portfolio-grid"

// Function to remove duplicates and shuffle array
function getUniqueAndShuffledProjects(projects) {
  // Remove duplicates based on vimeoUrl
  const uniqueProjects = projects.filter((project, index, self) => 
    index === self.findIndex(p => p.vimeoUrl.trim() === project.vimeoUrl.trim())
  )
  
  // Shuffle array randomly
  for (let i = uniqueProjects.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueProjects[i], uniqueProjects[j]] = [uniqueProjects[j], uniqueProjects[i]];
  }
  
  return uniqueProjects;
}


const portfolioProjects = getUniqueAndShuffledProjects([
  {
      id: 1,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, EXEL.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywZN3ImH5DmjQM0nVEs2BHNKk8yJeWpug7rf34",
      vimeoUrl: "https://vimeo.com/1113694980",
    },
    {
      id: 2,
      title: "Sage",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Sage, Kalhyge.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyws7Qb2Zh9tIXKsu1OETl2SqkiA0bH7zG5eaor",
      vimeoUrl: "https://vimeo.com/1113712907",
    },
    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    //Malt - Startup

    {
     id: 4,
     title: "Malt",
     subtitle: "Démonstration produit",
     description: "Vidéo animée expliquant la nouvelle fonctionnalité de Malt, AI search.",
     services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVGnpXRPBHNo2Fl95RE1eVgdJmnxZq4zjfCtBK",
     vimeoUrl: "https://vimeo.com/1114350536",
    },
    {
     id: 5,
     title: "Malt",
     subtitle: "Vidéo explicative",
     description: "Vidéo explicative du term Super team avec l'équipe de Malt",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV21oGj537WJBOGwHyYpLQ8mtukDFsr9nVZ07e",
     vimeoUrl: "https://vimeo.com/1114350408",
    },
    {
     id: 6,
     title: "Malt",
     subtitle: "Vidéo de marque",
     description: "Keynote à propos de la nouvelle fonctionnalité de Malt, AI search.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de marque",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJeYdFwKuqgdOsGVhtpIHWTxEMPov1QX37nkB",
     vimeoUrl: "https://vimeo.com/1114349973",
    },
    {
     id: 7,
     title: "Malt",
     subtitle: "Évènement",
     description: "Vidéo évènement pour Malt durant VivaTech 2024.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJgQDR2KuqgdOsGVhtpIHWTxEMPov1QX37nkB",
     vimeoUrl: "https://vimeo.com/1114350569",
    },
    {
     id: 8,
     title: "Malt",
     subtitle: "Témoignage client",
     description: "Vidéo témoignage client avec le client Malt, Doctolib.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Témoignage client",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVxm7bC9kdfVjkbuO409UhABiKIpeEqDgnCNwH",
     vimeoUrl: "https://vimeo.com/1114350569",
    },

    //Typeform - Startup

    {
     id: 9,
     title: "Typeform",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration produit montrant ce que Typeform peut faire.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVRYNBCPPV8xN4tsZSVcawW35TIh0CgyLOYHAi",
     vimeoUrl: "https://vimeo.com/1114346252",
    },
    {
     id: 10,
     title: "Typeform",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration expliquant la nouvelle fonctionnalité de Typeform, AI search.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVbBt78mcTmDeo8Gup5yYk6UfPOQtMisvdVZNn",
     vimeoUrl: "https://vimeo.com/1114346206",
    },


    //Shift Technology - Startup

    {
     id: 11,
     title: "Shift",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration expliquant la problématique que Shift résout.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVWD4hSniEG0j4rIlZeaBmiPMNq6kRYybfWv2S",
     vimeoUrl: "https://vimeo.com/1114344771",
    },
    {
     id: 12,
     title: "Shift",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration montrant un cas d'utilisation de Shift.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVNPRhb745FgMDujBmTbOY28pnK0y4lkrZfWxe",
     vimeoUrl: "https://vimeo.com/1114343820",
    },
    {
     id: 13,
     title: "Shift",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration montrant une fonctionnalité de Shift.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVDOY1AcTSFI73d61yo94zbUNY5muheKMsfAQR",
     vimeoUrl: "https://vimeo.com/1114343677",
    },


    //Aircall - Startup

    {
     id: 14,
     title: "Aircall",
     subtitle: "Démonstration produit",
     description: "Vidéo démonstration expliquant ce qu'Aircall peut faire.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkkmAsOnk6Z0aKAOH3TspmrCuFeME74fB5Qq",
     vimeoUrl: "https://vimeo.com/1114342087",
    },
    {
     id: 15,
     title: "Aircall",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque pour l'entreprise Aircall.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de marque",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVcmINPu9r3QfKI0dziE8sFt4BVwMqT2bChkLN",
     vimeoUrl: "https://vimeo.com/1114342036",
    },

    //Zapier - Startup

    {
     id: 16,
     title: "Zapier",
     subtitle: "Vidéo de recrutement",
     description: "Portrait collaborateur avec l'équipe de Zapier.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de recrutement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVLuaOAibf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
     vimeoUrl: "https://vimeo.com/1114340171",
    },
    {
     id: 17,
     title: "Zapier",
     subtitle: "Vidéo de recrutement",
     description: "Portrait collaborateur avec l'équipe de Zapier.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de recrutement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV8KqQMEaOG4YknlEfbvRpMT0XH617A9IO5Sdu",
     vimeoUrl: "https://vimeo.com/1114339646",
    },
    {
     id: 18,
     title: "Zapier",
     subtitle: "Vidéo de recrutement",
     description: "Portrait collaborateur avec l'équipe de Zapier.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo de recrutement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVbzFXLt1cTmDeo8Gup5yYk6UfPOQtMisvdVZN",
     vimeoUrl: "https://vimeo.com/1114339918",
    },


    //Lucca - Startup

    {
     id: 19,
     title: "Lucca",
     subtitle: "Évènement",
     description: "Lucca Summer Camp 2025",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVoMxugOH6CsnPrFwBgUiXEaet6jdqyMYbAL9p",
     vimeoUrl: "https://vimeo.com/1114338016",
    },
    {
     id: 20,
     title: "Lucca",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la saisie et le suivi des temps de travail avec Lucca Feuilles de temps.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVumo7XnMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2",
     vimeoUrl: "https://vimeo.com/1114338327",
    },
    {
     id: 21,
     title: "Lucca",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la gestion des bureaux avec Lucca.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVod8D7b6CsnPrFwBgUiXEaet6jdqyMYbAL9p5",
     vimeoUrl: "https://vimeo.com/1114338401",
    },
    {
     id: 22,
     title: "Lucca",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la maîtrise des paiements des frais professionnels avec les cartes Lucca .",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVlV1MzAxpzsmTAV4v5ZlCLMrhXaKHPkY1W98j",
     vimeoUrl: "https://vimeo.com/1114338276",
    },
    {
    id: 23,
    title: "Lucca",
    subtitle: "Témoignage client",
    description: "Vidéo témoignage client avec le client Lucca, ICSEO.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
    videoType: "Témoignage client",
    industry: "Startup",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVAxxMJwhHjGD6UJSv1WeB5b7LYpa8COcwltVf",
    vimeoUrl: "https://vimeo.com/1114336847",
    },
    {
    id: 24,
    title: "Lucca",
    subtitle: "Témoignage client",
    description: "Vidéo témoignage client avec le client Lucca, Hydrogène de France.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
    videoType: "Témoignage client",
    industry: "Startup",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVolTf0m6CsnPrFwBgUiXEaet6jdqyMYbAL9p5",
    vimeoUrl: "https://vimeo.com/1114337053",
    },
    {
    id: 25,
    title: "Lucca",
    subtitle: "Témoignage client",
    description: "Vidéo témoignage client avec le client Lucca, Le Groupe François.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
    videoType: "Témoignage client",
    industry: "Startup",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVTPyCeX0ins5ZGYgUmLXN6jkRIWfT8d4Sc0F2",
    vimeoUrl: "https://vimeo.com/1114337718",
    },
    {
    id: 26,
    title: "Lucca",
    subtitle: "Témoignage client",
    description: "Vidéo témoignage client avec le client Lucca, Mary Automobiles.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
    videoType: "Témoignage client",
    industry: "Startup",
    thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVBNQZDJSV4lu3NWCEqroZYbJI9eTydDOhSvxK",
    vimeoUrl: "https://vimeo.com/1114337494",
    },
    {
     id: 19,
     title: "Lucca",
     subtitle: "Évènement",
     description: "Lève-Talk Nantes - La matinale RH par Lucca",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkFUtQ3nk6Z0aKAOH3TspmrCuFeME74fB5Qq",
     vimeoUrl: "https://vimeo.com/1114337865",
    },


    //Lucca - Startup

















  




































    
  {
      id: 3,
      title: "Malt",
      subtitle: "Témoignage client",
      description: "Vidéo démonstration du nouvelle fonctionnalité de Malt, AI search.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1114350536",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },

    {
      id: 3,
      title: "Uber",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Uber, Le Boucher Moderne.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Témoignage client",
      industry: "Logistique",
      thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiFaskIPBrTARJGXZkYLKW6sdH5N4B0vywIoj",
      vimeoUrl: "https://vimeo.com/1104750452",
    },
  {
    id: 4,
    title: "Girard-Perregaux",
    subtitle: "Vidéo de marque",
    description: "Production d'une vidéo de marque de luxe pour le Laureato Chronograph Ti49 de Girard-Perregaux",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK    ",
    vimeoUrl: "https://vimeo.com/1102877371    ",
  },
  {
    id: 5,
    title: "X-tool",
    subtitle: "Vidéo de financement participatif",
    description: "Présentation de l'X-tool F1 Ultra pour les entreprises de personnalisation.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "Ecommerce",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywC58mNn6dH7rVT25qFa9GQY8gkxhfvsZSXJMC    ",
    vimeoUrl: "https://vimeo.com/1110393011    ",
  },
  {
    id: 6,
    title: "Notion",
    subtitle: "Vidéo de financement participatif",
    description: "Vidéo animée expliquant Notion et ses fonctionnalités.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG    ",
    vimeoUrl: "https://vimeo.com/1110392859    ",
  },
  {
    id: 7,
    title: "Xencelabs",
    subtitle: "Vidéo de financement participatif",
    description: "Présentation du nouveau Display Pen 24 de Xencelabs pour les artistes.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "Ecommerce",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh    ",
    vimeoUrl: "https://vimeo.com/1106895426    ",
  },
  {
    id: 8,
    title: "Fontawesome",
    subtitle: "Vidéo de financement participatif",
    description: "Production de la vidéo de financement participatif de Fontawesome utilisée sur Kickstarter.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywwP6D71p8bKgyaVXAm3Widen0SEzUPqYQGJFT    ",
    vimeoUrl: "https://vimeo.com/1110392210  ",
  },
  {
    id: 9,
    title: "Lettuce",
    subtitle: "Vidéo de financement participatif",
    description: "Production de la vidéo de marque de Lettuce présentant les fonctionnalités du logiciel.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "Finance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT    ",
    vimeoUrl: "https://vimeo.com/1110291462    ",
  },
  {
    id: 10,
    title: "Framery",
    subtitle: "Vidéo de financement participatif",
    description: "Production de la vidéo de marque de Framery mettant en avant leur histoire unique.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement participatif",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywp7yzsFIpEkOY8D0GBumXaioq9CjFLZxsPM1b    ",
    vimeoUrl: "https://vimeo.com/1110297807    ",
  },
  {
    id: 11,
    title: "Drata",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client de Drata, Softcat.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywqSo613yucagDQM1fypRjomx7Ct05zsVwrhkY    ",
    vimeoUrl: "https://vimeo.com/1110326216    ",
  },
  {
    id: 12,
    title: "Salesforce",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client de Salesforce, Fisher and Paykel.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtSZvvQ134vBTOxF8dARqINU9EX5yck2foZjG    ",
    vimeoUrl: "https://vimeo.com/1110324328    ",
  },
  {
    id: 13,
    title: "Kandji",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client de Kandji, Rackspace Technology.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJaeBiHsXNLP2QdFWhK9OvG3Rr0fZVD4Htsme    ",
    vimeoUrl: "https://vimeo.com/1110322579    ",
  },
  {
    id: 14,
    title: "Mercury Bank",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client de Mercury, Mango Puzzles.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Finance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywtZ4Wth134vBTOxF8dARqINU9EX5yck2foZjG    ",
    vimeoUrl: "https://vimeo.com/1110313363    ",
  },
  {
    id: 15,
    title: "HSBC",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client d'HSBC, Cinépolis.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Finance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywBitVFFPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5    ",
    vimeoUrl: "https://vimeo.com/1102894973    ",
  },
  {
    id: 16,
    title: "HP",
    subtitle: "Témoignage client",
    description: "Vidéo de témoignage client avec le client d'HP, Digital Etikett",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Témoignage client",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnrVMma2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE    ",
    vimeoUrl: "https://vimeo.com/1102895095    ",
  },
  {
    id: 17,
    title: "Midea",
    subtitle: "Vidéo e-commerce",
    description: "Campagne vidéo pour mettre en avant le réfrigérateur Midea OneTouch AutoFill à porte française",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo e-commerce",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywQbObEqTdUSZb4s2QuhpMIVX39kROC6fF1xzj?height=400&width=600&text=midea+autofill+frenchrefrigerator",
    vimeoUrl: "    https://vimeo.com/1110249934    ",
  },
  {
    id: 18,
    title: "Framery",
    subtitle: "Vidéo e-commerce",
    description: "Vidéo de présentation de la nouvelle interface utilisateur de l'application mobile Spotify.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo e-commerce",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw9XNEZOcY8QMfmcb0oqhrSvFPJjk5al3EDgus    ",
    vimeoUrl: "https://vimeo.com/1106893991    ",
  },
  {
    id: 19,
    title: "Xencelabs",
    subtitle: "Vidéo e-commerce",
    description: "Présentation du nouveau Display Pen 24 de Xencelabs pour les artistes.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo e-commerce",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh    ",
    vimeoUrl: "https://vimeo.com/1106895426    ",
  },
  {
    id: 20,
    title: "Logitech",
    subtitle: "Vidéo e-commerce",
    description: "Présentation du nouveau combo POP Icon de Logitech : un nouveau design audacieux",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywBYtsaRPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5    ",
    vimeoUrl: "https://vimeo.com/1110261087    ",
  },
  {
    id: 21,
    title: "Native Instruments",
    subtitle: "Vidéo e-commerce",
    description: "Présentation de la nouvelle série Kontrol/S MK3 pour les artistes.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo e-commerce",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywJmX3tksXNLP2QdFWhK9OvG3Rr0fZVD4Htsme    ",
    vimeoUrl: "https://vimeo.com/1106896654    ",
  },
  {
    id: 22,
    title: "Girard-Perregaux",
    subtitle: "Vidéo e-commerce",
    description: "Production d'une vidéo de marque de luxe pour le Laureato Chronograph Ti49 de Girard-Perregaux",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "DTC",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywO2PQc0DldM8Th1Y46jXqf7KG5xJvzIoicVbS    ",
    vimeoUrl: "https://vimeo.com/1102877371    ",
  },
  {
    id: 23,
    title: "HSBC",
    subtitle: "Vidéo d'événement",
    description: "Vidéo d'événement marquant le 160e anniversaire d'HSBC.",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Finance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw1ACkJ3L0yHGBKOREhLxl4Ti6nuevra7FcWC5    ",
    vimeoUrl: "https://vimeo.com/1110422970    ",
  },
  {
    id: 24,
    title: "Okta",
    subtitle: "Vidéo d'événement",
    description: "Moments clés d'Oktane 2024",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywlwypQONjhtsPvHbSRacMYefKT2gQAxB90k3n    ",
    vimeoUrl: "https://vimeo.com/1110421805    ",
  },
  {
    id: 25,
    title: "Bolt",
    subtitle: "Vidéo d'événement",
    description: "Aftermovie avec Bolt lors de leur événement team building.",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywbwgrntOiCeEItjw1VXN8kvL65WuUqFRDcO24    ",
    vimeoUrl: "https://vimeo.com/1104168315?share=copy",
  },
  {
    id: 26,
    title: "Cannes Lions",
    subtitle: "Vidéo d'événement",
    description: "Couverture de l'événement lors du Festival Cannes Lions 2024.",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Publicité",
    thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFEh98fCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh  ",
    vimeoUrl: "https://vimeo.com/1102886401    ",
  },
  {
    id: 27,
    title: "Salesforce",
    subtitle: "Vidéo d'événement",
    description: "Keynote principale de Dreamforce 2024 avec Marc Benioff",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvWc9HMGgmR8DzbQXG4njAStoPfq2aTk7JiFL  ",
    vimeoUrl: "https://vimeo.com/1110430670    ",
  },
  {
    id: 28,
    title: "Growe",
    subtitle: "Vidéo d'événement",
    description: "Aftermovie suivant Growe lors de leur participation à l'ICE London 2024",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Vidéo d'événement",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw9RO7p8dcY8QMfmcb0oqhrSvFPJjk5al3EDgu  ",
    vimeoUrl: "https://vimeo.com/1104168902  ",
  },
  {
    id: 29,
    title: "Asana",
    subtitle: "Vidéo explicative",
    description: "Vidéo animée expliquant comment utiliser Asana.",
    services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywrSBTVdYmuwfKNGhJOVdR9k1bQE3sWzcXegDS  ",
    vimeoUrl: "https://vimeo.com/1110585868  ",
  },
  {
    id: 30,
    title: "Kandji",
    subtitle: "Vidéo explicative",
    description: "Vidéo animée expliquant comment la mise en page de l'écran d'accueil de Kandji aide à organiser les applications sur les appareils iOS et iPadOS.",
    services: ["Développement du scénario", "Démonstration produit", "Animation UI", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywygeFJbtsdpIWi7BXtnEN2YOvmFLjb4rV6Pux  ",
    vimeoUrl: "https://vimeo.com/1110585884  ",
  },
  {
    id: 31,
    title: "GIO Insurance",
    subtitle: "Vidéo explicative",
    description: "Vidéo animée expliquant la protection de la vie privée en ligne pour leurs clients.",
    services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "Assurance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywmKjU4EX9KywSWq0Ob7e64m32pHZ8kCQuLAfB    ",
    vimeoUrl: "https://vimeo.com/1110587419  ",
  },
  {
    id: 32,
    title: "Kickstarter",
    subtitle: "Vidéo explicative",
    description: "Série de vidéos en prise de vue réelle sur la façon de planifier le calendrier et la stratégie de financement participatif.",
    services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "E-commerce",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywKbz446rjUw8zEs7y96VFDdnbKoiHBJf0cqOp    ",
    vimeoUrl: "https://vimeo.com/1110587451    ",
  },
  {
    id: 33,
    title: "Clickup",
    subtitle: "Vidéo explicative",
    description: "Vidéo explicative démontrant le Brain Max de Clickup.",
    services: ["Développement du scénario", "Démonstration produit", "Animation UI", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywnUjhpI2GAKUwrqsXVlt1BHPRSjJzvoTuZfCE    ",
    vimeoUrl: "https://vimeo.com/1110585751    ",
  },
  {
    id: 34,
    title: "Notion",
    subtitle: "Vidéo explicative",
    description: "Vidéo en prise de vue réelle expliquant Notion pour le travail de vie",
    services: ["Développement du scénario", "Animation 2D", "Production de voix-off", "Livraison multi-format"],
    videoType: "Vidéo explicative",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kywt87OYL134vBTOxF8dARqINU9EX5yck2foZjG    ",
    vimeoUrl: "https://vimeo.com/1110392756    ",
  },
  {
    id: 35,
    title: "Kandji",
    subtitle: "Culture d'entreprise",
    description: "Vidéo sur la culture d'entreprise avec l'équipe de Kandji.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Vidéo d'entreprise",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCWvi7P6dH7rVT25qFa9GQY8gkxhfvsZSXJMC    ",
    vimeoUrl: "https://vimeo.com/1102888339    ",
  },
  {
    id: 36,
    title: "Okta",
    subtitle: "Histoire de l'entreprise",
    description: "L'histoire de la fondation d'Okta, racontée par le PDG Todd McKinnon.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Vidéo d'entreprise",
    industry: "Technologie",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywCXgLka6dH7rVT25qFa9GQY8gkxhfvsZSXJMC    ",
    vimeoUrl: "https://vimeo.com/1110345789  ",
  },
  {
    id: 37,
    title: "HSBC",
    subtitle: "Vidéo de recrutement",
    description: "Vidéo de campagne de recrutement HSBC.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de recrutement",
    industry: "Finance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywiVwx1gBrTARJGXZkYLKW6sdH5N4B0vywIojm    ",
    vimeoUrl: "https://vimeo.com/1110355646  ",
  },
  {
    id: 38,
    title: "Bolt",
    subtitle: "Culture d'entreprise",
    description: "Vidéo d'entreprise mettant en lumière les employés de Bolt.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Portrait d'employé",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvuM8M7GgmR8DzbQXG4njAStoPfq2aTk7JiFL    ",
    vimeoUrl: "https://vimeo.com/1104256442  ",
  },
  {
    id: 39,
    title: "GIO Insurance",
    subtitle: "Vidéo d'entreprise",
    description: "Vidéo d'entreprise mettant en avant les employés lisant les messages des clients.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Culture d'entreprise",
    industry: "Assurance",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw2MJYAx7LRoDnSIZdyi1KBFNT7vmeUt5Xckg4    ",
    vimeoUrl: "https://vimeo.com/1110362392  ",
  },
  {
    id: 40,
    title: "Uber",
    subtitle: "Vidéo d'entreprise",
    description: "Vidéo d'entreprise sur la vie chez Uber, racontée par les partenaires.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Culture d'entreprise",
    industry: "Startup",
    thumbnail: "  https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywByuMVOPP0hrpkjXS8G9AZlVmDwaR7ELNxqf5    ",
    vimeoUrl: "https://vimeo.com/1110366894?share=copy",
  },
])

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedVideoType, setSelectedVideoType] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 9

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((project) => {
      const industryMatch = selectedIndustry === "All" || project.industry === selectedIndustry
      const videoTypeMatch = selectedVideoType === "All" || project.videoType === selectedVideoType
      return industryMatch && videoTypeMatch
    })
  }, [selectedIndustry, selectedVideoType])

  

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Removed scroll to top
  }

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  const handleSearch = () => {
    setCurrentPage(1) // Reset to first page when filters change
    console.log("Searching with filters:", { selectedIndustry, selectedVideoType })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-600 mb-6">
            NOS VIDÉOS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trouvez le bon style
            <br />
            pour votre vidéo.
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Parcourez nos réalisations primées en prise de vue réelle et en animation, graphismes animés et laissez votre créativité s'exprimer pour votre prochain projet vidéo.
          </p>
        </div>
      </div>
      {/* Filters and Portfolio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <PortfolioFilters
          selectedIndustry={selectedIndustry}
          selectedVideoType={selectedVideoType}
          onIndustryChange={(value) => {
            setSelectedIndustry(value)
            setCurrentPage(1) // Reset to first page when filter changes
          }}
          onVideoTypeChange={(value) => {
            setSelectedVideoType(value)
            setCurrentPage(1) // Reset to first page when filter changes
          }}
          onSearch={handleSearch}
          resultCount={filteredProjects.length}
        />
        
        <PortfolioGrid projects={currentProjects} />
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              {/* First page */}
              {getPageNumbers()[0] > 1 && (
                <>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-gray-100 border border-gray-300"
                  >
                    1
                  </button>
                  {getPageNumbers()[0] > 2 && (
                    <span className="px-2 py-2 text-gray-500">...</span>
                  )}
                </>
              )}

              {/* Page numbers */}
              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? 'bg-orange-500 text-white'
                      : 'text-black bg-white hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Last page */}
              {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
                <>
                  {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                    <span className="px-2 py-2 text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-2 rounded-md text-sm font-medium text-black bg-white hover:bg-gray-100 border border-gray-300"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}