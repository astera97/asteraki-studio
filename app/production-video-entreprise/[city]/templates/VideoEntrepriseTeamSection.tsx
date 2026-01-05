import Image from "next/image";

type Props = {
  city: string;
  data: {
    heading: string;
    subheading: string;
    cards: {
      title: string;
      description: string;
      image: { src: string; alt: string };
    }[];
  };
};

export default function VideoEntrepriseTeamSection({ city, data }: Props) {
  const heading = data.heading.replace(/{{city}}/g, city);
  const subheading = data.subheading.replace(/{{city}}/g, city);

  return (
    <section className="pt-8 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {heading}
          </h2>
          <p className="text-lg text-black leading-relaxed max-w-4xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {data.cards.map((card, idx) => {
            // Adapt alt text dynamically for city
            const altText = card.image.alt.includes('{{city}}')
              ? card.image.alt.replace(/{{city}}/g, city)
              : `${card.image.alt} à ${city}`;

            return (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 border border-orange-300 hover:border-orange-500 transition-colors"
              >
                {card.image && (
                  <div className="rounded-lg overflow-hidden mb-6">
                    <Image
                      src={card.image.src}
                      alt={altText}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
