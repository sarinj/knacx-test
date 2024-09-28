import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeToString(time: Date) {
  return time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}
