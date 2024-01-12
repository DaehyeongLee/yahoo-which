import { FC, ReactElement } from 'react'

export type VerticalCardVariant = 'outlined' | 'default'
interface VerticalCardProps {
  img: string
  headerContent?: ReactElement
  BottomContent: ReactElement
  variant?: VerticalCardVariant
  imgClassName?: string
  headerClassName?: string
  BottomClassName?: string
}

const VerticalCard: FC<VerticalCardProps> = ({
  img,
  headerContent,
  BottomContent,
  variant = 'default',
  imgClassName,
  headerClassName,
  BottomClassName,
}) => {
  const cardClassName =
    variant === 'outlined' ? 'w-[200px] rounded-xl bg-white shadow-[4px_4px_12px_rgba(0,0,0,0.1)]' : 'w-[200px]'

  return (
    <div className={cardClassName}>
      {headerContent && <div className={`p-2.5 ${headerClassName}`}>{headerContent}</div>}
      <img src={img} className={`${variant === 'default' ? 'rounded mb-2' : undefined} ${imgClassName}`} />
      <div className={`${variant === 'outlined' ? 'p-[15px]' : undefined} ${BottomClassName}`}>{BottomContent}</div>
    </div>
  )
}

export default VerticalCard
