'use client'

import { cn } from '@/lib/helpers'
import { buttonVariants } from './ui/button'
import Form from './ui/form'

export default function Newsletter() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-bold">Subscribe Newsletter</h3>
      <p className="leading-7">
        {' '}
        Subscribe to the newsletter to stay up to date with my blog, snippets
        and much more. <em>No spam, unsubscribe anytime.</em>
      </p>
      <Form>
        <Form.Field>
          <Form.Label>First name</Form.Label>
          <Form.Input id="firstName" name="firstName" />
        </Form.Field>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Input id="email" name="email" />
        </Form.Field>
        <Form.Submit>
          <button className={cn(buttonVariants({ size: 'lg' }), '')}>
            Subscribe
          </button>
        </Form.Submit>
      </Form>
    </div>
  )
}
