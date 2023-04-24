import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalStorage<T>(
  key: string,
  fallbackValue: T
): readonly [T, SetValue<T>] {
  const [value, setValue] = useState(fallbackValue)

  useEffect(() => {
    const stored = localStorage.getItem(key)
    setValue(stored ? JSON.parse(stored) : fallbackValue)
  }, [fallbackValue, key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
