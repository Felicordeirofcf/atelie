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

  // O Next.js faz cache automático. revalidate: 60 atualiza os produtos a cada 1 minuto.
  const response = await fetch(url, { ...options, headers, cache: 'no-store' });

  if (!response.ok) {
    console.error(`Erro Nuvemshop: ${response.status} - ${response.statusText}`);
    return null;
  }

  return response.json();
}

// 1. Buscar Produtos (Pode ser filtrado por Categoria/Busca)
export async function getProducts(q?: string) {
  // Se passar uma query (ex: "vestidos"), ele busca. Se não, traz todos.
  const endpoint = q ? `/products?q=${q}` : '/products';
  const data = await fetchNuvemshop(endpoint);
  
  if (!data) return []; // Retorna array vazio se der erro ou não tiver chave

  // Formatamos os dados confusos da Nuvemshop para um formato simples pro nosso site
  return data.map((product: any) => ({
    id: product.id,
    name: product.name.pt,
    price: parseFloat(product.variants[0]?.price || '0'),
    originalPrice: product.variants[0]?.promotional_price ? parseFloat(product.variants[0]?.compare_at_price || '0') : null,
    image: product.images[0]?.src || 'https://via.placeholder.com/800x1000?text=Sem+Foto',
    handle: product.handle.pt,
    variants: product.variants.map((v: any) => ({
      id: v.id,
      size: v.values[0]?.pt || 'U',
      stock: v.stock
    }))
  }));
}

// 2. Criar Checkout
export async function createCheckout(items: { variant_id: number; quantity: number }[]) {
  const data = await fetchNuvemshop('/checkouts', {
    method: 'POST',
    body: JSON.stringify({
      line_items: items.map(item => ({ variant_id: item.variant_id, quantity: item.quantity }))
    })
  });
  return data || { checkout_url: '/checkout' }; 
}