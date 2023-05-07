import { formatDate } from '@/lib/helpers'

interface BookmarkProps {
  date: string
  bookmarks: {
    url: string
    title: string
    description: string
  }[]
}

export default function Bookmark({ date, bookmarks }: BookmarkProps) {
  return (
    <div className="flex flex-col gap-6 [&:not(:first-child)]:mt-12">
      <div className="flex items-center gap-6">
        <time dateTime={date} className="text-sm font-semibold">
          {formatDate(date, 'LLL MM, yyyy')}
        </time>
        <span className="block h-[1px] w-full flex-1 bg-slate-100">&nbsp;</span>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {bookmarks.length} bookmark{bookmarks.length > 1 ? 's' : ''}
        </div>
      </div>
      <ul className="list-style-none flex flex-col gap-4">
        {bookmarks.map(({ url, title, description }) => (
          <li key={url} className="space-y-1">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="font-medium leading-snug text-blue-500 transition-colors duration-200 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
            >
              {title}
            </a>
            <p className="leading-relaxed">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
