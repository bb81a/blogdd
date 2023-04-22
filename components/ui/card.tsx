import React from 'react'

import { cn } from '@/lib/helpers'
import { Skeleton } from './skeleton'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('overflow-hidden rounded-lg border', className)}
      {...props}
    />
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Header = function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn('grid gap-1 p-6', className)} {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Content = function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn('px-6 pb-4', className)} {...props} />
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Footer = function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('border-t bg-slate-50 px-6 py-4', className)}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Card.Title = function CardTitle({ className, ...props }: CardTitleProps) {
  return <h4 className={cn('text-lg font-medium', className)} {...props} />
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Card.Description = function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return <p className={cn('text-sm text-gray-600', className)} {...props} />
}

Card.Skeleton = function CardSkeleton() {
  return (
    <Card>
      <Card.Header>
        <Skeleton />
        <Skeleton />
      </Card.Header>
      <Card.Content>
        <Skeleton />
        <Skeleton />
      </Card.Content>
      <Card.Footer>
        <Skeleton />
      </Card.Footer>
    </Card>
  )
}
