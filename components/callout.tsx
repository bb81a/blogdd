import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/helpers'

const calloutVariants = cva('my-6 flex rounded-md border border-l-4 p-4', {
  variants: {
    type: {
      default: 'bg-slate-900 bg-slate-50',
      warning: 'bg-slate-900 bg-slate-50',
      danger: 'bg-slate-900 bg-slate-50',
    },
  },
})

interface CalloutProps
  extends React.PropsWithChildren,
    VariantProps<typeof calloutVariants> {}

export default function Callout({
  children,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div className={cn(calloutVariants({ type }))} {...props}>
      {children}
    </div>
  )
}
