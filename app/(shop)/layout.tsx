'use client';
import { CustomBreadCrumbs } from '@/components/custom-bread-crumbs';
import Aside from '@/components/custom/aside/Aside';
import { AsideDesk } from '@/components/custom/aside/AsideDesk';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import path from 'path';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {pathName === '/new-in' ? (
        <div className="mt-20 md:mt-[130px] lg:hidden xl:mt-[102px]">
          <Image
            className="md:hidden"
            src="/banner/TOPBANNER_ISA_NEW-IN_mobile_1_.webp"
            height={203}
            width={830}
            alt="nueva coleccion"
            loading="lazy"
          />
          <Image
            className="hidden md:block"
            src="/banner/TOPBANNER_ISA_NEW-IN_3__2.webp"
            height={160}
            width={1920}
            alt="nueva coleccion"
            loading="lazy"
          />
        </div>
      ) : null}

      {pathName === '/new-in' ? (
        <div className="pt-6 md:hidden lg:hidden">
          <h1 className="mb-8 text-center text-2xl font-normal capitalize tracking-widest">
            {pathName.split('/').filter(Boolean).slice(-1)[0]}
          </h1>
        </div>
      ) : (
        <div className="mt-20 pt-6 md:hidden lg:hidden">
          <h1 className="mb-8 text-center text-2xl font-normal capitalize tracking-widest">
            {pathName.split('/').filter(Boolean).slice(-1)[0]}
          </h1>
        </div>
      )}

      <section className="relative z-10 md:mt-32 md:flex-nowrap md:pl-12 md:pr-8 md:pt-0 lg:mt-32 lg:flex-col xl:mt-24">
        <div>
          <CustomBreadCrumbs />
          <div className="flex w-full flex-col md:flex-row md:gap-20 lg:flex-row lg:gap-12">
            <div className="lg:flex lg:w-[20%]">
              <div className="hidden w-full md:block lg:block">
                <div>
                  <h1 className="mb-8 whitespace-nowrap text-left text-4xl font-normal capitalize tracking-widest">
                    {pathName.split('/').filter(Boolean).slice(-1)[0]}
                  </h1>
                </div>
                <AsideDesk className="sticky top-40 mb-8 max-w-[294px]" />
              </div>
              <Aside className="sticky top-20 z-50 order-first min-h-10 w-full flex-grow basis-full pr-[2%] md:top-44 md:mt-20 md:h-fit md:w-1/5 md:basis-[20%] lg:hidden" />
            </div>

            <main className="relative w-full basis-auto overflow-hidden px-4 pb-10 md:min-h-80">
              {children}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
