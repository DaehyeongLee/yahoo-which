import { FC, ReactElement } from 'react'
import Image from '../Image/Image'

export type VerticalCardVariant = 'outlined' | 'default'
interface VerticalCardProps {
  image: string
  headerContent?: ReactElement
  bottomContent: ReactElement
  variant?: VerticalCardVariant
  imageClassName?: string
  headerClassName?: string
  BottomClassName?: string
  imageWidth: number
  imageHeight: number
  imageLayerContent?: ReactElement
}

const VerticalCard: FC<VerticalCardProps> = ({
  image,
  headerContent,
  bottomContent,
  variant = 'default',
  imageClassName,
  headerClassName,
  BottomClassName,
  imageWidth,
  imageHeight,
  imageLayerContent,
}) => {
  return (
    <div
      style={{ width: imageWidth }}
      className={variant === 'outlined' ? 'rounded-xl bg-white shadow-[4px_4px_12px_rgba(0,0,0,0.1)]' : undefined}
    >
      {headerContent && <div className={`p-2.5 ${headerClassName}`}>{headerContent}</div>}
      <div
        style={{ width: imageWidth, height: imageHeight }}
        className={`relative ${variant === 'default' ? 'mb-2' : ''}`}
      >
        {/* @ts-ignore */}
        <Image
          url={image}
          className={`bg-cover ${variant === 'default' ? 'rounded-xl' : undefined} ${imageClassName}`}
          fill
        />
        {imageLayerContent && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-[15px]">{imageLayerContent}</div>
        )}
      </div>
      <div className={`${variant === 'outlined' ? 'p-[15px]' : undefined} ${BottomClassName}`}>{bottomContent}</div>
    </div>
  )
}

export default VerticalCard
