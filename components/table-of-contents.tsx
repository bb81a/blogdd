import React from 'react'

import { TableOfContents as TOC } from '@/lib/toc'

export default function TableOfContents({ toc }: { toc: TOC }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-slate-200 p-6 dark:border-slate-700">
      <h6 className="font-semibold">Table of Contents</h6>
      <TocList items={toc.items} level={1} />
    </div>
  )
}

function TocList({ items, level }: { items: TOC['items']; level: number }) {
  return (
    <ul className="flex list-inside list-disc flex-col gap-1">
      {items?.map((item) => (
        <React.Fragment key={item.title}>
          <li style={{ marginLeft: `${level - 1}rem` }}>
            <a
              href={item.url}
              className="text-slate-600 duration-100 delay-75 hover:text-slate-800 hover:underline dark:text-slate-300 dark:hover:text-slate-100"
            >
              {item.title}
            </a>
          </li>
          <TocList items={item.items} level={level + 1} />
        </React.Fragment>
      ))}
    </ul>
  )
}
