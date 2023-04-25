'use client'

import { useEffect } from 'react'

import ErrorSvg from '@/components/svgs/error'
import Button from '@/components/ui/button'

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center gap-12 py-24">
      <ErrorSvg className="max-w-96 max-h-96" />
      <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
        Oops! Something went wrong.
      </h2>
      <Button size="lg" onClick={reset}>
        Try again
      </Button>
    </div>
  )
}
