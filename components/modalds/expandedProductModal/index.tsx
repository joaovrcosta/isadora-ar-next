'use client';

import { Button } from '@/components/shadcn/ui/button';
import { DialogContent } from '@/components/shadcn/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/ui/carousel';
import { Minus, Plus } from 'lucide-react';

export function ExpandedProductModal({
  images,
}: {
  images: (string | StaticImageData)[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const delta = event.deltaY > 0 ? -0.1 : 0.1;
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  const increaseZoom = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 3));
  };

  const decreaseZoom = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 1));
  };

  return (
    <DialogContent className="flex h-full w-full items-start justify-center">
       <div className="absolute top-4 left-4 flex flex-col space-y-2 ">
          <Button
            onClick={increaseZoom}
            className="bg-transparent text-[#4d4d4d] shadow-none flex items-center justify-center hover:bg-transparent"
          >
            <Plus size={32} />
          </Button>
          <Button
            onClick={decreaseZoom}
            className="bg-transparent text-[#4d4d4d]  shadow-none flex items-center justify-center hover:bg-transparent"
          >
            <Minus size={32} />
          </Button>
        </div>
      <div className="max-h-[746px] max-w-[620px] space-y-4 relative">
        <Carousel>
          <CarouselContent
            className="flex"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div
                  className="overflow-hidden"
                  onWheel={handleWheel}
                >
                  <Image
                    src={image}
                    layout="responsive"
                    width={616}
                    height={788}
                    alt={`Imagem do produto ${index + 1}`}
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Botões de zoom no canto superior esquerdo */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2 lg:hidden xl:hidden md:hidden">
          <Button
            onClick={increaseZoom}
            className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
          >
            +
          </Button>
          <Button
            onClick={decreaseZoom}
            className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center"
          >
            -
          </Button>
        </div>

        {/* Miniaturas */}
        <div className="flex items-center justify-center space-x-3 mt-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-[120px] w-[110px] cursor-pointer rounded border ${
                currentSlide === index
                  ? 'border-2 border-black'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={image}
                width={110}
                height={100}
                alt={`Imagem ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );
}
