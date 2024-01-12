import Button from '@/components/Button/Button'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'

export default function Home() {
  return (
    <main>
      <div>
        <Typography variant="h1">고</Typography>
        <Typography variant="h2">용</Typography>
        <Typography variant="h3">대</Typography>
        <Typography variant="h4">프</Typography>
        <Typography variant="h5">로</Typography>
        <Typography variant="h6">젝</Typography>
        <Typography variant="p">트</Typography>
        <Typography variant="span">테스트</Typography>
      </div>
      <h1 className="text-2xl font-bold underline">Hello world!</h1>
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
          img="testImg.jpeg"
          BottomContent={
            <div>
              <Typography variant="h3" className="mb-1">
                해운대 타이가텐푸라
              </Typography>
              <Typography variant="p">일식 • 부산 해운대</Typography>
            </div>
          }
        />
        <VerticalCard
          variant="outlined"
          img="testImg.jpeg"
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
        />
      </div>
    </main>
  )
}
