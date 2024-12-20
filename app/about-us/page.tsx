import { Button } from '@/components/shadcn/ui/button';
import banner1 from '@/public/about-us/about-us-banner-1.webp';
import banner2 from '@/public/about-us/about-us-banner-2.webp';
import banner3 from '@/public/about-us/about-us-banner-3.webp';
import banner4 from '@/public/about-us/about-us-banner-4.webp';
import banner5 from '@/public/about-us/about-us-banner-5.webp';
import banner6 from '@/public/about-us/about-us-banner-6.webp';
import bannner_1_mobile from '@/public/about-us/mobile/banner-1-mobile.jpg';
import bannner_2_mobile from '@/public/about-us/mobile/banner-2-mobile.webp';
import bannner_3_mobile from '@/public/about-us/mobile/banner-3_mobile.webp';
import bannner_4_mobile from '@/public/about-us/mobile/banner-4_mobile.webp';
import bannner_5_mobile from '@/public/about-us/mobile/banner-5_mobile.webp';
import bannner_6_mobile from '@/public/about-us/mobile/banner-6_mobile.webp';

import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="mt-16 flex flex-col px-4 md:flex md:px-0 lg:flex lg:px-0">
      <section>
        <div>
          {/* Imagem para desktop */}
          <Image
            src={banner1}
            alt="Banner"
            className="hidden w-full md:block lg:block"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_1_mobile}
            alt="Banner"
            className="w-full md:hidden lg:hidden"
          />
        </div>
      </section>
      <section className="flex flex-col items-start justify-between md:flex-row lg:flex-row">
        <div className="w-full max-w-[840px] md:w-1/2">
          {/* Imagem para desktop */}
          <Image
            src={banner2}
            alt="Banner"
            className="hidden h-auto min-h-[300px] w-full min-w-[385px] object-contain md:block lg:block"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_2_mobile}
            alt="Banner"
            className="w-full md:hidden lg:hidden"
          />
        </div>

        {/* <div className="hidden w-[8.33%] lg:block"></div> */}
        <div className="m-auto w-full md:w-1/2">
          <div className="max-w-[560px] flex-1 flex-col items-center justify-center space-y-4 p-8 text-left tracking-[2px] lg:mx-20 lg:p-0">
            <p className="text-sm font-extrabold">
              Somos una marca llena de historias para contar y mundos a los que
              transportarnos
            </p>
            <p className="text-xs">
              Nacimos con el objetivo de ser una aliada de las mujeres.
            </p>
            <p className="text-xs">
              Queremos ser ese pequeño oasis en tu vorágine diaria, donde puedas
              relajarte, consentirte y disfrutar con ese mimo merecido.
            </p>
            <p className="text-xs">
              Trabajamos con pasión para ofrecerte una colección de accesorios
              de moda y lifestyle que potencien tu personalidad, expresen tu
              mundo interior y te haga sentir bien.{' '}
            </p>
            <p className="text-xs">
              Queremos ser el lugar donde encontrar ese regalo que nunca falla
              para esa persona que quieres.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-between md:flex-row lg:flex-row">
        {/* <div className="hidden w-[17.3%] md:block lg:block"></div> */}
        <div className="m-auto w-full max-w-[840px]">
          <div className="mt-2 flex-col items-center justify-center space-y-4 p-8 text-left tracking-[2px] lg:mx-14 lg:p-0">
            <p className="text-sm font-bold">Nuestro orgullo...</p>
            <p className="text-xs">
              El equipo humano, su compromiso y el amor por lo que hacen.
            </p>
            <p className="text-xs">
              El diseño. nuestras colecciones, nuestros prints, nuestros
              packaging son únicos y exclusivos y están desarrolladas con mimo y
              creatividad desde cero por nuestros equipos creativos.
            </p>
            <p className="text-xs">
              Nuestro compromiso con causas en las que creemos: Celebramos cada
              iniciativa ecológica que surge para minimizar nuestro impacto en
              el medio ambiente y sentimos la responsabilidad social de apoyar a
              las comunidades locales con emprendimientos que refuerzan la
              figura de la mujer en los lugares de origen donde operamos.
            </p>
            <p className="text-xs">
              Nuestro ideal de belleza natural, que sale de adentro. Te
              invitamos a mostrarse como eres y buscar lo que te hace feliz.
            </p>
            <p className="text-xs">
              El ser especialistas en cada uno de los rubros que trabajamos.
            </p>
          </div>
        </div>
        {/* <div className="hidden w-[17.3%] md:block lg:block"></div> */}
        <div className="w-full">
          {/* Imagem para desktop */}
          <Image
            src={banner3}
            alt="Banner"
            className="hidden h-auto min-h-[300px] w-full min-w-[450px] max-w-[840px] object-contain md:block lg:block"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_3_mobile}
            alt="Banner"
            className="mt-3 w-full md:hidden lg:hidden"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row lg:flex-row">
        <div>
          {/* Imagem para desktop */}
          <Image
            src={banner4}
            alt="Banner"
            className="hidden md:block lg:block"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_4_mobile}
            alt="Banner"
            className="mt-3 w-full md:hidden lg:hidden"
          />
        </div>

        <div className="hidden w-[8.33%] lg:block"></div>
        <div className="m-auto">
          <div className="flex-1 flex-col items-center justify-center space-y-4 p-8 text-left tracking-[2px]">
            <p className="text-sm font-extrabold">Nuestros desafios</p>
            <p className="text-xs">Anticiparnos a lo que te gusta.</p>
            <p className="text-xs">Llegar a las emociones y sentidos</p>
            <p className="text-xs">
              Hacer simple y placentera la elección de accesorios para ti y para
              las mujeres de tu vida.
            </p>
          </div>
        </div>
        <div className="hidden w-[8.33%] lg:block"></div>
      </section>
      <section className="flex flex-col md:flex-row lg:flex-row">
        <div className="m-auto mx-0 max-w-[840px] lg:w-[840px]">
          <div className="flex-1 flex-col items-center justify-center space-y-4 p-8 text-left tracking-[2px] lg:mx-14 lg:px-20">
            <p className="text-sm font-extrabold">Nuestra historia..</p>
            <p className="text-xs">
              Nacimos en el 2004 con nuestra primera tienda en Argentina.
            </p>
            <p className="text-xs">
              Hoy tenemos presencia en 4 países con más de 210 puntos de venta
              además de nuestro E-commerce.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[840px]">
          {/* Imagem para desktop */}
          <Image
            src={banner5}
            alt="Banner"
            className="hidden h-auto min-h-[300px] w-full min-w-[450px] max-w-[840px] object-contain md:block lg:block"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_5_mobile}
            alt="Banner"
            className="mt-3 w-full md:hidden lg:hidden"
          />
        </div>

        {/* <div className="w-[540px]"></div> */}
      </section>
      <section className="mb-14 flex h-full flex-col md:flex-row lg:flex-row">
        {/* Primeira Div com a Imagem */}
        <div className="w-full max-w-[840px]">
          {/* Imagem para desktop */}
          <Image
            src={banner6}
            alt="Banner"
            quality={100}
            className="hidden h-auto w-full max-w-[840px] object-contain md:block md:min-h-[300px] lg:block lg:min-w-[450px]"
          />

          {/* Imagem para mobile */}
          <Image
            src={bannner_6_mobile}
            alt="Banner"
            className="mt-3 w-full md:hidden lg:hidden"
          />
        </div>

        {/* Segunda Div com Texto e Botão */}
        <div className="mt-3 md:mt-0 lg:mt-0 xl:mt-0">
          <div className="flex h-auto w-full max-w-[840px] flex-grow items-center justify-center bg-[#f8dee0] px-4 py-24 md:h-full md:py-0 lg:py-0">
            <div className="mx-12 text-center lg:mx-0 lg:w-full xl:w-[840px] xl:max-w-[840px]">
              <div className="space-y-4">
                <p className="text-lg font-black">¡Trabajá con nosotros!</p>
                <p className="text-sm">¡Formá parte de nuestro equipo!</p>
                <p className="text-sm">
                  Podés aplicar a las búsquedas vigentes
                </p>
                <p className="text-sm">
                  o también dejar tus datos para futuras búsquedas
                </p>
              </div>
              <div className="mt-8">
                <Button className="hover:bg-#f8dee0]/80 h-[57px] w-[256px] rounded-none border border-[#d4cbcb] bg-transparent p-3 text-black shadow-none">
                  APLICAR AHORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
