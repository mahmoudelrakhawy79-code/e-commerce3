'use client'
import React from 'react'

import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
type slidertype = {
    spaceBetween: number,
    slidesPerView: number,
    pagelist: string[]
}
export default function Slider({ spaceBetween, slidesPerView, pagelist }: slidertype) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            navigation
            pagination={{
                clickable: true, renderBullet(index, className) {
                    return `<span class='${className} bg-green-400! w-3! h-3!'></span> `
                }, bulletActiveClass: 'w-5! rounded-2xl opacity-80!'
            }}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {pagelist.map((src) => {
                return <SwiperSlide>
                    <Image src={src} priority className='w-full h-80 object-cover' alt='logo' width={400} height={300} />
                </SwiperSlide>
            }
            )}
        </Swiper>
    );
};


