'use client';

import Link from 'next/link';

export default function AboutAtelie() {
  return (
    <section className="w-full bg-[#FADADD]/30 py-16 md:py-24 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Imagem do Ateliê */}
        <div className="w-full md:w-1/2 relative h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800" 
            alt="Interior do Ateliê Luz de Maria" 
            className="w-full h-full object-cover rounded-sm shadow-md"
          />
        </div>
        
        {/* Textos e Botão */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-[#333333] mb-4">
            O Ateliê
          </h2>
          <div className="w-16 h-0.5 bg-[#FADADD] mb-6 hidden md:block"></div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Nascido da paixão por moda e exclusividade, o Ateliê Luz de Maria traz peças pensadas para realçar a beleza única de cada mulher. Cada detalhe é escolhido com amor, unindo elegância, conforto e as últimas tendências.
          </p>
          <Link href="/quem-somos">
            <button className="px-8 py-3 border border-[#333333] text-[#333333] uppercase tracking-widest text-sm font-semibold hover:bg-[#333333] hover:text-white transition-colors">
              Conheça Nossa História
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}