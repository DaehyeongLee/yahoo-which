import Button from '@/components/Button/Button'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'
import HorizontalCard from '@/components/Card/HorizontalCard'
import Carousel from '@/components/Carousel/Carousel'
import Footer from '@/templates/Footer'

export default function Home() {
  return (
    <main>
      <div>
        <Button variant="outlined">
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
      <br />
      <div className="grid grid-cols-3">
        <VerticalCard
          image="/testImg.jpeg"
          BottomContent={
            <div>
              <Typography variant="h3" className="mb-1">
                해운대 타이가텐푸라
              </Typography>
              <Typography variant="p">일식 • 부산 해운대</Typography>
            </div>
          }
          imageWidth={200}
          imageHeight={200}
        />
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
      <Footer />
    </main>
  )
}
