import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Sample: Story = {
  args: {
    placeholder: 'Input 예제',
  },
  render: () => (
    <div>
      {
        <>
          <Input placeholder="입력해주세요." />
        </>
      }
    </div>
  ),
}
