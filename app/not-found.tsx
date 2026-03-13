import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        {/* Número do Erro com estilo suave */}
        <h1 className="text-8xl md:text-9xl font-serif text-[#FADADD] opacity-50">404</h1>
        
        {/* Mensagem de Erro */}
        <div className="relative -mt-10 md:-mt-16">
          <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333] mb-4">
            Página não encontrada
          </h2>
          <div className="w-12 h-0.5 bg-[#FADADD] mx-auto mb-8"></div>
          
          <p className="max-w-md mx-auto text-gray-500 text-sm md:text-base leading-relaxed mb-10">
            Ops! Parece que o look que você está procurando não está mais por aqui ou o link foi digitado incorretamente.
          </p>
          
          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full md:w-auto px-8 py-4 bg-[#333333] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FADADD] hover:text-[#333333] transition-colors"
            >
              Voltar para a Home
            </Link>
            
            <Link 
              href="/categoria/novidades" 
              className="w-full md:w-auto px-8 py-4 border border-gray-200 text-[#333333] text-xs font-bold uppercase tracking-widest hover:border-[#FADADD] transition-colors"
            >
              Ver Novidades
            </Link>
          </div>
        </div>

        {/* Sugestão de contato rápida */}
        <p className="mt-16 text-xs text-gray-400 uppercase tracking-tighter">
          Precisa de ajuda? <Link href="/contato" className="underline hover:text-[#FADADD]">Fale com nosso suporte</Link>
        </p>
      </div>
    </div>
  );
}