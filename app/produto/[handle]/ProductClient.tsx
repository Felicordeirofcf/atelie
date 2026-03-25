'use client';

import { useState } from 'react';
import { useCartStore } from '../../../store/cartStore';

export default function ProductClient({ product }: { product: any }) {
  const { addItem, openCart } = useCartStore();
  
  // Filtra as variantes que têm estoque
  const availableVariants = product.variants.filter((v: any) => v.stock === null || v.stock > 0);
  
  // Estado para controlar qual opção a cliente selecionou
  const [selectedVariant, setSelectedVariant] = useState(availableVariants[0] || null);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem({
      id: selectedVariant.id, 
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedVariant.size,
      quantity: 1
    });

    openCart(); 
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Lado Esquerdo: Imagem */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#FAF9F6] aspect-[3/4] relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Lado Direito: Informações e Botões */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <h1 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#C85A17] mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-end gap-3 mb-8">
            <span className="text-xl font-bold text-[#333333]">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through mb-0.5">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>

          {/* Seleção de Tamanhos/Cores (Novo Design Premium) */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#333333]">Variação Escolhida</span>
            </div>
            
            {availableVariants.length === 0 ? (
              <p className="text-[#C85A17] text-sm font-bold uppercase tracking-widest">Produto Esgotado</p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {availableVariants.map((variant: any) => (
                  <button 
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                      selectedVariant?.id === variant.id 
                        ? 'border-[#C85A17] bg-[#C85A17] text-white shadow-md' 
                        : 'border-gray-300 text-gray-600 hover:border-[#C85A17] hover:text-[#C85A17] bg-white'
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Botão de Adicionar ao Carrinho */}
          <button 
            onClick={handleAddToCart}
            disabled={!selectedVariant}
            className="w-full py-5 bg-[#C85A17] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#333333] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            {selectedVariant ? 'Adicionar à Sacola' : 'Selecione uma opção'}
          </button>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              Peça exclusiva do Ateliê Luz de Maria. Confeccionada com materiais de alta qualidade, garantindo conforto e caimento perfeito para o seu dia a dia ou eventos especiais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}