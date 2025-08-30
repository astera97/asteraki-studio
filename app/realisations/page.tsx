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
     id: 27,
     title: "Lucca",
     subtitle: "Évènement",
     description: "Lève-Talk Nantes - La matinale RH par Lucca",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Startup",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjkFUtQ3nk6Z0aKAOH3TspmrCuFeME74fB5Qq",
     vimeoUrl: "https://vimeo.com/1114337865",
    },
    //Dell Technologies - Technology
    {
     id: 28,
     title: "Dell",
     subtitle: "Conseil d'expert",
     description: "Dell et Scaleway sur le GPU-as-a-service au service de l'IA dans la santé",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Conseil d'expert",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVUyS3LLq2CrN5MjsDJkoHGX6AzxuROT8SgfwW",
     vimeoUrl: "https://vimeo.com/1114279502",
    },
    {
     id: 29,
     title: "Dell",
     subtitle: "Évènement",
     description: "Teaser du Dell Technologies Forum 2024 ： l'IA en pratique",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Évènement",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVLNaKXKbf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
     vimeoUrl: "https://vimeo.com/1114279669/d381d70e6e",
    },
    //HP - Technology
    {
     id: 30,
     title: "HP",
     subtitle: "Témoignage client",
     description: "Témoignage client avec le client HP, Festival de Cannes.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Témoignage client",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMefsGzX6YLO1BSGiKj2D5WhHcuQrys4MloaJ",
     vimeoUrl: "https://vimeo.com/1114293266",
    },
    {
     id: 31,
     title: "HP",
     subtitle: "Conseil d'expert",
     description: "Démonstration produit à propos de Microsoft Copilot sur les PC HP",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Conseil d'expert",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVsnP2ffmw2tlD7s56WfcNiaCEHnQOFR8xdqMV",
     vimeoUrl: "https://vimeo.com/1114292801",
    },
    {
     id: 32,
     title: "HP",
     subtitle: "Conseil d'expert",
     description: "Série HP sur la cybersécurité.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Conseil d'expert",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvGjVXi13dJewK5HDhqcx2ks9fTPaG0RgtMrU",
     vimeoUrl: "https://vimeo.com/1114325979",
    },
    {
     id: 33,
     title: "HP",
     subtitle: "Conseil d'expert",
     description: "Série HP sur la cybersécurité.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Conseil d'expert",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVhtX4KiLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
     vimeoUrl: "https://vimeo.com/1114291941",
    },
    {
     id: 34,
     title: "HP",
     subtitle: "Conseil d'expert",
     description: "Série HP sur la cybersécurité.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Conseil d'expert",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVxhhnsUlkdfVjkbuO409UhABiKIpeEqDgnCNw",
     vimeoUrl: "https://vimeo.com/1114292350",
    },
    //Deloitte - Technology
    {
      id: 35,
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
      id: 36,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, Alten.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVVIX6d2lCRjU0PEv7T9OCi5BZ8hqeAgSKnaIz",
      vimeoUrl: "https://vimeo.com/1114335320",
    },
    {
      id: 37,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, Orapi.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVxIoqMGkdfVjkbuO409UhABiKIpeEqDgnCNwH",
      vimeoUrl: "https://vimeo.com/1114334337",
    },
    {
      id: 38,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo interview avec Tony Estanguet à propos des Jeux Olympiques de Paris 2024.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVq0XwdzEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD",
      vimeoUrl: "https://vimeo.com/1114334791",
    },
    {
      id: 39,
      title: "Deloitte",
      subtitle: "Vidéo de recrutement",
      description: "Campagne de recrutement pour Deloitte, Women in Tech.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVJtRGvT0KuqgdOsGVhtpIHWTxEMPov1QX37nk",
      vimeoUrl: "https://vimeo.com/1114334227",
    },
    {
      id: 40,
      title: "Deloitte",
      subtitle: "Vidéo de recrutement",
      description: "Campagne de recrutement pour Deloitte, Women in Tech.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsLcFyba93bxoLyhcW8aNnVRf0tO2vu4mHdZ",
      vimeoUrl: "https://vimeo.com/1114334550",
    },
    {
      id: 41,
      title: "Deloitte",
      subtitle: "Évènement",
      description: "Aftermovie Discover Events 2023 de Deloitte.",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvuEWbU13dJewK5HDhqcx2ks9fTPaG0RgtMrU",
      vimeoUrl: "https://vimeo.com/1114334081",
    },
    {
      id: 42,
      title: "Deloitte",
      subtitle: "Évènement",
      description: "Interns Ignite 2025 - Deloitte Belgique",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKdRQire3f3Wsd1EZQ4zPStY5JB97kxm6Ac8H",
      vimeoUrl: "https://vimeo.com/1114333731",
    },
    {
      id: 43,
      title: "Deloitte",
      subtitle: "Évènement",
      description: "Mobile World Congress 2025： Booth Tour de Deloitte.",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6b1njjuM0sOH4LRiZ2hEraGKUtQVDIYCP3bJ",
      vimeoUrl: "https://vimeo.com/1113714103",
    },
    {
      id: 44,
      title: "Deloitte",
      subtitle: "Vidéo de recrutement",
      description: "Campagne de recrutement pour Deloitte, Life Sciences & Health Care Careers.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVxhD6JjmkdfVjkbuO409UhABiKIpeEqDgnCNw",
      vimeoUrl: "https://vimeo.com/1114333421",
    },
    {
      id: 45,
      title: "Deloitte",
      subtitle: "Vidéo de recrutement",
      description: "Campagne de recrutement pour Deloitte, Life Sciences & Health Care Careers.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Vidéo de recrutement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVuxRXVYMM0kbnN9ZpEL8lYQRazuvgOVG4Fot2",
      vimeoUrl: "https://vimeo.com/1114333547",
    },
    {
      id: 46,
      title: "Deloitte",
      subtitle: "Conseil d'expert",
      description: "Conseil d'expert avec Deloitte sur comment lever les fonds pour une startup.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Conseil d'expert",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVpp2xEJR2lYTb4od16OBLW0sgaN7xrmhqJup5",
      vimeoUrl: "https://vimeo.com/1114332753",
    },
    {
      id: 47,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, LECTRA.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV21kTGmi7WJBOGwHyYpLQ8mtukDFsr9nVZ07e",
      vimeoUrl: "https://vimeo.com/1113694860",
    },
    {
      id: 48,
      title: "Deloitte",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client de Deloitte, GA Smart Building.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVGXwvAHBHNo2Fl95RE1eVgdJmnxZq4zjfCtBK",
      vimeoUrl: "https://vimeo.com/1113694743",
    },
    //Sage - Technology
    {
      id: 49,
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
      id: 50,
      title: "Sage",
      subtitle: "Témoignage client",
      description: "Vidéo témoignage client avec le client Sage, WTW France.",
      services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
      videoType: "Témoignage client",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvnHaWi13dJewK5HDhqcx2ks9fTPaG0RgtMrU",
      vimeoUrl: "https://vimeo.com/1113713234",
    },
    {
      id: 51,
      title: "Sage",
      subtitle: "Évènement",
      description: "Retour en images sur le Sage Partner Day 2025 au Hangar Y",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVtDlmftdTBWldAyg2P0M5Chku4INecjLo9UbH",
      vimeoUrl: "https://vimeo.com/1113690563",
    },
    {
     id: 52,
     title: "Sage",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant comment utiliser Sage.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVVINHJYcCRjU0PEv7T9OCi5BZ8hqeAgSKnaIz",
     vimeoUrl: "https://vimeo.com/1113692995",
    },
    {
     id: 53,
     title: "Sage",
     subtitle: "Vidéo explicative",
     description: "Vidéo d'animation expliquant la procédure d'insciption à la PDP Sage.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
     videoType: "Vidéo explicative",
     industry: "Technologie",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVj1XY6Gnk6Z0aKAOH3TspmrCuFeME74fB5QqN",
     vimeoUrl: "https://vimeo.com/1113692472",
    },
    {
      id: 54,
      title: "Sage",
      subtitle: "Évènement",
      description: "Retour en images sur les moments fort du Sage Partners Kick Off FY25.",
      services: ["Cinématographie", "Graphismes animés", "Étalonnage des couleurs"],
      videoType: "Évènement",
      industry: "Technologie",
      thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1FIg3fojqztV0JATyZN26ohPfmBaei9cuLXR",
      vimeoUrl: "https://vimeo.com/1113690255",
    },
    //Bolt
    {
    id: 55,
    title: "Bolt",
    subtitle: "Évènement",
    description: "Aftermovie avec Bolt lors de leur événement team building.",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Évènement",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywbwgrntOiCeEItjw1VXN8kvL65WuUqFRDcO24    ",
    vimeoUrl: "https://vimeo.com/1104168315",
  },
  {
    id: 61,
    title: "Bolt",
    subtitle: "Vidéo de recrutement",
    description: "Vidéo d'entreprise mettant en lumière les employés de Bolt.",
    services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage colorimétrique"],
    videoType: "Vidéo de recrutement",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywvuM8M7GgmR8DzbQXG4njAStoPfq2aTk7JiFL    ",
    vimeoUrl: "https://vimeo.com/1104256442",
  },
  //Cannes Lions
  {
    id: 56,
    title: "Cannes Lions",
    subtitle: "Évènement",
    description: "Couverture de l'événement lors du Festival Cannes Lions 2024.",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Évènement",
    industry: "B2B",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFEh98fCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh",
    vimeoUrl: "https://vimeo.com/1102886401",
  },
  //Girard-Perregaux
  {
    id: 57,
    title: "Girard-Perregaux",
    subtitle: "Vidéo de marque",
    description: "Production d'une vidéo de marque de luxe pour le Laureato Chronograph Ti49 de Girard-Perregaux",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "B2C",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw7rLCbZwavFUfw5SNg3PlOHYAIuB0yjRm1hpK    ",
    vimeoUrl: "https://vimeo.com/1102877371",
  },
  //Xencelabs
  {
    id: 58,
    title: "Xencelabs",
    subtitle: "Vidéo de financement",
    description: "Présentation du nouveau Display Pen 24 de Xencelabs pour les artistes.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de financement",
    industry: "Ecommerce",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywFV2JNdCNwlOAdeRuaZXQ5tqKECrYJpbk7ojh    ",
    vimeoUrl: "https://vimeo.com/1106895426",
  },  
  //Framery
  {
    id: 59,
    title: "Lettuce",
    subtitle: "Vidéo de marque",
    description: "Production de la vidéo de marque de Lettuce présentant les fonctionnalités du logiciel.",
    services: ["Scénario", "Cinématographie", "Intégration VFX", "Étalonnage colorimétrique"],
    videoType: "Vidéo de marque",
    industry: "SaaS",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywWxh7Tdiab8RMjqt25cZzSeDlVIhg1Y3fnXCT    ",
    vimeoUrl: "https://vimeo.com/1110291462",
  },
  //Growe
  {
    id: 60,
    title: "Growe",
    subtitle: "Évènement",
    description: "Aftermovie suivant Growe lors de leur participation à l'ICE London 2024",
    services: ["Production multi-caméra", "Streaming en direct", "Réels de highlights", "Post-production"],
    videoType: "Évènement",
    industry: "Startup",
    thumbnail: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9Kyw9RO7p8dcY8QMfmcb0oqhrSvFPJjk5al3EDgu  ",
    vimeoUrl: "https://vimeo.com/1104168902",
  },
//62 Cegedim - Pharmaceuticals
 {
     id: 62,
     title: "Cegedim",
     subtitle: "Démonstration produit",
     description: "Vidéo de présentation de Cegedim Pharma.",
     services: ["Scénario", "Graphismes animés", "Étalonnage"],
     videoType: "Démonstration produit",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfsA1Zb5a93bxoLyhcW8aNnVRf0tO2vu4mHdZ",
     vimeoUrl: "https://vimeo.com/1113713798",
    },
    {
     id: 63,
     title: "Cegedim",
     subtitle: "Vidéo explicative",
     description: "Vidéo animée expliquant les différentes expertises de Cegedim Pharma.",
     services: ["Scénario", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo explicative",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVL3177Lbf8wJFWPDVs4Ky3z2UpGML7SAeE10r",
     vimeoUrl: "https://vimeo.com/1113713647",
    },
//Sanofi - Pharmaceuticals
   {
     id: 64,
     title: "Sanofi",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque présantant la culture de l'entreprise Sanofi France.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de marque",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6XA4z2yuM0sOH4LRiZ2hEraGKUtQVDIYCP3b",
     vimeoUrl: "https://vimeo.com/1114223480",
    },
    {
     id: 65,
     title: "Sanofi",
     subtitle: "Évènement",
     description: "Vidéo de l'évènement Sanofi France, Place d'Avenir 2025.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Évènement",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVakfaUfZsONX0DMj54Vk3gxKWAvEe9Tmohn6Y",
     vimeoUrl: "https://vimeo.com/1114222965",
    },
    {
     id: 66,
     title: "Sanofi",
     subtitle: "Conseil d'expert",
     description: "Vidéo d'explication sur la maladie de Niemann-Pick avec Dr Nathalie Guffon.",
     services: ["Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Conseil d'expert",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVfAQ4yVa93bxoLyhcW8aNnVRf0tO2vu4mHdZJ",
     vimeoUrl: "https://vimeo.com/1114223230",
    },
    {
     id: 67,
     title: "Sanofi",
     subtitle: "Motion design",
     description: "Episode 1 de la série animée de Sanofi France, Mon système immunitaire et moi.",
     services: ["Scénario", "Graphismes animés", "Voix-off","Étalonnage"],
     videoType: "Motion design",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVvzZRh313dJewK5HDhqcx2ks9fTPaG0RgtMrU",
     vimeoUrl: "https://vimeo.com/1114222805",
    },
    {
     id: 68,
     title: "Sanofi",
     subtitle: "Motion design",
     description: "Episode 2 de la série animée de Sanofi France, Mon système immunitaire et moi.",
     services: ["Scénario", "Graphismes animés", "Voix-off","Étalonnage"],
     videoType: "Motion design",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVSwn5f4UCDrvtja6n9zgLHo1Uq5I0Mu78VS4d",
     vimeoUrl: "https://vimeo.com/1114222701",
    },
    {
     id: 69,
     title: "Sanofi",
     subtitle: "Motion design",
     description: "Episode 3 de la série animée de Sanofi France, Mon système immunitaire et moi.",
     services: ["Scénario", "Graphismes animés", "Voix-off","Étalonnage"],
     videoType: "Motion design",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVhmAzhbLDI024dcPOMo9lrEN6UY8eWLTbkv3Q",
     vimeoUrl: "https://vimeo.com/1114222623",
    },
    //MSD France - Pharmaceuticals
    {
     id: 70,
     title: "MSD France",
     subtitle: "Vidéo de recrutement",
     description: "Vidéo de recrutement montrant le parcours professionnel des collaborateurs chez MSD.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de recrutement",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV6XyUc9juM0sOH4LRiZ2hEraGKUtQVDIYCP3b",
     vimeoUrl: "https://vimeo.com/1114255241",
    },
    {
     id: 71,
     title: "MSD France",
     subtitle: "Vidéo de recrutement",
     description: "Vidéo de recrutement montrant le parcours professionnel des collaborateurs chez MSD.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de recrutement",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVcKRLzH9r3QfKI0dziE8sFt4BVwMqT2bChkLN",
     vimeoUrl: "https://vimeo.com/1114255323",
    },
    {
     id: 72,
     title: "MSD France",
     subtitle: "Vidéo de recrutement",
     description: "Vidéo de recrutement montrant le parcours professionnel des collaborateurs chez MSD.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de recrutement",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVXCrXCKyU25xHY6yjCthZbQeBr3P09VOWigE8",
     vimeoUrl: "https://vimeo.com/1114255577",
    },
    {
     id: 73,
     title: "MSD France",
     subtitle: "Coneil d'expert",
     description: "Conseil d'expert au sujet de l'immunothérapie.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Conseil d'expert",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVlMLwbKpzsmTAV4v5ZlCLMrhXaKHPkY1W98jb",
     vimeoUrl: "https://vimeo.com/1114255679",
    },
    {
     id: 74,
     title: "MSD France",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque au siège de MSD France présentant la culture d'entreprise.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de marque",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVG0CLLPBHNo2Fl95RE1eVgdJmnxZq4zjfCtBK",
     vimeoUrl: "https://vimeo.com/1114255401",
    },
    {
     id: 75,
     title: "MSD France",
     subtitle: "Vidéo de marque",
     description: "Vidéo de marque sur l'histoire de MSD.",
     services: ["Scénario", "Cinématographie", "Graphismes animés", "Étalonnage"],
     videoType: "Vidéo de marque",
     industry: "Santé",
     thumbnail: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVjXyrAAnk6Z0aKAOH3TspmrCuFeME74fB5QqN",
     vimeoUrl: "https://vimeo.com/1114255401",
    },

  ]
)

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