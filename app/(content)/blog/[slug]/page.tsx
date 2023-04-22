import { getAllPosts, getPost } from '@/lib/content'

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
  return <div>{JSON.stringify(post)}</div>
}
