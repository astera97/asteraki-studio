// src/app/templates/PopularVideoTypesSection.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoType {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function PopularVideoTypesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  const videoTypes: VideoType[] = [
    {
      id: "motion-design",
      title: "Motion Design",
      description: "Transformez vos diapositives en contenus percutants.",
      image: "/illustration_vt.webp?height=200&width=300&text=Motion+Design",
      link: "/motion-design",
    },
    {
      id: "recruitment-video",
      title: "Vidéo de Recrutement",
      description: "Scale your social media design effortlessly.",
      image: "/social_ads_vt.webp?height=200&width=300&text=Social+Media",
      link: "/production-video-recrutement",
    },
    {
      id: "crowdfunding-video",
      title: "Vidéo de financement",
      description: "Gagnez en visibilité avec des vidéos sociales mensuelles.",
      image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywC58mNn6dH7rVT25qFa9GQY8gkxhfvsZSXJMC?height=200&width=300&text=Social+Video",
      link: "/production-video-financement",
    },
    {
      id: "brand-video",
      title: "Vidéo de Marque",
      description: "Contenu personnalisé et sur mesure pour votre prochaine campagne.",
      image: "https://xb26hl5f9h.ufs.sh/f/myb9AtBX9KywciX7BI0w7eqHupO4CMz98UaWrhviA3ItxKEd",
      link: "/production-video-marque",
    },
    {
      id: "explainer-video",
      title: "Vidéo Explicative",
      description: "Simplifiez les concepts complexes avec des animations engageantes.",
      image: "/tutorial_vt.webp?height=200&width=300&text=Explainer+Video",
      link: "/production-video-explicative",
    },
    {
      id: "product-demo",
      title: "Démonstration Produit",
      description: "Mettez en valeur les fonctionnalités de votre produit en action.",
      image: "/overview_vt.webp?height=200&width=300&text=Product+Demo",
      link: "/production-video-demonstration-produit",
    },
    {
      id: "customer-story",
      title: "Témoignage Client",
      description: "Renforcez la confiance avec des histoires clients authentiques.",
      image: "/testimonial_vt.webp?height=200&width=300&text=Testimonial",
      link: "/production-video-temoignage-client",
    },
    {
      id: "event-video",
      title: "Vidéos d'Événement",
      description: "Capturez vos moments clés pendant vos événements.",
      image: "https://py0hr1mf9k.ufs.sh/f/1AsXvEojqztVawLVXGpZsONX0DMj54Vk3gxKWAvEe9Tmohn6",
      link: "/production-video-evenementielle",
    },
  ];

  // Create a seamless infinite array by duplicating the items
  const infiniteItems = [...videoTypes, ...videoTypes, ...videoTypes];

  // Check scroll capability
  const checkScrollable = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      setCanScrollLeft(container.scrollLeft > 1);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  // Smooth scroll to position
  const scrollToLeft = () => {
    if (carouselRef.current && !isDragging) {
      const container = carouselRef.current;
      // Scroll by one item width
      const itemWidth = container.offsetWidth / 4; // 4 items visible
      scrollToPosition(container.scrollLeft - itemWidth);
    }
  };

  const scrollToRight = () => {
    if (carouselRef.current && !isDragging) {
      const container = carouselRef.current;
      // Scroll by one item width
      const itemWidth = container.offsetWidth / 4; // 4 items visible
      scrollToPosition(container.scrollLeft + itemWidth);
    }
  };

  const scrollToPosition = (position: number, behavior: 'smooth' | 'auto' = 'smooth') => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: position,
        behavior
      });
      setTimeout(checkScrollable, 300);
    }
  };

  // Mouse/touch event handlers for drag functionality
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX('touches' in e ? e.touches[0].pageX : e.pageX - carouselRef.current.offsetLeft);
      setInitialScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    carouselRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      const container = carouselRef.current;
      
      // Get current scroll position
      const scrollPosition = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const itemWidth = container.offsetWidth / 4;
      
      // If we're near the beginning, loop to the end
      if (scrollPosition < itemWidth) {
        scrollToPosition(container.scrollWidth - container.clientWidth * 2, 'smooth');
      } 
      // If we're near the end, loop to the beginning
      else if (scrollPosition > maxScroll - itemWidth) {
        scrollToPosition(container.clientWidth, 'smooth');
      }
    }
  };

  const handleScroll = () => {
    if (!isDragging && carouselRef.current) {
      const container = carouselRef.current;
      const scrollPosition = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const itemWidth = container.offsetWidth / 4;
      
      // If we're at the very beginning (after a loop)
      if (scrollPosition < 10) {
        // Jump to the middle section seamlessly
        container.scrollTo({
          left: container.scrollWidth / 3,
          behavior: 'auto'
        });
      }
      // If we're at the very end (after a loop)
      else if (scrollPosition > maxScroll - 10) {
        // Jump to the middle section seamlessly
        container.scrollTo({
          left: container.scrollWidth / 3,
          behavior: 'auto'
        });
      }
      
      checkScrollable();
    }
  };

  // Setup event listeners
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    // Add event listeners
    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScrollable);

    // Prevent text selection while dragging
    const preventSelection = (e: Event) => {
      if (isDragging) e.preventDefault();
    };
    document.addEventListener('selectstart', preventSelection);

    // Initial check
    requestAnimationFrame(() => {
      // Start in the middle section for seamless infinite scrolling
      container.scrollLeft = container.scrollWidth / 3;
      checkScrollable();
    });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScrollable);
      document.removeEventListener('selectstart', preventSelection);
    };
  }, [isDragging]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title container - now positioned above the carousel */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Une agence audiovisuelle pour tous types de contenus vidéos
          </h2>
        </div>

        <div className="relative">
          {/* Controls container - positioned above the carousel */}
          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <button 
                onClick={scrollToLeft}
                disabled={!canScrollLeft || isDragging}
                aria-label="Previous category"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  canScrollLeft && !isDragging
                    ? 'bg-gray-200 hover:bg-gray-300' 
                    : 'bg-gray-100 cursor-not-allowed opacity-50'
                }`}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={scrollToRight}
                disabled={!canScrollRight || isDragging}
                aria-label="Next category"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  canScrollRight && !isDragging
                    ? 'bg-gray-200 hover:bg-gray-300' 
                    : 'bg-gray-100 cursor-not-allowed opacity-50'
                }`}
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel container with drag support */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex space-x-6 min-w-max">
              {infiniteItems.map((videoType, index) => (
                <Link 
                  key={`${videoType.id}-${index}`}
                  href={videoType.link}
                  className="video-type-card flex-shrink-0 w-[80%] max-w-xs rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100"
                >
                  <div className="relative w-full pt-[150%]"> {/* 2:3 aspect ratio */}
                    <Image
                      src={videoType.image}
                      alt={videoType.title}
                      fill
                      className="object-cover rounded-t-xl"
                      priority={index === 0 || index === videoTypes.length}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white text-lg font-bold text-left ml-2.5">
                        {videoType.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}