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
  place?: PlacesType
  children: ReactNode
}

const Tooltip: FC<TooltipProps> = ({ children, id, content, place = 'bottom' }) => {
  return (
    <>
      <span data-tooltip-id={id}>{children}</span>
      <ReactTooltip id={id} place={place} openOnClick className="text-center !p-3 !opacity-100 z-50">
        <span className="text-[14px] font-medium">{content}</span>
      </ReactTooltip>
    </>
  )
}

export default Tooltip
