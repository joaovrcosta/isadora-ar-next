import { INavItem } from '@/types/nav-menu';

export async function fetchCollectionsLinks() {
  // Em vez de chamar uma API real, retorne os dados mockados
  return mockCollectionsLinks;
}

/**
 * Mock data representing navigation menu links for collections.
 *
 * @constant
 * @type {INavItem[]}
 *
 * @property {string} title - The title of the main category.
 * @property {string} href - The URL path for the main category.
 * @property {Object[]} subCategories - An array of subcategory objects.
 * @property {string} subCategories[].title - The title of the subcategory.
 * @property {string} subCategories[].href - The URL path for the subcategory.
 *
 * @example
 * // Accessing the first main category title
 * console.log(mockCollectionsLinks[0].title); // Output: 'Bijou'
 *
 * // Accessing the href of the first subcategory of the first main category
 * console.log(mockCollectionsLinks[0].subCategories[0].href); // Output: '/coleccion/bijou/acero'
 */
export const mockCollectionsLinks: INavItem[] = [
  {
    title: 'Bijou',
    href: '/coleccion/bijou',
    subCategories: [
      { title: 'Acero', href: '/coleccion/bijou/acero' },
      { title: 'Plata 925', href: '/coleccion/bijou/plata-925' },
      { title: 'Bañado En Oro', href: '/coleccion/bijou/banado-en-oro' },
      { title: 'Cubic Zirconia', href: '/coleccion/bijou/cubic-zircona' },
      { title: 'Essentials', href: '/coleccion/bijou/essentials' },
      { title: 'Trend Collection', href: '/coleccion/bijou/trend-collection' },
      { title: 'Aros', href: '/coleccion/bijou/aros' },
      { title: 'Collares', href: '/coleccion/bijou/collares' },
      { title: 'Pulseras', href: '/coleccion/bijou/pulseras' },
      { title: 'Anillos', href: '/coleccion/bijou/anillos' },
      {
        title: 'Bijou Set Y Nuevos Formatos',
        href: '/coleccion/bijou/bijou-set-y-nuevos-formatos',
      },
    ],
  },
  {
    title: 'Carteras',
    href: '/coleccion/carteras',
    subCategories: [
      { title: 'Special Price', href: '/coleccion/carteras/special-price' },
      {
        title: 'Carteras & Bandoleras',
        href: '/coleccion/carteras/carteras-bandoleras',
      },
      {
        title: 'Mochilas',
        href: '/coleccion/carteras/mochilas',
      },
      { title: 'Special Price', href: '/coleccion/carteras/special-price' },
      {
        title: 'Carteras & Bandoleras',
        href: '/coleccion/carteras/carteras-bandoleras',
      },
      {
        title: 'Mochilas',
        href: '/coleccion/carteras/mochilas',
      },
      { title: 'Special Price', href: '/coleccion/carteras/special-price' },
      {
        title: 'Carteras & Bandoleras',
        href: '/coleccion/carteras/carteras-bandoleras',
      },
      {
        title: 'Mochilas',
        href: '/coleccion/carteras/mochilas',
      },
    ],
  },
  {
    title: 'Textil',
    href: '/coleccion/textil',
    subCategories: [
      {
        title: 'Pañuelos & Pashminas',
        href: '/coleccion/textil/panuelos-pashminas',
      },
    ],
  },
  {
    title: 'Pelo',
    href: '/coleccion/pelo',
    subCategories: [
      { title: 'Broches', href: '/coleccion/pelo/broches' },
      { title: 'Hebillas', href: '/coleccion/pelo/hebillas' },
    ],
  },
  {
    title: 'Complementos',
    href: '/coleccion/complementos',
    subCategories: [
      {
        title: 'Anteojos & Accesorios',
        href: '/coleccion/complementos/anteojos-accesorios',
      },
    ],
  },
];
