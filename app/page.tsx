import Link from 'next/link';
import ProductCard from '../components/product/ProductCard';
import { getProducts } from '../lib/nuvemshop';
import HeroCarousel from '../components/home/HeroCarousel';

export default async function HomePage() {
  // Puxa os produtos reais da sua API Nuvemshop
  const products = await getProducts();
  
  // Seleciona os 4 primeiros produtos para a seção de Lançamentos
  const lancamentos = products.slice(0, 4);

  return (
    <div className="w-full bg-white">
      
      {/* 1. Hero Carousel Dinâmico (Substitui o banner estático antigo) */}
      <HeroCarousel />

   
      {/* 3. Vitrine de Lançamentos */}
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

        <div className="w-full flex justify-center mt-12">
          <Link 
            href="/categoria/todos" 
            className="text-sm uppercase tracking-widest font-semibold text-[#333333] border-b border-[#333333] pb-1 hover:text-[#FADADD] hover:border-[#FADADD] transition-colors"
          >
            Ver Toda a Coleção
          </Link>
        </div>
      </section>
    </div>
  );
}