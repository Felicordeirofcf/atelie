'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProductCard from '../../../components/product/ProductCard'; // Ajuste o caminho se necessário
import { useParams } from 'next/navigation';

// Simulando os produtos de uma categoria
const mockCategoryProducts = [
  {
    id: 101, name: "Vestido Midi Rosa Blush", price: 289.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
    handle: "vestido-midi-rosa-blush", variants: [{ id: 1, size: 'P' }, { id: 2, size: 'M' }, { id: 3, size: 'G' }]
  },
  {
    id: 102, name: "Conjunto Alfaiataria Off-White", price: 349.90, originalPrice: 429.90,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80&w=800",
    handle: "conjunto-alfaiataria-off-white", variants: [{ id: 4, size: 'P' }, { id: 5, size: 'M' }]
  },
  {
    id: 103, name: "Blusa Cropped Seda", price: 159.90,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    handle: "blusa-cropped-seda", variants: [{ id: 7, size: 'P' }, { id: 8, size: 'M' }, { id: 9, size: 'G' }]
  },
  {
    id: 104, name: "Saia Plissada Areia", price: 199.90,
    image: "https://images.unsplash.com/photo-1583496661160-c588c4f2e2df?auto=format&fit=crop&q=80&w=800",
    handle: "saia-plissada-areia", variants: [{ id: 10, size: 'M' }, { id: 11, size: 'G' }]
  },
  {
    id: 105, name: "Corset Renda Preta", price: 179.90,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    handle: "corset-renda-preta", variants: [{ id: 12, size: 'P' }, { id: 13, size: 'M' }]
  },
  {
    id: 106, name: "Calça Pantalona Linho", price: 259.90,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
    handle: "calca-pantalona-linho", variants: [{ id: 14, size: 'M' }, { id: 15, size: 'G' }, { id: 16, size: 'GG' }]
  }
];

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params?.slug as string || 'categoria';
  
  // Formatando o slug para o título (ex: "vestidos" vira "Vestidos")
  const categoryTitle = categorySlug.replace('-', ' ');

  // Estado para controlar a visibilidade dos filtros no mobile
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white pt-6 pb-20">
      
      {/* Cabeçalho da Categoria (Banner Simples) */}
      <div className="w-full bg-[#FADADD]/20 py-12 md:py-20 mb-10 flex flex-col items-center justify-center border-y border-[#FADADD]/40">
        <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-[#333333] capitalize">
          {categoryTitle}
        </h1>
        <div className="w-16 h-0.5 bg-[#FADADD] mt-4 mb-4"></div>
        <p className="text-gray-500 text-sm md:text-base tracking-wide uppercase">
          {mockCategoryProducts.length} Produtos Encontrados
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10">
        
        {/* --- BARRA LATERAL (FILTROS) --- */}
        {/* Botão Mobile para abrir os filtros */}
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden w-full py-3 border border-gray-300 text-[#333333] uppercase tracking-widest text-sm font-semibold flex justify-between items-center px-4"
        >
          <span>Filtrar e Ordenar</span>
          <svg className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </button>

        <aside className={`w-full md:w-1/4 flex-col gap-8 md:flex ${isFilterOpen ? 'flex' : 'hidden'}`}>
          
          {/* Ordenar Por */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Ordenar Por</h3>
            <select className="w-full border border-gray-300 p-2 text-sm text-gray-600 focus:outline-none focus:border-[#FADADD]">
              <option>Relevância</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
              <option>Novidades</option>
            </select>
          </div>

          {/* Filtro: Categoria */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Categorias</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#FADADD] w-4 h-4 cursor-pointer" />
                <span className="text-sm text-gray-600 hover:text-[#333333]">Vestidos (12)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#FADADD] w-4 h-4 cursor-pointer" />
                <span className="text-sm text-gray-600 hover:text-[#333333]">Blusas (8)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-[#FADADD] w-4 h-4 cursor-pointer" />
                <span className="text-sm text-gray-600 hover:text-[#333333]">Calças (5)</span>
              </label>
            </div>
          </div>

          {/* Filtro: Tamanho */}
          <div className="border-b border-gray-100 pb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Tamanho</h3>
            <div className="flex flex-wrap gap-2">
              {['P', 'M', 'G', 'GG', 'U'].map((size) => (
                <button key={size} className="w-10 h-10 border border-gray-300 text-sm text-gray-600 hover:border-[#FADADD] hover:text-[#FADADD] transition-colors focus:bg-[#333333] focus:text-white focus:border-[#333333]">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro: Preço */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#333333] mb-4">Preço</h3>
            <div className="flex items-center gap-2">
              <input type="number" placeholder="Mín" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-[#FADADD]" />
              <span className="text-gray-400">-</span>
              <input type="number" placeholder="Máx" className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-[#FADADD]" />
            </div>
            <button className="w-full mt-4 py-2 bg-gray-100 text-[#333333] text-xs font-bold uppercase tracking-widest hover:bg-[#FADADD] transition-colors">
              Aplicar
            </button>
          </div>
          
        </aside>

        {/* --- GRID DE PRODUTOS --- */}
        <div className="w-full md:w-3/4">
          
          {/* Barra superior de Ordenação Desktop (Opcional, mas comum em e-commerces) */}
          <div className="hidden md:flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <span className="text-sm text-gray-500">Mostrando 1-6 de 24 produtos</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Visualizar:</span>
              <button className="text-gray-400 hover:text-[#333333]">■■</button>
              <button className="text-gray-400 hover:text-[#333333]">■■■</button>
            </div>
          </div>

          {/* Grid em si */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
            {mockCategoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Paginação */}
          <div className="w-full flex justify-center mt-16">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:text-[#333333] hover:border-[#333333] transition-colors">&larr;</button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#333333] text-white font-semibold">1</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">2</button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">3</button>
              <span className="text-gray-400 mx-1">...</span>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-400 hover:text-[#333333] hover:border-[#333333] transition-colors">&rarr;</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}