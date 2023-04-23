import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/helpers'

interface TooltipProps
  extends React.PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  tooltip: React.ReactNode
}

const Tooltip = ({ children, tooltip, className, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={cn(
              'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-[4px] bg-slate-800 p-2 text-xs leading-none text-slate-200 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]',
              className
            )}
            sideOffset={5}
            {...props}
          >
            {tooltip}
            <TooltipPrimitive.Arrow className="fill-slate-800" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export default Tooltip
