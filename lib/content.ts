import { allBookmarks } from '@/.contentlayer/generated/index.mjs'
import { compareDesc } from 'date-fns'

import {
  allAuthors,
  allPosts,
  allSnippets,
  type Author,
  type Bookmarks,
  type Post,
  type Snippet,
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

export function getBookmarks(): Bookmarks {
  return allBookmarks[0] as Bookmarks
}

export function getPost(slug: string): Post | undefined {
  const post = allPosts.find((post) => post.slugAsParams === slug)

  return post
}

export function getSnippet(slug: string): Snippet | undefined {
  const snippet = allSnippets.find((snippet) => snippet.slugAsParams === slug)

  return snippet
}

export function getAuthors(authors: string[]): Author[] {
  return authors
    .map((author) => allAuthors.find((aut) => aut.name === author))
    .filter(Boolean) as Author[]
}
