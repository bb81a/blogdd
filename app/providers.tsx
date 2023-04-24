'use client'

import { ThemeProvider } from '@/lib/theme-context'

export default function Providers({ children }: React.PropsWithChildren) {
  return <ThemeProvider>{children}</ThemeProvider>
}
