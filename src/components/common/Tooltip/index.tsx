import {
  Tooltip as BaseTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from 'react'

interface TooltipProps {
  children: React.ReactNode,
  content: string
}
function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipProvider >
      <BaseTooltip>
        <TooltipTrigger>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </BaseTooltip>
    </TooltipProvider>
  )
}

export default Tooltip