'use client'

import MainNav from './main-nav'
import Feed from './svgs/feed'
import ThemeSwitch from './theme-switch'
import Tooltip from './ui/tooltip'

export default function Header() {
  return (
    <header className="container flex items-center justify-between border-b border-slate-200 py-6">
      <MainNav />
      <div className="flex gap-4">
        <Tooltip tooltip="Change theme">
          <ThemeSwitch />
        </Tooltip>
        <Tooltip tooltip="RSS Feed">
          <button className="text-slate-600">
            <Feed />
          </button>
        </Tooltip>
      </div>
    </header>
  )
}
