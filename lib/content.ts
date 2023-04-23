import { compareDesc } from 'date-fns'

import {
  Author,
  Post,
  Snippet,
  allAuthors,
  allPosts,
  allSnippets,
} from '.contentlayer/generated'

export function getAllPosts(): Post[] {
  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}

export function getAllSnippets(): Snippet[] {
  return allSnippets
    .filter((snippet) => snippet.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}

export function getAllAuthors(): Author[] {
  return allAuthors.sort((a, b) => Number(a.name > b.name))
}

export function getPost(slug: string): Post {
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    throw new Error(`Cannot find any post with slug: ${slug}`)
  }

  return post
}

export function getSnippet(slug: string): Snippet {
  const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug)

  if (!snippet) {
    throw new Error(`Cannot find any snippet with slug: ${slug}`)
  }

  return snippet
}

export function getAuthors(authors: string[]): Author[] {
  return authors
    .map((author) => allAuthors.find((aut) => aut.name === author))
    .filter(Boolean) as Author[]
}
