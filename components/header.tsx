'use client'

import { useTheme } from '@/hooks'

import MainNav from './main-nav'
import Feed from './svgs/feed'
import ThemeSwitch from './theme-switch'
import Tooltip from './ui/tooltip'

export default function Header() {
  const { isDarkTheme, toggle } = useTheme()

  return (
    <header className="container flex items-center justify-between border-b border-slate-200 py-6 dark:border-slate-700">
      <MainNav />
      <div className="flex gap-4">
        <Tooltip tooltip="Change theme">
          <ThemeSwitch isDarkTheme={isDarkTheme} onClick={toggle} />
        </Tooltip>
        <Tooltip tooltip="RSS Feed">
          <button className="text-slate-600 dark:text-slate-300">
            <Feed />
          </button>
        </Tooltip>
      </div>
    </header>
  )
}
