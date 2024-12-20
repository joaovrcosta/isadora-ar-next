'use client';

import Marquee from './Marquee';

import HeaderContent from './HeaderContent';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import { PromotionalModal } from '@/components/modalds/promotionalModal';

const MOCK_PROMOTIONS = [
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
  'EXCLUSIVO ONLINE 6 CUOTAS SIN INTERÉS EN COMPRAS SUPERIORES A $60.000',
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isToastyButtonVisible, setIsToastyButtonVisible] = useState(true);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const pathName = usePathname();

  const handleMouseEnter = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="top"
      className={cn(
        'fixed top-0 z-50 h-auto w-full items-center justify-between !transition-all !delay-0 !duration-300 ease-in',
        isScrolled ||
          isInteracting ||
          openSearch ||
          isOpenCart ||
          pathName !== '/'
          ? 'border-b-0 bg-white text-black'
          : 'bg-transparent text-white',
        isScrolled ? 'shadow-md' : '',
      )}
    >
      <Marquee marqueeTexts={MOCK_PROMOTIONS} />

      <div className="w-auto bg-inherit xl:w-full">
        <HeaderContent
          setIsScrolled={setIsScrolled}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
          isOpenCart={isOpenCart}
          setIsOpenCart={setIsOpenCart}
        />
      </div>

      <div
        className={cn(
          'bg-lightPink fixed -left-[86px] bottom-[45%] z-50 flex h-[40px] w-[210px] -rotate-90 cursor-pointer flex-row items-center justify-center gap-2 border-none pl-2.5 text-[13px] uppercase text-black shadow-md',
          !isToastyButtonVisible && 'hidden',
        )}
      >
        <button className="w-4" onClick={() => setIsToastyButtonVisible(false)}>
          X
        </button>

        <Dialog>
          <DialogTrigger>DESCUBRÍ ISA CLUB</DialogTrigger>

          <PromotionalModal />
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
