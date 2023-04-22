import { getAllPosts } from '@/lib/content'

export default function BlogPage() {
  const posts = getAllPosts()

  return <div>{JSON.stringify(posts)}</div>
}
