'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const staticBanner = {
  title: 'Nova Coleção Crochê Resort',
  imgDesktop: '/banners/banner-croche-mobile.jpg', 
  imgMobile: '/banners/banner-croche-mobile.jpg',   
  link: '/categoria/todos',
  ctaText: 'Ver Coleção',
};

export default function HeroCarousel() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#EAE8E4]">
      
      <div className="relative h-[90vh] md:h-[95vh] w-full flex justify-center items-center overflow-hidden">
        
        {/* IMAGEM DESKTOP */}
        <div className="absolute inset-0 hidden md:flex justify-center items-center scale-105 animate-subtle-zoom">
          <Image
            src={staticBanner.imgDesktop}
            alt={staticBanner.title}
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-contain"
          />
        </div>

        {/* IMAGEM MOBILE */}
        <div className="absolute inset-0 flex md:hidden justify-center items-center scale-105 animate-subtle-zoom">
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

        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className={`absolute bottom-0 left-0 z-20 w-full md:w-[600px] p-6 md:p-12 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="flex flex-col items-start space-y-3">
            
            <h1 className="text-white text-[28px] md:text-[45px] font-extrabold uppercase tracking-tight leading-none drop-shadow-lg">
              <span className="text-[#C85A17]"></span> <br /> 
              <span className="block text-[14px] md:text-[20px] font-normal tracking-wide lowercase mt-1 text-white/90"></span>
            </h1>

            <div className="flex items-center gap-3 text-white/95 text-[10px] md:text-[13px] uppercase tracking-[0.4em] font-medium pt-3 border-t border-white/20 w-full">
              <span>Elegância</span>
              <span className="text-[#C85A17]">●</span>
              <span>estilo</span>
              <span className="text-[#C85A17]">●</span>
              <span>identidade</span>
            </div>

            <div className="pt-20 w-full flex justify-end pointer-events-none">
              <Link
                href={staticBanner.link}
                className="pointer-events-auto group relative flex items-center gap-3 bg-white/90 backdrop-blur-lg border-2 border-transparent px-10 py-4 text-[#C85A17] font-sans font-bold uppercase tracking-[0.25em] text-[11px] md:text-xs shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 hover:border-[#C85A17]"
              >
                {staticBanner.ctaText}
                
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="#C85A17" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}