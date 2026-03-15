import { getProducts } from '../../../lib/nuvemshop';
import ProductClient from './ProductClient';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  // 1. Puxa os produtos da Nuvemshop
  const products = await getProducts();
  
  // 2. Encontra o produto exato que a cliente clicou
  const product = products.find((p: any) => p.handle === params.handle);

  // 3. Se o produto não existir, manda para a página de erro 404
  if (!product) {
    notFound();
  }

  // 4. Se existir, manda os dados reais para a tela interativa
  return <ProductClient product={product} />;
}