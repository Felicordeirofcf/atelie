'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8 mt-20 text-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Colunas Superiores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Departamentos */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base mb-2">Departamentos</h3>
            <Link href="/quem-somos" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Quem Somos</Link>
            <Link href="/rastrear-pedido" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Rastrear Pedido</Link>
            <Link href="/minha-conta" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Minha Conta</Link>
            <Link href="/pedidos" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Pedidos</Link>
            <Link href="/politica-de-privacidade" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Política de Privacidade</Link>
            <Link href="/trocas-e-devolucoes" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Trocas e Devoluções</Link>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base mb-2">Navegação</h3>
            <Link href="/atendimento" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">Atendimento</Link>
          </div>

          {/* Entre em contato */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base mb-2">Entre em contato</h3>
            <a href="https://wa.me/5521999999999" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">
              5521999999999 {/* Altere para o número real */}
            </a>
            <a href="mailto:contato@atelieluzdemaria.com.br" className="text-sm text-gray-500 hover:text-[#FADADD] transition-colors">
              contato@atelieluzdemaria.com.br
            </a>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="w-full border-t border-gray-100 my-8"></div>

        {/* Meios de Pagamento e Direitos Reservados */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold text-sm mr-2">Meios de pagamento</span>
            {/* Aqui usamos badges simulando os ícones para ficar igual ao layout */}
            <div className="flex gap-2 flex-wrap">
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-blue-800 rounded">VISA</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-red-500 rounded">Mastercard</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-blue-500 rounded">Amex</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-blue-900 rounded">Diners</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-black rounded">Elo</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-red-600 rounded">Hipercard</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-gray-700 rounded">Boleto</span>
              <span className="px-2 py-1 border border-gray-200 text-xs font-bold text-teal-500 rounded flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Pix
              </span>
            </div>
          </div>
          
          <div className="text-xs text-gray-400 text-center md:text-left">
            © 2026 Ateliê Luz de Maria. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}