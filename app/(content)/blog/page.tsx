import { getAllPosts } from '@/lib/content'
import PostCard from '@/components/post-card'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl py-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="text-xl text-slate-600">
          My blog built with Contentlayer and MDX.
        </p>
      </div>
      <hr className="my-8 border-slate-200" />
      <div className="grid grid-cols-2 gap-6 self-stretch justify-self-stretch">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
