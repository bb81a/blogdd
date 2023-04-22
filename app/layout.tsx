import { Inter } from 'next/font/google'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Dang Minh Ngo',
  description: "Dang Minh Ngo's Programming Blog",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  )
}
