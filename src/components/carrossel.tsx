/* eslint-disable @next/next/no-img-element */
'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Carrossel = () => {
  const data = [
    {
      id: '1',
      image: 'image1',
    },
    {
      id: '2',
      image: 'image2',
    },
    {
      id: '3',
      image: 'image3',
    },
    {
      id: '4',
      image: 'image4',
    },
  ]

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Carrousel</h1>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div id={item.image} className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
