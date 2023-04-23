'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import siteConfig from '@/config/site'
import { cn } from '@/lib/helpers'
import Logo from './logo'

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
    title: 'About',
    href: '/about',
  },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-12">
      <Link href="/" className="flex items-center gap-2 text-slate-700">
        <Logo className="h-8 w-8" />
        <span className="text-2xl font-bold">{siteConfig.name}</span>
      </Link>
      <nav>
        <ul className="flex gap-6">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  'flex items-center text-sm font-semibold text-slate-500',
                  (item.href === '/'
                    ? pathname === item.href
                    : pathname.startsWith(item.href)) && 'text-slate-800'
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
