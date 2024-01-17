'use client'
import { FC } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export interface CarouselContentType {
  img: string
  link?: string
}
export type CarouselVariant = 'default' | 'highlight'
interface CarouselProps {
  contents: Array<CarouselContentType>
  variant?: CarouselVariant
  className?: string
  slidesPerView?: number
}

const Carousel: FC<CarouselProps> = ({ contents, variant = 'default', className = '', slidesPerView = 3 }) => {
  const image = (url: string, index: number) => {
    return <img src={url} className="object-cover rounded-lg" alt={`carousel-${index}`} />
  }

  return (
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={true}
      spaceBetween={10}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {contents.map((content, index) => (
        <SwiperSlide key={`carousel-${index}`}>
          {content.link ? <Link href={content.link}>{image(content.img, index)}</Link> : image(content.img, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
