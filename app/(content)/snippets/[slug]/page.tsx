import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import siteConfig from '@/config/site'
import { getAllSnippets, getAuthors, getSnippet } from '@/lib/content'
import { absoluteUrl, formatDate } from '@/lib/helpers'
import AuthorProfile from '@/components/author-profile'
import Comments from '@/components/comments'
import Mdx from '@/components/mdx'
import AspectRatio from '@/components/ui/aspect-ratio'

interface SnippetPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<
  SnippetPageProps['params'][]
> {
  const snippets = getAllSnippets()
  return snippets.map((snippet) => ({ slug: snippet.slugAsParams }))
}

export async function generateMetadata({
  params,
}: SnippetPageProps): Promise<Metadata> {
  const snippet = getSnippet(params.slug)

  if (!snippet) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', snippet.title)
  ogUrl.searchParams.set('type', siteConfig.name)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: snippet.title,
    description: snippet.description,
    openGraph: {
      title: snippet.title,
      description: snippet.description,
      type: 'article',
      url: absoluteUrl(snippet.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: snippet.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: snippet.title,
      description: snippet.description,
      images: [ogUrl.toString()],
    },
  }
}

export default function SnippetPage({ params }: SnippetPageProps) {
  const snippet = getSnippet(params.slug)

  if (!snippet) return notFound()

  const authors = getAuthors(snippet.authors)

  return (
    <div className="mx-auto max-w-2xl py-24">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between text-sm">
          <time
            dateTime={snippet.date}
            className="text-slate-500 dark:text-slate-400"
          >
            <span className="hidden sm:inline">Published on</span>{' '}
            {formatDate(snippet.date, 'LLL dd, yyyy')}
          </time>
          <div className="text-slate-500 dark:text-slate-400">
            SNIPPET -{' '}
            <strong className="font-medium text-slate-700 dark:text-slate-200">
              {snippet.tags.join(', ')}
            </strong>
          </div>
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tighter">
          {snippet.title}
        </h1>
        <div className="flex items-center gap-4">
          {authors.map((author) => (
            <AuthorProfile key={author.name} {...author} />
          ))}
        </div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={snippet.image}
            alt={snippet.title}
            width={768}
            height={432}
            className="rounded-lg border border-slate-200 dark:border-slate-700"
          />
        </AspectRatio>
      </div>
      <Mdx code={snippet.body.code} />
      <div className="mt-12">
        <Comments />
      </div>
    </div>
  )
}
