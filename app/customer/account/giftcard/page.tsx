import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { Gift, Heart, ShoppingBasket } from 'lucide-react';

export default function GiftcardPage() {
  return (
    <div className="mt-20 flex h-full flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />

      <main className="h-auto w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          icon={<Gift />}
          title="Giftcard"
          className="h-[267px] max-w-[400px]"
        >
          <Label className="text-xs">Código</Label>
          <Input placeholder="Digite o código" />
          <div className="mt-7 flex items-center justify-center">
            <Button
              className="h-[40px] w-[200px] rounded-none bg-black text-xs font-bold"
              disabled
            >
              CHECAR CÓDIGO
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
