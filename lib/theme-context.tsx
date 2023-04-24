'use client'

import { createContext } from 'react'
import { useDarkTheme } from '@/hooks'

const ThemeContext = createContext<ReturnType<typeof useDarkTheme>>({
  isDarkTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  set: () => {},
})

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const result = useDarkTheme(false)

  return (
    <ThemeContext.Provider value={result}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContext
