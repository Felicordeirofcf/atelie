'use client';

import ProductCard from './ProductCard';

const mockProducts = [
  {
    id: 101,
    name: "Vestido Midi Rosa Blush",
    price: 289.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    handle: "vestido-midi-rosa-blush",
    variants: [{ id: 1, size: 'P' }, { id: 2, size: 'M' }, { id: 3, size: 'G' }]
  },
  {
    id: 102,
    name: "Conjunto Alfaiataria Off-White",
    price: 349.90,
    originalPrice: 429.90,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=800",
    handle: "conjunto-alfaiataria-off-white",
    variants: [{ id: 4, size: 'P' }, { id: 5, size: 'M' }]
  }
];

export default function ProductGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col items-center mb-10">
        {/* Título atualizado para Terracota */}
        <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#C85A17]">
          Top Sellers ☆
        </h2>
        {/* Linha separadora mais fina e elegante no tom chumbo */}
        <div className="w-16 h-[1px] bg-[#333333] mt-6"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}