"use client"

import CertificateItem from '@/components/CertificateItem'
import Title from '@/components/Title'
import certificates from '@/data/certificates'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import defaultTheme from "tailwindcss/defaultTheme"

import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'


const Certificates = () => {

  const prevButtonRef = useRef<HTMLButtonElement>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)


  return (
 
    <section className='bg-gray pt-7 sm:pt-10 xl:pt-15 pb-7 sm:pb-12 xl:pb-20  xl:px-5 -md:mt-10'>
      <Title color='gray' className='mb-6 sm:mb-12 xl:mb-20' text='Certifications'/>
      <div className='px-1 md:px-3'>
        <Swiper
          
          spaceBetween={4}
          slidesPerView={1.05}
          fadeEffect={{crossFade:true}}
          breakpoints={{
            640: {
              slidesPerView: 2.05,
              spaceBetween: 8,
            },
            1280: {
              slidesPerView: 3.05,
                spaceBetween: 12
            },
            1536: {
              slidesPerView: 4.1,
              spaceBetween: 20
            }
          }}
          modules={[Navigation]}
          navigation = {{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          grabCursor
        >
        {certificates.map((item, index) =>(
          <SwiperSlide key = {index}>
            <CertificateItem data = {item} /> 
          </SwiperSlide>
                  ))}
        </Swiper>
      </div>
     
      <div className='flex justify-end gap-x-2 mt-5 mr-5 sm:mr-10'>
          <button className='prev group not-disabled:hover:bg-gold/25 not-disabled:active:bg-gold/25 transition-colors size-10 bg-white ring  ring-gold/25 hover:ring-gold active:ring-gold  rounded-full flex justify-center items-center cursor-pointer  disabled:ring-gray-200' ref = {prevButtonRef}>
            <svg
              className='group-disabled:scale-[1] group-hover:scale-[1.4] group-active:scale-[1.4] group-disabled:stroke-gray-300 stroke-gold transition-transform'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className='next group not-disabled:hover:bg-gold/25 not-disabled:active:bg-gold/25 transition-colors size-10 bg-white ring  ring-gold/25 hover:ring-gold active:ring-gold  rounded-full flex justify-center items-center cursor-pointer  disabled:ring-gray-200'  ref = {nextButtonRef}>
            <svg
              className='group-disabled:scale-[1] group-hover:scale-[1.4] group-active:scale-[1.4] group-disabled:stroke-gray-300 stroke-gold transition-transform'
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
      </div>
    </section>
  )
}

export default Certificates