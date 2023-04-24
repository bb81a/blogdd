import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/helpers'

const calloutVariants = cva('my-6 flex rounded-md border border-l-4 p-4', {
  variants: {
    type: {
      default:
        'border-slate-300 bg-slate-50 dark:border-slate-600 dark:bg-slate-800',
      warning: 'border-sky-400 bg-sky-50',
      danger: 'border-red-400 bg-red-50',
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
