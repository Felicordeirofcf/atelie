import Link from 'next/link';
import ProductCard from '../../../components/product/ProductCard';
import { getProducts } from '../../../lib/nuvemshop';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // 1. TRUQUE DO NEXT.JS 15: Aguarda a leitura correta da URL
  const resolvedParams = await Promise.resolve(params);
  
  // 2. Agora sim ele pega o slug real
  const categorySlug = resolvedParams.slug || 'todos';
  
  // Ajuste fino no título para categorias com hífen
  let categoryTitle = categorySlug.replace(/-/g, ' ');
  if (categorySlug === 'cropped-blusas') categoryTitle = 'Cropped & Blusas';
  if (categorySlug === 'shorts') categoryTitle = 'Shorts Tecido';

  // 3. Puxa TODOS os produtos da loja
  const allProducts = await getProducts();

  // 4. Filtra com precisão
  const realProducts = categorySlug === 'todos' 
    ? allProducts 
    : allProducts.filter((product: any) => {
        // Verifica se a categoria clicada está na lista de categorias do produto
        const hasCategory = product.categories.includes(categorySlug);
        
        // Plano B: Se esquecer de marcar na Nuvemshop, tenta achar pelo nome
        const hasName = product.name.toLowerCase().includes(categoryTitle.toLowerCase());
        
        return hasCategory || hasName;
      });

  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] pt-0 pb-20"> {/* Fundo creme */}
      
      {/* Cabeçalho Minimalista da Categoria */}
      <div className="w-full bg-white py-12 md:py-16 mb-10 flex flex-col items-center justify-center border-b border-[#E5E5E5]">
        <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-[#333333] text-center px-4">
          {categoryTitle}
        </h1>
        <div className="w-12 h-[1px] bg-[#333333] mt-6 mb-4"></div>
        <p className="text-[#333333] text-[10px] md:text-xs tracking-[0.2em] font-serif uppercase">
          {realProducts.length} Peças Disponíveis
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10">
        
        {/* Filtros Lateral (Sidebar) com o Novo Menu */}
        <aside className="hidden md:flex w-1/4 flex-col gap-8">
          <div className="border-b border-[#E5E5E5] pb-6 sticky top-24">
            <h3 className="text-sm font-serif uppercase tracking-[0.15em] text-[#333333] mb-6 border-b border-[#333333] pb-2 inline-block">
              Coleções
            </h3>
            <div className="flex flex-col gap-4">
              <Link href="/categoria/todos" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'todos' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Todos os Produtos</Link>
              <Link href="/categoria/conjuntos" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'conjuntos' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Conjuntos & Vestidos</Link>
              <Link href="/categoria/cropped-blusas" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'cropped-blusas' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Cropped & Blusas</Link>
              <Link href="/categoria/jeans" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'jeans' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Jeans</Link>
              <Link href="/categoria/shorts" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'shorts' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Shorts Tecido</Link>
              <Link href="/categoria/acessorios" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'acessorios' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Acessórios</Link>
              <Link href="/categoria/sapatos" className={`text-xs font-serif uppercase tracking-widest transition-colors ${categorySlug === 'sapatos' ? 'font-bold text-[#333333]' : 'text-gray-500 hover:text-[#333333]'}`}>Sandálias & Tênis</Link>
            </div>
          </div>
        </aside>

        {/* --- GRID DE PRODUTOS REAIS --- */}
        <div className="w-full md:w-3/4">
          
          {realProducts.length === 0 ? (
            <div className="text-center py-20 text-[#333333] flex flex-col items-center justify-center border border-[#E5E5E5] bg-white">
              <p className="font-serif uppercase tracking-widest text-sm mb-4">Nenhuma peça nesta categoria.</p>
              <Link href="/categoria/todos" className="text-xs uppercase tracking-widest border-b border-[#333333] pb-1 hover:text-[#C85A17] hover:border-[#C85A17] transition-colors">
                Ver Coleção Completa
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-4 gap-y-10">
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