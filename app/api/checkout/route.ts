import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Carrinho vazio' }, { status: 400 });
    }

    // Como o Plano Grátis bloqueia a API de rascunhos, usamos o "Permalink"
    // Pegamos o ID da primeira variante do carrinho
    const firstItem = items[0];
    const storeUrl = "https://atelie-luz-de-maria.nuvemshop.com.br"; // URL da loja da cliente

    // Esse link adiciona o produto e abre o carrinho/checkout automaticamente
    const checkoutUrl = `${storeUrl}/cart/add/${firstItem.variant_id}`;

    return NextResponse.json({ checkoutUrl });
    
  } catch (error: any) {
    return NextResponse.json({ error: 'Erro ao gerar link' }, { status: 500 });
  }
}