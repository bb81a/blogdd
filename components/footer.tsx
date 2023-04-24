import Link from 'next/link'

import siteConfig from '@/config/site'
import Logo from './logo'
import Newsletter from './newsletter'
import Crown from './svgs/crown'
import Github from './svgs/github'
import LinkedIn from './svgs/linkedin'
import Twitter from './svgs/twitter'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto flex max-w-4xl justify-between py-24">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <div className="font-semibold">Sitemap</div>
            <ul className="flex flex-col gap-4">
              {sitemap.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-lg">
          <Newsletter />
        </div>
      </div>
      <hr className="border-t border-slate-200 dark:border-slate-700" />
      <div className="mx-auto flex max-w-4xl items-center justify-between py-6 text-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Logo className="h-8 w-8" />
          </Link>
          <div className="text-slate-600 dark:text-slate-300">
            Built by{' '}
            <a
              href={siteConfig.links.portfolio}
              className="font-medium underline"
            >
              dangminhngo
            </a>
            . Hosted on{' '}
            <a href="https://vercel.com" className="font-medium underline">
              Vercel
            </a>
            . Illustrations by{' '}
            <a href="https://popsy.co" className="font-medium underline">
              Popsy
            </a>
          </div>
        </div>
        <div>&copy; Since 2023</div>
      </div>
    </footer>
  )
}

const sitemap = [
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
  {
    title: 'Feed',
    href: '/feed',
  },
]

const socialLinks = [
  {
    icon: Twitter,
    href: siteConfig.links.twitter,
  },
  {
    icon: Github,
    href: siteConfig.links.github,
  },
  {
    icon: LinkedIn,
    href: siteConfig.links.linkedin,
  },
  {
    icon: Crown,
    href: siteConfig.links.portfolio,
  },
]
