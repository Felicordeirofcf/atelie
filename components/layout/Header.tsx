'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '../../store/cartStore';

export default function Header() {
  const { openCart, items, isMenuOpen, openMenu, closeMenu } = useCartStore();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="w-full border-b border-gray-100 px-4 md:px-6 py-2 sticky top-0 bg-white/95 backdrop-blur-md z-30">
        {/* MOBILE */}
        <div className="relative flex items-center justify-between xl:hidden min-h-[68px]">
          {/* Menu */}
          <div className="w-[40px] flex justify-start shrink-0">
            <button
              onClick={openMenu}
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none hover:opacity-70 transition-opacity"
              aria-label="Abrir menu"
            >
              <span className="block w-6 h-0.5 bg-[#C85A17]"></span>
              <span className="block w-6 h-0.5 bg-[#C85A17]"></span>
              <span className="block w-6 h-0.5 bg-[#C85A17]"></span>
            </button>
          </div>

          {/* Logo mobile centralizada */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
            <Link href="/" aria-label="Ir para a página inicial">
              <Image
                src="/logo-mobile.png"
                alt="Ateliê Luz de Maria"
                width={220}
                height={72}
                className="object-contain h-[48px] w-auto max-w-[220px]"
                priority
              />
            </Link>
          </div>

          {/* Carrinho */}
          <div className="w-[40px] flex justify-end shrink-0">
            <button
              onClick={openCart}
              className="relative text-[#C85A17] hover:opacity-60 transition-opacity"
              aria-label="Abrir carrinho"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C85A17] text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden xl:flex justify-between items-center">
          <div className="flex-1 flex items-center justify-start">
            <nav className="flex gap-5 text-[11px] uppercase tracking-wider font-bold text-[#C85A17]">
              <Link href="/" className="hover:opacity-60 transition-opacity">
                Início
              </Link>
              <Link href="/categoria/conjuntos" className="hover:opacity-60 transition-opacity">
                Conjuntos / Vestidos
              </Link>
              <Link href="/categoria/cropped-blusas" className="hover:opacity-60 transition-opacity">
                Cropped / Blusas
              </Link>
              <Link href="/categoria/jeans" className="hover:opacity-60 transition-opacity">
                Jeans
              </Link>
              <Link href="/categoria/shorts" className="hover:opacity-60 transition-opacity">
                Shorts Tecido
              </Link>
              <Link href="/categoria/acessorios" className="hover:opacity-60 transition-opacity">
                Acessórios
              </Link>
              <Link href="/categoria/sapatos" className="hover:opacity-60 transition-opacity">
                Sandálias / Tênis
              </Link>
            </nav>
          </div>

          <div className="flex-1 flex justify-center">
            <Link href="/" aria-label="Ir para a página inicial">
              <Image
                src="/logo2.png"
                alt="Ateliê Luz de Maria"
                width={260}
                height={84}
                className="object-contain h-[70px] w-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <button
              onClick={openCart}
              className="text-xs md:text-sm uppercase font-bold flex items-center gap-2 text-[#C85A17] hover:opacity-60 transition-opacity"
              aria-label="Abrir carrinho"
            >
              <span className="text-xs uppercase tracking-wide">Carrinho</span>

              <div className="relative">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C85A17] text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Menu mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[350px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col xl:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex items-center border-b border-gray-100/50">
          <button
            onClick={closeMenu}
            className="text-[#C85A17] hover:opacity-70 transition-opacity"
            aria-label="Fechar menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <h2 className="text-[15px] font-bold text-center flex-1 pr-5 text-[#C85A17]">
            Menu
          </h2>
        </div>

        <nav className="flex-1 flex flex-col pt-2 overflow-y-auto text-[14px] font-bold text-[#C85A17] uppercase tracking-wider">
          <Link href="/" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors border-b border-gray-100">
            Início
          </Link>
          <Link href="/categoria/todos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Ver todos os produtos
          </Link>
          <Link href="/categoria/conjuntos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Conjuntos / Vestidos
          </Link>
          <Link href="/categoria/cropped-blusas" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Cropped / Blusas
          </Link>
          <Link href="/categoria/jeans" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Jeans
          </Link>
          <Link href="/categoria/shorts" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Shorts Tecido
          </Link>
          <Link href="/categoria/acessorios" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
            Acessórios
          </Link>
          <Link href="/categoria/sapatos" onClick={closeMenu} className="px-5 py-3.5 hover:bg-gray-50 transition-colors border-b border-gray-100">
            Sandálias / Tênis
          </Link>
        </nav>

        <div className="p-5 border-t border-gray-100 flex items-center gap-3 text-[14px] text-[#C85A17] font-bold">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>

          <div>
            <Link href="/minha-conta" onClick={closeMenu} className="hover:opacity-70 transition-opacity">
              Iniciar sessão
            </Link>
            <span className="mx-1">.</span>
            <Link href="/minha-conta" onClick={closeMenu} className="hover:opacity-70 transition-opacity">
              Criar uma conta
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}