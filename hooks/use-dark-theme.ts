import { useEffect } from 'react'

import { useLocalStorage } from './use-local-storage'

export function useDarkTheme(defaultValue?: boolean): {
  isDarkTheme: boolean
  toggle: () => void
  set: (value?: boolean) => void
} {
  const [isDarkTheme, setDarkTheme] = useLocalStorage<boolean>(
    'darkTheme',
    defaultValue ?? false
  )

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
      return
    }

    document.documentElement.classList.remove('dark')
  }, [isDarkTheme])

  return {
    isDarkTheme,
    toggle: () => setDarkTheme((prev) => !prev),
    set: (value = false) => setDarkTheme(value),
  }
}
