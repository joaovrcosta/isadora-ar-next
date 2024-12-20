import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SomosIsadora from './SomosIsadora';
import SecurePurchase from './SecurePurchase';
import TiendaOnline from './TiendaOnline';

const FooterMid: React.FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 pt-20 md:grid-cols-3 md:gap-8 md:px-12 md:pb-5 lg:md:grid-cols-5">
      <div className="column min-w-auto px-4">
        <h3 className="mb-4 font-semibold">Atención al cliente</h3>
        <div className="mb-6 mt-4 flex justify-start gap-2 pr-3 text-sm md:text-xs">
          <div>
            <Link href={'/'}>
              <Image
                src={'/icons/whatsapp-social-media-svgrepo-com.svg'}
                width={'20'}
                height={'20'}
                alt="whatsapp icon"
              />
            </Link>
          </div>
          <div>
            <p className="mb-3">+54 11 4321 1234</p>
            <p className="mb-3 text-[#686868]">Mensaje de Whatsapp</p>
          </div>
        </div>
        <div className="mb-6 mt-4 flex justify-start gap-2 pr-3 text-sm md:text-xs">
          <div>
            <Link href={'/'}>
              <Image
                src={'/icons/send-svgrepo-com.svg'}
                width={'20'}
                height={'20'}
                alt="send icon"
              />
            </Link>
          </div>
          <div>
            <p className="mb-3 font-medium">infoar@isadoraonline.com</p>
            <p className="mb-3 text-[#686868]">Mandanos un mail</p>
          </div>
        </div>
        <div className="mb-6 mt-4 flex justify-start gap-2 pr-3 text-sm md:text-xs">
          <div>
            <Link href={'/'}>
              <Image
                src={'/icons/watch-time-clock-svgrepo-com.svg'}
                width={'20'}
                height={'20'}
                alt="watch icon"
              />
            </Link>
          </div>
          <div>
            <p className="mb-3 font-medium">Horarios de atención</p>
            <p className="mb-3 text-[#686868]">
              Lunes a Viernes de 10 a 17 hs.
            </p>
          </div>
        </div>
      </div>

      {/** Tienda online */}
      <TiendaOnline />

      {/** Somos Isadora */}
      <SomosIsadora />

      {/** Compra 100% segura */}
      <SecurePurchase />

      <div className="column flex w-auto flex-col items-center justify-center pt-8 md:items-start md:justify-start md:pt-0">
        <h3 className="mb-4 font-semibold text-[#686868] md:text-black">
          Seguinos
        </h3>
        <div className="mb-6 flex items-center justify-start gap-6">
          <Image
            src={'/icons/img-ig-isa.webp'}
            alt="instagram icon"
            height={36}
            width={36}
            className="h-11 w-11 cursor-pointer md:h-9 md:w-9"
          />
          <Image
            src={'/icons/img-tiktok-isa.webp'}
            alt="tiktok"
            height={36}
            width={36}
            className="h-11 w-11 cursor-pointer md:h-9 md:w-9"
          />
          <Image
            src={'/icons/img-face-isa.webp'}
            alt="facebook channel"
            height={36}
            width={36}
            className="h-11 w-11 cursor-pointer md:h-9 md:w-9"
          />
        </div>

        <div className="flex w-screen items-center justify-center gap-3 bg-[#dddddd] py-5 text-sm md:hidden md:text-xs">
          <span className="font-semibold">Comprando</span>
          <span className="font-semibold">|</span>
          <span>Argentina</span>
          <Image
            src={'/icons/flag-arg.webp'}
            alt="data--fiscal"
            height={42}
            width={30}
          />
        </div>

        <div className="hidden md:block">
          <h4 className="mb-4 font-semibold">Navegando:</h4>
          <div className="flex items-center gap-2">
            <Image
              src={'/icons/flag-arg.webp'}
              alt="data--fiscal"
              height={42}
              width={30}
            />
            <span className="text-xs">Argentina</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMid;
