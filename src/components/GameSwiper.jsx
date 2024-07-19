import React, { useState } from 'react'
import './GameSwiper.css'
// import Swiper component
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swipper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Import navigation styles đây la mũi tên 

// import required mpdule
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import GameSlide from './GameSlide';

function GameSwiper({ games }) {
    const [active, setActive] = useState(false)

    const handleToggleVideo = () => {
        setActive(!active)
    }

  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop
        autoplay={{
            delay:2500,
            disableOnInteraction: false
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className='gameSlider'
    >
        {
            games.map(game => (
                <SwiperSlide key={game.id}>
                    <GameSlide 
                        game={game} 
                        active={active} 
                        togglevideo={handleToggleVideo}
                    />
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}

export default GameSwiper