// Import the Link component from Next.js
import Link from "next/link";
import Image from "next/image";

// Define the industry data, potentially adding a 'href' property
const industries = [
  {
    id: "tech",
    name: "Technologie",
    // Add the path to the relevant page for this industry
    href: "/tech-video-production-services", 
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1n9a3JojqztV0JATyZN26ohPfmBaei9cuLXR  ",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    href: "/ecommerce-video-production-services", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVeJEPhOI8GO1WIHuqP47SYN8FaV6DnlysEmKQ  ",
  },
  {
    id: "finance",
    name: "Finance",
    href: "/video-production-for-finance", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVXA74OQyU25xHY6yjCthZbQeBr3P09VOWigE8  ",
  },
  {
    id: "energy",
    name: "Énergie", // Consider correcting the spelling to "Energy"
    href: "/services/brand-videos/energy", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV2iobvi7WJBOGwHyYpLQ8mtukDFsr9nVZ07eK  ",
  },
  {
    id: "education",
    name: "Éducation",
    href: "/educational-video-production", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVqSgdbsEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD  ", //Done
  },
  {
    id: "Automotive",
    name: "Automobile",
    href: "/services/brand-videos/automotive", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVekQ1eW8GO1WIHuqP47SYN8FaV6DnlysEmKQX  ", //Done
  },
  {
    id: "healthcare",
    name: "Santé", // Corrected capitalization
    href: "/video-production-for-healthcare", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMD3yucX6YLO1BSGiKj2D5WhHcuQrys4MloaJ  ",
  },
  {
    id: "startups",
    name: "Startups",
    href: "/video-production-for-startups", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV8Lwq3TOG4YknlEfbvRpMT0XH617A9IO5SduC  ",
  },
  {
    id: "logistics",
    name: "Logistique",
    href: "/video-production-for-logistics", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1uZkl5UojqztV0JATyZN26ohPfmBaei9cuLX  ",
  },
  {
    id: "manufacturing",
    name: "Industrie",
    href: "/services/brand-videos/manufacturing", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVsa1G16w2tlD7s56WfcNiaCEHnQOFR8xdqMV3  ", //Done
  },
  {
    id: "food beverage",
    name: "Alimentation & Boissons",
    href: "/video-production-for-consumer", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVKigItf3f3Wsd1EZQ4zPStY5JB97kxm6Ac8Hy  ", //Done
  },
  {
    id: "enterprise",
    name: "Grands Comptes",
    href: "/video-production-for-enterprise", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVsa1G16w2tlD7s56WfcNiaCEHnQOFR8xdqMV3  ",
  },
  {
    id: "saas",
    name: "SaaS",
    href: "/saas-video-production", // Example path
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVZgrZvGsT3M8YKQp7XOUWxIjLVJhstl1Gv6iq  ",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-100">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 sm:px-6 py-2 border border-gray-600 rounded-full text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Industries
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 px-4">
            Impact prouvé pour les entreprises technologiques et les industries tournées vers l'avenir.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Des startups ambitieuses aux géants mondiaux, nous avons aidé des entreprises de toutes tailles à atteindre 
            leurs objectifs marketing grâce à des contenus vidéo puissants et axés sur la stratégie.
          </p>
        </div>

        {/* Industries Grid - Responsive: 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Map through industries and wrap each item in a Link */}
          {industries.map((industry) => (
            // Use the Link component and set the href attribute
            <Link key={industry.id} href={industry.href} passHref>
              {/* The div becomes the child of Link and needs display:block or similar for the cursor-pointer to work best on the whole area */}
              <div className="relative rounded-xl overflow-hidden cursor-pointer group block"> 
                {/* Background Image with zoom effect */}
                <div className="aspect-[3/2] sm:aspect-[3/1] relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <h3 className="text-white text-xs sm:text-sm font-medium text-center leading-tight">{industry.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}