import type { Meta, StoryObj } from '@storybook/react'
import VerticalCard from './VerticalCard'

const meta: Meta<typeof VerticalCard> = {
  title: 'Components/VerticalCard',
  component: VerticalCard,
}

export default meta
type Story = StoryObj<typeof VerticalCard>

export const Sample: Story = {
  render: () => (
    <div className="grid grid-cols-3">
      <VerticalCard
        image="/testImg.jpeg"
        BottomContent={
          <div>
            <h3>해운대 타이가텐푸라</h3>
            <p>일식 • 부산 해운대</p>
          </div>
        }
        imageWidth={200}
        imageHeight={200}
      />
      <VerticalCard
        variant="outlined"
        image="/testImg.jpeg"
        headerContent={
          <div>
            <p>아이운</p>
          </div>
        }
        BottomContent={
          <div>
            <h3>해운대 타이가텐푸라</h3>
            <p>일식 • 부산 해운대</p>
          </div>
        }
        imageWidth={200}
        imageHeight={200}
      />
    </div>
  ),
}
