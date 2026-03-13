'use client';

import { useCartStore } from '../../store/cartStore';

export default function Minicart() {
  // Alterado de isOpen para isCartOpen
  const { items, isCartOpen, closeCart, removeItem } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const valorParaFreteGratis = 500 - subtotal;
  const progressoFrete = Math.min((subtotal / 500) * 100, 100);

  return (
    <>
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-[90%] md:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-serif uppercase tracking-widest text-[#333333]">Carrinho</h2>
          <button onClick={closeCart} className="text-gray-400 hover:text-black text-2xl leading-none">&times;</button>
        </div>

        <div className="p-4 bg-gray-50 text-center text-sm border-b border-gray-100">
          {valorParaFreteGratis > 0 ? (
            <p>Faltam <span className="font-bold text-[#FADADD]">R$ {valorParaFreteGratis.toFixed(2).replace('.', ',')}</span> para <span className="font-bold">FRETE GRÁTIS</span></p>
          ) : (
            <p className="text-green-600 font-bold uppercase tracking-wide">Sucesso! Você tem frete grátis</p>
          )}
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
            <div 
              className="h-full bg-[#FADADD] transition-all duration-500" 
              style={{ width: `${progressoFrete}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <p>O seu carrinho está vazio.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-4">
                <div className="relative w-20 h-24 bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium uppercase text-[#333333] truncate pr-2 w-40">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 text-sm">✕</button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Tamanho: {item.size}</p>
                    <p className="text-xs text-gray-500">Qtd: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="uppercase text-sm font-semibold text-gray-500">Subtotal</span>
            <span className="font-bold text-lg text-[#333333]">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <button 
            disabled={items.length === 0}
            className="w-full py-4 bg-[#333333] text-white uppercase tracking-widest text-sm font-bold hover:bg-[#FADADD] transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
}