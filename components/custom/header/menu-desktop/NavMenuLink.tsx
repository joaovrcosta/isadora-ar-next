import { NavigationMenuLink } from '@/components/shadcn/ui/navigation-menu';
import { cn } from '@/lib/utils';
import React from 'react';

const NavMenuLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md px-[10px] py-3 text-xs font-normal leading-none tracking-widest no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
NavMenuLink.displayName = 'NavMenuLink';

export default NavMenuLink;
