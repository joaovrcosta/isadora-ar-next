'use client';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export function LoginTab() {
  const pathName = usePathname();

  return (
    <div className="flex w-full">
      <Link
        href="/customer/account/login"
        className={clsx(
          'flex h-[50px] flex-1 items-center justify-center border-b text-sm font-bold',
          pathName === '/customer/account/login'
            ? 'border-black'
            : 'border-gray-300 text-gray-400',
        )}
      >
        Iniciar Sessão
      </Link>
      <Link
        href="/customer/account/create"
        className={clsx(
          'flex h-[50px] flex-1 items-center justify-center border-b text-sm font-bold',
          pathName === '/customer/account/create'
            ? 'border-black'
            : 'border-gray-300 text-gray-400',
        )}
      >
        Criar Conta
      </Link>
    </div>
  );
}
