import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/shadcn/ui/accordion';

const SecurePurchaseContent = () => (
  <>
    <p className="mb-4 text-xs">
      Nuestro sitio tiene toda la seguridad para tu compra
    </p>
    <div className="flex items-center gap-2">
      <Image
        src={'/icons/data-fiscal.webp'}
        alt="data--fiscal"
        height={42}
        width={30}
        className="cursor-pointer"
      />
      <Image
        src={'/icons/le-logo-twitter-noalpha.webp'}
        alt="encrypt"
        height={65}
        width={65}
        className="cursor-pointer"
      />
    </div>
  </>
);

const SecurePurchaseAccordion = () => (
  <Accordion type="single" collapsible className="md:hidden">
    <AccordionItem value="item-1" className="border-black">
      <AccordionTrigger className="font-semibold text-[#686868] hover:no-underline">
        Compra 100% segura
      </AccordionTrigger>
      <AccordionContent>
        <SecurePurchaseContent />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

const SecurePurchase = () => (
  <div className="column w-auto px-4">
    <SecurePurchaseAccordion />

    <div className="hidden md:block">
      <h3 className="mb-4 font-semibold">Compra 100% segura</h3>
      <SecurePurchaseContent />
    </div>
  </div>
);

export default SecurePurchase;
