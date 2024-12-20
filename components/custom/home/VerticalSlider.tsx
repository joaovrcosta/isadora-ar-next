'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 0,
    src: '/banner/ISA_AR_BANNER_DESK_RDV.webp',
    href: '/newin',
    alt: 'Campanhas - New In',
  },
  {
    id: 1,
    src: '/banner/ISA_AR_Loyalty_BannerHome_Desk.webp',
    href: '/isaclub',
    alt: 'Campanhas - Isa Club',
  },
];

const slidesMobile = [
  {
    id: 0,
    src: '/banner/ISA_AR_BANNER_MOBILE_RDV.webp',
    href: '/new-in',
    alt: 'Campanhas - New In',
  },
  {
    id: 1,
    src: '/banner/ISA_AR_Loyalty_BannerHome_Mobile_1_.webp',
    href: '/new-in',
    alt: 'Campanhas - Isa Club',
  },
];

interface VerticalSliderProps {
  className?: string;
  mobile?: boolean;
}

const VerticalSlider = ({ className, mobile }: VerticalSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [sliderHeight, setSliderHeight] = useState('auto');
  const carousel = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSliding(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    if (carousel.current) {
      observer.observe(carousel.current);
    }

    return () => {
      if (carousel.current) {
        observer.unobserve(carousel.current);
      }
    };
  }, []);

  // Slide automatically
  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        setCurrentSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isSliding]);

  // Update slider height
  useEffect(() => {
    const updateSliderHeight = () => {
      if (imageRef.current) {
        setSliderHeight(`${imageRef.current.clientHeight}px`);
      }
    };

    updateSliderHeight();
    window.addEventListener('resize', updateSliderHeight);

    return () => {
      window.removeEventListener('resize', updateSliderHeight);
    };
  }, [currentSlide]);

  const slidesToRender = mobile ? slidesMobile : slides;

  return (
    <div
      ref={carousel}
      className={cn(
        'relative mb-[2px] w-full overflow-hidden p-[1px]',
        className,
      )}
      style={{ height: sliderHeight }}
    >
      <div
        className="flex flex-col gap-[2px] transition-transform duration-700 ease-in-out md:block"
        style={{
          transform: `translateY(-${currentSlide * 100}%)`,
          height: sliderHeight,
        }}
      >
        {slidesToRender.map(({ src, href, id, alt }) => (
          <Link key={id} href={href} passHref>
            <div className="relative w-full">
              <span className="sr-only">{alt}</span>
              <Image
                ref={id === currentSlide ? imageRef : null}
                src={src}
                alt={alt}
                loading="lazy"
                width={!mobile ? 1920 : 821}
                height={mobile ? 901 : 1301}
                className="w-full object-cover"
                onLoad={() => {
                  if (id === currentSlide && imageRef.current) {
                    setSliderHeight(`${imageRef.current.clientHeight}px`);
                  }
                }}
              />
            </div>
          </Link>
        ))}
      </div>

      <ul className="absolute bottom-1/2 right-2 z-10 flex translate-y-1/2 transform flex-col justify-center space-y-2">
        {slides.map((_, index) => (
          <li className="!mx-0 my-1 px-[5px] py-[8px]" key={index}>
            <button
              className={`m-0 h-3 w-3 rounded-full border border-black p-0 ${
                currentSlide === index ? 'bg-black' : 'bg-transparent'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerticalSlider;
