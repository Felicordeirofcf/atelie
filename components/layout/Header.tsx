'use client';

import Link from 'next/link';
import { useCartStore } from '../../store/cartStore';

export default function Header() {
  const { openCart, items } = useCartStore();
  
  // Calcula o total de itens (somando as quantidades)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full border-b border-gray-100 py-4 px-6 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-md z-30">
      <Link href="/">
        <div className="text-xl font-serif tracking-widest uppercase cursor-pointer">
          Ateliê Luz de Maria
        </div>
      </Link>
      <nav className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
        <Link href="#" className="hover:text-[#FADADD] transition-colors">Novidades</Link>
        <Link href="#" className="hover:text-[#FADADD] transition-colors">Roupas</Link>
        <Link href="#" className="hover:text-[#FADADD] transition-colors">Sale</Link>
      </nav>
      <button 
        onClick={openCart}
        className="text-sm uppercase font-semibold hover:text-[#FADADD] transition-colors"
      >
        Carrinho ({totalItems})
      </button>
    </header>
  );
}