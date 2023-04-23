import Image from 'next/image'

import { getAllPosts, getAuthors, getPost } from '@/lib/content'
import { formatDate } from '@/lib/helpers'
import AuthorProfile from '@/components/author-profile'
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
    </div>
  )
}
