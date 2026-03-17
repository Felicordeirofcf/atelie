const STORE_ID = process.env.NEXT_PUBLIC_NUVEMSHOP_STORE_ID;
const ACCESS_TOKEN = process.env.NUVEMSHOP_ACCESS_TOKEN;
const USER_AGENT = process.env.NUVEMSHOP_USER_AGENT || 'AtelieLuzDeMariaApp (contato@site.com)';

const API_URL = `https://api.nuvemshop.com.br/v1/${STORE_ID}`;

async function fetchNuvemshop(endpoint: string, options: RequestInit = {}) {
  if (!STORE_ID || !ACCESS_TOKEN) {
    console.warn("⚠️ Chaves da Nuvemshop não configuradas.");
    return null; 
  }

  const url = `${API_URL}${endpoint}`;
  
  const headers = {
    'Authentication': `bearer ${ACCESS_TOKEN}`,
    'User-Agent': USER_AGENT,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(url, { ...options, headers, cache: 'no-store' });

  if (!response.ok) {
    console.error(`Erro Nuvemshop: ${response.status} - ${response.statusText}`);
    return null;
  }

  return response.json();
}

// 1. Buscar Produtos
export async function getProducts(q?: string) {
  const endpoint = q ? `/products?q=${q}` : '/products';
  const data = await fetchNuvemshop(endpoint);
  
  if (!data || !Array.isArray(data)) {
    console.warn("Nenhum produto encontrado ou resposta inválida da API.");
    return []; 
  }

  return data.map((product: any) => {
    let safeHandle = String(product.id);
    if (product.handle) {
      if (typeof product.handle === 'string') safeHandle = product.handle;
      else if (product.handle.pt) safeHandle = product.handle.pt;
      else if (Object.values(product.handle)[0]) safeHandle = String(Object.values(product.handle)[0]);
    }

    return {
      id: product.id,
      name: product.name?.pt || product.name || 'Produto Sem Nome',
      price: parseFloat(product.variants?.[0]?.price || '0'),
      originalPrice: product.variants?.[0]?.promotional_price ? parseFloat(product.variants[0].compare_at_price || '0') : null,
      image: product.images?.[0]?.src || 'https://via.placeholder.com/800x1000?text=Sem+Foto',
      handle: safeHandle.toLowerCase().trim(),
      categories: product.categories?.map((c: any) => c.handle?.pt || c.handle || '') || [],
      variants: product.variants?.map((v: any) => ({
        id: v.id,
        size: v.values?.[0]?.pt || v.values?.[0] || 'U',
        stock: v.stock
      })) || []
    };
  });
}

// 2. Criar Checkout (Versão Corrigida: Lança erro em vez de redirecionar errado)
export async function createCheckout(items: { variant_id: number; quantity: number }[]) {
  const data = await fetchNuvemshop('/checkouts', {
    method: 'POST',
    body: JSON.stringify({
      line_items: items.map(item => ({ variant_id: item.variant_id, quantity: item.quantity }))
    })
  });
  
  // A MUDANÇA ESTÁ AQUI: Se falhar, ele avisa o sistema e faz o botão mostrar o alerta
  if (!data) {
    throw new Error("A API da Nuvemshop recusou a criação do checkout. Verifique as credenciais ou se os produtos têm estoque.");
  }

  return data; 
}