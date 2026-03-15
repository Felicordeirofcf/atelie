import Link from 'next/link';
import ProductCard from '../components/product/ProductCard';
import { getProducts } from '../lib/nuvemshop';

export default async function HomePage() {
  // Puxa TODOS os produtos da sua Nuvemshop real
  const products = await getProducts();
  
  // Pega apenas os 4 primeiros para a vitrine de "Lançamentos"
  const lancamentos = products.slice(0, 4);

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Principal */}
      <section className="relative w-full h-[70vh] bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920" 
          alt="Coleção Luz de Maria" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4 flex flex-col items-center">
          <p className="text-white text-xs md:text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-md">
            Nova Coleção
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-widest mb-8 drop-shadow-lg">
            Essência & Elegância
          </h1>
          <Link href="/categoria/todos" className="px-10 py-4 bg-white text-[#333333] text-xs font-bold uppercase tracking-widest hover:bg-[#FADADD] transition-colors">
            Descobrir Peças
          </Link>
        </div>
      </section>

      {/* Vitrine de Produtos Reais da Nuvemshop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333]">Lançamentos</h2>
          <div className="w-12 h-0.5 bg-[#FADADD] mx-auto mt-4"></div>
        </div>

        {lancamentos.length === 0 ? (
          <p className="text-center text-gray-500">Cadastre produtos na Nuvemshop para eles aparecerem aqui!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {lancamentos.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="w-full flex justify-center mt-12">
          <Link href="/categoria/todos" className="text-sm uppercase tracking-widest font-semibold text-[#333333] border-b border-[#333333] pb-1 hover:text-[#FADADD] hover:border-[#FADADD] transition-colors">
            Ver Toda a Coleção
          </Link>
          
        </div>
      </section>
    </div>
  );
}