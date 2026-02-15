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
    <section className="relative pt-20 h-[60vh] md:h-[70vh] grid md:grid-cols-2">
      {/* Left side - Carousel */}
      <div className="relative h-full overflow-hidden">
        <div className="embla h-full" ref={emblaRef}>
          <div className="embla__container h-full flex">
            {carouselImages.map((src, index) => (
              <div key={index} className="embla__slide relative flex-[0_0_100%] min-w-0">
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

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? 'bg-gold-400 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right side - Content */}
      <div className="bg-gradient-to-br from-primary-800 to-primary-900 flex items-center px-8 lg:px-16 py-12">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Dakwah & Kemanusiaan<br />
            <span className="text-gold-400">Rahmatan Lil 'Alamin</span>
          </h1>
          <p className="text-base md:text-lg mb-6 text-gray-200 leading-relaxed">
            Bersama menyebarkan nilai-nilai Islam dan membangun masa depan yang lebih baik melalui program-program dakwah dan kemanusiaan yang berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dukung-kami" className="btn-gold inline-flex items-center justify-center space-x-2">
              <FaHeart />
              <span>Dukung Kami</span>
            </Link>
            <Link href="/tentang" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
