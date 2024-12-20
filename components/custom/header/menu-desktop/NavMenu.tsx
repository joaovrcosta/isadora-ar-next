'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/shadcn/ui/navigation-menu';

import { cn } from '@/lib/utils';

import Link from 'next/link';

import NavMenuContent from './NavMenuContent';
import {
  lifestyleLinks,
  mockCollectionsLinks,
  mockIsabeautyLinks,
} from '@/data/mocks/nav-menu-links';
import Image from 'next/image';

const hoverBorderBottomStyle =
  "relative after:absolute after:bottom-[0.5px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-500 after:content-[''] hover:after:scale-x-100 tracking-[2px]";

const styleMenuLink =
  'uppercase bg-transparent px-1 py-0 text-[10px] font-normal text-inherit hover:!bg-transparent focus:outline-none focus:text-inherit focus:bg-inherit xl:pb-1';

interface NavMenuProps {
  className?: string;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({
  className,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <NavigationMenu
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavigationMenuList className="gap-10">
        <div className={hoverBorderBottomStyle}>
          <Link
            href="/new-in"
            legacyBehavior
            passHref
            className="p-0 hover:!bg-transparent"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                styleMenuLink,
                'font-semibold',
              )}
            >
              <span className="tracking-[2px]">NEW IN</span>
            </NavigationMenuLink>
          </Link>
        </div>

        <NavigationMenuItem>
          <div className={hoverBorderBottomStyle}>
            <NavigationMenuTrigger className={styleMenuLink}>
              COLECCIÓN
            </NavigationMenuTrigger>
          </div>

          <NavMenuContent
            defaultHref="/coleccion"
            menuItems={mockCollectionsLinks}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <div className={hoverBorderBottomStyle}>
            <NavigationMenuTrigger className={styleMenuLink}>
              ISABEAUTY
            </NavigationMenuTrigger>
          </div>

          <NavMenuContent
            defaultHref="/isabeauty"
            menuItems={mockIsabeautyLinks}
          />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <div className={hoverBorderBottomStyle}>
            <NavigationMenuTrigger className={styleMenuLink}>
              LIFESTYLE
            </NavigationMenuTrigger>
          </div>

          <NavMenuContent defaultHref="/lifestyle" menuItems={lifestyleLinks} />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <div className={hoverBorderBottomStyle}>
            <NavigationMenuTrigger className={styleMenuLink}>
              GIFT CARD
            </NavigationMenuTrigger>
          </div>
          <NavigationMenuContent className="relative flex max-h-[70vh] !w-screen justify-center border-none px-6 pb-8 pt-9">
            <div className="flex flex-row gap-4">
              <Image
                src="/gift/Botones-Coleccion-GIFT-CARDS-tienda.webp"
                alt="Gift 1"
                width={267}
                height={355}
                className="max-h-[355px] max-w-[267px] object-cover"
              />
              <Image
                src="/gift/Botones-Coleccion-GIFT-CARDS-online.webp"
                alt="Gift 2"
                width={267}
                height={355}
                className="max-h-[355px] max-w-[267px] object-cover"
              />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className={hoverBorderBottomStyle}>
          <Link
            href="/regalables"
            legacyBehavior
            passHref
            className="p-0 hover:!bg-transparent"
          >
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), styleMenuLink)}
            >
              <span>REGALABLES</span>
            </NavigationMenuLink>
          </Link>
        </div>
      </NavigationMenuList>
      <NavigationMenuViewport
        className={cn(
          'mt-0 rounded-none border-t-0',
          'origin-top transform', // Origem da transformação no topo
          'data-[state=open]:animate-expand-down',
          'data-[state=closed]:animate-collapse-up',
        )}
      />
    </NavigationMenu>
  );
};

export { NavMenu };
