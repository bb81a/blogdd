import fs from 'fs'
import path from 'path'
import RSS from 'rss'

import siteConfig from '@/config/site'
import { getAllPosts, getAllSnippets } from './content'

export default async function generateRssFeed() {
  const siteUrl = siteConfig.url

  const options = {
    title: `${siteConfig.name} | RSS Feed`,
    description: siteConfig.description,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, ${
      siteConfig.name
    }`,
  }

  const feed = new RSS(options)

  const posts = getAllPosts()
  const snippets = getAllSnippets()

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/posts/${post.slug}`,
      date: post.date,
    })
  })

  snippets.map((snippet) => {
    feed.item({
      title: snippet.title,
      description: snippet.description,
      url: `${siteUrl}/snippets/${snippet.slug}`,
      date: snippet.date,
    })
  })

  fs.writeFileSync(
    path.resolve(process.cwd(), 'public', 'rss.xml'),
    feed.xml({ indent: true })
  )
}
