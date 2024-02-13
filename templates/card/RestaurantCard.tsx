import React, { FC } from 'react'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import StarIcon from '@/assets/icons/star.svg'

interface RestaurantCardProps {
  restaurantCardInfo: any
  imageWidth: number
  imageHeight: number
}

const RestaurantCard: FC<RestaurantCardProps> = ({ restaurantCardInfo, imageWidth, imageHeight }) => {
  return (
    <VerticalCard
      image={restaurantCardInfo.image ?? ''}
      bottomContent={
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="p" className="mb-1 font-medium">
              {restaurantCardInfo.name}
            </Typography>
            <div className="flex leading-[14px]">
              {restaurantCardInfo.score && (
                <span className="flex items-center text-[14px] font-medium mr-[6px]">
                  <StarIcon width={14} height={14} className="mr-0.5" />
                  {restaurantCardInfo.score}
                </span>
              )}
              <div className="overflow-hidden whitespace-nowrap text-ellipsis block max-w-32 font-medium text-[12px] leading-4 text-[#666]">{`${restaurantCardInfo.category} • ${restaurantCardInfo.address}`}</div>
            </div>
          </div>
          <BookmarkIcon />
        </div>
      }
      imageWidth={imageWidth}
      imageHeight={imageHeight}
    />
  )
}

export default RestaurantCard
