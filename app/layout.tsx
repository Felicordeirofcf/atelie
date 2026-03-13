import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Minicart from '../components/layout/Minicart';
import Footer from '../components/layout/Footer'; // <-- Import do novo Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ateliê Luz de Maria',
  description: 'Moda Feminina Exclusiva',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-[#333333] antialiased`}>
        <div className="w-full bg-[#FADADD] text-center py-2 text-xs font-medium tracking-widest uppercase text-gray-800">
          Frete Grátis acima de R$ 500 | Cupom: PRIMEIRACOMPRA
        </div>
        
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Minicart />

        {/* Aqui entra o novo Footer */}
        <Footer />
        
      </body>
    </html>
  );
}