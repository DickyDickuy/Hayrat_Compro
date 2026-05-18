'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function HeroCarousel() {
  const carouselImages = [
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920',
    'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=1920',
    'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1920',
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 20 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center pt-24 pb-16">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {carouselImages.map((src, index) => (
              <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0 h-full">
                <Image
                  src={src}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/70 to-transparent z-10 pointer-events-none"></div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-gold-500 w-6'
                  : 'bg-white/40 w-1.5 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content over background */}
      <div className="container-custom relative z-20 w-full py-6">
        <div className="max-w-xl text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">
            Pendidikan & Dakwah<br />
            <span className="text-gold-500 font-serif">HAYRAT FOUNDATION</span>
          </h1>
          <p className="text-xs md:text-sm mb-6 text-gray-200 leading-relaxed max-w-lg hidden sm:block">
            Bersama menyebarkan nilai-nilai Islam dan membangun masa depan yang lebih baik melalui program-program dakwah dan kemanusiaan yang berkelanjutan.
          </p>
          <div className="flex flex-row flex-wrap gap-3 mt-4 sm:mt-0">
            <Link href="/dukung-kami" className="bg-gold-500 hover:bg-gold-600 text-primary-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-md font-bold transition-all duration-300 inline-flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-sm">
              <FaHeart />
              <span>Dukung Kami</span>
            </Link>
            <Link href="/tentang" className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-md font-bold transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm shadow-sm">
              Pelajari Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
