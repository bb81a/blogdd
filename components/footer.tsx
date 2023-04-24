import Link from 'next/link'

import siteConfig from '@/config/site'
import Newsletter from './newsletter'
import Crown from './svgs/crown'
import Github from './svgs/github'
import LinkedIn from './svgs/linkedin'
import Twitter from './svgs/twitter'

export default function Footer() {
  return (
    <footer className="container border-t border-slate-200 dark:border-slate-700">
      <div className="mx-auto flex max-w-4xl flex-col-reverse justify-between gap-12 py-24 md:flex-row md:gap-6">
        <div className="flex flex-row justify-between md:flex-col">
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
          <div className="flex flex-col gap-4">
            <div className="font-semibold">Find me on:</div>
            <div className="flex flex-col gap-4 md:flex-row">
              {socialLinks.map(({ icon: Icon, href, title }) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                    <Icon />
                  </div>
                  <span className="block md:hidden">{title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-lg">
          <Newsletter />
        </div>
      </div>
      <hr className="border-t border-slate-200 dark:border-slate-700" />
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
        <div className="text-slate-500 dark:text-slate-400">
          Built by{' '}
          <a
            href={siteConfig.links.portfolio}
            className="font-medium underline"
          >
            dangminhngo
          </a>
          . Illustrations by{' '}
          <a href="https://popsy.co" className="font-medium underline">
            Popsy
          </a>
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
    title: 'Twitter',
    icon: Twitter,
    href: siteConfig.links.twitter,
  },
  {
    title: 'Github',
    icon: Github,
    href: siteConfig.links.github,
  },
  {
    title: 'LinkedIn',
    icon: LinkedIn,
    href: siteConfig.links.linkedin,
  },
  {
    title: 'Portfolio',
    icon: Crown,
    href: siteConfig.links.portfolio,
  },
]
