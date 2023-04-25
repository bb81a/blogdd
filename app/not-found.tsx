import Link from 'next/link'

import Crashed from '@/components/svgs/crashed'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-12 py-24">
      <Crashed className="max-w-96 max-h-96" />
      <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">
        Oops! Could not find this content on the site.
      </h2>
      <Link href="/" className={buttonVariants({ size: 'lg' })}>
        Back to Homepage
      </Link>
    </div>
  )
}
