import { Inter as Sans } from 'next/font/google'

import '@/styles/globals.css'
import Header from '@/components/header'

const sans = Sans({
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
    <html lang="en" className={`${sans.variable}`}>
      <body className="min-h-screen bg-white font-sans text-base text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container">{children}</main>
        </div>
      </body>
    </html>
  )
}
