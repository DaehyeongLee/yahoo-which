import Button from '@/components/Button/Button'
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
    </main>
  )
}
