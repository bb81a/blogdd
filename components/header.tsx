import Link from 'next/link'

import siteConfig from '@/config/site'
import Logo from './logo'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'

export default function Header() {
  return (
    <>
      <header className="border-b border-slate-200 dark:border-slate-700">
        <div className="container flex items-center gap-8 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="hidden text-2xl font-bold md:block">
              {siteConfig.name}
            </span>
          </Link>
          <div className="hidden flex-1 md:block">
            <MainNav />
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  )
}
