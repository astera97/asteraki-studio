// src/app/production-audiovisuelle/[city]/templates/InvisibleInterlinkBlock.tsx


import Link from "next/link";
import { CITIES } from "../data/cities";

interface InvisibleInterlinkBlockProps {
  currentCityId: string;
}

export default function InvisibleInterlinkBlock({ currentCityId }: InvisibleInterlinkBlockProps) {
  // Filter out the current city to avoid self-linking
  const otherCities = CITIES.filter(city => city.id !== currentCityId);

  // Example: Link to a limited number of other city pages to avoid excessive links
  // You can adjust the slice number (e.g., 10, 50, 100) based on your SEO strategy
  const linksToOtherCities = otherCities.slice(0, 50);

  return (
    // This div is visually hidden but accessible to screen readers and search engines
    <div
      style={{
        display: "block",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
        fontSize: 0,
        margin: 0,
        padding: 0,
        border: 0,
        position: "absolute",
        left: "-9999px",
      }}
      aria-hidden="true"
    >
      {/* Link to the main event video production service page */}
      <Link href="/production-video-b2b">
        Société de production audiovisuelle
      </Link>

      {/* Links to other city pages within this template */}
      {linksToOtherCities.map(city => (
        <Link
          key={city.id}
          href={`/boite-de-production-video/${city.id}`}
        >
          Boite de production vidéo à {city.name} {/* Use descriptive anchor text */}
        </Link>
      ))}
    </div>
  );
}