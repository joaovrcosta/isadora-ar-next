import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/shadcn/ui/card';
import { Input } from '@/components/shadcn/ui/input';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
} from '@/components/shadcn/ui/sheet';
import Image from 'next/image';
import React, { useState } from 'react';

interface SearchBarProps {
  openSearchBox: boolean;
  setOpenSearchBox: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  openSearchBox,
  setOpenSearchBox,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
    console.log('Searching for:', query);
  };

  const handleCleanSearch = () => {
    setQuery('');
  };

  return (
    <Sheet open={openSearchBox} onOpenChange={setOpenSearchBox}>
      <SheetTrigger className="h-7 w-7 delay-75 hover:opacity-70">
        {!openSearchBox ? (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </SheetTrigger>

      <SheetOverlay className="top-20 bg-white/75 md:top-24" />

      <SheetContent side="top" className="top-20 px-12 pb-10 pt-6 md:top-24">
        <div className="relative pb-14">
          <div className="absolute left-0 top-0 flex h-[46px] w-[46px] items-center justify-center leading-[46px]">
            <svg
              width={27}
              height={27}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="¿Qué estás buscando?"
            className="static h-12 w-full rounded-none border-x-0 border-b border-t-0 border-black pb-[5px] pl-12 text-[28px] font-light placeholder:font-light placeholder:text-gray-300 focus-visible:ring-0"
          />
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 flex h-[46px] w-[46px] items-center justify-center leading-[46px]"
          >
            {query ? (
              <svg
                width={27}
                height={27}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleCleanSearch}
              >
                <path
                  d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                width={27}
                height={27}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {/** Results */}
        <div>
          {results.length == 0 && (
            <>
              <h2 className="font-semibold uppercase">Trending</h2>
              <div className="flex flex-col gap-3 pt-4 md:flex-row">
                <Card className="flex border-none shadow-none">
                  <div>
                    <Image
                      src={
                        '/products/trending/45431601_0_1_20230831120333.webp'
                      }
                      height={144}
                      width={144}
                      alt="Regalables"
                      className="h-28 w-28 md:h-36 md:w-36"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-2 pt-3">
                    <CardTitle className="uppercase text-[#ac4545]">
                      Regalables
                    </CardTitle>
                    <CardDescription>Set de brochas</CardDescription>
                    <CardDescription>$ 15.900</CardDescription>
                  </CardContent>
                </Card>

                <Card className="flex border-none shadow-none">
                  <div>
                    <Image
                      src={
                        '/products/trending/48881001_0_1_20240813151132.webp'
                      }
                      height={144}
                      width={144}
                      alt="Bañado en oro"
                      className="h-28 w-28 md:h-36 md:w-36"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-2 pt-3">
                    <CardTitle className="uppercase text-[#ac4545]">
                      Bañado en oro
                    </CardTitle>
                    <CardDescription>Set de aros</CardDescription>
                    <CardDescription>$ 9.500</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
