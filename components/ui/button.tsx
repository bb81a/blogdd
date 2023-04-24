import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/helpers'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-slate-100',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline:
          'bg-transparent border border-slate-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800',
      },
      size: {
        default: 'py-2 px-4',
        sm: 'py-1.5 px-3',
        lg: 'py-3 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
)

Button.displayName = 'Button'

export default Button
