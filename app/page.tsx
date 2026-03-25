export const dynamic = 'force-dynamic';

import Link from 'next/link';
import ProductCard from '../components/product/ProductCard';
import { getProducts } from '../lib/nuvemshop';
import HeroCarousel from '../components/home/HeroCarousel';

// Novas categorias exatas conforme solicitado
const categories = [
  { name: 'CONJUNTOS /\nVESTIDOS', href: '/categoria/conjuntos' },
  { name: 'CROPPED /\nBLUSAS', href: '/categoria/cropped-blusas' },
  { name: 'JEANS', href: '/categoria/jeans' },
  { name: 'SHORTS\nTECIDO', href: '/categoria/shorts' },
  { name: 'ACESSÓRIOS', href: '/categoria/acessorios' },
  { name: 'SANDÁLIAS /\nTÊNIS', href: '/categoria/sapatos' },
];

export default async function HomePage() {
  const products = await getProducts();
  const lancamentos = products.slice(0, 4);

  return (
    <div className="w-full bg-white"> {/* Fundo branco conforme seu mockup */}
      
      {/* Barra de Frete Grátis - Fundo Terracota e Texto Branco */}
      <div className="w-full bg-[#C85A17] py-2 md:py-2.5 flex justify-center items-center">
        <p className="text-[8px] md:text-[10px] lg:text-xs font-sans tracking-[0.15em] uppercase text-white font-medium text-center px-2 md:px-4 animate-pulse">
           • FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 500,00 • 
        </p>
      </div>

      {/* Seu Carrossel de Imagens */}
      <HeroCarousel />

      {/* Grade de 6 Categorias Quadradas (Letras e Bordas em Terracota) */}
      <section className="w-full px-2 md:px-4 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="aspect-square border-[2px] border-[#C85A17] flex items-center justify-center p-1 md:p-2 text-center transition-colors hover:bg-[#FADADD] bg-white shadow-sm"
            >
              <span className="text-[8px] md:text-[10px] lg:text-xs font-serif uppercase tracking-widest text-[#C85A17] whitespace-pre-line leading-relaxed">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vitrine de Lançamentos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4">
        <div className="text-center mb-12">
          {/* Título em Terracota */}
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#C85A17]">
            Lançamentos
          </h2>
        </div>

        {lancamentos.length === 0 ? (
          <p className="text-center text-gray-500 italic font-serif">
            Nenhum produto encontrado. Cadastre itens no painel da Nuvemshop.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {lancamentos.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-16 flex w-full justify-center">
          {/* Link "Ver Toda a Coleção" em Terracota */}
          <Link
            href="/categoria/todos"
            className="border-b border-[#C85A17] pb-1 text-xs md:text-sm font-serif uppercase tracking-widest text-[#C85A17] transition-colors hover:border-[#FADADD] hover:text-[#FADADD]"
          >
            Ver Toda a Coleção
          </Link>
        </div>
      </section>
    </div>
  );
}