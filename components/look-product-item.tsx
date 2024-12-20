'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './shadcn/ui/carousel';
import { ChevronRight } from 'lucide-react';

interface ProductItemProps {
  name: string;
  price: number;
  images: { default: string; hover: string };
  colors: { value: string; label: string; colorCode: string }[];
  sizes: string[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export function LookProductItem({
  name,
  price,
  images,
  sizes,
}: ProductItemProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || '');

  const slugifiedName = slugify(name);

  const sizeGroups = chunkArray(sizes, 4);

  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/5] w-full">
        <Link href={`/product/${slugifiedName}`} passHref>
          <Image
            src={images.default}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer object-cover"
          />
        </Link>

        <div className="relative">
          <div className="absolute left-2 top-2 flex h-4 w-4 items-center justify-center border border-black bg-white">
            <input
              type="radio"
              name="product"
              id={`product-${slugifiedName}`}
              className="peer hidden"
            />
            <label
              htmlFor={`product-${slugifiedName}`}
              className="h-2 w-2 cursor-pointer bg-white peer-checked:border-black peer-checked:bg-black"
            ></label>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-transparent px-4 py-4">
          <div className="bg-white py-2">
            <Carousel className="relative">
              <CarouselContent className="flex items-center justify-center">
                {sizeGroups.map((group, index) => (
                  <CarouselItem
                    key={index}
                    className="flex flex-shrink-0 items-center justify-center space-x-4"
                  >
                    {group.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-h-[36px] min-w-[40px] rounded-none border border-gray-200 text-sm font-medium ${
                          selectedSize === size
                            ? 'bg-black text-white'
                            : 'bg-white text-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute left-0 top-[50%] -translate-y-1/2 transform border-none p-2 shadow-none">
                {'<'}
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-[50%] -translate-y-1/2 transform border-none p-2 shadow-none">
                <ChevronRight size={30} />
              </CarouselNext>
            </Carousel>
          </div>

          <button
            className="w-full bg-black py-3 text-sm font-medium uppercase text-white"
            onClick={() =>
              alert(
                `Produto "${name}" no tamanho "${selectedSize}" adicionado à sacola!`,
              )
            }
          >
            Adicionar à sacola
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col space-y-2">
        <span className="text-xs font-bold tracking-[2px]">
          <Link href={`/product/${slugifiedName}`} passHref>
            {name}
          </Link>
        </span>
        <p className="text-[11px] font-medium tracking-[2px]">${price}</p>
      </div>
    </div>
  );
}
