const siteConfig = {
  name: 'Dang Minh',
  description: "Dang Minh Ngo's Programming Blog",
  url: 'https://dangminhngo.vercel.app',
  email: 'dangminhngo.dev@gmail.com',
  ogImage: 'https://dangminhngo.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/dangminhngo',
    github: 'https://github.com/dangminhngo',
    linkedin: 'https://linkedin.com/dangminhngo',
    portfolio: 'https://dangminhngo.github.io',
  },
  sandpack: {
    bundler: 'https://sandpack-bundler-dangminhngo.vercel.app',
    timeout: 10000,
  },
  giscus: {
    src: 'https://giscus.app/client.js',
    repo: 'dangminhngo/blog',
    repoId: 'R_kgDOJZ67kg',
    category: 'General',
    categoryId: 'DIC_kwDOJZ67ks4CV_Fo',
    mapping: 'title',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '1',
    inputPosition: 'top',
  },
  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY ?? '',
    audienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    dc: process.env.MAILCHIMP_DC ?? '',
  },
}

export default siteConfig
