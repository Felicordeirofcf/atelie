import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Carrinho vazio' }, { status: 400 });
    }

    // URL oficial da loja
    const storeUrl = "https://atelieluzdemaria4.lojavirtualnuvem.com.br"; 

    // Pega o ID da variante do primeiro item do carrinho
    const firstItem = items[0];

    // Monta o link que pula as travas da API
    const checkoutUrl = `${storeUrl}/cart/add/${firstItem.variant_id}`;

    return NextResponse.json({ checkoutUrl });
    
  } catch (error: any) {
    return NextResponse.json({ error: 'Erro ao gerar link' }, { status: 500 });
  }
}