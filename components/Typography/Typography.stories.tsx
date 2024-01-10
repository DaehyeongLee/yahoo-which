import type { Meta, StoryObj } from '@storybook/react'
import Typography, { TypographyVariant } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
}

export default meta
type Story = StoryObj<typeof Typography>

const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const Sample: Story = {
  args: {
    children: '텍스트 예제',
  },
  render: () => (
    <div>
      {variants.map((variant) => {
        return (
          <Typography variant={variant}>
            동해물과 백두산이 마르고 닳도록
          </Typography>
        )
      })}
    </div>
  ),
}
