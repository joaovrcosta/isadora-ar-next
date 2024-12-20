import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/ui/accordion';

const SomosIsadoraLinks = () => (
  <ul className="text-xs">
    {[
      { href: '/about-us', text: 'Sobre Isadora' },
      { href: '/', text: 'Trabajá con nosotros' },
      { href: '/locales', text: 'Localizador de tiendas' },
      { href: '/terms-and-conditions', text: 'Términos y Condiciones' },
      { href: '/', text: 'Bases y Condiciones ISACLUB' },
      { href: '/faq', text: 'Preguntas Frecuentes ISACLUB' },
      { href: '/privacy-policy', text: 'Política de Privacidad' },
      { href: '/', text: 'Expansión' },
      { href: '/', text: 'Proveedores' },
    ].map((link, index) => (
      <li key={index} className="mb-3 leading-6">
        <Link href={link.href}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

const SomosIsadora = () => (
  <div className="column min-w-auto px-4">
    <Accordion type="single" collapsible className="md:hidden">
      <AccordionItem value="item-1" className="border-black">
        <AccordionTrigger className="font-semibold text-[#686868] hover:no-underline">
          Somos Isadora
        </AccordionTrigger>
        <AccordionContent>
          <SomosIsadoraLinks />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <div className="hidden md:block">
      <h3 className="mb-4 font-semibold">Somos Isadora</h3>
      <SomosIsadoraLinks />
    </div>
  </div>
);

export default SomosIsadora;
