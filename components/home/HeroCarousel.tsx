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
    link: '/categoria/inverno',
    ctaText: 'Ver Coleção',
    desktopPosition: 'object-[50%_35%]',
    mobilePosition: 'object-[55%_35%]',
  },
  {
    id: 2,
    title: 'Saldão Especial',
    imgDesktop: '/banners/banner-2-desktop.jpg',
    imgMobile: '/banners/banner-2-mobile.jpg',
    link: '/promocoes',
    ctaText: 'Aproveitar Descontos',
    desktopPosition: 'object-[50%_05%]',
    mobilePosition: 'object-[55%_35%]',
  },
  {
    id: 3,
    title: 'Novidades da Semana',
    imgDesktop: '/banners/banner-3-desktop.jpg',
    imgMobile: '/banners/banner-3-mobile.jpg',
    link: '/novidades',
    ctaText: 'Ver Lançamentos',
    desktopPosition: 'object-[50%_05%]',
    mobilePosition: 'object-[60%_40%]',
  },
  {
    id: 4,
    title: 'Mais Vendidos',
    imgDesktop: '/banners/banner-4-desktop.jpg',
    imgMobile: '/banners/banner-4-mobile.jpg',
    link: '/top-sellers',
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

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div className="absolute inset-0 z-20 flex items-end justify-end px-4 pb-16 md:px-10 md:pb-14">
                <Link
                  href={banner.link}
                  className="rounded-md bg-white/95 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#333333] shadow-xl transition-all hover:bg-[#FADADD] md:rounded-sm md:px-8 md:py-3.5 md:text-sm md:tracking-[0.22em]"
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