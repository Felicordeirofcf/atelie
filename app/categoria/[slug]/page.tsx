import Link from 'next/link';
import ProductCard from '../../../components/product/ProductCard';
import { getProducts } from '../../../lib/nuvemshop';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug || 'todos';
  const categoryTitle = categorySlug.replace('-', ' ');

  // MÁGICA: Puxando os produtos reais da Nuvemshop!
  // Se o slug for 'todos', puxa a loja inteira. Se for específico, busca pelo termo.
  const searchQuery = categorySlug === 'todos' ? undefined : categoryTitle;
  const realProducts = await getProducts(searchQuery);

  return (
    <div className="w-full min-h-screen bg-white pt-6 pb-20">
      
      {/* Cabeçalho */}
      <div className="w-full bg-[#FADADD]/20 py-12 md:py-20 mb-10 flex flex-col items-center justify-center border-y border-[#FADADD]/40">
        <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-[#333333] capitalize">
          {categoryTitle}
        </h1>
        <div className="w-16 h-0.5 bg-[#FADADD] mt-4 mb-4"></div>
        <p className="text-gray-500 text-sm md:text-base tracking-wide uppercase">
          {realProducts.length} Produtos Encontrados
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10">
        
        {/* Filtros Lateral */}
        <aside className="hidden md:flex w-1/4 flex-col gap-8">
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Categorias</h3>
            <div className="flex flex-col gap-3">
              <Link href="/categoria/todos" className="text-sm text-gray-600 hover:text-[#FADADD]">Ver Todos</Link>
              <Link href="/categoria/biquinis" className="text-sm text-gray-600 hover:text-[#FADADD]">Biquínis</Link>
              <Link href="/categoria/vestidos" className="text-sm text-gray-600 hover:text-[#FADADD]">Vestidos</Link>
              <Link href="/categoria/tops-e-croppeds" className="text-sm text-gray-600 hover:text-[#FADADD]">Top's e Cropped's</Link>
              <Link href="/categoria/shorts-jeans" className="text-sm text-gray-600 hover:text-[#FADADD]">Shorts Jeans</Link>
              <Link href="/categoria/conjuntos" className="text-sm text-gray-600 hover:text-[#FADADD]">Conjuntos</Link>
              <Link href="/categoria/bodys" className="text-sm text-gray-600 hover:text-[#FADADD]">Body's</Link>
              <Link href="/categoria/sapatos" className="text-sm text-gray-600 hover:text-[#FADADD]">Sapatos</Link>
            </div>
          </div>
        </aside>

        {/* --- GRID DE PRODUTOS REAIS --- */}
        <div className="w-full md:w-3/4">
          
          {realProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>Nenhum produto encontrado nesta categoria ainda.</p>
              <p className="text-sm mt-2">Adicione produtos na sua Nuvemshop para eles aparecerem aqui!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
              {realProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}