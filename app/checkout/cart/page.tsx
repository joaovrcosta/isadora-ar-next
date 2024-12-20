import Image from 'next/image';
import productImage from '@/public/products/product-image-1.webp';
import {
  ArrowLeft,
  CircleAlert,
  Gift,
  Heart,
  Mails,
  Tickets,
  Trash2,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import isaClubLogo from '@/public/icons/ISACLUB-logo-100.webp';
import { Input } from '@/components/shadcn/ui/input';
import { Button } from '@/components/shadcn/ui/button';

export default function CartPage() {
  return (
    <div className="mb-10 mt-36 w-full">
      <div className="flex items-center justify-center">
        <div className="flex w-full max-w-[1279px] flex-col space-x-0 md:flex-row md:space-x-7 md:px-6 lg:flex-row lg:space-x-7 xl:flex-row xl:space-x-7">
          {/* Tabela de produtos */}
          <div className="w-full pl-4 pr-4 sm:px-4 md:px-4">
            <div>
              <h1 className="text-2xl font-bold tracking-[2px]">Mi carrito</h1>
            </div>
            <main className="flex w-full items-center space-x-4 p-2 py-4 lg:hidden xl:hidden">
              <Image
                src={productImage}
                alt="Product 1"
                width={80}
                height={102}
              />
              <div className="flex h-full w-full items-center justify-between">
                <div>
                  <div className="mb-5">
                    <span className="mt-3 text-[11px] text-xs tracking-[0.5px]">
                      Clutch con correa de cadena
                    </span>
                  </div>
                  <span className="text-[11px] tracking-[2px]">$ 59.000</span>
                  <div className="flex items-center">
                    <button className="h-[40px] w-[37px] bg-[#f8e6e3] px-2 py-1">
                      -
                    </button>
                    <div className="flex h-[40px] w-[37px] items-center justify-center bg-white px-2 py-1">
                      <span>1</span>
                    </div>
                    <button className="h-[40px] w-[37px] bg-[#f8e6e3] px-2 py-1">
                      +
                    </button>
                  </div>
                </div>
                <div className="ml-6 mt-0 flex flex-col items-center space-y-3 md:mt-12 md:flex-col lg:mt-12 lg:flex-row xl:mt-12 xl:flex-row">
                  <Trash2 size={20} />
                  <Heart size={20} />

                  <span className="whitespace-nowrap text-[11px] tracking-[2px]">
                    $ 59.000
                  </span>
                </div>
              </div>
            </main>

            <section className="mb-3 mt-3 block md:hidden lg:hidden xl:hidden">
              <div className="flex items-center justify-between bg-[#eeeeee] p-2">
                <div className="space-y-2">
                  <Image src={isaClubLogo} alt="" height={13} width={63} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#b52036]">
                    59000 Puntos
                  </span>
                </div>
              </div>
            </section>

            <table className="mb-5 hidden w-full border-collapse lg:block xl:block ">
              <thead className='w-full'>
                <tr className="border-b w-full">
                  <th className="py-6 pl-0 text-left text-xs tracking-[2px] w-full">
                  Producto
                  </th>
                  <th className="py-6 text-center text-xs tracking-[2px] w-full px-10">
                    Precio
                  </th>
                  <th className="py-6 text-center text-xs tracking-[2px] w-full px-10">
                  Cantidad
                  </th>
                  <th className="py-6 text-center text-xs tracking-[2px] w-full px-10">
                    Subtotal
                  </th>
                  <th className="flex items-center justify-center p-2 py-6 text-center text-xs tracking-[2px]">
                    <Image src={isaClubLogo} alt="" width={56} height={12} />
                  </th>
                </tr>
              </thead>
              <tbody className='w-full'>
                <tr className="border-b">
                  <td className="flex max-w-[268px] items-center space-y-0 p-2 py-4 lg:space-y-4 xl:space-x-4">
                    <Image
                      src={productImage}
                      alt="Product 1"
                      width={100}
                      height={128}
                    />
                    <div className="h-full max-w-[128px]">
                      <span className="mt-3 text-[11px] text-xs tracking-[0.5px]">
                        Clutch con correa de cadena
                      </span>
                      <div className="mt-12 flex items-center space-x-2">
                        <Trash2 size={20} />
                        <Heart size={20} />
                      </div>
                    </div>
                  </td>
                  <td className="p-2 py-4 text-[11px] tracking-[2px]">
                    <div className='flex items-center justify-center'>
                    $59.000
                    </div>
                  </td>
                  <td className="p-2 py-4">
                    <div className="flex items-center justify-center">
                      <button className="h-[40px] w-[37px] bg-[#f8e6e3] px-2 py-1">
                        -
                      </button>
                      <div className="flex h-[40px] w-[37px] items-center justify-center bg-white px-2 py-1">
                        <span>1</span>
                      </div>
                      <button className="h-[40px] w-[37px] bg-[#f8e6e3] px-2 py-1">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-2 py-4 text-[11px] tracking-[2px]">
                  <div className='flex items-center justify-center'>
                    $59.000
                  </div>
                  </td>
                  <td className="p-2 py-4">
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-bold text-[#b52036] whitespace-nowrap">
                        59.000 pontos
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="hidden md:flex lg:flex xl:flex">
              <div className="flex items-center justify-center gap-3">
                <ArrowLeft size={20} />
                <span className="cursor-pointer text-[11px] tracking-[2px]">
                  SEGUIR COMPRANDO
                </span>
              </div>
            </div>
            <div className="mt-5 hidden bg-[#f5f5f5] p-5 md:block lg:block xl:block">
              <div className="mb-3 flex items-center gap-3">
                <Input type="checkbox" className="h-[22px] w-[22px]" />
                <Gift size={20} />
                <p className="text-xs font-bold tracking-[2px]">
                  LO QUIERO PARA REGALO!
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[2px]">
                  Sorprendé con un saludo especial, recibirás un mail para
                  grabarlo, llegará en un QR con tu regalo.
                </p>
              </div>
            </div>
          </div>

          {/* Resumo da compra */}
          <section className="w-full px-4 md:px-0 lg:px-0 xl:max-w-[383px] xl:px-0">
            <div className="w-full bg-[#f8e6e3] px-6 pb-6 pt-5">
              <h2 className="mb-4 text-lg font-semibold tracking-[2px]">
                Resumo de compra
              </h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex gap-3">
                      <Mails size={20} />
                      <span className="text-[11px] font-light tracking-[2px]">
                        ¿Tenés una gift card?
                      </span>
                      <CircleAlert size={20} className="text-[#ef9a94]" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex">
                      <Input
                        className="border border-[#ef9a94] bg-white text-black"
                        placeholder="Código"
                      />
                      <Button className="border border-[#ef9a94] bg-transparent px-2 text-[11px] text-black hover:bg-[#ef9a94]/80">
                        APLICAR
                      </Button>
                      <Button className="border border-[#ef9a94] bg-transparent px-2 text-[11px] text-black hover:bg-[#ef9a94]/80">
                        VER SALDO
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="flex gap-3">
                      <Tickets size={20} />
                      <span className="text-[11px] font-light tracking-[2px]">
                        ¿Tenés un cupón de descuento?
                      </span>
                      <CircleAlert size={20} className="text-[#ef9a94]" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex">
                      <Input
                        className="border border-[#ef9a94] bg-white text-black hover:bg-transparent"
                        placeholder="Ex: VER2024"
                      />
                      <Button className="border border-[#ef9a94] bg-transparent px-2 text-[11px] text-black hover:bg-[#ef9a94]/80">
                        APLICAR
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mb-2 flex justify-between border-b border-black pb-2 pt-4">
                <span>Subtotal</span>
                <span>$59.000</span>
              </div>
              <div className="mb-4 flex justify-between pb-2 pt-4">
                <span className="text-[18px] font-semibold">Total</span>
                <span className="text-[18px] font-semibold tracking-[2px]">
                  $59.000
                </span>
              </div>
              <button className="h-[48px] w-full bg-black py-2 text-xs font-bold text-white hover:bg-gray-800">
                FINALIZAR COMPRA
              </button>
            </div>
            <section>
              <div className="flex items-center justify-between bg-[#eeeeee] p-6">
                <div className="space-y-2">
                  <Image src={isaClubLogo} alt="" height={13} width={63} />
                  <p className="text-xs">Puntos acumulados</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-[#b52036]">
                    59000 Pts
                  </span>
                </div>
              </div>
            </section>
          </section>

          <div className="ml-4 mt-5 block bg-[#f5f5f5] p-5 md:hidden lg:hidden xl:hidden">
            <div className="mb-3 flex items-center gap-3">
              <Input type="checkbox" className="h-[22px] w-[22px]" />
              <Gift size={20} />
              <p className="text-xs font-bold tracking-[2px]">
                LO QUIERO PARA REGALO!
              </p>
            </div>
            <div>
              <p className="text-[11px] tracking-[2px]">
                Sorprendé con un saludo especial, recibirás un mail para
                grabarlo, llegará en un QR con tu regalo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
