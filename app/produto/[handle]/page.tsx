import { getProducts } from '../../../lib/nuvemshop';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  // 1. Decodifica a URL (Lidando com espaços e caracteres especiais como %20)
  const handleDaUrl = decodeURIComponent(params.handle);

  // 2. Puxa todos os produtos reais da Nuvemshop
  const products = await getProducts();
  
  // 3. Busca super inteligente: Compara tudo em minúsculo e limpo
  const product = products.find((p: any) => {
    // Garante que o handle do produto seja um texto limpo
    const handleDoProduto = String(p.handle).toLowerCase().trim();
    const handleBuscado = String(handleDaUrl).toLowerCase().trim();
    
    // Tenta achar pelo Handle (nome na URL) OU pelo ID (caso a Nuvemshop tenha usado o ID)
    return handleDoProduto === handleBuscado || String(p.id) === handleBuscado;
  });

  // 4. Se o produto realmente não existir na loja, aí sim mostra a página de Erro 404
  if (!product) {
    notFound();
  }

  // 5. Se encontrou, manda os dados para a tela renderizar a foto e o botão de compra
  return <ProductClient product={product} />;
}