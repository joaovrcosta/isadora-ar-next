import { Button } from '@/components/shadcn/ui/button';
import Image from 'next/image';
import isaClubLogo from '@/public/icons/ISACLUB-logo-100.webp';
import { SidebarAccount } from '@/components/account/sidebar';
import { Gem, Gift, MapPin, Pencil, UserRound } from 'lucide-react';
import { Label } from '@/components/shadcn/ui/label';
import { Input } from '@/components/shadcn/ui/input';
import Card from '@/components/account/card';

export default function AccountPage() {
  return (
    <div className="mt-20 flex flex-col space-x-0 bg-[#eee] md:mt-24 lg:mt-24 lg:flex-row xl:mt-24 xl:flex-row">
      <SidebarAccount />
      <main className="h-full w-full bg-[#eee] px-4 py-12 lg:px-12 xl:px-24">
        <div className="flex flex-col space-x-0 lg:flex-row lg:space-x-6 xl:flex-row xl:space-x-6">
          <div className="space-y-6">
            <section className="h-[164px] w-full flex-col items-center justify-center rounded-3xl bg-white px-9 pb-8 pt-5 lg:max-w-[390px] xl:max-w-[390px]">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </section>
            <section className="h-[266px] w-full flex-col items-center justify-center rounded-3xl bg-white px-9 pb-8 pt-8 lg:max-w-[390px] xl:max-w-[390px]">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#f8e6e3]">
                  <Gem size={24} />
                </div>
                <Image
                  src={isaClubLogo}
                  alt="Isa Club Logo"
                  height={21}
                  width={100}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs leading-6">
                  Ya formás parte del Programa de lealtad de Isadora. Podrás
                  acceder a descuentos, colecciones y beneficios exclusivos.
                </p>
                <div className="mt-7">
                  <Button className="h-[40px] w-[200px] rounded-none bg-[#d32951] text-xs font-bold hover:bg-[#d32951]/80">
                    VER BENEFICIOS
                  </Button>
                </div>
              </div>
            </section>
            <Card icon={<Gift />} title="Giftcard" className="max-h-[267px]">
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
          </div>
          <div className="mt-6 space-y-6 lg:mt-0 xl:mt-0">
            <Card
              icon={<MapPin />}
              title="Mis direcciones"
              className="max-h-[282px]"
            >
              <div className="flex space-x-3">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold">
                    Dirección de Facturación
                  </h4>
                  <p className="text-xs leading-6">
                    Aún no guardaste una dirección de facturación.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold">Dirección de Envío</h4>
                  <p className="text-xs leading-6">
                    Aún no guardaste una dirección de envío.
                  </p>
                </div>
              </div>
              <div className="flex space-x-6">
                <button className="flex flex-1 gap-2 text-[10px]">
                  <Pencil size={12} />
                  Editar
                </button>
                <button className="flex flex-1 gap-2 text-[10px]">
                  <Pencil size={12} />
                  Editar
                </button>
              </div>
            </Card>
            <Card
              icon={<UserRound size={24} />}
              title="Info. de contato"
              className="max-h-[438px]"
            >
              <div className="mb-3">
                <h4 className="text-[13px] font-bold">Nome & Apelido</h4>
                <p className="text-xs leading-6">John Doe</p>
              </div>
              <div className="">
                <h4 className="text-[13px] font-bold">E-mail</h4>
                <p className="text-xs leading-6">customer@store.com</p>
              </div>
              <div className="mt-6 flex space-x-6">
                <button className="flex flex-1 gap-2 text-[10px]">
                  <Pencil size={12} />
                  Editar
                </button>
                <button className="flex flex-1 gap-2 text-[10px]">
                  <Pencil size={12} />
                  Editar senha
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
