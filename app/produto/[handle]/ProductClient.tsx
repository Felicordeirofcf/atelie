'use client';

import { useState } from 'react';
import { useCartStore } from '../../../store/cartStore';

export default function ProductClient({ product }: { product: any }) {
  const { addItem, openCart } = useCartStore();
  
  // Filtra as variantes (tamanhos) que têm estoque
  const availableVariants = product.variants.filter((v: any) => v.stock === null || v.stock > 0);
  
  // Estado para controlar qual tamanho a cliente selecionou
  const [selectedVariant, setSelectedVariant] = useState(availableVariants[0] || null);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    // Adiciona o item real ao carrinho do site
    addItem({
      id: selectedVariant.id, // Usamos o ID da variante para o Checkout funcionar depois
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedVariant.size,
      quantity: 1
    });

    openCart(); // Abre a gaveta lateral
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Lado Esquerdo: Imagem Real da Nuvemshop */}
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 aspect-[3/4] relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Lado Direito: Informações Reais e Botão de Compra */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          
          <h1 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333] mb-2">
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

          {/* Seleção de Tamanhos Reais */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#333333]">Tamanho</span>
            </div>
            
            {availableVariants.length === 0 ? (
              <p className="text-red-500 text-sm font-bold uppercase tracking-widest">Produto Esgotado</p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {availableVariants.map((variant: any) => (
                  <button 
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-12 h-12 flex items-center justify-center border text-sm transition-colors ${
                      selectedVariant?.id === variant.id 
                        ? 'border-[#333333] bg-[#333333] text-white font-bold' 
                        : 'border-gray-300 text-gray-600 hover:border-[#FADADD] hover:text-[#FADADD]'
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
            className="w-full py-5 bg-[#333333] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#FADADD] hover:text-[#333333] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            {selectedVariant ? 'Adicionar à Sacola' : 'Selecione um Tamanho'}
          </button>

          {/* Descrição Genérica (ou real se você quiser puxar depois) */}
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