import useFilterStore from '@/app/_stores/useFilterStore';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn/ui/tooltip';
import { cn, formatCurrencyARS } from '@/lib/utils';
import * as Slider from '@radix-ui/react-slider';

import { useState } from 'react';

export function AsideDesk({ className = '' }) {
  const {
    filters,
    setFilters,
    filteredProducts,
    sortOrderOptions,
    setSortOrder,
    sortOrder,
    colorOptions,
    talleOptions,
    categoriesOptions,
  } = useFilterStore();

  const [selectedColors, setSelectedColors] = useState<string[]>(filters.color);
  const [selectedPrices, setSelectedPrices] = useState({
    minPrice: filters.minPrice,
    maxPrice: filters.maxPrice,
  });

  console.log(categoriesOptions);

  const toggleColor = (color: string) => {
    const newSelectedColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color) // Remove a cor se já estiver selecionada
      : [...selectedColors, color]; // Adiciona a cor se não estiver selecionada

    setSelectedColors(newSelectedColors);
  };

  return (
    <div className={`flex ${className}`}>
      <aside className="w-full">
        <h2 className="text-md mb-4 text-sm font-medium tracking-[2px]">
          Filtrar por:
        </h2>
        <hr className="border-t border-gray-200" />

        <Accordion type="single" collapsible>
          <AccordionItem value="category">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">
                CATEGORIA
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 pb-5 pl-2">
              {Object.entries(categoriesOptions)?.map(([key, value]) => (
                <TooltipProvider key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={`/${key}`}
                        className="text-[11px] font-bold text-gray-700 transition-colors hover:text-black"
                      >
                        {value}{' '}
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{key}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">PREÇO</span>
            </AccordionTrigger>
            <AccordionContent className="flex items-center justify-center gap-5">
              <div className="w-5/6">
                <Slider.Root
                  value={[selectedPrices.minPrice, selectedPrices.maxPrice]}
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

          <AccordionItem value="color">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">COR</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap items-center justify-center gap-5 py-5">
              {Object.entries(colorOptions)?.map(([key, { label, value }]) => (
                <TooltipProvider key={label}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        onClick={() => toggleColor(key)}
                        className={cn(
                          'borcer-[#dadada] h-11 w-11 cursor-pointer rounded-full border outline outline-1 outline-offset-1 outline-transparent',
                          value,
                          selectedColors.includes(key) ? 'outline-black' : '', // Destaca com borda preta se selecionado
                        )}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{key}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="talle">
            <AccordionTrigger>
              <span className="text-[11px] text-xs tracking-[2px]">
                TAMANHO
              </span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-wrap items-center justify-center gap-5 py-5">
              {Object.entries(talleOptions)?.map(([key, value]) => (
                <TooltipProvider key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        onClick={() => toggleColor(key)}
                        className={cn(
                          'h-11 w-11 cursor-pointer rounded-full border border-[#dadada] outline outline-1 outline-offset-1 outline-transparent',
                          value, // Use o valor como a classe do tamanho
                          selectedColors.includes(key) ? 'outline-black' : '', // Destaca com borda preta se selecionado
                          'flex items-center justify-center', // Centraliza o texto dentro do círculo
                          'sm:h-10 sm:w-10', // Ajusta o tamanho para telas menores
                          'md:h-11 md:w-11', // Tamanho normal para telas maiores
                        )}
                      >
                        <p className="text-center text-[10px]">{value}</p>{' '}
                        {/* Exibe o valor dentro do círculo */}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{key}</p> {/* Exibe a chave como o label no tooltip */}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    </div>
  );
}
