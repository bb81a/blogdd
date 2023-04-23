import MainNav from './main-nav'

export default function Header() {
  return (
    <header className="container flex items-center justify-between border-b border-slate-200 py-4">
      <div>
        <MainNav />
      </div>
    </header>
  )
}
