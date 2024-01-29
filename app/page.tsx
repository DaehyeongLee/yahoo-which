'use client'

import Button from '@/components/Button/Button'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'
import HorizontalCard from '@/components/Card/HorizontalCard'
import Carousel from '@/components/Carousel/Carousel'
import Footer from '@/templates/Footer'
import Tooltip from '@/components/Tooltip/Tooltip'
import Input from '@/components/Input/Input'
import RestaurantCard from '@/templates/Card/RestaurantCard'
import { useState } from 'react'
import Modal from '@/components/Modal/Modal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const IconSearch = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.4717 21.0705L16.817 15.4174C18.0408 13.9197 18.716 12.0339 18.716 9.9752C18.716 5.12785 14.786 1.2002 9.9386 1.2002C5.09122 1.2002 1.19922 5.12912 1.19922 9.9752C1.19922 14.8213 5.12878 18.7502 9.9386 18.7502C11.9975 18.7502 13.8863 18.0368 15.3823 16.8501L21.0369 22.5032C21.2732 22.7032 21.5348 22.8002 21.7923 22.8002C22.0497 22.8002 22.3105 22.7013 22.5084 22.5036C22.9021 22.1083 22.9021 21.4671 22.4717 21.0705ZM3.22477 9.9752C3.22477 6.25341 6.2538 3.2252 9.97658 3.2252C13.6994 3.2252 16.7284 6.25341 16.7284 9.9752C16.7284 13.697 13.6994 16.7252 9.97658 16.7252C6.2538 16.7252 3.22477 13.6961 3.22477 9.9752Z"
        fill="#666666"
      />
    </svg>
  )
  return (
    <main>
      <div>
        <Input placeholder={'지역, 음식, 매장명 검색'} icon={IconSearch} />
        <Button variant="outlined" onClick={() => setModalOpen(true)}>
          {/* TODO: &#62;는 아이콘 추가 이후 대체 */}
          <strong>더 시에나 라운지</strong>의 4개 레스토랑 전체보기 &#62;
        </Button>
        <br />
        <br />
        <Button variant="filled">오후 8:00</Button>
        <br />
        <br />
        <Button variant="nolined">전체보기 &#62;</Button>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        hi
      </Modal>
      <br />
      <div className="flex flex-nowrap space-x-2.5 overflow-x-auto overflow-y-hidden scrollbar-hide">
        {restaurantCards.map((card) => (
          <RestaurantCard
            key={card.id}
            name={card.name}
            score={card.score}
            address={card.address}
            category={card.category}
            image={card.image}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3">
        <VerticalCard
          variant="outlined"
          image="/testImg.jpeg"
          headerContent={
            <div>
              <Typography variant="span">아이윤</Typography>
            </div>
          }
          BottomContent={
            <div>
              <Typography variant="p" className="mb-1">
                해운대 타이가텐푸라
              </Typography>
              <Typography variant="span">일식 • 부산 해운대</Typography>
            </div>
          }
          imageWidth={200}
          imageHeight={200}
        />
      </div>
      <div className="grid grid-cols-3">
        <HorizontalCard
          variant="image_lg"
          image="/testImg.jpeg"
          content={
            <div>
              <Typography variant="h4">런던 베이글 뮤지엄</Typography>
              <Typography variant="p">일평균 웨이팅 3000명</Typography>
            </div>
          }
        />
        <HorizontalCard
          image="/testImg.jpeg"
          content={
            <div>
              <Typography variant="h6">테라스룸 서울</Typography>
              <Typography variant="p">고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진</Typography>
            </div>
          }
        />
        <HorizontalCard
          variant="content_lg"
          image="/testImg.jpeg"
          content={
            <div>
              <Typography variant="h6">테라스룸 서울</Typography>
              <Typography variant="p">고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진</Typography>
              <Typography variant="p">고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진1</Typography>
              <Typography variant="p">고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진2</Typography>
              <Typography variant="p">고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진3</Typography>
            </div>
          }
        />
      </div>
      <div>
        <Carousel
          contents={[
            { img: '/testImg.jpeg', link: '/' },
            { img: '/testImg.jpeg' },
            { img: '/testImg.jpeg', link: '/' },
          ]}
          imageHeight={500}
          imageWidth={500}
        />
      </div>
      <div>
        <Tooltip
          content={
            <>
              전국 웨이팅 맛집의 일 평균 <br /> 웨이팅 인원으로 생성한 랭킹 차트입니다.
            </>
          }
        >
          <Button variant="filled">Tooltip</Button>
        </Tooltip>
      </div>
      <Footer />
    </main>
  )
}

const restaurantCards = [
  {
    id: 0,
    name: '가이연 천호 본점',
    score: '4.4',
    category: '샤브샤브',
    address: '천호',
    image: '/temp/sukiyaki.jpg',
  },
  {
    id: 1,
    name: '잊힐리야',
    score: '4.6',
    category: '요리주점',
    address: '성수',
    image: '/temp/drinkfood.jpg',
  },
  {
    id: 2,
    name: '하이디라오 건대 본점',
    score: '4.2',
    category: '중식',
    address: '건대',
    image: '/temp/hidirao.jpg',
  },
]
