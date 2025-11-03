// src/app/boite-de-production-video/[city]/templates/CtaSection.tsx

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CtaSectionProps {
  ctaContent: {
    heading: string;
    description: string;
    buttonText: string;
  };
}

export default function CtaSection({ ctaContent }: CtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 text-white" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Main CTA Card with Background Image */}
        <div className="relative rounded-[3rem] p-6 sm:p-10 md:p-16 max-w-4xl mx-auto overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/cta_bg.svg"
                alt="Équipe de production audiovisuelle à {{city}}"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="max-w-xl">
              {/* H2 includes the focus keyword */}
              <h2 className="text-3xl xs:text-2xl sm:text-2xl lg:text-4xl font-bold leading-tight mb-6 xs:mb-6 sm:mb-8">
                {ctaContent.heading}
              </h2>

              {/* Description includes the focus keyword */}
              <p className="text-gray-300 text-base xs:text-lg leading-relaxed mb-6 xs:mb-8 sm:mb-12 max-w-lg">
                {ctaContent.description}
              </p>

              <Link href="/quiz" passHref>
                <Button className="btn-luxury border-0 px-6 py-3 w-full sm:w-auto sm:px-8 sm:py-3 rounded-full text-base sm:text-lg mb-4 sm:mb-6">
                  {ctaContent.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}