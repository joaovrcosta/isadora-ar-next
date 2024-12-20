'use client';
import { CustomBreadCrumbs } from '@/components/custom-bread-crumbs';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      <section className="relative z-10 pl-0 pr-0 md:flex-nowrap md:pt-0 lg:mt-32 lg:flex-col lg:pl-12 lg:pr-8 xl:mt-24">
        <CustomBreadCrumbs />

        <main className="relative w-full basis-auto overflow-hidden px-4 pb-10 md:min-h-80">
          {children}
        </main>
      </section>
    </>
  );
}
