import { ClassValue, clsx } from 'clsx'
import { format, parseISO } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number, fmt: string): string {
  return format(parseISO(input.toString()), fmt)
}
