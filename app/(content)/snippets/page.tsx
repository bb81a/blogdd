import { getAllSnippets } from '@/lib/content'

export default function BlogPage() {
  const snippets = getAllSnippets()

  return <div>{JSON.stringify(snippets)}</div>
}
