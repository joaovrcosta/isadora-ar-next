import React from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetOverlay,
} from '@/components/shadcn/ui/sheet';
import { cn } from '@/lib/utils';
import useCartStore from '@/app/_stores/useCartStore';
import { Separator } from '@/components/shadcn/ui/separator';
import Image from 'next/image';

import { Trash2 } from 'lucide-react';

interface CartProps {
  isOpenCart: boolean;
  setIsOpenCart: (value: boolean) => void;
}

import fixedImage from "@/public/products/product-image-4.webp";
import Link from 'next/link';

const Cart: React.FC<CartProps> = ({ isOpenCart, setIsOpenCart }) => {
  const cart = useCartStore((state) => state.cart);
  // console.log("cart", cart);

  const subTotal = cart.reduce((acc, item) => acc + Number(item.price || 0), 0);


  return (
    <Sheet open={isOpenCart} onOpenChange={setIsOpenCart}>
      <SheetTrigger className="hover:opacity-70 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={cn(
            'h-7 w-7',
            isOpenCart ? 'text-[#ffb8b8]' : 'stroke-current',
            cart.length > 0 && 'text-black stroke-black fill-black'
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
          {cart.length > 0 && (
            <span className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/4 text-white text-sm'>
              {cart.length}
            </span>
          )}
      </SheetTrigger>

      <SheetOverlay className="top-20 bg-white/75 px-5 pb-10 pt-6 md:top-24" />
      <SheetContent className="top-20 w-11/12 px-5 pb-10 pt-6 text-center sm:max-w-none md:top-24 md:w-full md:max-w-md md:h-fit shadow-inner md:text-sm md:p-0 md:max-h-[75vh]">
        {/* Add your cart items here */}

        {cart.length === 0 ? (
          <p className="px-8 py-4">
            No hay productos en tu carrito de compras.
          </p>
        ) : (
                <div className='flex flex-col gap-4 p-4 h-fit max-h-full' >
                <SheetHeader hidden>
                  <SheetTitle hidden>Your Cart</SheetTitle>
                  <SheetDescription hidden>
                    Items you have added to your cart.
                  </SheetDescription>
                </SheetHeader>

                <div className='overflow-y-auto max-h-60'>
                {cart.map((item) => (
                  <div key={item.name} className='flex gap-2'>
                  <Image src={fixedImage} alt='image for product' width={81} height={100}/>
                  <div className='grow'>
                    <div className='relative'>
                    <p className='text-xs font-medium text-left'>{item.name}</p>
                    <p className='text-[11px] text-[#a1a1a1] text-left'> Cantidad: 1</p>
                    
                    

                    <button
                      onClick={() => item && useCartStore.getState().removeFromCart(item)}
                      className='absolute top-0 right-0 p-1'
                    >
                      <Trash2 size={22} color='#303030' />
                    </button>
                    </div>

                    <div className='flex gap-4 mt-4 justify-between items-center'>
                    <p className='text-sm font-medium'>{item?.price?.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>

                    <div className='flex items-center h-10'>
                      <button
                      onClick={() => item && useCartStore.getState().decreaseQuantity(item)}
                      className='bg-[#f8e6e3] px-2 py-1 h-full w-9'
                      >
                      -
                      </button>
                      <input
                      type='text'
                      value={item.quantity}
                      defaultValue={1}
                      readOnly
                      className='h-full w-9 text-center bg-white border border-gray-300'
                      />
                      <button
                      onClick={() => item && useCartStore.getState().increaseQuantity(item)}
                      className='bg-[#f8e6e3] px-2 py-1 h-full w-9'
                      >
                      +
                      </button>
                    </div>

                    </div>
                  </div>
                  
                  </div>
                ))}


                </div>

                <Separator orientation='horizontal' className='bg-black'/>

                <div className="flex justify-between">
                  <p className='w-fit text-lg font-medium'>Subtotal</p>
                  <p className='text-right text-lg font-medium'>{subTotal.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</p>
                </div>


                <Link href={"/checkout/cart"}   onClick={() => setIsOpenCart(false)} className="bg-black text-white px-6 py-4 mt-4 w-full hover:brightness-75">
                  FINALIZAR COMPRA
                </Link>
              </div>

        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
