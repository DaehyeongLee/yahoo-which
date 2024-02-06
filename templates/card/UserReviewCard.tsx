import React, { FC } from 'react'
import VerticalCard from '@/components/Card/VerticalCard'
import Typography from '@/components/Typography/Typography'
import Image from '@/components/Image/Image'

interface UserReviewCard {
  userReviewInfo: any
  imageWidth: number
  imageHeight: number
}

// TODO: svg icon을 next.js 세팅 후 컴포넌트처럼 사용할 수 있게 변경 필요
const scoreIcon = (
  <svg
    style={{ width: '16px', height: '16px ' }}
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.1452 28.5365C18.0549 28.4866 17.9452 28.4866 17.8549 28.5365L8.72488 33.5835C8.50571 33.7046 8.24334 33.5198 8.28365 33.2726L10.0345 22.5392C10.0498 22.4452 10.0196 22.3496 9.95312 22.2814L2.5254 14.6686C2.35488 14.4938 2.45344 14.1994 2.69482 14.1625L12.9339 12.5981C13.0328 12.583 13.1176 12.5196 13.1601 12.429L17.7285 2.69623C17.8364 2.46619 18.1636 2.46619 18.2716 2.69623L22.8399 12.429C22.8824 12.5196 22.9673 12.583 23.0662 12.5981L33.3052 14.1625C33.5466 14.1994 33.6452 14.4938 33.4747 14.6686L26.0469 22.2814C25.9804 22.3496 25.9503 22.4452 25.9656 22.5392L27.7164 33.2726C27.7567 33.5198 27.4944 33.7046 27.2752 33.5835L18.1452 28.5365Z"
      fill="#FFC01D"
    />
  </svg>
)

const bookmarkIcon = (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
    <path
      d="M15.7817 18.8369L15.5222 18.66L15.2501 18.8169L9.5 22.1343V10C9.5 9.17157 10.1716 8.5 11 8.5H19C19.8284 8.5 20.5 9.17157 20.5 10V22.0539L15.7817 18.8369Z"
      stroke="white"
    />
  </svg>
)

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
              {scoreIcon}
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
      {bookmarkIcon}
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
