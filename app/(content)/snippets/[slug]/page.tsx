import { getAllSnippets, getSnippet } from '@/lib/content'

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

export default function snippetPage({ params }: SnippetPageProps) {
  const snippet = getSnippet(params.slug)
  return <div>{JSON.stringify(snippet)}</div>
}
