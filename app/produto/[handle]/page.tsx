'use client';

import { useState } from 'react';
import { useCartStore } from '../../../store/cartStore'; // Ajuste o caminho se necessário
import Link from 'next/link';

// Mock de um produto detalhado para teste
const mockProduct = {
  id: 101,
  name: "Vestido Midi Rosa Blush",
  price: 289.90,
  originalPrice: 349.90,
  description: "O Vestido Midi Rosa Blush é a peça perfeita para transitar entre um evento diurno e um jantar elegante. Confeccionado em tecido leve com toque de seda, possui caimento fluido, decote em V que valoriza o colo e fenda lateral sutil. Acompanha cinto no mesmo tecido para marcação da silhueta.",
  details: [
    "Composição: 95% Poliéster, 5% Elastano",
    "Forro interno para evitar transparência",
    "Fechamento por zíper invisível nas costas",
    "Lavagem à mão recomendada"
  ],
  images: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&sat=-50", // Simulando outra foto
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800&bri=-20"  // Simulando outra foto
  ],
  variants: [
    { id: 1, size: 'P', available: true },
    { id: 2, size: 'M', available: true },
    { id: 3, size: 'G', available: true },
    { id: 4, size: 'GG', available: false } // Esgotado
  ]
};

export default function ProductPage() {
  const { addItem } = useCartStore();
  
  // Estados da página
  const [selectedImage, setSelectedImage] = useState(mockProduct.images[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError(true);
      return;
    }
    
    setError(false);
    addItem({
      productId: mockProduct.id,
      name: mockProduct.name,
      price: mockProduct.price,
      image: mockProduct.images[0],
      size: selectedSize,
    });
  };

  return (
    <div className="w-full min-h-screen bg-white pt-6 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs (Navegação estrutural) */}
        <nav className="text-xs text-gray-500 uppercase tracking-wide mb-8">
          <Link href="/" className="hover:text-[#FADADD] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="#" className="hover:text-[#FADADD] transition-colors">Roupas</Link>
          <span className="mx-2">/</span>
          <span className="text-[#333333] font-semibold">{mockProduct.name}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* Lado Esquerdo: Galeria de Imagens */}
          <div className="w-full md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible md:w-20 shrink-0">
              {mockProduct.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-24 md:w-full md:h-28 shrink-0 relative overflow-hidden ${selectedImage === img ? 'border-2 border-[#FADADD]' : 'border border-gray-100 opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            
            {/* Imagem Principal */}
            <div className="w-full aspect-[3/4] md:aspect-auto md:h-[700px] relative bg-gray-50">
              <img src={selectedImage} alt={mockProduct.name} className="w-full h-full object-cover" />
              {mockProduct.originalPrice && (
                <span className="absolute top-4 left-4 bg-[#333333] text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider">
                  Sale
                </span>
              )}
            </div>
          </div>

          {/* Lado Direito: Informações do Produto */}
          <div className="w-full md:w-1/2 flex flex-col pt-2 md:pt-10">
            <h1 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333] mb-4">
              {mockProduct.name}
            </h1>
            
            {/* Preços */}
            <div className="flex items-end gap-3 mb-6">
              <span className="text-2xl font-bold text-[#333333]">
                R$ {mockProduct.price.toFixed(2).replace('.', ',')}
              </span>
              {mockProduct.originalPrice && (
                <span className="text-base text-gray-400 line-through mb-1">
                  R$ {mockProduct.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-500 mb-8">
              em até <strong className="text-[#333333]">3x de R$ {(mockProduct.price / 3).toFixed(2).replace('.', ',')}</strong> sem juros
            </p>

            {/* Seletor de Tamanho */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-[#333333]">
                  Tamanho {selectedSize && `: ${selectedSize}`}
                </span>
                <button className="text-xs text-gray-500 underline hover:text-[#FADADD]">Guia de Medidas</button>
              </div>
              
              <div className="flex gap-3">
                {mockProduct.variants.map((variant) => (
                  <button
                    key={variant.id}
                    disabled={!variant.available}
                    onClick={() => {
                      setSelectedSize(variant.size);
                      setError(false);
                    }}
                    className={`w-12 h-12 flex items-center justify-center border text-sm transition-colors ${
                      !variant.available 
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed line-through' 
                        : selectedSize === variant.size 
                          ? 'bg-[#333333] text-white border-[#333333]' 
                          : 'bg-white text-[#333333] border-gray-300 hover:border-[#FADADD] hover:text-[#FADADD]'
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 text-xs mt-2 font-medium">Por favor, selecione um tamanho antes de comprar.</p>}
            </div>

            {/* Botão Adicionar ao Carrinho */}
            <button 
              onClick={handleAddToCart}
              className="w-full py-4 bg-[#FADADD] text-[#333333] font-bold uppercase tracking-widest text-sm hover:bg-[#333333] hover:text-white transition-colors duration-300 mb-10"
            >
              Adicionar ao Carrinho
            </button>

            {/* Simulação de Frete */}
            <div className="border border-gray-200 p-4 mb-10">
              <span className="block text-sm font-semibold uppercase tracking-wide text-[#333333] mb-3">
                Calcular Frete e Prazo
              </span>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ex: 22041-001" 
                  className="flex-1 border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#FADADD]"
                />
                <button className="px-4 py-2 bg-gray-100 text-[#333333] text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  OK
                </button>
              </div>
            </div>

            {/* Descrição e Detalhes */}
            <div className="border-t border-gray-200 pt-8 mt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Descrição</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {mockProduct.description}
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                {mockProduct.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}