import React, { FC } from 'react'
import RestaurantCard from './RestaurantCard'
import Button from '@/components/Button/Button'

interface RestaurantTimeListCardProps {
  name: string
  score?: string
  category: string
  address: string
  image?: string
  imageWidth: number
  imageHeight: number
  timeList: Array<string>
}

const RestaurantTimeListCard: FC<RestaurantTimeListCardProps> = ({
  name,
  score,
  category,
  address,
  image,
  imageHeight,
  imageWidth,
  timeList,
}) => {
  return (
    <div>
      <RestaurantCard
        name={name}
        score={score}
        address={address}
        category={category}
        image={image}
        imageHeight={imageHeight}
        imageWidth={imageWidth}
      />
      <div className="mt-4 flex space-x-1.5">
        {timeList.map((time, index) =>
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
