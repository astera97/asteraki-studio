// Import the Link component from Next.js
import Link from "next/link";
import Image from "next/image";

// Define the key cities in Normandie where you operate
const normandieCities = [
  {
    id: "rouen",
    name: "Rouen",
    href: "/production-audiovisuelle-rouen",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV1n9a3JojqztV0JATyZN26ohPfmBaei9cuLXR", // urban/Seine view
  },
  {
    id: "le-havre",
    name: "Le Havre",
    href: "#",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVeJEPhOI8GO1WIHuqP47SYN8FaV6DnlysEmKQ", // port/modern architecture
  },
  {
    id: "caen",
    name: "Caen",
    href: "#",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVXA74OQyU25xHY6yjCthZbQeBr3P09VOWigE8", // historic center/university
  },
  {
    id: "evreux",
    name: "Évreux",
    href: "#",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVqSgdbsEJ71KVf4mZNtnHaRrMPQjFOAu6wxlD", // cathedral/town center
  },
  {
    id: "cherbourg",
    name: "Cherbourg",
    href: "#",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVMD3yucX6YLO1BSGiKj2D5WhHcuQrys4MloaJ", // maritime/industrial
  },
  {
    id: "dieppe",
    name: "Dieppe",
    href: "#",
    image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztV8Lwq3TOG4YknlEfbvRpMT0XH617A9IO5SduC", // port/coastal town
  },
];

export default function NormandieLocationsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-4 sm:px-6 py-2 border border-gray-600 rounded-full text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider">
              Normandie
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 px-4">
            Production audiovisuelle partout en Normandie
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            Basés en Normandie, nous intervenons rapidement dans les principales villes de la région — sans frais de déplacement supplémentaires.
          </p>
        </div>

        {/* Cities Grid - Responsive: 2 cols mobile, 3 cols tablet+, 3 cols desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {normandieCities.map((city) => (
            <Link key={city.id} href={city.href} passHref>
              <div className="relative rounded-xl overflow-hidden cursor-pointer group block">
                {/* Background Image with zoom effect */}
                <div className="aspect-[3/2] sm:aspect-[3/1] relative">
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={`Production audiovisuelle à ${city.name}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-2">
                  <h3 className="text-white text-sm sm:text-base font-medium text-center leading-tight">
                    {city.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}