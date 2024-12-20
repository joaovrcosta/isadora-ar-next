import Card from '@/components/account/card';
import { SidebarAccount } from '@/components/account/sidebar';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { Gift, Heart, Mail, ShoppingBasket } from 'lucide-react';

export default function NewsletterPage() {
  return (
    <div className="mt-20 flex h-full flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />

      <main className="h-auto w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <Card
          icon={<Mail />}
          title="Suscripción al Newsletter"
          className="h-[267px] max-w-[574px]"
        >
          <div className="mt-7 flex-col items-center justify-center space-y-4">
            <p className="text-xs">
              Acepto recibir información por E-mail sobre novedades, ofertas,
              descuentos, promociones y eventos.
            </p>
            <p className="text-xs">
              He leído los Términos y Condiciones y las Políticas de Privacidad
              del sitio.
            </p>
            <div className="flex items-center gap-1">
              <Input type="checkbox" className="h-[20px] w-[20px]" />
              <Label className="text-xs font-semibold">INSCRITO</Label>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
