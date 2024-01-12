import { FC, ReactElement } from 'react'

export type HorizontalCardVariant = 'img_lg' | 'content_lg' | 'default'
interface HorizontalCardProps {
  img: string
  variant?: HorizontalCardVariant
  imgClassName?: string
  content: ReactElement
  contentClassName?: string
}

const HorizontalCard: FC<HorizontalCardProps> = ({
  img,
  variant = 'default',
  imgClassName,
  content,
  contentClassName,
}) => {
  const contentClasses = {
    img_lg: 'max-h-[120px] overflow-y-hidden',
    content_lg: 'max-h-auto',
    default: 'max-h-16 overflow-y-hidden',
  }
  const imgClasses = {
    img_lg: 'w-[120px] h-[120px] mr-2',
    content_lg: 'w-[78px] h-[104px] mr-[15px]',
    default: 'w-16 h-16 mr-2.5',
  }

  return (
    <div className="flex flex-row">
      <img src={img} className={`rounded ${imgClasses[variant]} ${imgClassName}`} />
      <div className={`${contentClasses[variant]} ${contentClassName}`}>{content}</div>
    </div>
  )
}

export default HorizontalCard
