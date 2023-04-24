'use client'

import Link from 'next/link'
import { useMounted, useToggle } from '@/hooks'
import { createPortal } from 'react-dom'

import Logo from './logo'
import MainNav from './main-nav'

export default function MobileNav() {
  const mounted = useMounted()
  const [isMobileNavVisible, toggleMobileNavVisible, setMobileNavVisible] =
    useToggle()

  return mounted
    ? createPortal(
        <>
          <button
            className="fixed right-6 top-4 z-50 grid h-8 w-8 place-items-center md:hidden"
            onClick={toggleMobileNavVisible}
          >
            <div className="relative h-4 w-7">
              <span
                className={`absolute ${
                  isMobileNavVisible
                    ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45'
                    : 'left-0 top-0'
                } h-1 w-full rounded-full bg-slate-700 duration-200 dark:bg-slate-200`}
              >
                &nbsp;
              </span>
              <span
                className={`absolute ${
                  isMobileNavVisible
                    ? 'bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 -rotate-45'
                    : 'bottom-0 left-0'
                } h-1 w-full rounded-full bg-slate-700 duration-200 dark:bg-slate-200`}
              >
                &nbsp;
              </span>
            </div>
          </button>
          <div
            className={`fixed left-0 top-0 z-40 ${
              isMobileNavVisible
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-125 opacity-0'
            } flex h-full w-full flex-col gap-8 bg-white duration-200 delay-100 dark:bg-slate-800 md:hidden`}
          >
            <div className="container border-b border-slate-100 py-4 dark:border-slate-800">
              <Link
                href="/"
                className="flex items-center gap-2 text-slate-800 dark:text-slate-100"
              >
                <Logo className="h-8 w-8" />
              </Link>
            </div>
            <MainNav setMobileNavVisible={setMobileNavVisible} />
          </div>
        </>,
        document.getElementById('mobile-nav') as HTMLDivElement
      )
    : null
}
