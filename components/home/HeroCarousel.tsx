'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';

const atelieBanners = [
  {
    id: 1,
    title: "Coleção de Inverno",
    imgDesktop: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920&h=800",
    imgMobile: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800&h=1000",
    link: "/categoria/inverno",
    ctaText: "Ver Coleção"
  },
  {
    id: 2,
    title: "Saldão Especial",
    imgDesktop: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1920&h=800",
    imgMobile: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800&h=1000",
    link: "/promocoes",
    ctaText: "Aproveitar Descontos"
  },
  {
    id: 3,
    title: "Novidades da Semana",
    imgDesktop: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1920&h=800",
    imgMobile: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800&h=1000",
    link: "/novidades",
    ctaText: "Ver Lançamentos"
  },
  {
    id: 4,
    title: "Mais Vendidos",
    imgDesktop: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1920&h=800",
    imgMobile: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800&h=1000",
    link: "/top-sellers",
    ctaText: "Comprar Favoritos"
  }
];

export default function HeroCarousel() {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#FADADD]' }}
        // ALTURA AJUSTADA AQUI: 55vh para celular, 65vh para computador
        className="w-full h-[55vh] md:h-[65vh]"
      >
        {atelieBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* Degradê escuro apenas na parte inferior para a leitura do texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              
              <img src={banner.imgDesktop} alt={banner.title} className="hidden md:block w-full h-full object-cover relative z-0" />
              <img src={banner.imgMobile} alt={banner.title} className="block md:hidden w-full h-full object-cover relative z-0 object-top" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 z-20 px-4 text-center">
                
                {/* Título agora aparece no celular também, mas com fonte menor */}
                <h2 className="text-white text-2xl md:text-5xl font-serif mb-4 md:mb-6 drop-shadow-lg">
                  {banner.title}
                </h2>
                
                <Link href={banner.link}>
                  {/* Botão com padding ajustado para celular */}
                  <button className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-[#333333] font-bold uppercase tracking-widest text-xs md:text-sm transition-all hover:bg-[#FADADD] hover:text-[#333333] rounded-sm shadow-xl">
                    {banner.ctaText}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}