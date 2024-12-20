'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface ProductItemProps {
  name: string;
  price: number;
  images: { default: string; hover: string };
  colors: { value: string; label: string; colorCode: string }[];
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

export function ProductItemCarousel({
  name,
  price,
  images,
  colors,
}: ProductItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || '');

  const slugifiedName = slugify(name);
  const pathname = usePathname();

  return (
    <div className="group relative w-full">
      <div
        className="relative aspect-[4/5] w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/product/${slugifiedName}`} passHref>
          <Image
            src={isHovered ? images.hover : images.default}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="cursor-pointer object-cover transition-all duration-300"
          />
        </Link>

        <button
          className={`absolute bottom-0 left-0 hidden w-full rounded-sm bg-[rgb(255,184,184)] py-3 text-sm font-medium uppercase text-black transition-opacity duration-300 lg:block ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Añadir al carrito
        </button>
      </div>

      <div className="mt-4 flex h-[150px] flex-col pb-4 pl-5 pr-4 pt-2">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-bold tracking-[2px]">
              <Link href={`/product/${slugifiedName}`} passHref>
                {name}
              </Link>
            </span>
            <p className="text-[11px] font-medium tracking-[2px]">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
