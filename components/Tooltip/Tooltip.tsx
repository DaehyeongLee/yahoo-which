import React, { FC, ReactNode, ReactElement } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'

type PlacesType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

interface TooltipProps {
  id: string
  content: ReactElement
  position: PlacesType
  children: ReactNode
}

const Tooltip: FC<TooltipProps> = ({ children, id, content, position }) => {
  return (
    <>
      <span data-tooltip-id={id}>{children}</span>
      <ReactTooltip id={id} data-tooltip-place={position} className="text-[14px] font-medium p-3 text-center">
        {content}
      </ReactTooltip>
    </>
  )
}

export default Tooltip
