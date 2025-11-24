// src/app/boite-de-production-video/[city]/templates/ValuePropSection.tsx

import Link from "next/link";
import Image from "next/image";

interface ValuePropSectionProps {
  valuePropContent: {
    heading: string;
    description: string;
    image: string;
    imageAlt: string;
  };
}

export default function ValuePropSection({ valuePropContent }: ValuePropSectionProps) {
  return (
    <section className="pt-1 pb-24" style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column (now on the left) */}
          <div className="max-w-xl order-1 lg:order-none">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              {valuePropContent.heading}
            </h2>
            <div className="space-y-6 text-lg text-black leading-relaxed">
              {valuePropContent.description.split("\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/contact" passHref>
                <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                  Obtenir un devis
                </button>
              </Link>
            </div>
          </div>

          {/* Image Column (now on the right) */}
          <div className="relative order-0 lg:order-none">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={valuePropContent.image}
                alt={valuePropContent.imageAlt}
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
