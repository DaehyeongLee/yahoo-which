import type { Meta, StoryObj } from '@storybook/react'
import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Sample: Story = {
  args: {
    children: '툴팁 예제',
  },
  render: () => (
    <div>
      {
        <Tooltip
          content={
            <>
              전국 웨이팅 맛집의 일 평균 <br /> 웨이팅 인원으로 생성한 랭킹 차트입니다.
            </>
          }
        >
          <button>Tooltip</button>
        </Tooltip>
      }
    </div>
  ),
}
