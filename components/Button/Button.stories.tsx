import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Sample: Story = {
  args: {
    children: '버튼 예제',
  },
  render: () => (
    <div>
      {
        <>
          <Button variant="outlined">
            <strong>더 시에나 라운지</strong>의 4개 레스토랑 전체보기 &#62;
          </Button>
          <Button variant="filled">오후 8:00</Button>
          <Button variant="nolined">전체보기 &#62;</Button>
        </>
      }
    </div>
  ),
}
