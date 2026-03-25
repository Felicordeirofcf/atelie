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
    <div className="w-full bg-[#FAF9F6]"> {/* Fundo creme elegante */}
      
      {/* Barra de Frete Grátis - Laranja, elegante e com efeito pulsante */}
      <div className="w-full bg-[#FAF9F6] border-b border-[#E5E5E5] py-3 flex justify-center items-center">
        <p className="text-[10px] md:text-xs font-serif tracking-widest uppercase text-[#C85A17] font-bold text-center px-4 animate-pulse">
          FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 500,00
        </p>
      </div>

      {/* Seu Carrossel de Imagens */}
      <HeroCarousel />

      {/* Grade de 6 Categorias Quadradas com tom bronze/marrom escuro */}
      <section className="w-full px-2 md:px-4 py-6 md:py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="aspect-square border border-[#5A3B22] flex items-center justify-center p-1 md:p-2 text-center transition-colors hover:bg-[#FADADD] bg-white shadow-sm"
            >
              <span className="text-[8px] md:text-[10px] lg:text-xs font-serif uppercase tracking-widest text-[#5A3B22] whitespace-pre-line leading-relaxed">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Vitrine de Lançamentos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333]">
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
          <Link
            href="/categoria/todos"
            className="border-b border-[#333333] pb-1 text-xs md:text-sm font-serif uppercase tracking-widest text-[#333333] transition-colors hover:border-[#FADADD] hover:text-[#FADADD]"
          >
            Ver Toda a Coleção
          </Link>
        </div>
      </section>
    </div>
  );
}