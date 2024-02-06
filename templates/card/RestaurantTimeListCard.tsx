import React, { FC } from 'react'
import RestaurantCard from './RestaurantCard'
import Button from '@/components/Button/Button'

interface RestaurantTimeListCardProps {
  restaurantCardInfo: any
  imageWidth: number
  imageHeight: number
}

const RestaurantTimeListCard: FC<RestaurantTimeListCardProps> = ({ restaurantCardInfo, imageHeight, imageWidth }) => {
  return (
    <div>
      <RestaurantCard restaurantCardInfo={restaurantCardInfo} imageHeight={imageHeight} imageWidth={imageWidth} />
      <div className="mt-4 flex space-x-1.5">
        {restaurantCardInfo.timeList.map((time: string, index: number) =>
          time ? (
            <Button key={index} variant="filled">
              {time}
            </Button>
          ) : (
            <div
              key={index}
              className="flex-1 px-1 py-2.5 text-[13px] leading-[13px] bg-[#f4f4f4] border border-[#f4f4f4] rounded-md"
            />
          ),
        )}
      </div>
    </div>
  )
}

export default RestaurantTimeListCard
