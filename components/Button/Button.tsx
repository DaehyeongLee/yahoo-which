import { FC, ReactNode } from 'react'

export type ButtonVariant = 'outlined' | 'filled' | 'nolined'
interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

const Button: FC<ButtonProps> = ({ children, variant = 'outlined', className = '' }) => {
  const baseClasses = 'text-center rounded-md'

  const variantClasses = {
    outlined: 'bg-white text-black border border-black px-5 py-0 leading-10 w-full text-[14px]',
    filled: 'bg-orange-500 text-white border border-orange-500 px-2.5 py-1 text-[13px]',
    nolined: 'bg-inherit text-black text-xs',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return <button className={classes}>{children}</button>
}

export default Button
