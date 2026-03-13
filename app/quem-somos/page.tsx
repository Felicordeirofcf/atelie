import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Section da Página Quem Somos */}
      <div className="relative w-full h-[40vh] md:h-[50vh] bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1920" 
          alt="Ateliê Luz de Maria" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-widest text-white mb-4 drop-shadow-md">
            Quem Somos
          </h1>
          <div className="w-16 h-0.5 bg-[#FADADD] mx-auto"></div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="text-xs text-gray-500 uppercase tracking-wide">
          <Link href="/" className="hover:text-[#FADADD] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#333333] font-semibold">Quem Somos</span>
        </nav>
      </div>

      {/* Seção Principal: A História */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-widest text-[#333333] mb-8">
          A Essência Luz de Maria
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed md:text-lg font-light">
          <p>
            O Ateliê Luz de Maria nasceu de um sonho simples, mas poderoso: criar peças que não apenas vestem, mas que abraçam e realçam a beleza singular de cada mulher. Acreditamos que a moda é uma forma de expressão da alma.
          </p>
          <p>
            Cada costura, cada escolha de tecido e cada paleta de cores é pensada com um carinho meticuloso. Nossa curadoria busca o equilíbrio perfeito entre a elegância atemporal e as tendências contemporâneas, garantindo que você se sinta confiante e deslumbrante em qualquer ocasião.
          </p>
          <p>
            Mais do que uma marca de roupas, somos um ateliê dedicado a celebrar a força e a delicadeza feminina. Nosso compromisso é entregar qualidade excepcional, conforto inigualável e um atendimento que faz você se sentir em casa.
          </p>
        </div>
      </section>

      {/* Seção com Imagem Dupla (Estilo Editorial) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-gray-100">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 pt-8 md:pt-0 md:pr-12">
            <h3 className="text-xl md:text-2xl font-serif uppercase tracking-widest text-[#333333] mb-6">
              Nosso Propósito
            </h3>
            <p className="text-gray-600 leading-relaxed font-light mb-6">
              Nossa missão é descomplicar a elegância. Queremos que você abra o seu guarda-roupa e encontre peças versáteis que conversam entre si, permitindo criar desde um look casual chic para o dia a dia até uma produção sofisticada para eventos especiais.
            </p>
            <p className="text-gray-600 leading-relaxed font-light">
              No Ateliê Luz de Maria, a exclusividade mora nos detalhes. Valorizamos a produção consciente e o cuidado artesanal em cada etapa do nosso processo criativo.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex gap-4 h-[400px] md:h-[500px] order-1 md:order-2">
            <div className="w-1/2 h-full mt-8">
              <img 
                src="https://images.unsplash.com/photo-1434389678369-1840ab7aa3fe?auto=format&fit=crop&q=80&w=800" 
                alt="Detalhe de tecido" 
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
            <div className="w-1/2 h-full mb-8">
              <img 
                src="https://images.unsplash.com/photo-1550639524-a6f58345a04e?auto=format&fit=crop&q=80&w=800" 
                alt="Moda feminina" 
                className="w-full h-full object-cover rounded-sm shadow-sm"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}