import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/helpers'
import AspectRatio from './ui/aspect-ratio'
import { Card } from './ui/card'
import { Post } from '.contentlayer/generated'

export interface PostCardProps
  extends Pick<
    Post,
    'title' | 'description' | 'slug' | 'date' | 'tags' | 'image'
  > {}

export default function PostCard({
  title,
  description,
  slug,
  image,
  date,
  tags,
}: PostCardProps) {
  return (
    <Link href={slug} className="group flex">
      <Card className="relative h-full w-full transition-colors duration-200 delay-75 group-hover:border-slate-600">
        <Card.Header>
          <AspectRatio ratio={16 / 9} className="relative">
            <Image src={image} alt={title} fill={true} />
          </AspectRatio>
        </Card.Header>
        <Card.Content className="flex flex-col gap-2">
          <Card.Title className="text-2xl font-bold">{title}</Card.Title>
          <Card.Description className="text-base">
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Footer className="mt-auto flex items-center justify-between text-sm">
          <time dateTime={date} className="text-slate-600">
            {formatDate(date, 'LLL dd, yyyy')}
          </time>
          <div className="font-medium">{tags.join(', ')}</div>
        </Card.Footer>
      </Card>
    </Link>
  )
}
