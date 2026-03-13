import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Minicart from '../components/layout/Minicart';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// Configuração de SEO Completa (Metadata)
export const metadata: Metadata = {
  // SEO Base
  title: {
    default: 'Ateliê Luz de Maria | Moda Feminina Exclusiva',
    template: '%s | Ateliê Luz de Maria'
  },
  description: 'Descubra a elegância atemporal e a exclusividade do Ateliê Luz de Maria. Curadoria de moda feminina com toque artesanal, tecidos leves e caimento perfeito. Frete Grátis acima de R$500.',
  keywords: ['moda feminina', 'ateliê', 'vestidos', 'blusas', 'exclusivo', 'luz de maria', 'vestuário'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#FAF9F6', // Cor para o navegador e atalho mobile

  // Open Graph / Facebook (para compartilhamentos no WhatsApp/Insta)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://atelie-luz-de-maria.vercel.app', // <-- SUBSTITUA PELA SUA URL VERCEL REAL
    siteName: 'Ateliê Luz de Maria',
    title: 'Ateliê Luz de Maria | Curadoria de Moda Feminina Exclusiva',
    description: 'Elegância, conforto e exclusividade em cada costura. Clique e descubra nossa coleção.',
    images: [
      {
        url: '/logo.png', // Usa a logo que você colocou na pasta public
        width: 1200,
        height: 630,
        alt: 'Logo Ateliê Luz de Maria'
      }
    ]
  },
  
  // Twitter (para compartilhamentos no Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Ateliê Luz de Maria | Moda Feminina Exclusiva',
    description: 'Descubra nossa curadoria de moda com toque artesanal.',
    images: ['/logo.png'],
  },
  
  // Atalhos Mobile e Favicon
  icons: {
    icon: '/logo.png',
    apple: '/logo.png', // Importante para o "Adicionar à Tela de Início"
    shortcut: '/logo.png',
  },
  
  // Robots
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-[#FAF9F6] text-[#333333] antialiased`}>
        <div className="w-full bg-[#FADADD] text-center py-2 text-xs font-medium tracking-widest uppercase text-gray-800">
          Frete Grátis acima de R$ 500 | Cupom: PRIMEIRACOMPRA
        </div>
        
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Minicart />

        <Footer />
        
      </body>
    </html>
  );
}