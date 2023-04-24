'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn } from '@/lib/helpers'
import Callout from './callout'
import Playground from './playground'

export interface MdxProps {
  code: string
}

export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-10 scroll-m-20 text-3xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-10 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-10 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-10 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-10 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-100 [&>*]:text-slate-600 dark:[&>*]:text-slate-300',
        className
      )}
      {...props}
    />
  ),
  table: ({
    className,
    ...props
  }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table className={cn('my-6 border-collapse', className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'border-t border-slate-300 p-0 even:bg-slate-50 dark:border-slate-600 dark:even:bg-slate-800',
        className
      )}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        'border border-slate-200 bg-slate-100 px-4 py-2 text-left font-semibold dark:border-slate-700 dark:bg-slate-800 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        'border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  img: ({ className, src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      className={cn(
        'mt-6 rounded-md border border-slate-200 dark:border-slate-700',
        className
      )}
      src={src ?? ''}
      alt={alt ?? 'Image'}
      width={672}
      height={378}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-slate-200" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn('my-6 overflow-x-auto rounded-lg p-4 leading-6', className)}
      {...props}
    />
  ),
  code: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { 'data-language'?: string }) =>
    props['data-language'] ? (
      <code className={className} {...props} />
    ) : (
      <code
        className={cn(
          'relative rounded border border-slate-200 bg-slate-50 px-[0.3rem] py-[0.2rem] font-mono text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
          className
        )}
        {...props}
      />
    ),
  div: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & {
    'data-rehype-pretty-code-title'?: string
  }) =>
    props['data-rehype-pretty-code-title'] === undefined ? (
      <div className={className} {...props} />
    ) : (
      <div
        className={cn(
          'relative -mb-6 rounded-tl-lg rounded-tr-lg bg-slate-800 px-4 py-2 text-sm text-slate-400 before:absolute before:left-0 before:top-full before:h-2 before:w-full before:bg-[#242d2f] before:content-[""]',
          className
        )}
        {...props}
      />
    ),
  Image: ({ className, ...props }: ImageProps) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image className={cn('mt-6 rounded-md', className)} {...props} />
  ),
  Callout,
  Playground,
}
