'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './shadcn/ui/sheet';
import { Button } from './shadcn/ui/button';
import { ChevronDown, X } from 'lucide-react';

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

export function LookProductItemMobile({
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
              // defaultChecked={true}
            />
            <label
              htmlFor={`product-${slugifiedName}`}
              className="h-2 w-2 cursor-pointer bg-white peer-checked:border-black peer-checked:bg-black"
            ></label>
          </div>
        </div>

        <main className="absolute bottom-0 left-0 w-full bg-transparent px-4 py-4">
          <Sheet>
            <SheetTrigger>
              <div className="flex h-[32px] w-[64px] items-center justify-center space-x-1 rounded-sm border bg-white text-black hover:bg-white">
                <span className="text-[14px]">{selectedSize}</span>
                <ChevronDown className="" size={14} />
              </div>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="rounded-tl-3xl rounded-tr-3xl"
            >
              <div>
                <SheetHeader className="items-left mb-8 flex justify-start">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-left">
                      Selecione o seu tamanho
                    </SheetTitle>
                    <div>
                      <SheetClose>
                        <X className="text-black" />
                      </SheetClose>
                    </div>
                  </div>
                </SheetHeader>
                <SheetDescription>
                  <div className="mb-6 flex flex-col items-center justify-between">
                    {sizes.map((size) => (
                      <SheetClose key={size} asChild>
                        <div
                          className="flex h-[48px] w-full cursor-pointer items-center justify-center"
                          onClick={() => setSelectedSize(size)}
                        >
                          <p className="text-[16px]">{size}</p>
                        </div>
                      </SheetClose>
                    ))}
                  </div>
                  <Button className="h-[56px] w-full rounded-sm bg-black">
                    Selecionar
                  </Button>
                </SheetDescription>
              </div>
            </SheetContent>
          </Sheet>
        </main>
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
