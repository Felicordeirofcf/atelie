'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';

export default function ProductCard({ product }: { product: any }) {
  const { addItem, openCart } = useCartStore();

  const handleQuickAdd = (e: React.MouseEvent, variantSize: string) => {
    e.preventDefault(); // Evita que o clique no botão abra a página do produto
    
    // Acha a variante correta para pegar o ID real da Nuvemshop
    const variant = product.variants?.find((v: any) => v.size === variantSize);
    const variantId = variant ? variant.id : product.id;

    addItem({
      id: variantId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: variantSize,
      quantity: 1
    });
    
    openCart();
  };

  // Pega apenas tamanhos/cores com estoque
  const availableVariants = product.variants?.filter((v: any) => v.stock === null || v.stock > 0) || [];

  return (
    <div className="group flex flex-col cursor-pointer">
      <Link href={`/produto/${product.handle}`} className="relative bg-gray-100 aspect-[3/4] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover: Quick Add Overlay Elegante */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/95 backdrop-blur-sm flex flex-col gap-3 border-t border-gray-100">
          <span className="text-[10px] uppercase font-bold text-center tracking-[0.2em] text-[#333333]">Adicionar</span>
          
          <div className="flex justify-center flex-wrap gap-2">
            {availableVariants.length > 0 ? (
              availableVariants.slice(0, 5).map((variant: any) => (
                <button 
                  key={variant.id}
                  onClick={(e) => handleQuickAdd(e, variant.size)}
                  className="px-3 py-1.5 flex items-center justify-center border border-gray-300 rounded-full text-[10px] uppercase tracking-wider text-gray-600 hover:border-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300"
                >
                  {variant.size}
                </button>
              ))
            ) : (
              <span className="text-xs text-red-500 font-bold uppercase tracking-widest text-center w-full">Esgotado</span>
            )}
          </div>
        </div>
      </Link>

      <Link href={`/produto/${product.handle}`} className="mt-4 flex flex-col">
        <h3 className="text-sm font-medium uppercase tracking-widest text-[#333333] truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-bold text-[#333333]">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}