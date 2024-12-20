'use client';

import useFilterStore from '@/app/_stores/useFilterStore';
import * as Slider from '@radix-ui/react-slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import { Button } from '@/components/shadcn/ui/button';
import { Label } from '@/components/shadcn/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/ui/radio-group';
import {
  Sheet,
  SheetTrigger,
  SheetOverlay,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/shadcn/ui/sheet';
import { cn, formatCurrencyARS } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn/ui/tooltip';

interface AsideProps {
  className?: string;
}

const Aside: React.FC<AsideProps> = ({ className }) => {
  const {
    filters,
    setFilters,
    filteredProducts,
    sortOrderOptions,
    setSortOrder,
    sortOrder,
    colorOptions,
    talleOptions,
  } = useFilterStore();
  const [isSheetOrderOpen, setIsSheetOrderOpen] = useState(false);
  const [isSheetFilterOpen, setIsSheetFilterOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>(filters.color);
  const [selectedPrices, setSelectedPrices] = useState({
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  });
  const [selectedTalles, setSelectedTalle] = useState<string[]>(filters.talle);

  const handleOrderChange = (value: string) => {
    setSortOrder(value);
    setIsSheetOrderOpen(false); // Fecha o Sheet
  };

  const toggleColor = (color: string) => {
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color) // Remove a cor se já estiver selecionada
      : [...selectedColors, color]; // Adiciona a cor se não estiver selecionada

    setSelectedColors(newSelectedColors);
  };

  const toggleTalle = (talle: string) => {
    const newSelectedTalle = selectedTalles.includes(talle)
      ? selectedTalles.filter((t) => t !== talle) // Remove o talle se já estiver selecionado
      : [...selectedTalles, talle]; // Adiciona o talle se não estiver selecionado

    setSelectedTalle(newSelectedTalle);
  };

  // Função para aplicar os filtros
  const applyFilters = () => {
    setFilters({
      ...filters,
      color: selectedColors,
      minPrice: selectedPrices.minPrice,
      maxPrice: selectedPrices.maxPrice,
      talle: selectedTalles,
    });
    setIsSheetFilterOpen(false); // Fecha o Sheet
  };

  useEffect(() => {
    setSelectedColors(filters.color);
    setSelectedPrices({
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });
    setSelectedTalle(filters.talle);
  }, [filters, isSheetFilterOpen]);

  return (
    <aside className={cn(className)}>
      <div className="w-full">
        <div className="m-0 flex md:hidden lg:hidden">
          <Sheet open={isSheetFilterOpen} onOpenChange={setIsSheetFilterOpen}>
            {/** Filtrado por */}
            <SheetTrigger className="flex w-1/2 items-center justify-between gap-2 border border-r-0 border-[#e7e7e7] px-[10px] py-[6px] text-left text-xs font-medium uppercase leading-[26px] tracking-widest">
              <p>FILTRADO POR</p>
              <span className="align-middle text-sm">+</span>
            </SheetTrigger>
            <SheetOverlay className="top-20 bg-white/75 md:top-24" />
            <SheetContent className="flex w-full flex-col justify-between p-0 sm:max-w-none">
              <div>
                <SheetClose className="w-full">
                  <SheetHeader className="w-full flex-row items-center justify-between gap-2 border-b border-[#e7e7e7] p-5 pb-4 text-lg leading-5 shadow-md">
                    <div className="flex items-center gap-2">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <SheetTitle>Filtrar por</SheetTitle>
                    </div>

                    {/** Close cross icon */}
                    <svg
                      width="15"
                      height="15"
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
                  </SheetHeader>
                </SheetClose>

                <Accordion
                  type="single"
                  collapsible
                  className="m-auto w-4/5 p-5"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold uppercase tracking-widest">
                      precio
                    </AccordionTrigger>
                    <AccordionContent className="flex items-center justify-center gap-5">
                      <div className="w-5/6">
                        <Slider.Root
                          value={[
                            selectedPrices.minPrice,
                            selectedPrices.maxPrice,
                          ]}
                          onValueChange={(values) =>
                            setSelectedPrices({
                              minPrice: Number(values[0]),
                              maxPrice: Number(values[1]),
                            })
                          }
                          min={8297}
                          max={145000}
                          step={1}
                          minStepsBetweenThumbs={1}
                          className="relative clear-both m-1 inline-block h-[2px] w-full cursor-pointer rounded-s-sm bg-neutral-200"
                        >
                          <Slider.SliderTrack className="h-[2px] w-full bg-neutral-200">
                            <Slider.SliderRange className="absolute h-[2px] bg-rose-400" />
                          </Slider.SliderTrack>
                          <Slider.SliderThumb className="absolute -left-[9px] -top-2 h-4 w-4 rounded-full bg-rose-400" />
                          <Slider.SliderThumb className="absolute -left-1 -top-2 h-4 w-4 rounded-full bg-rose-400" />
                        </Slider.Root>
                        <label className="mb-3 flex items-center justify-between tracking-widest">
                          <div className="gap-3">
                            <p className="mb-1">Minimo</p>
                            <p>{formatCurrencyARS(selectedPrices.minPrice)}</p>
                          </div>

                          <div>
                            <p className="mb-1">Máximo</p>
                            <p>{formatCurrencyARS(selectedPrices.maxPrice)}</p>
                          </div>
                        </label>
                        <p>{filteredProducts.length} productos</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="font-semibold uppercase tracking-widest">
                      Color
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-wrap items-center justify-center gap-5 py-5">
                      {Object.entries(colorOptions)?.map(
                        ([key, { label, value }]) => (
                          <TooltipProvider key={label}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div
                                  onClick={() => toggleColor(key)}
                                  className={cn(
                                    'borcer-[#dadada] h-11 w-11 cursor-pointer rounded-full border outline outline-1 outline-offset-1 outline-transparent',
                                    value,
                                    selectedColors.includes(key)
                                      ? 'outline-black'
                                      : '', // Destaca com borda preta se selecionado
                                  )}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{key}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ),
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="font-semibold uppercase tracking-widest">
                      Talle
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-wrap items-center justify-center gap-5 pt-2">
                      {Object.entries(talleOptions)?.map(([key, value]) => (
                        <TooltipProvider key={key}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                onClick={() => toggleTalle(key)}
                                className={cn(
                                  'borcer-[#dadada] flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border outline outline-1 outline-offset-1 outline-transparent',
                                  selectedTalles.includes(key)
                                    ? 'outline-black'
                                    : '', // Destaca com borda preta se selecionado
                                )}
                              >
                                <p className="text-center text-[10px] capitalize text-stone-500">
                                  {key.toLowerCase()}
                                </p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{value}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <SheetFooter className="border-t border-[#e7e7e7] px-5 py-2.5 shadow-[0_-1px_4px_rgba(0,0,0,.2)]">
                <Button
                  onClick={applyFilters}
                  className="w-full rounded text-xs uppercase tracking-[2px]"
                >
                  Aplicar Filtros
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet open={isSheetOrderOpen} onOpenChange={setIsSheetOrderOpen}>
            {/** Ordenar Por */}
            <SheetTrigger className="flex w-1/2 items-center justify-between gap-2 border border-r-0 border-[#e7e7e7] px-[10px] py-[6px] text-left text-xs font-medium uppercase leading-[26px] tracking-widest">
              <p>Ordernado Por</p>{' '}
              <span className="align-middle text-sm">+</span>
            </SheetTrigger>
            <SheetOverlay className="top-20 bg-white/75 md:top-24" />
            <SheetContent className="w-full p-0 sm:max-w-none">
              <SheetClose className="w-full">
                <SheetHeader className="w-full flex-row items-center justify-between gap-2 border-b border-[#e7e7e7] p-5 pb-4 text-lg leading-5 shadow-md">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=""
                    >
                      <path d="m21 16-4 4-4-4" />
                      <path d="M17 20V4" />
                      <path d="m3 8 4-4 4 4" />
                      <path d="M7 4v16" />
                    </svg>
                    <SheetTitle>Ordenado por</SheetTitle>
                  </div>

                  <svg
                    width="15"
                    height="15"
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
                </SheetHeader>
              </SheetClose>

              <RadioGroup
                defaultValue={sortOrder}
                className="flex-grow overflow-y-auto bg-white p-5"
                onValueChange={handleOrderChange}
              >
                {Object.values(sortOrderOptions).map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-2 py-3 hover:opacity-75"
                  >
                    <RadioGroupItem
                      value={option}
                      id={option}
                      className="cursor-pointer"
                    />
                    <Label
                      htmlFor={option}
                      className="flex-grow cursor-pointer capitalize"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
