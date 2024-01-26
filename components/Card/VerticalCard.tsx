import { FC, ReactElement } from 'react'
import Image from '../Image/Image'

export type VerticalCardVariant = 'outlined' | 'default'
interface VerticalCardProps {
  image: string
  headerContent?: ReactElement
  BottomContent: ReactElement
  variant?: VerticalCardVariant
  imageClassName?: string
  headerClassName?: string
  BottomClassName?: string
  imageWidth: number
  imageHeight: number
}

const VerticalCard: FC<VerticalCardProps> = ({
  image,
  headerContent,
  BottomContent,
  variant = 'default',
  imageClassName,
  headerClassName,
  BottomClassName,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div
      style={{ width: imageWidth }}
      className={variant === 'outlined' ? 'rounded-xl bg-white shadow-[4px_4px_12px_rgba(0,0,0,0.1)]' : undefined}
    >
      {headerContent && <div className={`p-2.5 ${headerClassName}`}>{headerContent}</div>}
      <div style={{ width: imageWidth, height: imageHeight }} className="relative mb-2">
        {/* @ts-ignore */}
        <Image
          url={image}
          className={`bg-cover ${variant === 'default' ? 'rounded' : undefined} ${imageClassName}`}
          fill
        />
      </div>
      <div className={`${variant === 'outlined' ? 'p-[15px]' : undefined} ${BottomClassName}`}>{BottomContent}</div>
    </div>
  )
}

export default VerticalCard
