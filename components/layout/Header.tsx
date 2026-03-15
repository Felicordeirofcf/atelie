'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '../../store/cartStore';

export default function Header() {
  const { openCart, items, isMenuOpen, openMenu, closeMenu } = useCartStore();
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="w-full border-b border-gray-100 py-2.5 px-4 md:px-6 flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur-md z-30">
        
        {/* Lado Esquerdo: Links (Desktop) ou Hambúrguer (Mobile) */}
        <div className="flex-1 flex items-center justify-start">
          {/* Botão Menu (Mobile) */}
          <button 
            onClick={openMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
            <span className="block w-6 h-0.5 bg-[#333333]"></span>
          </button>

          {/* Links Navegação (Desktop) - Atualizados com as novas categorias */}
          <nav className="hidden md:flex gap-6 text-xs uppercase tracking-wider">
            <Link href="/categoria/todos" className="hover:text-[#FADADD] transition-colors">Ver Todos</Link>
            <Link href="/categoria/biquinis" className="hover:text-[#FADADD] transition-colors">Biquínis</Link>
            <Link href="/categoria/vestidos" className="hover:text-[#FADADD] transition-colors">Vestidos</Link>
            <Link href="/categoria/conjuntos" className="hover:text-[#FADADD] transition-colors">Conjuntos</Link>
          </nav>
        </div>

        {/* Centro: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <div className="cursor-pointer flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Ateliê Luz de Maria Logo" 
                width={150} 
                height={50} 
                className="object-contain h-10 w-auto" 
                priority 
              />
            </div>
          </Link>
        </div>

        {/* Lado Direito: Carrinho */}
        <div className="flex-1 flex justify-end">
          <button 
            onClick={openCart}
            className="text-xs md:text-sm uppercase font-semibold flex items-center gap-2 hover:text-[#FADADD] transition-colors"
          >
            <span className="hidden md:block text-xs uppercase tracking-wide">Carrinho</span>
            {/* Ícone de Sacola */}
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

      {/* Gaveta do Menu - Estilo exato da Nuvemshop */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[350px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabeçalho do Menu com a setinha de voltar */}
        <div className="p-4 flex items-center border-b border-gray-100/50">
          <button onClick={closeMenu} className="text-gray-500 hover:text-black">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-[15px] font-medium text-center flex-1 pr-5 text-[#333333]">Produtos</h2>
        </div>

        {/* Lista de Categorias limpa (sem bordas, igual ao print) */}
        <nav className="flex-1 flex flex-col pt-2 overflow-y-auto text-[15px] text-[#333333]">
          <Link href="/categoria/todos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Ver todos os produtos
          </Link>
          <Link href="/categoria/biquinis" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Biquínis
          </Link>
          <Link href="/categoria/vestidos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Vestidos
          </Link>
          <Link href="/categoria/tops-e-croppeds" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Top's e Cropped's
          </Link>
          <Link href="/categoria/shorts-jeans" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Shorts Jeans
          </Link>
          <Link href="/categoria/conjuntos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Conjuntos
          </Link>
          <Link href="/categoria/bodys" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Body's
          </Link>
          <Link href="/categoria/sapatos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Sapatos
          </Link>
        </nav>

        {/* Rodapé de Usuário (Igual ao print) */}
        <div className="p-5 border-t border-gray-100 flex items-center gap-3 text-[14px] text-[#333333]">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div>
            <Link href="/minha-conta" onClick={closeMenu} className="hover:underline">Iniciar sessão</Link>
            <span className="mx-1">.</span>
            <Link href="/cadastro" onClick={closeMenu} className="hover:underline">Criar uma conta</Link>
          </div>
        </div>
      </div>
    </>
  );
}