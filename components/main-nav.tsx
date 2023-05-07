'use client'

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks'

import { cn } from '@/lib/helpers'
import Feed from './svgs/feed'
import ThemeSwitch from './theme-switch'
import Tooltip from './ui/tooltip'

const items = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Snippets',
    href: '/snippets',
  },
  {
    title: 'Bookmarks',
    href: '/bookmarks',
  },
  {
    title: 'About',
    href: '/about',
  },
]

export default function MainNav({
  setMobileNavVisible,
}: {
  setMobileNavVisible?: Dispatch<SetStateAction<boolean>>
}) {
  const pathname = usePathname()

  const { isDarkTheme, toggle } = useTheme()

  return (
    <div className="flex flex-1 flex-col items-start justify-between pb-16 md:flex-row md:items-center md:pb-0">
      <nav>
        <ul className="flex flex-col gap-6 px-6 md:flex-row md:px-0">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center py-1 text-2xl font-semibold text-slate-500 dark:text-slate-400 md:py-0 md:text-sm',
                  (item.href === '/'
                    ? pathname === item.href
                    : pathname.startsWith(item.href)) &&
                    'text-slate-800 dark:text-slate-100'
                )}
                onClick={() => {
                  if (!setMobileNavVisible) return
                  setMobileNavVisible(false)
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4 px-6 md:px-0">
        <Tooltip tooltip="Change theme">
          <ThemeSwitch isDarkTheme={isDarkTheme} onClick={toggle} />
        </Tooltip>
        <Tooltip tooltip="RSS Feed">
          <Link
            href="/rss.xml"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 dark:text-slate-300"
          >
            <Feed />
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}
