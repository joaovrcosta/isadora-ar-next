import { INavItem } from '@/types/nav-menu';

export async function fetchIsabeautyLinks() {
  // Em vez de chamar uma API real, retorne os dados mockados
  return mockIsabeautyLinks;
}

export const mockIsabeautyLinks: INavItem[] = [
  {
    title: 'Descubrí ISABEAUTY',
    href: '/isabeauty/descubrí-isabeauty',
  },
  {
    title: 'MAKEUP',
    href: '/isabeauty/makeup',
    subCategories: [
      { title: 'Labios', href: '/isabeauty/makeup/labios' },
      { title: 'Rostro', href: '/isabeauty/makeup/rostro' },
      { title: 'Ojos', href: '/isabeauty/makeup/ojos' },
      {
        title: 'Accesorios MakeUp',
        href: '/isabeauty/makeup/accesorios-makeup',
      },
    ],
  },
  {
    title: 'Nails',
    href: '/isabeauty/nails',
  },
  {
    title: 'Skincare & Haircare',
    href: '/isabeauty/skincare-haircare',
    subCategories: [
      {
        title: 'Cuidado Corporal',
        href: '/isabeauty/skincare-haircare/cuidado-corporal',
      },
      {
        title: 'Cuidado de Labios',
        href: '/isabeauty/skincare-haircare/cuidado-de-labios',
      },
      {
        title: 'Cuidado Facial',
        href: '/isabeauty/skincare-haircare/cuidado-facial',
      },
      {
        title: 'Trink Clean',
        href: '/isabeauty/skincare-haircare/trink-clean',
      },
      {
        title: 'Plant bBsed',
        href: '/isabeauty/skincare-haircare/cuidado-corporal',
      },
    ],
  },
  {
    title: 'Accesorios Beauty',
    href: '/isabeauty/accesorios-beauty',
    subCategories: [
      {
        title: 'Cepillos y Peines',
        href: '/isabeauty/accesorios-beauty/cepillos-y-peines',
      },
      {
        title: 'Rostro',
        href: '/isabeauty/accesorios-beauty/rostro',
      },
      {
        title: 'Otros',
        href: '/isabeauty/accesorios-beauty/otros',
      },
    ],
  },
  {
    title: 'Perfumes & Fragancias ',
    href: '/isabeauty/perfumes-fragancias',
  },
  {
    title: 'Notas de la Patagonia',
    href: '/isabeauty/notas-de-la-patagonia',
  },
];
