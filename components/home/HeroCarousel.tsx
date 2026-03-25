import Link from 'next/link';
import Image from 'next/image';

const staticBanner = {
  title: 'Nova Coleção Crochê Resort',
  // Como agora ela vai encolher para caber, você pode usar a MESMA foto para o PC e Mobile!
  imgDesktop: '/banners/banner-croche-mobile.jpg', 
  imgMobile: '/banners/banner-croche-mobile.jpg',   
  link: '/categoria/todos',
  ctaText: 'LOJA',
};

export default function HeroCarousel() {
  return (
    // Coloquei esse fundo #F2F2F2 (cinza claro) para camuflar com a parede da foto original
    <section className="relative w-full overflow-hidden bg-[#F2F2F2]">
      
      {/* Aumentei um pouco a altura no PC (h-[85vh]) para a modelo ficar com um tamanho bom */}
      <div className="relative h-[65vh] md:h-[85vh] w-full flex justify-center items-center overflow-hidden">
        
        {/* IMAGEM DESKTOP (PC) - Usando 'object-contain' para não cortar NADA */}
        <div className="absolute inset-0 hidden md:flex justify-center items-center">
          <Image
            src={staticBanner.imgDesktop}
            alt={staticBanner.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-contain" // <- A mágica acontece aqui! A foto encolhe para caber inteira.
          />
        </div>

        {/* IMAGEM MOBILE (Celular) - Mantendo o 'cover' pois a tela do celular já é em pé igual à foto */}
        <div className="absolute inset-0 flex md:hidden justify-center items-center">
          <Image
            src={staticBanner.imgMobile}
            alt={staticBanner.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[50%_15%]" 
          />
        </div>

        {/* Degradê super sutil apenas na parte de baixo para o botão não sumir */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        {/* Botão "LOJA" Centralizado em Terracota */}
        <div className="absolute inset-0 z-20 flex items-end justify-center px-4 pb-12 md:pb-16 pointer-events-none">
          {/* pointer-events-auto garante que o botão seja clicável mesmo com a camada acima dele */}
          <Link
            href={staticBanner.link}
            className="pointer-events-auto bg-white/95 backdrop-blur-sm border-2 border-transparent px-10 py-3 text-[#C85A17] font-sans font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg transition-all hover:bg-white hover:border-[#C85A17]"
          >
            {staticBanner.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}