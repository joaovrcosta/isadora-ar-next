'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './shadcn/ui/breadcrumb';

// Função auxiliar para capitalizar a primeira letra
function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function CustomBreadCrumbs() {
  const pathname = usePathname(); // Obter o pathname atual
  const paths = pathname.split('/').filter(Boolean); // Dividir e filtrar partes vazias

  return (
    <div className="hidden py-5 md:block lg:block">
      <Breadcrumb>
        <BreadcrumbList>
          {/* Item fixo "Início" */}
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Início</BreadcrumbLink>
          </BreadcrumbItem>

          {paths.map((segment, index) => {
            // Remover "product" do caminho
            if (segment.toLowerCase() === 'product') return null;

            const href = `/${paths.slice(0, index + 1).join('/')}`; // Construir o link incrementalmente
            const isLast = index === paths.length - 1; // Verificar se é o último item

            return (
              <div key={segment} className="flex space-x-3">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {capitalize(decodeURIComponent(segment))}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>
                      {capitalize(decodeURIComponent(segment))}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
