import { getAllPosts } from '@/lib/content'
import PostCard from '@/components/post-card'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </div>
  )
}
