import Image from 'next/image'

import { getAllSnippets, getAuthors, getSnippet } from '@/lib/content'
import { formatDate } from '@/lib/helpers'
import AuthorProfile from '@/components/author-profile'
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

export default function SnippetPage({ params }: SnippetPageProps) {
  const snippet = getSnippet(params.slug)
  const authors = getAuthors(snippet.authors)

  return (
    <div className="mx-auto max-w-2xl py-24">
      <div className="flex flex-col gap-8">
        <time dateTime={snippet.date} className="text-sm text-slate-600">
          Published on {formatDate(snippet.date, 'LLL dd, yyyy')}
        </time>
        <h1 className="text-4xl font-bold leading-4 tracking-tighter">
          {snippet.title}
        </h1>
        <div className="text-slate-500">
          SNIPPET -{' '}
          <strong className="font-medium text-slate-700">
            {snippet.tags.join(', ')}
          </strong>
        </div>
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
            className="rounded-lg border border-slate-200"
          />
        </AspectRatio>
      </div>
      <Mdx code={snippet.body.code} />
    </div>
  )
}
