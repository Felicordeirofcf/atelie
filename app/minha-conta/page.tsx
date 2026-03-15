import Link from 'next/link';

export default function UnderConstructionPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333] mb-4">
        Em Breve
      </h1>
      <div className="w-12 h-0.5 bg-[#FADADD] mx-auto mb-6"></div>
      
      <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
        Estamos preparando este espaço com muito carinho para melhorar ainda mais a sua experiência no Ateliê Luz de Maria.
      </p>
      
      <Link 
        href="/" 
        className="px-8 py-4 bg-[#333333] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#FADADD] hover:text-[#333333] transition-colors"
      >
        Voltar para a Loja
      </Link>
    </div>
  );
}