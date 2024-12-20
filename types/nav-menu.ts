interface ISubItem {
  title: string;
  href: string;
}

export interface INavItem {
  title: string;
  href: string;
  subCategories?: ISubItem[];
}
