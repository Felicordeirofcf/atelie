'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo com animação de pulso */}
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.3em] text-[#333333] animate-pulse">
            Luz de Maria
          </h2>
          
          {/* Linha decorativa Rosa Claro que expande e contrai */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[1px] bg-[#FADADD] animate-loader-line"></div>
        </div>
        
        <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Carregando essência...
        </p>
      </div>

      <style jsx>{`
        @keyframes loader-line {
          0% { width: 0; opacity: 0; }
          50% { width: 100%; opacity: 1; }
          100% { width: 0; opacity: 0; }
        }
        .animate-loader-line {
          animation: loader-line 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}