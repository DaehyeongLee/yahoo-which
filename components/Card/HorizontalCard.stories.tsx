import type { Meta, StoryObj } from '@storybook/react'
import HorizontalCard from './HorizontalCard'

const meta: Meta<typeof HorizontalCard> = {
  title: 'Components/HorizontalCard',
  component: HorizontalCard,
}

export default meta
type Story = StoryObj<typeof HorizontalCard>

export const Sample: Story = {
  render: () => (
    <div className="grid grid-cols-3">
      <HorizontalCard
        variant="img_lg"
        img="testImg.jpeg"
        content={
          <div>
            <h4>런던 베이글 뮤지엄</h4>
            <p>일평균 웨이팅 3000명</p>
          </div>
        }
      />
      <HorizontalCard
        img="testImg.jpeg"
        content={
          <div>
            <h6>테라스룸 서울</h6>
            <p>고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진</p>
          </div>
        }
      />
      <HorizontalCard
        variant="content_lg"
        img="testImg.jpeg"
        content={
          <div>
            <h6>테라스룸 서울</h6>
            <p>고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진</p>
            <p>고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진1</p>
            <p>고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진2</p>
            <p>고급스럽고 이국적인 분위기에서 즐기는 유러피안 퀴진3</p>
          </div>
        }
      />
    </div>
  ),
}
