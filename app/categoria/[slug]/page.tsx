import Link from 'next/link';
import ProductCard from '../../../components/product/ProductCard';
import { getProducts } from '../../../lib/nuvemshop';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug || 'todos';
  const categoryTitle = categorySlug.replace(/-/g, ' ');

  // 1. Puxa TODOS os produtos da loja de uma vez
  const allProducts = await getProducts();

  // 2. Filtra os produtos localmente com precisão cirúrgica
  const realProducts = categorySlug === 'todos' 
    ? allProducts 
    : allProducts.filter((product: any) => {
        // Verifica se a categoria clicada está na lista de categorias do produto
        const hasCategory = product.categories.includes(categorySlug);
        
        // Plano B: Se a cliente esqueceu de marcar a categoria na Nuvemshop, 
        // mas escreveu "Vestido" no nome da peça, ele acha também!
        const hasName = product.name.toLowerCase().includes(categoryTitle.toLowerCase());
        
        return hasCategory || hasName;
      });

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
              <Link href="/categoria/todos" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'todos' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Ver Todos</Link>
              <Link href="/categoria/biquinis" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'biquinis' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Biquínis</Link>
              <Link href="/categoria/vestidos" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'vestidos' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Vestidos</Link>
              <Link href="/categoria/tops-e-croppeds" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'tops-e-croppeds' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Top's e Cropped's</Link>
              <Link href="/categoria/shorts-jeans" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'shorts-jeans' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Shorts Jeans</Link>
              <Link href="/categoria/conjuntos" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'conjuntos' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Conjuntos</Link>
              <Link href="/categoria/bodys" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'bodys' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Body's</Link>
              <Link href="/categoria/sapatos" className={`text-sm hover:text-[#FADADD] ${categorySlug === 'sapatos' ? 'font-bold text-[#FADADD]' : 'text-gray-600'}`}>Sapatos</Link>
            </div>
          </div>
        </aside>

        {/* --- GRID DE PRODUTOS REAIS --- */}
        <div className="w-full md:w-3/4">
          
          {realProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>Nenhum produto encontrado nesta categoria.</p>
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