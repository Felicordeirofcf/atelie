import { getProducts } from '../../../lib/nuvemshop';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  // 1. Truque de Promise para compatibilidade com as versões mais recentes do Next.js 15+
  const resolvedParams = await Promise.resolve(params);
  
  // 2. Limpa a URL que a cliente clicou
  const handleDaUrl = decodeURIComponent(resolvedParams.handle).toLowerCase().trim();

  // 3. Puxa todos os produtos da loja
  const products = await getProducts();
  
  // 4. Busca o produto exato comparando o texto limpo
  const product = products.find((p: any) => {
    const handleDoProduto = String(p.handle).toLowerCase().trim();
    // Tenta achar pelo Handle (nome na URL) OU pelo ID
    return handleDoProduto === handleDaUrl || String(p.id) === handleDaUrl;
  });

  // 5. Se não achou de jeito nenhum, vai pra página de erro 404
  if (!product) {
    notFound();
  }

  // 6. Se achou, carrega a tela interativa do produto (ProductClient)
  return <ProductClient product={product} />;
}