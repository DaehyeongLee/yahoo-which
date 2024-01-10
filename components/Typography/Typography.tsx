import { FC, ReactNode, createElement } from "react"

type TypographyProps = {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string;
}

const Typography: FC<TypographyProps> = ({ children, variant = 'p', className = '' }) => {
  const baseClasses = 'text-gray-800'

  const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    h4: 'text-xl font-bold',
    h5: 'text-lg font-bold',
    h6: 'text-base font-bold',
    p: 'text-base',
    span: 'text-base',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  return createElement(variant, { className: classes }, children)
}

export default Typography