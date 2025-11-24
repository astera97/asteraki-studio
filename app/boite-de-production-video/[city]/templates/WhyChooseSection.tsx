// src/app/agence-audiovisuelle/[city]/templates/WhyChooseSection.tsx

import Link from "next/link";

interface WhyChooseSectionProps {
  whyChooseContent: {
    heading: string;
    firstParagraph: string;
    secondParagraph: string;
    reasons: { number: string; title: string; description: string }[];
    quote: string;
    stats: { value: string; label: string }[];
    videoSrc: string;
  };
}

export default function WhyChooseSection({ whyChooseContent }: WhyChooseSectionProps) {
  return (
    <section className="py-24" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm font-medium mb-6">
              La Puissance Du Storytelling Vidéo
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              {whyChooseContent.heading}
            </h2>

            <p className="text-white mb-8 leading-relaxed">
              {whyChooseContent.firstParagraph}
            </p>

            <p className="text-white mb-10 leading-relaxed">
              {whyChooseContent.secondParagraph}
            </p>

            <div className="space-y-6">
              {whyChooseContent.reasons.map((reason, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {reason.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-orange-500 pl-6 py-2 mt-10 italic text-gray-300">
              {whyChooseContent.quote}
            </blockquote>

            <div className="mt-12">
              <Link href="/contact" passHref>
                <button className="btn-luxury border-0 px-6 sm:px-8 py-3 rounded-full text-base text-white text-semibold sm:text-lg mb-4 sm:mb-2">
                  Demander un devis
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Video - Auto-looping, silent */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-video bg-gray-800 border-2 border-white rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={whyChooseContent.videoSrc} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {whyChooseContent.stats.map((stat, idx) => (
                <div key={idx} className="bg-black/40 rounded-xl p-6 border border-white">
                  <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-orange-500/10"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-orange-500/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}