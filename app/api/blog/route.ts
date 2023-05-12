import { NextResponse } from 'next/server'

import { getAllPosts } from '@/lib/content'

export async function GET() {
  const allPosts = getAllPosts()

  return NextResponse.json(allPosts)
}
