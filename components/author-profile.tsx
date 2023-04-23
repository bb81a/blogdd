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
        width={48}
        height={48}
        className="rounded-full border border-slate-300"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{description}</span>
      </div>
    </a>
  )
}
