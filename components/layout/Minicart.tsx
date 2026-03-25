'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';

export default function Minicart() {
  const { items, isCartOpen, closeCart, removeItem } = useCartStore();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const valorParaFreteGratis = 500 - subtotal;
  const progressoFrete = Math.min((subtotal / 500) * 100, 100);

  const handleCheckout = async () => {
    if (items.length === 0 || isRedirecting) return;

    try {
      setIsRedirecting(true);
      setCheckoutError('');

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'Erro ao criar checkout.');
      }

      if (!data?.checkoutUrl) {
        throw new Error('Checkout inválido.');
      }

      closeCart();
      window.location.href = data.checkoutUrl;
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : 'Não foi possível iniciar o checkout.'
      );
      setIsRedirecting(false);
    }
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 flex h-full w-[90%] transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:w-[400px] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <h2 className="font-serif text-lg uppercase tracking-widest text-[#333333]">
            Carrinho
          </h2>
          <button
            onClick={closeCart}
            className="text-2xl leading-none text-gray-400 hover:text-[#C85A17] transition-colors"
          >
            &times;
          </button>
        </div>

        <div className="border-b border-gray-100 bg-[#FAF9F6] p-4 text-center text-sm">
          {valorParaFreteGratis > 0 ? (
            <p className="text-[#333333]">
              Faltam{' '}
              <span className="font-bold text-[#C85A17]">
                R$ {valorParaFreteGratis.toFixed(2).replace('.', ',')}
              </span>{' '}
              para <span className="font-bold">FRETE GRÁTIS</span>
            </p>
          ) : (
            <p className="font-bold uppercase tracking-wide text-[#C85A17]">
              Sucesso! Você ganhou Frete Grátis
            </p>
          )}

          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-[#C85A17] transition-all duration-500"
              style={{ width: `${progressoFrete}%` }}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center text-gray-400">
              <p className="font-serif uppercase tracking-widest text-xs">Sua sacola está vazia.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-gray-50 pb-4">
                <div className="relative h-24 w-20 flex-shrink-0 bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="w-40 truncate pr-2 text-xs font-medium uppercase tracking-wider text-[#333333]">
                        {item.name}
                      </h3>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-gray-400 hover:text-[#C85A17] transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-500">
                      Tamanho: {item.size}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Qtd: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-semibold text-[#333333]">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-gray-100 bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-serif font-bold uppercase tracking-widest text-gray-500">
              Subtotal
            </span>
            <span className="text-lg font-bold text-[#333333]">
              R$ {subtotal.toFixed(2).replace('.', ',')}
            </span>
          </div>

          {checkoutError ? (
            <p className="mb-3 text-sm text-red-600">{checkoutError}</p>
          ) : null}

          {items.length > 0 ? (
            <button
              onClick={handleCheckout}
              disabled={isRedirecting}
              className="block w-full bg-[#C85A17] py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#333333] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isRedirecting ? 'Redirecionando...' : 'Finalizar Compra'}
            </button>
          ) : (
            <button
              disabled
              className="w-full cursor-not-allowed bg-gray-100 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400"
            >
              Sacola Vazia
            </button>
          )}
        </div>
      </div>
    </>
  );
}