'use client';

import { useState } from 'react';
import { useCartStore } from '../../store/cartStore'; // Ajuste o caminho se necessário
import Link from 'next/link';

export default function CheckoutPage() {
  const { items } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  // Cálculos de exemplo (ajuste conforme a sua lógica de frete)
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const frete = items.length > 0 ? 25.00 : 0; 
  const total = subtotal + frete;

  const handleIrParaPagamento = async () => {
    if (items.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    
    setIsLoading(true);

    try {
      // 1. Prepara os dados pro formato que a nossa API exige
      const checkoutItems = items.map(item => ({
        variant_id: Number(item.id),
        quantity: item.quantity
      }));

      // 2. Bate na nossa Rota de API (aquela que conversa com a Nuvemshop em segredo)
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: checkoutItems })
      });

      // 3. Lê a resposta da API
      const data = await response.json();
      console.log("Resposta da API de Checkout:", data); // Isso vai nos ajudar a debugar se falhar

      // 4. Se a API devolveu o link, redireciona!
      if (data && data.checkoutUrl) {
        // Redirecionamento forçado
        window.location.assign(data.checkoutUrl);
      } else {
        console.error("Link de checkout ausente na resposta:", data);
        alert('Erro ao gerar o link de pagamento. A loja retornou um erro.');
        setIsLoading(false);
      }
      
    } catch (error) {
      console.error('Erro de conexão ao tentar gerar o checkout:', error);
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif text-[#333333] mb-4">Sua sacola está vazia</h1>
        <Link href="/categoria/todos" className="text-sm font-bold uppercase tracking-widest text-white bg-[#333333] px-8 py-4 hover:bg-[#FADADD] hover:text-[#333333] transition-colors">
          Continuar Comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Lado Esquerdo: Itens (Exemplo Básico) */}
        <div className="w-full md:w-3/5">
          <h2 className="text-xl font-serif text-[#333333] mb-6 uppercase tracking-widest">Revisão do Pedido</h2>
          <div className="bg-white p-6 shadow-sm border border-gray-100">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 border-b border-gray-50 last:border-0">
                <div className="w-16 h-20 bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#333333]">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">Tam: {item.size} | Qtd: {item.quantity}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-bold text-[#333333]">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Resumo (A caixa do seu print) */}
        <div className="w-full md:w-2/5">
          <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#333333] mb-6 border-b border-black pb-2">Resumo do Pedido</h3>
            
            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <div className="flex justify-between items-center mb-6 text-sm text-gray-600 border-b border-gray-200 pb-6">
              <span>Frete</span>
              <span>R$ {frete.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold text-[#333333]">Total</span>
              <span className="text-xl font-bold text-[#333333]">R$ {total.toFixed(2).replace('.', ',')}</span>
            </div>

            <div className="bg-[#F0FFF4] p-4 mb-6 text-xs text-[#2F855A] leading-relaxed font-medium">
              VOCÊ SERÁ REDIRECIONADO PARA O AMBIENTE SEGURO DA NUVEMSHOP PARA REALIZAR O PAGAMENTO VIA PIX OU CARTÃO.
            </div>

            <button 
              onClick={handleIrParaPagamento}
              disabled={isLoading}
              className="w-full py-4 bg-[#333333] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#FADADD] hover:text-[#333333] transition-colors flex justify-center items-center disabled:bg-gray-400 disabled:cursor-not-allowed mb-4"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Ir para o Pagamento'
              )}
            </button>

            <Link href="/categoria/todos" className="block text-center text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-[#333333] transition-colors underline underline-offset-4">
              Continuar Comprando
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}