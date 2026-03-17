import { NextResponse } from 'next/server';
import { createCheckout } from '../../../lib/nuvemshop';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Carrinho vazio' }, { status: 400 });
    }

    // Tenta criar o Pedido Rascunho na API da Nuvemshop
    const data = await createCheckout(items);

    // A mágica: A Nuvemshop devolve o link de pagamento dentro de abandoned_checkout_url
    if (data && data.abandoned_checkout_url) {
      return NextResponse.json({ checkoutUrl: data.abandoned_checkout_url });
    }

    // Se batermos na trave de novo, exibimos o erro real na tela
    return NextResponse.json({ error: 'Nuvemshop não retornou o link de pagamento', detalhes: data }, { status: 500 });
    
  } catch (error: any) {
    console.error('Erro na Rota de Checkout:', error);
    return NextResponse.json({ error: error.message || 'Falha interna na comunicação com a loja' }, { status: 500 });
  }
}