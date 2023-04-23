import MainNav from './main-nav'
import ThemeSwitch from './theme-switch'

export default function Header() {
  return (
    <header className="container flex items-center justify-between border-b border-slate-200 py-4">
      <MainNav />
      <div className="">
        <ThemeSwitch />
      </div>
    </header>
  )
}
