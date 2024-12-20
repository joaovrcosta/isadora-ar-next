import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/ui/accordion';

const TiendaOnlineLinks = () => (
  <ul className="text-xs">
    {[
      { href: '/contact', text: 'Contactanos' },
      { href: '/', text: 'Preguntas frecuentes' },
      { href: '/faq', text: 'Cambios y devoluciones' },
      { href: '/faq', text: 'Medios de pago' },
      { href: '/faq', text: 'Información de envíos' },
      { href: '/regret-button', text: 'Botón de arrepentimiento' },
      { href: '/', text: 'Defensa del consumidor' },
      { href: '/', text: 'Defensa del consumidor (CABA)' },
      { href: '/', text: 'Empresa Amiga' },
    ].map((link, index) => (
      <li key={index} className="mb-3 leading-6">
        <Link href={link.href}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

const TiendaOnline = () => (
  <div className="column min-w-auto px-4">
    {/** Accordion para mobile */}
    <Accordion type="single" collapsible className="no-underline md:hidden">
      <AccordionItem value="item-1" className="border-black">
        <AccordionTrigger className="font-semibold text-[#686868] hover:no-underline">
          Tienda online
        </AccordionTrigger>
        <AccordionContent>
          <TiendaOnlineLinks />
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    {/** Conteúdo normal para desktop */}
    <div className="hidden md:block">
      <h3 className="mb-4 font-semibold">Tienda online</h3>
      <TiendaOnlineLinks />
    </div>
  </div>
);

export default TiendaOnline;
