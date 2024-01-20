import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useEffect } from 'react';





const swiperComponent = () => {

    return (
        <div className='sliderContainer'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className='slide flex'>
                    <img src="public/assets/64d3dd9edfb41666c35b15fd_Arc’teryx.svg" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab libero ducimus, deserunt voluptas ad rerum fugit necessitatibus dolore perferendis sequi iure assumenda illum animi ut quis soluta fugiat minima doloremque.</p>
                </SwiperSlide>
                <SwiperSlide className='slide flex'>
                    <img src="public/assets/64d3dd9edfb41666c35b15fe_Hunter.svg" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab libero ducimus, deserunt voluptas ad rerum fugit necessitatibus dolore perferendis sequi iure assumenda illum animi ut quis soluta fugiat minima doloremque.</p>
                </SwiperSlide>
                <SwiperSlide className='slide flex'>
                    <img src="public/assets/64d3dd9edfb41666c35b15ff_Nike.svg" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab libero ducimus, deserunt voluptas ad rerum fugit necessitatibus dolore perferendis sequi iure assumenda illum animi ut quis soluta fugiat minima doloremque.</p>
                </SwiperSlide>
                <SwiperSlide className='slide flex'>
                    <img src="public/assets/64d3dd9edfb41666c35b1600_Converse.svg" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab libero ducimus, deserunt voluptas ad rerum fugit necessitatibus dolore perferendis sequi iure assumenda illum animi ut quis soluta fugiat minima doloremque.</p>
                </SwiperSlide>
                <SwiperSlide className='slide flex'>
                    <img src="public/assets/64d3dd9edfb41666c35b1602_AfterPay.svg" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab libero ducimus, deserunt voluptas ad rerum fugit necessitatibus dolore perferendis sequi iure assumenda illum animi ut quis soluta fugiat minima doloremque.</p>
                </SwiperSlide>
            </Swiper>
        </div>

    )

}

export default swiperComponent
