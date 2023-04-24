import { forwardRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/helpers'

interface FormProps extends React.HTMLAttributes<HTMLFormElement> {}

function Form({ className, ...props }: FormProps) {
  return (
    <form
      className={cn('flex flex-col items-stretch gap-4', className)}
      {...props}
    />
  )
}

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

Form.Field = function FormField({ className, ...props }: FormFieldProps) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />
}

interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {}

Form.Label = function FormLabel({ className, ...props }: FormLabelProps) {
  return <label className={cn('', className)} {...props} />
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

Form.Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'dark:focus:ring-400 rounded border border-slate-200 bg-slate-50 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:border-slate-700 dark:bg-slate-800',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Form.Input.displayName = 'FormInput'

interface FormSubmitProps extends React.HTMLAttributes<HTMLDivElement> {}

Form.Submit = function FormSubmit({ className, ...props }: FormSubmitProps) {
  return (
    <div className={cn('flex flex-col items-stretch', className)} {...props} />
  )
}

const messageVariants = cva('', {
  variants: {
    type: {
      default: '',
      error: '',
      warning: '',
    },
  },
})

interface FormMessageProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof messageVariants> {}

Form.Message = function FormMessage({
  className,
  type,
  ...props
}: FormMessageProps) {
  return (
    <span className={cn(messageVariants({ type }), className)} {...props} />
  )
}

export default Form
