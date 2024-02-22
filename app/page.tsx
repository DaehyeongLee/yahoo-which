import React, { FC } from 'react'
import Carousel from '@/components/Carousel/Carousel'

const MainPage = () => {
  return (
    <div>
      <Carousel
        contents={[
          { img: '/temp/banner1.webp', link: '/' },
          { img: '/temp/banner2.webp' },
          { img: '/temp/banner3.webp', link: '/' },
        ]}
      />
    </div>
  )
}

export default MainPage
