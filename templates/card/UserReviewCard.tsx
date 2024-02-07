import React, { FC } from 'react'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'
import Image from '@/components/Image/Image'
import BookmarkIcon from '@/assets/icons/bookmark.svg'
import StarIcon from '@/assets/icons/star.svg'

interface UserReviewCard {
  userReviewInfo: any
  imageWidth: number
  imageHeight: number
}

/* TODO: 카드 클릭시 링크 이동,
    북마크 아이콘 클릭시 이동
*/

const UserReviewCard: FC<UserReviewCard> = ({ imageHeight, imageWidth, userReviewInfo }) => {
  const headerContent = (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-1.5">
        {userReviewInfo.profileImage ?? (
          <Image url="/default/profile_default.png" width={30} height={30} alt="profile_default" />
        )}
        <Typography variant="span" className="overflow-hidden whitespace-nowrap text-ellipsis text-[13px] max-w-28">
          {userReviewInfo.nickName}
        </Typography>
      </div>
      <Typography variant="span" className="text-[#c8c8c8] text-[10px] text-right leading-snug">
        최근 방문일 <br />
        {userReviewInfo.currentVisitDate}
      </Typography>
    </div>
  )
  const bottomContent = (
    <div className="flex justify-between items-center">
      <div>
        <Typography variant="p" className="text-[15px] font-medium">
          {userReviewInfo.name}
        </Typography>
        <div className="flex items-center leading-[14px] mb-[5px]">
          {userReviewInfo.score && (
            <span className="flex items-center text-[14px] font-medium mr-[6px]">
              <StarIcon width={14} height={14} className="mr-0.5" />
              {userReviewInfo.score}
            </span>
          )}
          {userReviewInfo.reviewCount && (
            <Typography variant="span" className="text-[13px] text-[#999]">
              ({userReviewInfo.reviewCount})
            </Typography>
          )}
        </div>
        <Typography
          variant="span"
          className="overflow-hidden whitespace-nowrap text-ellipsis block max-w-32 font-medium text-[12px] leading-4 text-[#666666]"
        >{`${userReviewInfo.category} • ${userReviewInfo.address}`}</Typography>
      </div>
      <BookmarkIcon />
    </div>
  )
  const imageLayerContent = (
    <>
      <Typography variant="h3" className="overflow-hidden text-ellipsis break-keep text-[17px] text-white mb-1">
        {userReviewInfo.reviewMainText}
      </Typography>
      {userReviewInfo.reviewSubText && (
        <Typography variant="p" className="overflow-hidden text-ellipsis break-keep text-xs text-white mb-1">
          {userReviewInfo.reviewSubText}
        </Typography>
      )}
    </>
  )

  return (
    <VerticalCard
      variant="outlined"
      image={userReviewInfo.image ?? ''}
      headerContent={headerContent}
      bottomContent={bottomContent}
      imageWidth={imageWidth}
      imageHeight={imageHeight}
      imageLayerContent={imageLayerContent}
    />
  )
}

export default UserReviewCard
