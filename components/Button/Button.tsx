import { FC, MouseEventHandler, ReactNode } from 'react'

export type ButtonVariant = 'outlined' | 'filled' | 'nolined'
interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<ButtonProps> = ({ children, variant = 'outlined', className = '', onClick }) => {
  const baseClasses = 'text-center rounded-md'

  const variantClasses = {
    outlined: 'bg-white text-black border border-black px-5 py-0 leading-10 w-full text-[14px]',
    filled: 'flex-1 bg-[#ff3d00] text-white border border-[#ff3d00] px-1 py-2.5 text-[13px] leading-[13px]',
    nolined: 'bg-inherit text-black text-xs',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
