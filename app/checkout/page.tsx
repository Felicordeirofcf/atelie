'use client';

import { useCartStore } from '../../store/cartStore';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, removeItem } = useCartStore();
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const frete = subtotal > 500 ? 0 : 25.00; // Exemplo de regra de frete
  const total = subtotal + frete;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-serif uppercase tracking-widest mb-6">Seu carrinho está vazio</h2>
        <Link href="/" className="px-8 py-3 bg-[#333333] text-white uppercase text-xs font-bold tracking-widest hover:bg-[#FADADD] hover:text-[#333333] transition-colors">
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-serif uppercase tracking-widest text-[#333333] mb-10 text-center md:text-left">Finalizar Pedido</h1>
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Lado Esquerdo: Lista de Itens */}
          <div className="flex-1 space-y-4">
            <div className="bg-white p-6 shadow-sm rounded-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b">Seus Produtos</h3>
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b last:border-0">
                  <img src={item.image} alt={item.name} className="w-20 h-24 object-cover" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium uppercase text-[#333333]">{item.name}</h4>
                        <button onClick={() => removeItem(item.id)} className="text-xs text-gray-400 hover:text-red-500">Remover</button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Tamanho: {item.size}</p>
                      <p className="text-xs text-gray-500 italic">Qtd: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-[#333333]">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Resumo e Pagamento */}
          <div className="w-full lg:w-[400px] space-y-6">
            <div className="bg-white p-6 shadow-sm rounded-sm sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-2 border-b">Resumo do Pedido</h3>
              
              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frete</span>
                  <span>{frete === 0 ? 'GRÁTIS' : `R$ ${frete.toFixed(2).replace('.', ',')}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#333333] pt-4 border-t">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-sm mb-6 text-[11px] text-green-700 leading-relaxed uppercase tracking-wider">
                Você será redirecionado para o ambiente seguro da Nuvemshop para realizar o pagamento via Pix ou Cartão.
              </div>

              <button className="w-full py-5 bg-[#333333] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#FADADD] hover:text-[#333333] transition-colors shadow-lg">
                Ir para o Pagamento
              </button>
              
              <Link href="/" className="block text-center mt-6 text-xs text-gray-400 uppercase tracking-widest hover:text-[#333333] underline">
                Continuar Comprando
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}