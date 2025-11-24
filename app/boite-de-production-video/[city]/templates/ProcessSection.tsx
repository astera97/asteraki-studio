// src/app/agence-audiovisuelle/[city]/templates/ProcessSection.tsx

// src/app/agence-audiovisuelle/[city]/templates/ProcessSection.tsx

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { getProcessContent } from "../data/getProcessContent";

export default function ProcessSection() {
  // Generate steps once per page render
  const steps = useMemo(() => getProcessContent(), []);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepClick = (index: number) => {
    setCurrentStepIndex(index);
  };

  const currentStep = steps[currentStepIndex];

  return (
    <section className="pt-24 pb-24 text-white bg-black">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Découvrez les étapes de votre production vidéo avec notre agence
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Nous gérons chaque étape, du concept initial à la livraison finale.
            Un producteur dédié vous accompagne à chaque phase avec des validations claires et un planning transparent.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const isActive = index === currentStepIndex;
              return (
                <div
                  key={step.uniqueId}
                  className={`flex items-start p-4 rounded-xl cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "bg-orange-500/20 border border-orange-500"
                      : "bg-neutral-900"
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Step Number */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 ${
                      isActive ? "bg-orange-500 text-white" : "bg-white text-black"
                    }`}
                  >
                    {index + 1}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        isActive ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        isActive ? "text-gray-200" : "text-gray-500"
                      }`}
                    >
                      {step.heading}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 pt-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[300px] border border-neutral-700">
                <Image
                  src={currentStep.image || "/placeholder.svg"}
                  alt={currentStep.title}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-black text-xs font-medium px-3 py-1.5 rounded">
                ÉTAPE {currentStepIndex + 1}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 leading-tight text-white">
                {currentStep.heading}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                {currentStep.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
