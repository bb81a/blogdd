import Link from 'next/link'

import siteConfig from '@/config/site'
import { getAllPosts } from '@/lib/content'
import { cn } from '@/lib/helpers'
import PostCard from '@/components/post-card'
import Hero from '@/components/svgs/hero'
import { buttonVariants } from '@/components/ui/button'

export default async function Home() {
  const posts = getAllPosts().slice(0, 4)

  return (
    <>
      <section className="mx-auto flex max-w-4xl flex-col gap-8 py-24">
        <Hero className="h-64 w-64" />
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-3xl font-bold leading-[1.2] tracking-tighter sm:text-4xl md:text-5xl">
            What&apos;s going on here?
          </h1>
          <p className="text-lg leading-8 md:text-xl">
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
      <hr className="border-slate-200 dark:border-slate-700" />
      <section className="mx-auto max-w-4xl py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Latest Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 md:text-xl">
            Try to get something new
          </p>
        </div>
        <hr className="my-8 border-slate-200 dark:border-slate-700" />
        <div className="grid grid-cols-1 gap-6 self-stretch justify-self-stretch sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  )
}
