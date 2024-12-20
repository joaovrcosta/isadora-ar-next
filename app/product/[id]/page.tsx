'use client';

import { Button } from '@/components/shadcn/ui/button';
import Image from 'next/image';
import envioImg from '@/public/icons/ic-envio-gratis.webp';
import cambiosImg from '@/public/icons/ic-cambios-devoluciones.webp';
import logoTargeta from '@/public/icons/logo-tarjeta.webp';
import { Heart, Share2 } from 'lucide-react';
import ProductImages from '@/components/product/product-images';
import { useState } from 'react';
import isaClubLogo from '@/public/icons/ISACLUB-logo-100.webp';
import { CarouselComponent } from '@/components/show-more-products';
import { mockProducts, mockProducts2 } from '@/app/_mocks/products';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn/ui/tooltip';

import { formatCurrencyARS } from '@/lib/utils';

import useCartStore from '@/app/_stores/useCartStore';
import { ProductItemCarousel } from '@/components/product-item-carousel';
import { LookProductItem } from '@/components/look-product-item';
import { LookProductItemMobile } from '@/components/look-product-item-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shadcn/ui/carousel';
import { LookProductCarousel } from '@/components/look-product-carousel';

const product = {
  sku: '48611201',
  name: 'Clutch con correa de cadena',
  price: '59.000',
  discount: 15,
  discountPrice: '46.000',
  description:
    'Clutch con cierre a presión, con correa larga de cadena. Forro interior.',
  extraDescription:
    'Este clutch es ideal para ocasiones especiales. Con su diseño elegante y sofisticado, puedes llevar tus esenciales con estilo. Está disponible en varios colores y es un accesorio perfecto para complementar tu look.',
  images: [
    '/products/product-image-1.webp',
    '/products/product-image-2.webp',
    '/products/product-image-3.webp',
    '/products/product-image-4.webp',
  ],
  shippingInfo: {
    title: 'RETIRO Y ENVÍO GRATIS',
    description:
      'Retira gratis en nuestras tiendas o envío gratis en compras mayores a $30.000',
  },
  returnInfo: {
    title: 'CAMBIOS Y DEVOLUCIONES',
    description:
      '¿Dudas sobre tu elección? Tenes hasta 6 meses para cambiar tu compra y hasta 15 días de devolución.',
  },
  paymentInfo: {
    title: 'CUOTAS SIN INTERÉS',
    description:
      'Pagá con Visa, MasterCard, Mercado Pago y Naranja plan Z en 3 cuotas sin interés en compras superiores a $30.000 y 6 cuotas sin interés en compras superiores a $60.000.',
  },
  colors: [
    { value: 'green', label: 'Green', colorCode: '#000' },
    // { value: 'brown', label: 'Brown', colorCode: '#a0522d' },
  ],
};

export default function ProductPage() {
  const [showMore, setShowMore] = useState(false);
  const { cart, addToCart } = useCartStore();

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div>
      <div className="mt-[76px] flex flex-col items-center justify-center md:mt-24 md:px-4 lg:mt-12 lg:flex-row lg:px-4 xl:px-4">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <ProductImages images={product.images} />

          <section className="md:lg-8 ml-0 flex h-full max-w-[760px] flex-col justify-start px-2 md:w-[43%] lg:ml-4 lg:w-[43%]">
            <div className="flex items-center justify-between">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-[11px] tracking-[1.5px] text-[#999]">
                  SKU
                </span>
                <span className="text-[11px] tracking-[1.5px] text-[#999]">
                  {product.sku}
                </span>
              </div>
              <div className="mb-4 flex items-center justify-center space-x-3 md:mb-0 lg:mb-0">
                <div className="flex flex-col items-center justify-center">
                  <button className="hover:text-lightPink">
                    <Heart
                      size={32}
                      className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
                      strokeWidth={0.8}
                    />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="duration-75 hover:text-lightPink">
                    <Share2
                      size={32}
                      className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
                      strokeWidth={0.8}
                    />
                  </button>
                </div>
              </div>
            </div>

            <h1 className="mb-2 text-[14px] font-normal tracking-[2px] text-gray-900 md:text-[22px] md:font-bold lg:text-[22px] lg:font-bold">
              {product.name}
            </h1>
            <div className="lg:pb-- mb-6 max-w-full border-b border-gray-200 text-lg text-gray-900 md:max-w-[456px] md:pb-0 lg:pl-0">
              <div className="hidden items-center justify-start space-x-4 md:flex lg:flex xl:flex">
                {product.discount ? (
                  <>
                    <span className="tracking-[2px] text-gray-500 line-through">
                      $ {product.price}
                    </span>
                    <span className="font-normal tracking-[2px] text-black">
                      $ {product.discountPrice}
                    </span>
                  </>
                ) : (
                  <span>${product.price}</span>
                )}

                {product.discount && (
                  <div className="bg-lightPink/30 px-3 py-1">
                    <span className="text-sm font-bold text-black">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}
              </div>

              <div className="mb-5 mt-5 flex w-full items-center justify-start">
                <div className="flex items-center gap-3 rounded-lg bg-[#eeeeee] px-[14px] py-[4px]">
                  <Image
                    src={isaClubLogo}
                    alt=""
                    height={13}
                    width={63}
                    className="h-[12px]"
                  />
                  <span className="text-[12px] font-medium text-[#d32951] md:text-[14px] lg:text-[16px] xl:text-[16px]">
                    ¡Registrate y sumá puntos!
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <div className="mb-6 space-y-1">
                <h4 className="text-xs font-bold text-gray-800">DESCRIPCIÓN</h4>

                <p className="text-xs text-gray-700">{product.description}</p>
                {showMore && (
                  <p className="text-xs text-gray-700">
                    {product.extraDescription}
                  </p>
                )}
              </div>

              <button
                onClick={toggleShowMore}
                className="mt-6 text-xs text-black"
              >
                <span className="tracking-[2px] underline">
                  {showMore ? 'Ver menos' : 'Ver más'}
                </span>
              </button>
            </div>

            <Button
              className="mb-10 mt-4 hidden h-[50px] w-[250px] rounded-none text-[16px] uppercase hover:bg-lightPink hover:text-black md:block lg:block"
              title="Añadir al carrito"
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </Button>

            <div className="mb-10">
              <span className="text-[11px] font-semibold tracking-[2px]">
                MÁS OPCIONES DISPONIBLES:
              </span>
              <div className="mt-2 flex space-x-2">
                {product.colors.map((color, key) => (
                  <TooltipProvider key={key}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          key={color.value}
                          className="h-[28px] w-[28px] cursor-pointer rounded-full"
                          style={{ backgroundColor: color.colorCode }}
                        ></div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{color.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {product.shippingInfo && (
                <div className="flex items-center space-x-4">
                  <div className="min-w-[45px]">
                    <Image
                      src={envioImg}
                      width={45}
                      height={45}
                      alt="Envio gratis"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                      {product.shippingInfo.title}
                    </h4>
                    <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                      {product.shippingInfo.description}
                    </p>
                  </div>
                </div>
              )}

              {product.returnInfo && (
                <div className="flex items-center space-x-4">
                  <div className="min-w-[45px]">
                    <Image
                      src={cambiosImg}
                      width={45}
                      height={45}
                      alt="Cambios y devoluciones"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                      {product.returnInfo.title}
                    </h4>
                    <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                      {product.returnInfo.description}
                    </p>
                  </div>
                </div>
              )}

              {product.paymentInfo && (
                <div className="flex items-center space-x-4">
                  <div className="min-w-[45px]">
                    <Image
                      src={logoTargeta}
                      width={45}
                      height={45}
                      alt="Cambios y devoluciones"
                    />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold tracking-[2px] text-lightPink">
                      {product.paymentInfo.title}
                    </h4>
                    <p className="text-[11px] leading-[20px] tracking-[2px] text-gray-600">
                      {product.paymentInfo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-md md:hidden">
          <div className="flex items-center justify-between px-4 py-2">
            <div>
              <span className="text-[14px] text-lg tracking-[2px] text-black">
                ${product.price}
              </span>
            </div>

            <Button
              className="mb-10 mt-4 hidden h-[50px] w-[250px] rounded-none text-[16px] md:block lg:block"
              onClick={() => addToCart(product)}
            >
              ADICIONAR AO CARRINHO
            </Button>

            <div className="">
              <Button
                className="h-[45px] w-[200px] rounded-none bg-black text-[14px] hover:bg-lightPink"
                onClick={() => addToCart(product)}
              >
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 hidden lg:block xl:block">
        <div className="mb-12 flex items-center justify-center">
          <h2 className="text-[24px] font-medium tracking-[2px]">
            Compre o look
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4">
            {mockProducts2.map((product: any, idx: any) => (
              <LookProductItem
                key={idx}
                name={product.name}
                price={product.price}
                images={product.images}
                colors={product.colors}
                sizes={product.sizes}
              />
            ))}
            <div className="flex h-[82%] flex-col items-center justify-center space-y-3 bg-[#f5f5f5] p-8">
              <p className="tracking-[2px]">Compre o look completo por</p>
              <p className="text-[24px] tracking-[2px]">$ 639,97</p>
              <Button className="h-[56px] w-full rounded-sm bg-black">
                COMPRAR LOOK COMPLETO
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden xl:hidden">
        <div className="items-left mb-4 mt-10 flex justify-start">
          <h2 className="text-left text-[20px] font-medium tracking-[2px]">
            Compre o look
          </h2>
        </div>

        <LookProductCarousel mockProducts={mockProducts2} />

        <div className="mt-8">
          <Button className="h-[56px] w-full rounded-sm bg-black">
            Comprar o look por R$639,97
          </Button>
        </div>
      </div>

      <div className="mt-20 hidden lg:block xl:block">
        <div className="mb-12 flex items-center justify-center">
          <h2 className="text-[24px] font-medium tracking-[2px]">
            Productos Similares
          </h2>
        </div>
        <div>
          <CarouselComponent mockProducts={mockProducts} />
          <div className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-md md:hidden">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="text-[14px] text-lg tracking-[2px] text-black">
                ${product.price}
              </div>
              <Button
                onClick={() => addToCart(product)}
                className="h-[45px] w-[200px] rounded-none bg-black text-[14px]"
              >
                ADICIONAR AO CARRINHO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
