import Typography from '@/components/Typography/Typography'
import Link from 'next/link'
import { FC } from 'react'

interface FooterItem {
  name: string
  info: string
}

const Footer: FC = () => {
  const footerItems: FooterItem[] = [
    { name: '대표', info: '고용대' },
    { name: '주소', info: '서울특별시 강남구 테헤란로 77길' },
    { name: '사업자등록번호', info: '614-77-23412' },
    { name: '통신판매업 신고번호', info: '2024-성남분당-9213호' },
    { name: '개인정보담당', info: 'service@goyongdae.co.kr' },
    { name: '대표번호', info: '070-1234-5678' },
  ]

  const linkItems = [
    { service: '서비스 이용약관', link: '/' },
    { service: '개인정보 처리방침', link: '/' },
    { service: '위치정보 이용약관', link: '/' },
    { service: '인재 채용', link: '/' },
    { service: '입점 문의', link: '/' },
    { service: '광고/제휴 문의', link: '/' },
  ]

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container px-5">
        <Typography className="text-md text-stone-500 pb-1.5">(주)고용대 컴퍼니</Typography>
        {footerItems.map((item, index) => (
          <div key={index} className="flex gap-0.5 py-1">
            <Typography className="text-sm text-stone-500">{item.name}</Typography>
            <Typography className="text-sm text-stone-500">:</Typography>
            <Typography className="text-sm text-stone-600">{item.info}</Typography>
          </div>
        ))}
        <div className="flex pt-2">
          {linkItems.map((item, index) => (
            <div key={index} className="flex">
              <Link href={item.link}>
                <Typography className="text-xs text-stone-950">{item.service}</Typography>
              </Link>
              {index !== linkItems.length - 1 && <Typography className="text-xs text-stone-950 mx-1">|</Typography>}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
