import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/layout/Header';
import Minicart from '../components/layout/Minicart';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#FAF9F6',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Ateliê Luz de Maria | Moda Feminina Exclusiva',
    template: '%s | Ateliê Luz de Maria',
  },
  description:
    'Descubra a elegância atemporal e a exclusividade do Ateliê Luz de Maria. Curadoria de moda feminina com toque artesanal, tecidos leves e caimento perfeito. Frete Grátis acima de R$500.',
  keywords: [
    'moda feminina',
    'ateliê',
    'vestidos',
    'blusas',
    'exclusivo',
    'luz de maria',
    'vestuário',
  ],

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://atelie-ebon.vercel.app',
    siteName: 'Ateliê Luz de Maria',
    title: 'Ateliê Luz de Maria | Curadoria de Moda Feminina Exclusiva',
    description:
      'Elegância, conforto e exclusividade em cada costura. Clique e descubra nossa coleção.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo Ateliê Luz de Maria',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ateliê Luz de Maria | Moda Feminina Exclusiva',
    description: 'Descubra nossa curadoria de moda com toque artesanal.',
    images: ['/logo.png'],
  },

  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-[#FAF9F6] text-[#333333] antialiased`}
      >
        <div className="w-full bg-[#FADADD] py-2 text-center text-xs font-medium uppercase tracking-widest text-gray-800">
          Frete Grátis acima de R$ 500 | Cupom: PRIMEIRACOMPRA
        </div>

        <Header />

        <main className="min-h-screen">{children}</main>

        <Minicart />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}