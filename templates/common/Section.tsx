import React, { FC, ReactNode } from 'react'
import Button from '@/components/Button/Button'
import Typography from '@/components/Typography/Typography'
import Link from 'next/link'

interface SectionProps {
  children: ReactNode
  mainTitle?: string
  subTitle?: string
  detailLink?: string
}
const Section: FC<SectionProps> = ({ children, mainTitle, subTitle, detailLink }) => {
  const header = () => {
    return (
      <div className="flex justify-between items-center mb-[15px]">
        <div>
          <Typography variant="h3" className="text-[20px] leading-6">
            {mainTitle}
          </Typography>
          {subTitle && (
            <Typography variant="p" className="text-[14px] text-[#626262] leading-4 mt-1">
              {subTitle}
            </Typography>
          )}
        </div>
        {/* FIXME: &#62; 아이콘으로 대체 필요 */}
        {detailLink && <Button variant="nolined">전체보기 &#62;</Button>}
      </div>
    )
  }
  return (
    <div className="pb-11 px-5">
      {mainTitle && (detailLink ? <Link href={detailLink}>{header()}</Link> : header())}
      {children}
    </div>
  )
}

export default Section
