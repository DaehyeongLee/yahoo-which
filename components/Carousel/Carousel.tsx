'use client'
import { FC } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from '../Image/Image'
import 'swiper/css'
import 'swiper/css/pagination'

export interface CarouselContentType {
  img: string
  link?: string
}
// 프로젝트의 슬라이드는 메인페이지 광고, 배너 슬라이드 두가지 유형으로 제한한다.
export type CarouselVariant = 'main' | 'banner'
interface CarouselProps {
  contents: Array<CarouselContentType>
  variant?: CarouselVariant
  slideClassName?: string
  slidesPerView?: number | 'auto'
}

const Carousel: FC<CarouselProps> = ({ contents, variant = 'main', slideClassName = '', slidesPerView = 'auto' }) => {
  const slideWidth = variant === 'main' ? 430 : 480
  const slideHeight = variant === 'main' ? 280 : 160
  const image = (url: string, index: number) => {
    return (
      <Image
        url={url}
        width={slideWidth}
        height={slideHeight}
        className="object-cover rounded-lg"
        alt={`carousel-${index}`}
      />
    )
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
        <SwiperSlide
          key={`carousel-${index}`}
          className={`${variant === 'main' ? '!w-[430px]' : '!w-[480px]'} ${
            variant === 'main' ? 'h-[280px]' : 'h-[160px]'
          } ${slideClassName}`}
        >
          {content.link ? <Link href={content.link}>{image(content.img, index)}</Link> : image(content.img, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
