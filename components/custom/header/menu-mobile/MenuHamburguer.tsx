import {
  lifestyleLinks,
  mockCollectionsLinks,
  mockIsabeautyLinks,
} from '@/data/mocks/nav-menu-links';

import React, { useState } from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetOverlay,
} from '@/components/shadcn/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';

interface ISubCategory {
  title: string;
  href: string;
}

interface ICategory {
  title: string;
  href: string;
  subCategories?: ISubCategory[];
}

const MenuHamburguer: React.FC = () => {
  // Estado para armazenar o valor do trigger
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isFirstSheetOpen, setIsFirstSheetOpen] = useState(false);
  const [isSecondSheetOpen, setIsSecondSheetOpen] = useState(false);
  const [isThirdSheetOpen, setIsThirdSheetOpen] = useState(false);

  const closeAllSheets = () => {
    setIsFirstSheetOpen(false);
    setIsSecondSheetOpen(false);
    setIsThirdSheetOpen(false);
  };

  const activeOptions = {
    COLECCIÓN: 'COLECCIÓN',
    ISABEAUTY: 'ISABEAUTY',
    LIFESTYLE: 'LIFESTYLE',
  };

  const menuItens: ICategory[] =
    activeMenu === 'COLECCIÓN'
      ? mockCollectionsLinks
      : activeMenu === 'ISABEAUTY'
        ? mockIsabeautyLinks
        : lifestyleLinks;

  return (
    <Sheet open={isFirstSheetOpen} onOpenChange={setIsFirstSheetOpen}>
      <SheetTrigger className="px-1 hover:opacity-70 md:hidden">
        <svg
          width="34"
          height="28"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-2"
        >
          <path
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </SheetTrigger>

      <SheetOverlay className="bg-white/75" />
      <SheetContent className="h-screen w-11/12 p-0 sm:mt-0 md:w-5/6 md:max-w-none">
        <Link
          href={'/customer/account/login/'}
          className="flex gap-3 bg-red-100 pb-5 pl-5 pr-8 pt-6 text-xs tracking-widest"
        >
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="text-xs">Iniciar Sesión / Crear Cuenta</span>
        </Link>

        <nav className="flex flex-col space-y-2 p-4 text-xs leading-10 tracking-widest">
          <Sheet open={isSecondSheetOpen} onOpenChange={setIsSecondSheetOpen}>
            <Link
              href="/new-in"
              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] font-semibold text-gray-800"
            >
              NEW IN
            </Link>

            {/** COLECCION */}
            <SheetTrigger
              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7]"
              onClick={() => setActiveMenu(activeOptions.COLECCIÓN)}
            >
              COLECCIÓN
              <Image
                src={'/icons/plus-icon.svg'}
                alt="plus"
                width={20}
                height={20}
                className="!mt-0 ml-2 inline-block"
              />
            </SheetTrigger>

            {/** ISABEAUTY */}
            <SheetTrigger
              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7]"
              onClick={() => setActiveMenu(activeOptions.ISABEAUTY)}
            >
              ISABEAUTY
              <Image
                src={'/icons/plus-icon.svg'}
                alt="plus"
                width={20}
                height={20}
                className="!mt-0 ml-2 inline-block"
              />
            </SheetTrigger>

            {/** LIFESTYLE */}
            <SheetTrigger
              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7]"
              onClick={() => setActiveMenu(activeOptions.LIFESTYLE)}
            >
              LIFESTYLE
              <Image
                src={'/icons/plus-icon.svg'}
                alt="plus"
                width={20}
                height={20}
                className="!mt-0 ml-2 inline-block"
              />
            </SheetTrigger>

            {/** GIFT CARD */}
            <Sheet>
              <SheetTrigger className="flex w-full items-center justify-between border-b border-b-[#e7e7e7]">
                GIFT CARD
                <Image
                  src={'/icons/plus-icon.svg'}
                  alt="plus"
                  width={20}
                  height={20}
                  className="!mt-0 ml-2 inline-block"
                />
              </SheetTrigger>
              <SheetContent className="h-screen w-11/12 p-0 sm:mt-0 md:w-5/6 md:max-w-none">
                <div className="flex gap-3 bg-red-100 pb-5 pl-5 pr-8 pt-6 text-xs tracking-widest">
                  <SheetClose className="flex w-full gap-3">
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-xs">GIFT CARD</span>
                  </SheetClose>
                </div>

                <div className="flex flex-col justify-around gap-1 py-5">
                  <figure>
                    <Link href={'/gift-card'}>
                      <Image
                        src={'/gift/eGiftCard_BotonMobile_1408x472px.webp'}
                        width={1408}
                        height={472}
                        alt="e-gift card"
                      />
                    </Link>
                  </figure>
                  <figure>
                    <Link
                      href={
                        'https://api.whatsapp.com/send?phone=54911123321&text=comprar%20giftcard%20para%20usar%20en%20tienda%20fisica'
                      }
                    >
                      <Image
                        src={'/gift/GiftCard_BotonMobile_1408x472px_1.webp'}
                        width={1408}
                        height={472}
                        alt="e-gift card"
                      />
                    </Link>
                  </figure>
                </div>
              </SheetContent>
            </Sheet>

            <Link
              href="/regalables"
              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] text-gray-800"
            >
              REGALABLES
            </Link>

            <SheetContent className="sm: mt-0 h-screen w-11/12 p-0 md:w-5/6 md:max-w-none">
              <div className="flex gap-3 bg-red-100 pb-5 pl-5 pr-8 pt-6 text-xs tracking-widest">
                <SheetClose className="flex w-full gap-3">
                  <span>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-xs">{activeMenu}</span>
                </SheetClose>
              </div>

              <Sheet open={isThirdSheetOpen} onOpenChange={setIsThirdSheetOpen}>
                <ul className="flex flex-col space-y-2 p-4 text-xs leading-10 tracking-widest">
                  <Link
                    href={'/coleccion'}
                    className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] font-semibold text-gray-800"
                    onClick={closeAllSheets}
                  >
                    VER TODO
                  </Link>
                  {menuItens?.map((item, index) => (
                    <Sheet key={index}>
                      {item.subCategories ? (
                        <SheetTrigger className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] uppercase tracking-widest">
                          {item.title}
                          <Image
                            src={'/icons/plus-icon.svg'}
                            alt="plus"
                            width={20}
                            height={20}
                            className="!mt-0 ml-2 inline-block"
                          />
                        </SheetTrigger>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] uppercase text-gray-800"
                          onClick={closeAllSheets}
                        >
                          {item.title}
                        </Link>
                      )}

                      {item.subCategories && (
                        <SheetContent className="sm: mt-0 h-screen w-11/12 p-0 md:w-5/6 md:max-w-none">
                          <div className="flex gap-3 bg-red-100 pb-5 pl-5 pr-8 pt-6 text-xs tracking-widest">
                            <SheetClose className="flex w-full gap-3">
                              <span>
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <span className="text-xs uppercase">
                                {item.title}
                              </span>
                            </SheetClose>
                          </div>

                          <ul className="flex flex-col p-5 text-xs leading-10 tracking-widest">
                            {item.subCategories.map((subItem, index) => (
                              <li key={index}>
                                <Link
                                  href={subItem.href}
                                  className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] px-[15px] py-[10px] uppercase leading-4 text-gray-800 hover:text-[#666]"
                                  onClick={closeAllSheets}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                            <Link
                              href={item.href}
                              className="flex w-full items-center justify-between border-b border-b-[#e7e7e7] px-[15px] py-[10px] font-semibold uppercase leading-4 text-gray-800"
                              onClick={closeAllSheets}
                            >
                              VER TODO
                            </Link>
                          </ul>
                        </SheetContent>
                      )}
                    </Sheet>
                  ))}
                </ul>
              </Sheet>
            </SheetContent>
          </Sheet>
        </nav>

        <div className="mx-4 flex min-h-40 flex-col items-center justify-evenly rounded-sm bg-[#e4c6a5] pb-5 pt-6">
          <Image
            src="/icons/ISACLUB-logo-100.webp"
            width={100}
            height={21}
            alt="Isa Club - Logo"
          />
          <p>Pasión por los beneficios</p>
          <Link
            href={'/isa-club'}
            className="bg-black px-5 py-3 text-xs font-semibold uppercase tracking-widest text-white"
          >
            Ver MÁS
          </Link>
        </div>

        <div className="px-4 pt-2 text-xs leading-6">
          <Link href={'/'} className="mb-3 flex gap-3 pt-2 tracking-widest">
            <span>
              <svg
                fill="#000000"
                height="18px"
                width="18px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 476.107 476.107"
              >
                <path
                  d="M312.226,107.062c4.421,10.177,6.663,21.005,6.663,32.183c0,44.572-36.263,80.835-80.835,80.835
    s-80.835-36.263-80.835-80.835s36.263-80.835,80.835-80.835c14.991,0,29.63,4.136,42.334,11.961
    c3.527,2.172,4.626,6.792,2.453,10.318c-2.173,3.528-6.792,4.628-10.319,2.453c-10.338-6.367-22.257-9.732-34.468-9.732
    c-36.302,0-65.835,29.533-65.835,65.835s29.533,65.835,65.835,65.835s65.835-29.533,65.835-65.835
    c0-9.109-1.824-17.927-5.421-26.206c-1.65-3.799,0.092-8.217,3.891-9.867C306.155,101.519,310.575,103.262,312.226,107.062z
     M377.299,139.244c0,40.795-30.339,130.421-56.319,194.774c-15.226,37.715-30.987,72.136-44.381,96.923
    c-21.449,39.694-31.201,45.166-38.545,45.166c-7.308,0-17.695-5.364-39.333-45.147c-13.401-24.641-29.138-59.075-44.31-96.961
    c-25.65-64.047-55.603-153.482-55.603-194.755C98.809,62.465,161.273,0,238.054,0S377.299,62.465,377.299,139.244z M362.299,139.244
    C362.299,70.735,306.563,15,238.054,15S113.809,70.735,113.809,139.244c0,30.965,21.251,105.33,52.88,185.047
    c14.553,36.678,29.789,70.489,42.903,95.207c17.78,33.513,26.186,40.142,28.351,41.387c2.152-1.375,10.416-8.405,28.115-42.057
    c13.133-24.972,28.38-58.781,42.931-95.201C341.373,242.571,362.299,170.197,362.299,139.244z"
                />
              </svg>
            </span>
            <span>Encontrá tu tienda</span>
          </Link>
          <Link href={'/'} className="flex gap-3 pb-7 tracking-widest">
            <span>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>Atención al cliente</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuHamburguer;
