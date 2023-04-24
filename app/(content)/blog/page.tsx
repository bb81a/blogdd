import { getAllPosts } from '@/lib/content'
import PostCard from '@/components/post-card'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl py-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Blog</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 md:text-xl">
          My blog built with Contentlayer and MDX.
        </p>
      </div>
      <hr className="my-8 border-slate-200 dark:border-slate-700" />
      <div className="grid grid-cols-1 gap-6 self-stretch justify-self-stretch sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  )
}
