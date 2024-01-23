import React, { FC, ReactNode } from 'react'
import { Tooltip as FlowbiteTooltip, TooltipProps as FlowbiteTooltipProps } from 'flowbite-react'

interface TooltipProps extends FlowbiteTooltipProps {
  children: ReactNode
}

const Tooltip: FC<TooltipProps> = ({ children, ...props }) => {
  return (
    <FlowbiteTooltip trigger="click" placement="bottom" className="text-[14px] font-medium p-3 text-center" {...props}>
      {children}
    </FlowbiteTooltip>
  )
}

export default Tooltip
