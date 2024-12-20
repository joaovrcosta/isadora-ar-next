'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';

export function SidebarAccount() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Minha conta', path: '/customer/account' },
    { label: 'Meus dados', path: '/customer/account/edit' },
    { label: 'Meus pedidos', path: '/customer/account/history' },
    { label: 'Meus endereços', path: '/customer/account/address' },
    { label: 'Meus favoritos', path: '/customer/account/wishlist' },
    { label: 'Giftcard', path: '/customer/account/giftcard' },
    { label: 'Newsletter', path: '/customer/account/newsletter' },
  ];

  return (
    <aside className="mt-2 bg-white px-5 py-2 md:mt-0 md:px-14 lg:mt-0 lg:px-16 xl:mt-0 xl:px-16">
      <div className="w-full py-5 md:py-16 lg:w-[314px] lg:max-w-[314px] lg:py-16 xl:w-[314px] xl:max-w-[314px] xl:py-16">
        {/* Botão de hamburguer para dispositivos móveis */}
        <li className="hidden font-bold md:block lg:block xl:block">
          <h3>Olá,</h3>
          <p className="text-sm font-light">customer@store.com</p>
        </li>

        <div className="mb-0 block flex items-center justify-center px-4 md:mb-4 md:hidden lg:mb-4 xl:mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-bold flex w-full items-center justify-between gap-2 text-xl text-black"
          >
            {/* Mostra o ícone baseado no estado isOpen */}
            {/* Texto dinâmico */}
            {isOpen ? 'Minha conta' : 'Minha conta'}
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`mt-6 space-y-5 px-5 text-[13px] ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          {/* Bloco de boas-vindas */}

          {/* Itens do menu */}
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`block cursor-pointer ${
                  pathName === item.path
                    ? 'border-l-4 border-black pl-2 font-bold'
                    : 'text-gray-700 transition-all duration-100 hover:text-lightPink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Botão de sair */}
          <li className="mt-8">
            <button className="text-[13px] font-bold">Sair da conta</button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
