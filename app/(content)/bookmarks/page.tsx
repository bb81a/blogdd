import { getBookmarks } from '@/lib/content'
import Mdx from '@/components/mdx'

export default function BookmarksPage() {
  const bookmarks = getBookmarks()

  return (
    <div className="mx-auto max-w-4xl py-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {bookmarks.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 md:text-xl">
          {bookmarks.description}
        </p>
      </div>
      <hr className="my-8 border-slate-200 dark:border-slate-700" />
      <div className="pt-8">
        <Mdx code={bookmarks.body.code} />
      </div>
    </div>
  )
}
