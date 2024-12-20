import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { Heart, ShoppingBasket } from 'lucide-react';

export default function WishlistPage() {
  return (
    <div className="mt-20 flex h-full flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />

      <main className="h-auto w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          title="Mis productos favoritos"
          className="h-full max-h-[300px] max-w-[825px]"
          icon={<Heart />}
        >
          <div className="mx-auto mt-16 flex items-center justify-center">
            <div className="space-y-6 text-center">
              <p className="text-[13px]">Aún no hay Favs registrados</p>
              <Button className="h-[42px] w-[200px] text-xs font-bold">
                Navegá el sitio
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
