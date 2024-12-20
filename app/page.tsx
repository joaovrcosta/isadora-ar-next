import Image from 'next/image';
import CarteiraDesk from '@/public/categories/AW20_BLOQUE_CARTERA_DESK.webp';
import CarteiraMobile from '@/public/categories/AW20_BLOQUE_CARTERA_MOBILE.webp';
import BijouDesk from '@/public/categories/AW20_BLOQUE_BIJOU_DESK.webp';
import BijouMobile from '@/public/categories/AW20_BLOQUE_BIJOU_MOBILE.webp';
import PerfumesYFragancias from '@/public/categories/AW20_BLOQUE_ANTEOJOS_DESK.webp';
import PerfumesYFraganciasMobile from '@/public/categories/AW20_BLOQUE_ANTEOJOS_MOBILE.webp';
import Escritorio from '@/public/categories/AW20_BLOQUE_ESCRITORIO_DESK.webp';
import EscritorioMobile from '@/public/categories/AW20_BLOQUE_ESCRITORIO_MOBILE.webp';
import Beauty from '@/public/categories/AW20_BLOQUE_BEAUTY_DESK-100_1.webp';
import BeautyMobile from '@/public/categories/AW20_BLOQUE_BEAUTY_MOBILE-100_2.webp';
import AccPelo from '@/public/categories/AW20_BLOQUE_PELO_DESK.webp';
import AccPeloMobile from '@/public/categories/AW20_BLOQUE_PELO_MOBILE.webp';
import Textil from '@/public/categories/AW20_BLOQUE_TEXTIL_DESK.webp';
import TextilMobile from '@/public/categories/AW20_BLOQUE_TEXTIL_MOBILE.webp';
import Complementos from '@/public/categories/AW20_BLOQUE_COMPLEMENTOS_DESK.webp';
import ComplementosMobile from '@/public/categories/AW20_BLOQUE_COMPLEMENTOS_MOBILE.webp';
import Link from 'next/link';
import VerticalSlider from '@/components/custom/home/VerticalSlider';

export default function Home() {
  return (
    <main className="mb-[2px] flex flex-col">
      <VerticalSlider mobile className="md:hidden" />
      <VerticalSlider className="hidden md:block" />

      <section className="h-fit w-full bg-white">
        {/** CarteiraDesk e BijouDesk */}
        <div className="flex h-auto w-full flex-col gap-0.5 md:flex-row lg:mb-0.5">
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={CarteiraDesk}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={CarteiraMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={BijouDesk}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={BijouMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
        </div>

        {/** PerfumesYFragancias e Escritorio */}
        <div className="flex h-auto w-full flex-col md:flex-row lg:mb-0.5">
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={PerfumesYFragancias}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={PerfumesYFraganciasMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={Escritorio}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={EscritorioMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
        </div>

        {/** Beauty e Acc. de Pelo */}
        <div className="flex h-auto w-full flex-col gap-0.5 md:flex-row">
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={Beauty}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={BeautyMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={AccPelo}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={AccPeloMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
        </div>

        {/** Textil e Complementos */}
        <div className="flex h-auto w-full flex-col gap-0.5 md:flex-row">
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={Textil}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={TextilMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <Link href={'/'}>
              <Image
                src={Complementos}
                alt="Campanhas"
                className="hidden transition-opacity hover:opacity-80 md:block"
              />
              <Image
                src={ComplementosMobile}
                alt="Campanhas"
                className="transition-opacity hover:opacity-80 md:hidden"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-8 z-[2147483647] flex h-[77px] w-[73px] cursor-pointer overflow-hidden">
        {/* Coloque sua imagem aqui */}
        <div className="relative h-full w-full">
          <Image
            src="/others/20230123-HkiEnPWUCDZbYHkWcwHhWYGyDUJ3-EQOVV-.png"
            alt="Floating Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
