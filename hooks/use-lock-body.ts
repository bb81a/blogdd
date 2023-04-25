import { useLayoutEffect, useState } from 'react'

export function useLockBody(locked = false) {
  const [originalStyle, setOriginalStyle] = useState<string | null>(null)

  useLayoutEffect(() => {
    setOriginalStyle(window.getComputedStyle(document.body).overflow)
  }, [])

  useLayoutEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = originalStyle ?? 'auto'
  }, [locked, originalStyle])
}
