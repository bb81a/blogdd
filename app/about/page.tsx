import Image from 'next/image'

import siteConfig from '@/config/site'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl py-24">
      <div className="tablet:grid-cols-2 tablet:gap-8 grid grid-cols-1 gap-24">
        <div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/images/avatars/dangminhngo.png"
              alt="Dang Minh Ngo"
              width={256}
              height={256}
              className="rounded-full border-2 border-slate-100 dark:border-slate-800"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="text-3xl font-bold md:text-4xl">Dang Minh Ngo</div>
            <div className="whitespace-pre text-center text-lg md:text-lg">
              Front-end Developer. Pixel Art Amateur.
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-center text-3xl font-bold">And more about me</h1>
          <div className="space-y-6 leading-7">
            <p>
              Hi guys! My name is Dang Minh Ngo. I am self-taught front-end
              developer and pixel art amateur. You can{' '}
              <a
                href={siteConfig.links.portfolio}
                className="font-semibold text-blue-500 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noreferrer"
              >
                have a look at my interactive portfolio
              </a>{' '}
              🤨.
            </p>
            <p>
              I&apos;m passionate about learning cutting-edge web technologies
              and modern front-end frameworks. I&apos;ve learnt new things from
              books, online courses and documentations 🤓. I&apos;ve built some
              cool stuff to improve my coding skill. I&apos;m here to help you
              design and build apps for small businesses.
            </p>
            <p>
              Currently, I&apos;m looking for 🧐 opportunities to work as an
              entry-level front-end developer in Ho Chi Minh. I&apos;m able to
              work with{' '}
              <em>React, JavaScript, HTML, CSS and front-end frameworks</em>.
              And I am also willing to learn new frameworks and technologies.
            </p>
            <p>
              That could be enough! I will be happy to working with you 🥳 🥳
              🥳. So{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-blue-500 hover:underline dark:text-blue-400"
              >
                say hi to me
              </a>{' '}
              👋.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
