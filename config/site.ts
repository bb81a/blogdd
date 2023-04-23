const siteConfig = {
  name: 'Dang Minh',
  description: "Dang Minh Ngo's Programming Blog",
  url: 'https://dangminhngo.vercel.app',
  ogImage: 'https://dangminhngo.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/dangminhngo',
    github: 'https://github.com/dangminhngo',
    linkedin: 'https://linkedin.com/dangminhngo',
  },
  sandpack: {
    bundler: 'https://sandpack-bundler-dangminhngo.vercel.app',
    timeout: 10000,
  },
  giscus: {
    src: 'https://giscus.app/client.js',
    repo: 'dangminhngo/blog',
    repoId: 'R_kgDOJVpgjw',
    category: 'General',
    categoryId: 'DIC_kwDOJVpgj84CVy5b',
    mapping: 'title',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '1',
    inputPosition: 'top',
  },
}

export default siteConfig
