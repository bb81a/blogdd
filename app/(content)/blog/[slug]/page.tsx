import { Metadata } from 'next'
import Image from 'next/image'

import siteConfig from '@/config/site'
import { getAllPosts, getAuthors, getPost } from '@/lib/content'
import { absoluteUrl, formatDate } from '@/lib/helpers'
import AuthorProfile from '@/components/author-profile'
import Comments from '@/components/comments'
import Mdx from '@/components/mdx'
import AspectRatio from '@/components/ui/aspect-ratio'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slugAsParams }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPost(params.slug)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', post.title)
  ogUrl.searchParams.set('type', siteConfig.name)
  ogUrl.searchParams.set('mode', 'light')

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPost(params.slug)
  const authors = getAuthors(post.authors)

  return (
    <div className="mx-auto max-w-2xl py-24">
      <div className="flex flex-col gap-8">
        <time dateTime={post.date} className="text-sm text-slate-600">
          Published on {formatDate(post.date, 'LLL dd, yyyy')}
        </time>
        <h1 className="text-4xl font-bold leading-4 tracking-tighter">
          {post.title}
        </h1>
        <div className="text-slate-500">
          Tags:{' '}
          <strong className="font-medium text-slate-700">
            {post.tags.join(', ')}
          </strong>
        </div>
        <div className="flex items-center gap-4">
          {authors.map((author) => (
            <AuthorProfile key={author.name} {...author} />
          ))}
        </div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={post.image}
            alt={post.title}
            width={768}
            height={432}
            className="rounded-lg border border-slate-200"
          />
        </AspectRatio>
      </div>
      <Mdx code={post.body.code} />
      <div className="mt-12">
        <Comments />
      </div>
    </div>
  )
}
