import { Product } from '@/types/stores';
import { create } from 'zustand';

const predefinedColorOptions = {
  ACQUA: { label: 'Acqua', value: 'bg-[#85ced1]' },
  AZUL: { label: 'Azul', value: 'bg-[#3950a0]' },
  BLANCO: { label: 'Blanco', value: 'bg-[#ffffff]' },
  CRUDO: { label: 'Crudo', value: 'bg-[#eee5d3]' },
  DORADO: {
    label: 'Dorado',
    value: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600',
  },
  HEMATITE: { label: 'Hematite', value: 'bg-gray-900' },
  MARRON: { label: 'Marrón', value: 'bg-[#5c4031]' },
  NARANJA: { label: 'Naranja', value: 'bg-[#F48037]' },
  NEGRO: { label: 'Negro', value: 'bg-[#101820]' },
  PLATEADO: {
    label: 'Plateado',
    value: 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500',
  },
  ROSA: { label: 'Rosa', value: 'bg-[#F7CAC8]' },
  SIN_COLOR: { label: 'Sin Color', value: 'bg-[#FFFFFF]' },
  VERDE: { label: 'Verde', value: 'bg-[#99CB8C]' },
  VIOLETA: { label: 'Violeta', value: 'bg-[#6F456E]' },
  ROJO: { label: 'Rojo', value: 'bg-[#BF1932]' },
  LILA: { label: 'Lila', value: 'bg-[#D2C4D6]' },
};

const predefinedTalleOptions = {
  CHICA: 'Chica',
  36: '36',
  37: '37',
  38: '38',
  39: '39',
  40: '40',
  S: 'S',
  M: 'M',
  L: 'L',
};

const predefinedCategories = {
  Carteras: 'Cateiras',
  Bijou: 'Bijou',
  Textil: 'Textil',
  Pelo: 'Pelo',
  Complementos: 'Complementos',
};

interface ColorOption {
  label: string;
  value: string;
}

interface Filters {
  minPrice: number;
  maxPrice: number;
  color: string[];
  talle: string[];
}

interface FilterState {
  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;
  filteredProducts: any[];
  setFilteredProducts: (products: any[]) => void;
  sortOrder: string;
  setSortOrder: (order: string) => void;
  toggleSortOrder: () => void;
  sortOrderOptions: {
    MAS_RELEVANTES: string;
    MENOS_RELEVANTES: string;
    MENOR_PRECIO: string;
    MAYOR_PRECIO: string;
  };
  categoriesOptions: { [key: string]: string };
  colorOptions: { [key: string]: ColorOption };
  setColorOptions: (colors: { [key: string]: ColorOption }) => void;
  allColorOptions: string[];
  setAllColorOptions: (colors: string[]) => void;
  talleOptions: { [key: string]: string };
  setTalleOptions: (talles: { [key: string]: string }) => void;
}

function generateColorOptions(products: Product[]): {
  [key: string]: ColorOption;
} {
  const colorSet = new Set(
    products.map((product) => product?.color?.toUpperCase()),
  );

  const colorOptions: { [key: string]: ColorOption } = {};
  colorSet.forEach((colorKey) => {
    if (colorKey) {
      const predefined =
        predefinedColorOptions[colorKey as keyof typeof predefinedColorOptions];
      if (predefined) {
        colorOptions[colorKey] = predefined;
      } else {
        colorOptions[colorKey] = {
          label:
            (colorKey.charAt(0) ?? '').toUpperCase() +
            (colorKey.slice(1) ?? '').toLowerCase(),
          value: `bg-[rgb(200, 200, 200)]`, // Exemplo para cores não definidas
        };
      }
    }
  });

  return colorOptions;
}

function generateTalleOptions(products: Product[]): {
  [key: string]: string;
} {
  const talleSet = new Set(products.map((product) => product.talle));

  const talleOptions: { [key: string]: string } = {};
  talleSet.forEach((talleKey) => {
    if (talleKey) {
      talleOptions[talleKey] = talleKey;
    }
  });

  return talleOptions;
}

function generateCategoriesOptions(products: Product[]): {
  [key: string]: string;
} {
  const categoriesSet = new Set(
    products.map((product) => product.categories).filter(Boolean),
  );

  const categoriesOptions: { [key: string]: string } = {};
  categoriesSet.forEach((categoryKey) => {
    categoriesOptions[categoryKey as string] = categoryKey as string;
  });

  return categoriesOptions;
}

const useFilterStore = create<FilterState>((set, get) => ({
  filters: {
    minPrice: 8297,
    maxPrice: 145000,
    color: [], // Nenhuma cor aplicada inicialmente
    talle: [], // Nenhum talle(cintura/tamanho) aplicado inicialmente
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  filteredProducts: [],
  setFilteredProducts: (products) =>
    set((state) => {
      // Atualizar produtos filtrados
      const updatedProducts = products;
      // Gerar dinamicamente `colorOptions` com base nas cores dos produtos
      const newColorOptions = generateColorOptions(updatedProducts);

      const newTalleOptions = generateTalleOptions(updatedProducts);

      const newCategoriesOptions = generateCategoriesOptions(updatedProducts);

      return {
        filteredProducts: updatedProducts,
        colorOptions: newColorOptions,
        talleOptions: newTalleOptions,
        categoriesOptions: newCategoriesOptions,
      };
    }),
  sortOrder: 'mas relevantes',
  setSortOrder: (order) => set({ sortOrder: order }),
  sortOrderOptions: {
    MAS_RELEVANTES: 'mas relevantes',
    MENOS_RELEVANTES: 'menos relevantes',
    MENOR_PRECIO: 'menor precio',
    MAYOR_PRECIO: 'mayor precio',
  },
  categoriesOptions: predefinedCategories,
  colorOptions: predefinedColorOptions,
  setColorOptions: (colors) => set({ colorOptions: colors }),
  allColorOptions: [], // Inicialmente sem cores disponíveis
  // Lógica para retornar as cores filtradas ou todas disponíveis
  setAllColorOptions: (colors) => set(() => ({ allColorOptions: colors })),
  talleOptions: predefinedTalleOptions, // Inicialmente sem talles disponíveis
  setTalleOptions: (talles) => set(() => ({ talleOptions: talles })),
  setCategoriasOptions: (categories: any) =>
    set(() => ({ categoriesOptions: categories })),
  toggleSortOrder: () =>
    set((state) => {
      const { sortOrder, sortOrderOptions } = state;
      let newOrder;
      switch (sortOrder) {
        case sortOrderOptions.MAS_RELEVANTES:
          newOrder = sortOrderOptions.MENOS_RELEVANTES;
          break;
        case sortOrderOptions.MENOS_RELEVANTES:
          newOrder = sortOrderOptions.MENOR_PRECIO;
          break;
        case sortOrderOptions.MENOR_PRECIO:
          newOrder = sortOrderOptions.MAYOR_PRECIO;
          break;
        case sortOrderOptions.MAYOR_PRECIO:
          newOrder = sortOrderOptions.MAS_RELEVANTES;
          break;
        default:
          newOrder = sortOrderOptions.MAS_RELEVANTES;
      }
      return { sortOrder: newOrder };
    }),
}));

export default useFilterStore;
