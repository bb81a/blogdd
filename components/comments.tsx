'use client'

import { useEffect, useRef } from 'react'

import siteConfig from '@/config/site'

const { giscus } = siteConfig

export default function Comments() {
  const ref = useRef<HTMLDivElement | null>(null)
  const theme = true ? 'dark_dimmed' : 'light'

  useEffect(() => {
    const parent = ref.current
    if (!parent) return

    parent.innerHTML = ''

    const script = document.createElement('script')
    script.src = giscus.src
    script.dataset.repo = giscus.repo
    script.dataset.repoId = giscus.repoId
    script.dataset.category = giscus.category
    script.dataset.categoryId = giscus.categoryId
    script.dataset.mapping = giscus.mapping
    script.dataset.strict = giscus.strict
    script.dataset.reactionsEnabled = giscus.reactionsEnabled
    script.dataset.emitMetadata = giscus.emitMetadata
    script.dataset.inputPosition = giscus.inputPosition
    script.dataset.theme = theme
    script.dataset.lang = 'en'
    script.dataset.loading = 'lazy'
    script.crossOrigin = 'anonymous'
    script.async = true

    parent.appendChild(script)

    return () => {
      parent.innerHTML = ''
    }
  }, [ref, theme])

  return <div ref={ref} />
}
