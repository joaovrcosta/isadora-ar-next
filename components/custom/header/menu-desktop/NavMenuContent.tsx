import { useState, useMemo } from 'react';
import { NavigationMenuContent } from '@/components/shadcn/ui/navigation-menu';
import NavMenuLink from './NavMenuLink';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ISubCategory {
  title: string;
  href: string;
}

interface ICategory {
  title: string;
  href: string;
  subCategories?: ISubCategory[];
}

interface NavMenuContentProps {
  menuItems: ICategory[];
  defaultHref: string;
}

const NavMenuContent: React.FC<NavMenuContentProps> = ({
  menuItems,
  defaultHref,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (title: string) => {
    setActiveCategory((prev) => (prev === title ? null : title));
  };

  const renderSubCategories = (
    subCategories: ISubCategory[],
    categoryTitle: string,
    href: string,
  ) => (
    <div className="absolute right-0 top-0 block h-full w-1/2 overflow-auto">
      <div className="h-full border-l border-slate-200 pl-8">
        <ul className="relative z-10 m-0 flex w-full flex-col p-0">
          {subCategories.map((subCategory) => (
            <NavMenuLink
              className="hover:bg-transparent hover:underline"
              key={subCategory.title}
              title={subCategory.title}
              href={subCategory.href}
            />
          ))}
          <NavMenuLink
            className="w-1/2 pr-2 text-xs font-semibold hover:bg-transparent hover:underline"
            title={'VER TODO'}
            href={href}
          />
        </ul>
      </div>
    </div>
  );

  const navItems = useMemo(
    () =>
      menuItems.map((navItem) => (
        <li
          className="block w-1/2 break-inside-avoid pr-2 text-left hover:!bg-transparent"
          key={navItem.title}
        >
          {navItem.subCategories && navItem.subCategories.length > 0 ? (
            <p
              className={cn(
                'flex select-none space-y-1 rounded-md px-[10px] py-3 text-xs font-normal uppercase leading-none tracking-widest no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
                'text-xs font-normal uppercase hover:text-red-400 hover:opacity-80',
                activeCategory === navItem.title && 'text-red-400',
                'hover:!bg-transparent',
                'cursor-pointer',
              )}
              onClick={() => handleCategoryClick(navItem.title)}
            >
              <span>{navItem.title}</span>
              <Image
                src={
                  activeCategory !== navItem.title
                    ? '/icons/plus-icon.svg'
                    : '/icons/plus-icon-light-red.svg'
                }
                alt="plus"
                width={15}
                height={15}
                className="!mt-0 ml-2 inline-block"
              />
            </p>
          ) : (
            <NavMenuLink
              className="w-1/2 pr-2 text-xs uppercase hover:bg-transparent hover:text-red-400 hover:opacity-80"
              title={navItem.title}
              href={navItem.href}
            />
          )}
          {activeCategory === navItem.title &&
            navItem.subCategories &&
            renderSubCategories(
              navItem.subCategories,
              navItem.title,
              navItem.href,
            )}
        </li>
      )),
    [menuItems, activeCategory],
  );

  return (
    <NavigationMenuContent className="relative flex max-h-[70vh] !w-screen justify-center border-none px-6 pb-8 pt-9">
      <div className="mb-9 mr-5 block h-auto max-w-[630px] flex-grow border-none bg-white pr-5">
        <ul className="relative z-10 m-auto inline-block min-h-80 !w-full max-w-[630px] border-none font-medium md:w-auto">
          <NavMenuLink
            className="w-1/2 pr-2 text-xs font-semibold uppercase hover:!bg-transparent"
            title={'VER TODO'}
            href={defaultHref}
          />
          {navItems}
        </ul>
      </div>
    </NavigationMenuContent>
  );
};

export default NavMenuContent;
