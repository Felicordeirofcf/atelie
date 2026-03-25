'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const atelieBanners = [
  {
    id: 1,
    title: 'Coleção de Inverno',
    imgDesktop: '/banners/banner-1-desktop.jpg',
    imgMobile: '/banners/banner-1-mobile.jpg',
    link: '/categoria/todos',
    ctaText: 'Shop The Look', // Atualizado para a vibe da imagem
    desktopPosition: 'object-[50%_35%]',
    mobilePosition: 'object-[55%_35%]',
  },
  {
    id: 2,
    title: 'Saldão Especial',
    imgDesktop: '/banners/banner-2-desktop.jpg',
    imgMobile: '/banners/banner-2-mobile.jpg',
    link: '/categoria/todos',
    ctaText: 'Descobrir Peças',
    desktopPosition: 'object-[50%_05%]',
    mobilePosition: 'object-[55%_35%]',
  },
  {
    id: 3,
    title: 'Novidades da Semana',
    imgDesktop: '/banners/banner-3-desktop.jpg',
    imgMobile: '/banners/banner-3-mobile.jpg',
    link: '/categoria/todos',
    ctaText: 'Ver Lançamentos',
    desktopPosition: 'object-[50%_05%]',
    mobilePosition: 'object-[60%_40%]',
  },
  {
    id: 4,
    title: 'Mais Vendidos',
    imgDesktop: '/banners/banner-4-desktop.jpg',
    imgMobile: '/banners/banner-4-mobile.jpg',
    link: '/categoria/todos',
    ctaText: 'Comprar Favoritos',
    desktopPosition: 'object-[68%_5%]',
    mobilePosition: 'object-[72%_35%]',
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f4ef]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#FADADD]',
        }}
        className="h-[52vh] w-full md:h-[72vh]"
      >
        {atelieBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute inset-0 hidden md:block">
                <Image
                  src={banner.imgDesktop}
                  alt={banner.title}
                  fill
                  priority={banner.id === 1}
                  quality={100}
                  sizes="100vw"
                  className={`object-cover ${banner.desktopPosition}`}
                />
              </div>

              <div className="absolute inset-0 block md:hidden">
                <Image
                  src={banner.imgMobile}
                  alt={banner.title}
                  fill
                  priority={banner.id === 1}
                  quality={100}
                  sizes="100vw"
                  className={`object-cover ${banner.mobilePosition}`}
                />
              </div>

              {/* Degradê mais sutil para combinar com o fundo claro */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              {/* Mudei o justify-end para justify-center para o botão ficar no meio da tela */}
              <div className="absolute inset-0 z-20 flex items-end justify-center px-4 pb-12 md:pb-16">
                <Link
                  href={banner.link}
                  className="bg-white/95 backdrop-blur-sm border border-transparent px-8 py-3 text-[#333333] font-serif uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-md transition-all hover:bg-white hover:border-[#333333]"
                >
                  {banner.ctaText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}