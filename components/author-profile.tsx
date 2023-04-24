import Image from 'next/image'
import { Author } from '@/.contentlayer/generated'

interface AuthorProfileProps extends Author {}

export default function AuthorProfile({
  name,
  avatar,
  description,
  twitter,
}: AuthorProfileProps) {
  return (
    <a
      href={`https://twitter.com/${twitter}`}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2"
    >
      <Image
        src={avatar}
        alt={name}
        width={40}
        height={40}
        className="rounded-full border border-slate-300 dark:border-slate-600"
      />
      <div className="flex flex-col text-sm">
        <span className="font-semibold">{name}</span>
        <span className="text-slate-600 dark:text-slate-300">
          {description}
        </span>
      </div>
    </a>
  )
}
