import Image from 'next/image'
import Link from 'next/link'

import siteConfig from '@/config/site'
import { cn } from '@/lib/helpers'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 py-24">
        <Image
          src="/images/hero.png"
          alt="Hero image"
          width={256}
          height={256}
          priority
        />
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-5xl font-bold leading-[1.2] tracking-tighter">
            What&apos;s going on here?
          </h1>
          <p className="text-xl leading-8">
            I&apos;ve read cool stuff on the Internet and I put my hand on the
            keyboard.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/blog" className={cn(buttonVariants({ size: 'lg' }))}>
            Read Blog
          </Link>
          <a
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            Github
          </a>
        </div>
      </section>
      <hr className="border-slate-200" />
    </>
  )
}
