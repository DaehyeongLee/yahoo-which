import type { Meta, StoryObj } from '@storybook/react'
import IconButton from './IconButton'
import BookmarkOutlineIcon from '../../assets/icons/bookmark-outline.svg'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Sample: Story = {
  render: () => (
    <div>
      {
        <>
          <IconButton>
            <BookmarkOutlineIcon />
          </IconButton>
          <IconButton color="secondary">
            <BookmarkOutlineIcon />
          </IconButton>
          <IconButton size="medium">
            <BookmarkOutlineIcon />
          </IconButton>
        </>
      }
    </div>
  ),
}
