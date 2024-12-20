import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/ui/accordion";
import { ShoppingBasket } from "lucide-react";

export default function FAQPage() {
    return (
       <div className="mt-56 mb-12">
<div className="relative">
  <div className="bg-[#f9dcd8] py-24 flex items-center justify-center">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-[115%] xl:-translate-y-[115%] md:-translate-y-[115%] -translate-y-[170%] text-center space-y-6 flex flex-col">
      <span className="lg:text-6xl xl:text-6xl md:text-6xl text-2xl tracking-[10px] font-semibold">PERGUNTAS</span>
      <span className="lg:text-6xl xl:text-6xl md:text-6xl text-2xltext-6xl tracking-[10px] font-semibold">FREQUENTES</span>
    </div>
  </div>
</div>



         <div className="w-full flex justify-center mt-14">
            <div className="w-full max-w-7xl px-4">
                {/* Seção Sobre a Compra */}
                <div className="flex items-center justify-start gap-3">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Sobre la compra</h2>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex gap-3 text-[18px]">
                                ¿Cómo compro?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex text-sm tracking-[2px]">
                            <div>
  <p><strong>BUSCAR:</strong> Navega por el sitio hasta encontrar el producto que más te guste. Podés encontrarlos por categoría, en el buscador o ingresando el nombre del producto de tu interés (Ej: billetera).</p>

  <p><strong>AGREGAR AL CARRITO:</strong> Seleccioná “Comprar” para agregar el producto al carrito. Podés continuar navegando y agregando todos los productos que quieras.</p>

  <p><strong>REVISAR:</strong> Una vez que hayas terminado de agregar los productos en el carrito, revisa que estén bien las cantidades que seleccionaste. Si tenés un “Cupón de descuento” o “Gift Card” debes aplicarlo antes de iniciar el pago. Luego, ya podés clickear en “Finalizar compra”.</p>

  <p><strong>ENVÍO:</strong> Elegí recibir la compra en tu domicilio o retirarla en una tienda y completa los datos de facturación.</p>

  <p><strong>PAGAR:</strong> En el proceso de pago deberás completar tus datos y seleccionar método de envío. Hace click en “Iniciar Pago” para terminar de pagar.</p>

  <p><strong>RECIBIR PEDIDO:</strong> Terminado el proceso de compra online, vas a recibir vía e-mail toda información sobre el estado de tu pedido.</p>
</div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className="flex gap-3 text-[18px]">
                                ¿Cuál es el estado de mi compra?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex text-sm tracking-[2px]">
                            <div>
  <p>Puedes conocer el estado de tu pedido desde &quot;Mi cuenta&quot; {">"} &quot;Mis pedidos&quot;.</p>

  <p><strong>⚬ Aprobado:</strong> El pago fue aprobado en nuestra tienda online. Pronto comenzaremos con la preparación de tu pedido.</p>

  <p><strong>⚬ Pago pendiente:</strong> El pago de la compra aún no se realizó.</p>

  <p><strong>⚬ En preparación:</strong> Estamos preparando tu pedido.</p>

  <p><strong>⚬ Despachado:</strong> El pedido salió de nuestro centro de distribución a la tienda o domicilio donde recibirás tu compra.</p>

  <p><strong>⚬ Listo para retiro:</strong> Puedes acercarte a la tienda seleccionada para retirar tu compra.</p>

  <p><strong>⚬ Entregado:</strong> La compra fue entregada.</p>

  <p><strong>⚬ Cancelado:</strong> La compra fue cancelada.</p>
</div>

                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <div className="flex gap-3 text-[18px] ">
                                ¿Recibo el mismo producto que veo en la foto?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex text-sm tracking-[2px]">
                                <p>Sí. En Isadora nos esforzamos al máximo para mostrar los productos tal cual son. Donde reflejen sus características reales, como su color y textura.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <div className="flex gap-3 text-[18px]">
                                ¿Lo quiero para regalo?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex text-sm tracking-[2px]">
                                <p>Si seleccionas esta opción en &quot;Mi carrito&quot; todos los productos de la orden se enviarán sin precio y con las bolsas correspondientes. También vas a poder sorprender con un saludo especial, recibirás un mail para grabarlo y llegará en un QR con tu regalo.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Seção Registro de Usuario */}
                <div className="flex items-center justify-start gap-3 mt-6">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Registro de Usuario</h2>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex gap-3 text-[18px]">
                                ¿Debo estar registrado para poder comprar?
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex text-sm tracking-[2px]">
                                <p>No. No es necesario que estes registrado, contás con la opción de compra como invitado. En esta modalidad de compra, te solicitaremos únicamente los datos imprescindibles para poder tramitar tu pedido. Una vez finalizado el proceso de compra, te ofreceremos la posibilidad de registrarse como usuario o continuar como usuario no registrado. Te recomendamos registrarte para que tengas la mejor experiencia de compra y puedas recibir beneficios exclusivos.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo me registro en el sitio de ISADORA?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Cliquea en &quot;Mi cuenta&quot; en la parte superior derecha del sitio y luego en &quot;registrarme&quot;. Serás dirigido automáticamente a la página para ingresar a tu cuenta. En &quot;Nuevos Clientes&quot; completa el formulario y crea tu cuenta. Isadora posee una política de privacidad por la cual ningún dato personal será divulgado a terceros en ninguna circunstancia.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Seção Medios de pago */}
                <div className="flex items-center justify-start gap-3 mt-6">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Medios de pago</h2>
                </div>
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Qué formas de pago puedo utilizar para realizar mi compra?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Se puede pagar en cuotas con todas las tarjetas de crédito de cualquier banco y con tarjeta de débito. Los pagos serán procesados a través de Mercado Pago. También se puede pagar con Gift Cards y en efectivo en Rapipago y Pago Fácil. (Si seleccionaste abonar en efectivo, recomendamos realizar el pago antes 24hs una vez realizada la compra, en caso contrario se cancelará la reserva de esta).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Qué promociones y cuotas hay disponibles?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                        <div className="text-sm tracking-[2px]">
  <p><strong>Podés pagar con Visa, MasterCard, Mercado Pago y Naranja plan Z en 3 cuotas sin interés en compras superiores a $35.000 y 6 cuotas sin interés en compras superiores a $60.000.</strong></p>
  
  <p>El precio publicado corresponde a precio contado efectivo, tarjetas de débito o tarjetas de crédito en 1 pago.</p>
</div>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Es seguro pagar en este sitio?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Toda la información que ingresas queda automáticamente protegida por el sistema SSL (Secure Sockets Layer) que garantiza una transacción 100% segura. Este sistema encripta los datos suministrados y evita su uso desautorizado.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Puedo pedir factura A?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Por el momento sólo entregamos facturas tipo “B”, para consumidor final.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Seção Gift Cards y Cupones de descuento */}
                <div className="flex items-center justify-start gap-3 mt-6">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Gift Cards y Cupones de descuento</h2>
                </div>
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo puedo canjear mi Gift Card Online?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Para canjear tu Gift Card, debes aplicar el código de 10 dígitos en la opción ¿Tenes una Tarjeta regalo? luego de haber agregado tus productos al carrito y antes de finalizar tu compra.

Podes usarla únicamente en la web, su uso puede ser parcial o total y tenes un año desde el momento que la recibiste para cambiarla. Recordá registrarte y loguearte antes de iniciar tu compra.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo aplicar un cupón de descuento?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Para poder aplicar tu cupón de descuento, debes estar registrado y logueado. Te sugerimos crearte una cuenta en la tienda. De lo contrario, el cupón no aplicará. Para ello debes ingresar aquí y hacer clic en &quot;CREAR UNA CUENTA&quot;.

Tené en cuenta que no son acumulables con otras promociones o descuentos. Excluye SALE y cualquier otra promoción que se encuentre vigente en la tienda online.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Seção Envíos y retiro en tienda */}
                <div className="flex items-center justify-start gap-3 mt-6">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Envíos y retiro en tienda</h2>
                </div>
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span className="text-[18px]">Información sobre envíos</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Hacemos envíos a todo el país por medio de ANDREANI y PEDIDOS YA. También enviamos con URBANO a Capital Federal y Gran Buenos Aires.

Te enviamos tu pedido a la puerta de tu casa o podés retirarlo por tu tienda de ISADORA favorita.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo puedo seguir mi pedido?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Una vez que confirmada la compra, recibirás un mail con el cual te registraste en nuestra web, con tu número de pedido y el estado de este.

Cuando sea enviado desde nuestro Centro de Distribución a tu domicilio recibirás un mail con el número de seguimiento para que puedas consultar el estado desde la página del proveedor.

Si elegiste retirarlo en una tienda; una vez que el pedido se encuentre disponible estarás recibiendo un mail y un aviso por WhatsApp para que lo retires con el N° de orden y DNI.

También podés consultar el estado de tu pedido en WhatsApp +54 9 11 4419-7924 ingresando al menú Atención al Cliente {">>"} Status de pedido con el N° de DNI del comprador y N° de orden.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Tienen envíos gratis?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Tenemos envíos a domicilio gratis en compras superiores a $30.000. Si el importe es menor el costo es de $3.000 a todo el país.

¡Los envíos a tiendas ISADORA son gratis!</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cuáles son los tiempos de envío?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                        <div className="text-sm tracking-[2px]">
  <p><strong>Los tiempos de envío a domicilio son:</strong></p>
  <ul>
    <li>⚬ AMBA hasta 4 días hábiles</li>
    <li>⚬ INTERIOR y GBA hasta 6 días hábiles</li>
  </ul>

  <p><strong>Los tiempos de retiro en tienda son:</strong></p>
  <ul>
    <li>⚬ AMBA hasta 4 días hábiles</li>
    <li>⚬ INTERIOR y GBA hasta 6 días hábiles</li>
  </ul>

  <p><strong>IMPORTANTE</strong></p>
  <ul>
    <li>⚬ Las entregas se realizan de lunes a viernes de 9:00 a 18:00hs y sábados de 9:00 a 14:00hs.</li>
    <li>⚬ El pedido puede ser recepcionado por cualquier mayor de 18 años que acredite su identidad.</li>
    <li>⚬ Los pedidos realizados durante los fines de semana y días feriados se procesarán al día hábil siguiente.</li>
    <li>⚬ Las entregas a destinos con baja población y/o accesibilidad limitada pueden tardar más tiempo de lo especificado.</li>
    <li>⚬ En periodo de promociones y rebajas el plazo de entrega puede ser superior al habitual.</li>
  </ul>
</div>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cuánto tiempo tengo para retirar mi pedido en tienda?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Tenés un plazo máximo de 15 días para ir a recoger tu compra.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo retiro mi pedido en tienda?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Podes acercarte a la tienda una vez que hayas recibido el aviso presentando tu DNI y el número de pedido.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Puede retirar otra persona mi pedido en la Tienda?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Si, no necesita autorización. Comparte a la persona que va a retirar tu pedido el mail de confirmación de compra junto al número de pedido, para presentar en la tienda.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Seção Cambios y devoluciones */}
                <div className="flex items-center justify-start gap-3 mt-6">
                    <ShoppingBasket size={34} />
                    <h2 className="text-3xl">Cambios y devoluciones</h2>
                </div>
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Cómo puedo cambiar mi pedido?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Te esperamos en cualquier tienda del país para hacer el cambio tenes 6 meses una vez recibida la compra, para eso te pediremos el número de la factura online o DNI, y que el producto se encuentre con sus etiquetas originales.

Tendrás la opción de cambiarlo por cualquier producto de la tienda, se reconocerá el producto al valor abonado al momento de la compra o que podés cambiar tus productos por una Gift Card cargada por el mismo importe, para ser canjeada total o parcialmente en cualquier local de la marca.

En caso de que quieras cambiar un regalo que recibiste y no tenes ticket, con el nombre o mail de la persona que realizó la compra podés realizar el cambio.

Por cuestiones de higiene limitamos los cambios de: aros, tapabocas, perfumes y cosméticos. Solo se aceptan en su empaque original cerrado.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Puedo pedir reembolso de dinero si no estoy contento con mi compra?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                        <div className="text-sm tracking-[2px]">
  <p><strong>Sí. Dispones de 15 (quince) días hábiles desde que recibís tu pedido para solicitar el reembolso del dinero si no estás conforme con tu compra, en caso de defecto y/o falla en el/los producto/s adquirido/s. Se gestionará el reintegro de dinero a través del mismo medio que realizaste el pago.</strong></p>

  <p><strong>Los productos sólo serán aceptados en las siguientes condiciones:</strong></p>
  <ul>
    <li>⚬ El producto deberá estar <strong>SIN USO</strong> y con sus <strong>ETIQUETAS</strong> y <strong>ENVOLTORIOS ORIGINALES</strong>. Línea Intimates: Las vedetinas NO tienen cambio, los corpiños no se pueden probar y tienen cambio en su packaging original.</li>
    <li>⚬ En el caso de que Isadora entienda que el producto devuelto no se encuadra en los criterios arriba descriptos, el sitio tiene derecho a no aceptar la devolución o realizar el cambio.</li>
    <li>⚬ Únicamente se admitirán compras realizadas en <strong>TERRITORIO NACIONAL</strong>.</li>
    <li>⚬ Se reconocerá el producto al valor abonado al momento de la compra.</li>
    <li>⚬ Para el caso de compras de dos o más productos en conjunto a un precio especial, se considerará el valor proporcional de cada uno según su precio y se redondeará a favor del cliente.</li>
  </ul>
</div>

                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Tu producto llegó dañado?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Podés hacer el cambio en cualquier tienda física con el número de pedido online, la factura de compra o tarjeta de regalo, no necesitas avisarnos. En caso de querer devolverlo, se gestionará el reintegro de dinero a través del mismo medio que realizaste el pago.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿No tenés una tienda ISADORA en tu ciudad?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">No te preocupes, contáctate a: infoar@isadoraonline.com o envíanos un mensaje de WhatsApp +54 9 11 4419-7924 y solucionaremos tu caso.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            <span className="text-[18px]">¿Tu producto llegó dañado?</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-sm tracking-[2px]">Podés devolverlo de forma fácil y rápida contactándote a: infoar@isadoraonline.com o a través de un mensaje de WhatsApp +54 9 11 4419-7924 , te pediremos una foto o vídeo indicando el problema para reembolsarte el dinero pagado.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
       </div>
    );
}
