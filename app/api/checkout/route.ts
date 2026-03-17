import { NextResponse } from 'next/server';
import { createCheckout } from '../../../lib/nuvemshop';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Recebido do Carrinho:", body); // Log 1: Vendo se chegou

    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Carrinho vazio' }, { status: 400 });
    }

    // Chama o nosso tradutor
    console.log("Enviando para Nuvemshop..."); // Log 2: Vendo se chamou
    const data = await createCheckout(items);
    console.log("Resposta da Nuvemshop:", data); // Log 3: Vendo o que voltou

    // A Nuvemshop devolve o link no campo 'checkout_url' ou no formato da API nova (mobile_checkout_url, etc)
    if (data && (data.checkout_url || data.mobile_checkout_url || data.url)) {
      const finalUrl = data.checkout_url || data.mobile_checkout_url || data.url;
      return NextResponse.json({ checkoutUrl: finalUrl });
    }

    return NextResponse.json({ error: 'Link não retornado', detalhes: data }, { status: 500 });
    
  } catch (error) {
    console.error('Erro na rota POST /api/checkout:', error); // Log 4: Capturando falha na roda
    return NextResponse.json({ error: 'Falha interna' }, { status: 500 });
  }
}