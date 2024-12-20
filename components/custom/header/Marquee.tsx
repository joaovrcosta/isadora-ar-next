import Link from 'next/link';

const hrefToSubscription =
  '/descubre-isaclub/?itm_source=web&itm_medium=mheader&itm_campaign=suscripcionisaclub';

interface Props {
  marqueeTexts: string[];
}

const Marquee = ({ marqueeTexts }: Props) => {
  return (
    <section className="w-full overflow-hidden whitespace-nowrap bg-[#FAE2E2]">
      <div className="hover:animation-paused inline-flex w-auto min-w-[100%] animate-marquee text-xs leading-4 tracking-widest text-black md:leading-8">
        {marqueeTexts?.map((text, index) => (
          <div key={index}>
            <Link href={hrefToSubscription} className="px-5 tracking-widest">
              <u>¡SUSCRIBITE</u>A ISACLUB Y EMPEZÁ A SUMAR PUNTOS!
            </Link>
            <span className="px-5 text-center tracking-widest">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
