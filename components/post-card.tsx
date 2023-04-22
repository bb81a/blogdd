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
    <Link href={slug}>
      <Card className="relative">
        <Card.Header>
          <AspectRatio ratio={16 / 9} className="relative">
            <Image src={image} alt={title} fill={true} />
          </AspectRatio>
        </Card.Header>
        <Card.Content>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Footer>
          <time dateTime={date}>{formatDate(date, 'LLL dd, yyyy')}</time>
          <div>{tags.join(', ')}</div>
        </Card.Footer>
      </Card>
    </Link>
  )
}
