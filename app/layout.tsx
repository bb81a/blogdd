import { Metadata } from 'next'
import { Inter as Sans } from 'next/font/google'

import '@/styles/globals.css'
import '@code-hike/mdx/dist/index.css'
import siteConfig from '@/config/site'
import { absoluteUrl } from '@/lib/helpers'
import { ThemeProvider } from '@/lib/theme-context'
import Header from '@/components/header'

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Programming', 'Front-end Development', 'React.js', 'Next.js'],
  authors: [
    {
      name: 'dangminhngo',
      url: siteConfig.links.portfolio,
    },
  ],
  creator: 'dangminhngo',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@dangminhngo',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="min-h-screen bg-white font-sans text-base text-slate-800 antialiased dark:bg-slate-900 dark:text-slate-200">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
