import React from "react";
import Link from "next/link";
import { CITIES } from "../data/cities";

const MAX_LINKS = 50;

export default function InvisibleInterlinkBlock({
  currentCityId,
}: {
  currentCityId: string;
}) {
  const currentIndex = CITIES.findIndex(
    (city) => city.id === currentCityId
  );

  if (currentIndex === -1) return null;

  const linkedCities = getRotatedCities(CITIES, currentIndex, MAX_LINKS);

  return (
    <section className="sr-only">
      <p>Autres villes pour la production de vidéos d’entreprise :</p>
      <ul>
        <li>
          <Link href="/production-video-saas">
            Services de production vidéo saas
          </Link>
        </li>
        {linkedCities.map((city) => (
          <li key={city.id}>
            <Link href={`/production-video-entreprise/${city.id}`}>
              Vidéo d’entreprise à {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Rotation déterministe pour que chaque page pointe vers un ensemble différent
function getRotatedCities(cities: any[], startIndex: number, limit: number) {
  const result = [];
  const total = cities.length;

  for (let i = 1; i <= limit; i++) {
    result.push(cities[(startIndex + i) % total]);
  }

  return result;
}
