import { NextResponse } from 'next/server';
import { createCheckout } from '../../../lib/nuvemshop';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Carrinho vazio' }, { status: 400 });
    }

    // Tenta criar o checkout na API da Nuvemshop
    const data = await createCheckout(items);

    if (data && (data.checkout_url || data.mobile_checkout_url || data.url)) {
      const finalUrl = data.checkout_url || data.mobile_checkout_url || data.url;
      return NextResponse.json({ checkoutUrl: finalUrl });
    }

    // Se a Nuvemshop responder mas não mandar o link, a gente avisa!
    return NextResponse.json({ error: 'Nuvemshop não retornou o link de pagamento', detalhes: data }, { status: 500 });
    
  } catch (error: any) {
    // AQUI ESTÁ A MÁGICA: Captura o erro da lib e manda pro Frontend exibir o alert
    console.error('Erro fatal na Rota de Checkout:', error);
    return NextResponse.json({ error: error.message || 'Falha interna na comunicação com a loja' }, { status: 500 });
  }
}