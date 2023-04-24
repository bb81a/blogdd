import generateRssFeed from '@/lib/rss-feed'

export const revalidate = 86400

export async function GET() {
  try {
    const xml = await generateRssFeed()
    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    })
  } catch (err) {
    return new Response('There was an error generating RSS feed', {
      status: 500,
    })
  }
}
