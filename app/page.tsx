export const dynamic = 'force-dynamic';

import Link from 'next/link';
import ProductCard from '../components/product/ProductCard';
import { getProducts } from '../lib/nuvemshop';
import HeroCarousel from '../components/home/HeroCarousel';

export default async function HomePage() {
  const products = await getProducts();
  const lancamentos = products.slice(0, 4);

  return (
    <div className="w-full bg-white">
      <HeroCarousel />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333]">
            Lançamentos
          </h2>
          <div className="w-12 h-0.5 bg-[#FADADD] mx-auto mt-4"></div>
        </div>

        {lancamentos.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            Nenhum produto encontrado. Cadastre itens no painel da Nuvemshop.
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {lancamentos.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="mt-12 flex w-full justify-center">
          <Link
            href="/categoria/todos"
            className="border-b border-[#333333] pb-1 text-sm font-semibold uppercase tracking-widest text-[#333333] transition-colors hover:border-[#FADADD] hover:text-[#FADADD]"
          >
            Ver Toda a Coleção
          </Link>
        </div>
      </section>
    </div>
  );
}