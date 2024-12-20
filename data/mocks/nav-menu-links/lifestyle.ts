import { INavItem } from '@/types/nav-menu';

export async function fetchLifestyleLinks() {
  // Em vez de chamar uma API real, retorne os dados mockados
  return lifestyleLinks;
}

export const lifestyleLinks: INavItem[] = [
  {
    title: 'Travel',
    href: 'lifestyle/travel',
  },
  {
    title: 'Escritorio',
    href: 'lifestyle/escritorio',
  },
  {
    title: 'Accesorios tech',
    href: 'lifestyle/travel',
  },
  {
    title: 'Botellas y vasos',
    href: 'lifestyle/botellas-y-vasos',
  },
];
