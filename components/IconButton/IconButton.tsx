import { FC, MouseEventHandler, ReactNode } from 'react'

interface IconButtonProps {
  children: ReactNode
  size?: 'medium' | 'large'
  color?: 'primary' | 'secondary' // color primary: black, secondary: #aaa
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButton: FC<IconButtonProps> = ({ children, size = 'large', color = 'primary', className = '', onClick }) => {
  const baseClasses = `${color === 'secondary' ? '[&>svg]:text-[#aaa]' : ''} ${
    size === 'medium' ? '[&>svg]:w-6 [&>svg]:h-6' : '[&>svg]:w-8 [&>svg]:h-8'
  }`
  const classes = `${baseClasses} ${className}`

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton
