import type { Metadata } from 'next';

import '@/styles/globals.css';
import { manrope } from '@/styles/fonts';
import Header from '../components/custom/header/Header';
import Footer from '@/components/custom/footer/Footer';

export const metadata: Metadata = {
  title: {
    template: 'Isadora - %s',
    default: 'Isadora Shop Online Argentina',
  },
  icons: {
    icon: '/favicon-isadora.webp',
  },
  description:
    'Colección de accesorios de moda y lifestyle que potencien tu personalidad, expresen tu mundo interior y te haga sentir bien.',
  keywords: [
    'Isadora',
    'Isadora Shop',
    'Isadora Online',
    'accesorios de moda y lifestyle',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <body className={`${manrope.className} bg-transparent antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
