import { Dispatch, SetStateAction, useState } from 'react'

export function useToggle(
  initialValue = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState<boolean>(initialValue)

  const toggleValue = () => setValue(!value)

  return [value, toggleValue, setValue]
}
