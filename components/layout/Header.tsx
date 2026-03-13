'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';

export default function Header() {
  const { openCart, items, isMenuOpen, openMenu, closeMenu } = useCartStore();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="w-full border-b border-gray-100 py-4 px-4 md:px-6 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-30">
        
        {/* Lado Esquerdo: Ícone Hambúrguer (Mobile) ou Links (Desktop) */}
        <div className="flex-1 flex items-center justify-start">
          {/* Botão Menu (Aparece só no Celular) */}
          <button 
            onClick={openMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
          </button>

          {/* Links Navegação (Aparece só no Desktop) */}
          <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
            <Link href="#" className="hover:text-[#FADADD] transition-colors">Novidades</Link>
            <Link href="#" className="hover:text-[#FADADD] transition-colors">Roupas</Link>
            <Link href="#" className="hover:text-[#FADADD] transition-colors">Acessórios</Link>
            <Link href="#" className="hover:text-[#FADADD] transition-colors text-red-500 font-medium">Sale</Link>
          </nav>
        </div>

        {/* Centro: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <div className="text-xl md:text-2xl font-serif tracking-widest uppercase cursor-pointer text-center">
              Ateliê Luz de Maria
            </div>
          </Link>
        </div>

        {/* Lado Direito: Carrinho */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={openCart}
            className="text-xs md:text-sm uppercase font-semibold flex items-center gap-2 hover:text-[#FADADD] transition-colors"
          >
            <span className="hidden md:block">Carrinho</span>
            {/* Ícone de Sacola simples para o mobile */}
            <div className="relative">
              <svg className="w-5 h-5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FADADD] text-[#333333] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </button>
        </div>
      </header>

      {/* --- MENU MOBILE GAVETA (Sidebar Esquerda) --- */}
      {/* Fundo escuro */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Gaveta do Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[300px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#FADADD]/20">
          <h2 className="text-sm font-serif uppercase tracking-widest text-[#333333]">Menu</h2>
          <button onClick={closeMenu} className="text-gray-500 hover:text-black text-2xl leading-none">&times;</button>
        </div>

        <nav className="flex flex-col p-4 gap-6 mt-4 overflow-y-auto">
          {/* Links Principais */}
          <Link href="#" onClick={closeMenu} className="text-base uppercase tracking-wider font-medium text-[#333333] border-b border-gray-50 pb-2">Novidades</Link>
          <Link href="#" onClick={closeMenu} className="text-base uppercase tracking-wider font-medium text-[#333333] border-b border-gray-50 pb-2">Roupas</Link>
          <Link href="#" onClick={closeMenu} className="text-base uppercase tracking-wider font-medium text-[#333333] border-b border-gray-50 pb-2">Acessórios</Link>
          <Link href="#" onClick={closeMenu} className="text-base uppercase tracking-wider font-medium text-red-500 border-b border-gray-50 pb-2">Sale</Link>
          
          {/* Seção Institucional */}
          <div className="mt-8 flex flex-col gap-4">
            <Link href="/quem-somos" onClick={closeMenu} className="text-sm text-gray-500">Quem Somos</Link>
            <Link href="/minha-conta" onClick={closeMenu} className="text-sm text-gray-500">Minha Conta</Link>
            <Link href="/rastrear-pedido" onClick={closeMenu} className="text-sm text-gray-500">Rastrear Pedido</Link>
            
            {/* Contato Rápido */}
            <a href="https://wa.me/5521999999999" className="mt-4 flex items-center gap-2 text-sm text-[#333333] font-semibold bg-green-50 px-4 py-3 rounded-md">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              Suporte via WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}