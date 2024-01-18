import { FC, ReactElement } from 'react'
import Image from '../Image/Image'

export type HorizontalCardVariant = 'image_lg' | 'content_lg' | 'default'
interface HorizontalCardProps {
  image: string
  variant?: HorizontalCardVariant
  imageClassName?: string
  content: ReactElement
  contentClassName?: string
  imageWidth?: number
  imageHeight?: number
}

const HorizontalCard: FC<HorizontalCardProps> = ({
  image,
  variant = 'default',
  imageClassName,
  content,
  contentClassName,
  imageWidth,
  imageHeight,
}) => {
  const contentClasses = {
    image_lg: 'max-h-[120px] overflow-y-hidden',
    content_lg: 'max-h-auto',
    default: 'max-h-16 overflow-y-hidden',
  }
  const imageClasses = {
    image_lg: 'w-[120px] h-[120px] mr-2',
    content_lg: 'w-[78px] h-[104px] mr-[15px]',
    default: 'w-16 h-16 mr-2.5',
  }
  const imageSize = () => {
    if (variant === 'image_lg') {
      return {
        width: 120,
        height: 120,
      }
    } else if (variant === 'content_lg') {
      return {
        width: 78,
        height: 104,
      }
    } else if (variant === 'default') {
      return {
        width: 64,
        height: 64,
      }
    } else {
      return {
        width: imageWidth ?? 64,
        height: imageHeight ?? 64,
      }
    }
  }

  return (
    <div className="flex flex-row">
      <Image
        url={image}
        className={`rounded ${imageClasses[variant]} ${imageClassName}`}
        width={imageSize().width}
        height={imageSize().height}
      />
      <div className={`${contentClasses[variant]} ${contentClassName}`}>{content}</div>
    </div>
  )
}

export default HorizontalCard
