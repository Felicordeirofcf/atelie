'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';

interface ProductVariant { id: number; size: string; }
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  handle: string;
  variants: ProductVariant[];
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  const handleQuickAdd = (variantSize: string) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: variantSize,
    });
  };

  return (
    <div className="group flex flex-col relative w-full bg-white overflow-hidden">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Link href={`/produto/${product.handle}`}>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </Link>
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-[#333333] text-white text-xs font-bold px-2 py-1 uppercase">Sale</span>
        )}
        
        {/* Hover Desktop */}
        <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 p-3 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 hidden md:flex">
          <span className="text-xs uppercase font-semibold text-gray-500">Comprar Rápido</span>
          <div className="flex gap-2">
            {product.variants.map((variant) => (
              <button 
                key={variant.id} 
                onClick={() => handleQuickAdd(variant.size)} 
                className="w-8 h-8 rounded-full border border-gray-300 text-sm flex items-center justify-center transition-colors hover:bg-[#FADADD] hover:border-[#FADADD] hover:text-white"
              >
                {variant.size}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Infos do Produto */}
      <div className="mt-4 flex flex-col items-center text-center px-2">
        <Link href={`/produto/${product.handle}`}>
          <h3 className="text-sm font-medium text-[#333333] uppercase tracking-wide truncate w-full">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          {product.originalPrice && <span className="text-xs text-gray-400 line-through">R$ {product.originalPrice.toFixed(2).replace('.', ',')}</span>}
          <span className="text-sm font-semibold text-[#333333]">R$ {product.price.toFixed(2).replace('.', ',')}</span>
        </div>
        
        {/* Mobile Buttons */}
        <div className="mt-3 flex md:hidden gap-2 justify-center w-full">
          {product.variants.map((variant) => (
            <button 
              key={variant.id} 
              onClick={() => handleQuickAdd(variant.size)} 
              className="w-8 h-8 rounded-full bg-gray-50 text-xs flex items-center justify-center active:bg-[#FADADD] active:text-white border border-gray-200"
            >
              {variant.size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}