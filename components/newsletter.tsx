'use client'

import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

import { cn } from '@/lib/helpers'
import { newsletterSchema } from '@/lib/validations'
import { buttonVariants } from './ui/button'
import Form from './ui/form'

export default function Newsletter() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [{ message, type }, setMessage] = useState<{
    message: string
    type: 'error' | 'validation' | 'success'
  }>({ message: '', type: 'error' })
  const [loading, setLoading] = useState(false)

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFirstName(e.target.value)
  }

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      const values = newsletterSchema.parse({ firstName, email })

      setLoading(true)

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      await res.json()
      setMessage({
        message: 'Subscribed! 🎉 🎉 🎉  Thanks for your subscription.',
        type: 'success',
      })
    } catch (err) {
      if (err instanceof ZodError) {
        setMessage({
          message: 'Invalid first name or email.',
          type: 'validation',
        })
        return
      }

      setMessage({
        message: 'There was an unexpected error. Try again later.',
        type: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-bold">Subscribe Newsletter</h3>
      <p className="leading-7">
        {' '}
        Subscribe to the newsletter to stay up to date with my blog, snippets
        and much more. <em>No spam, unsubscribe anytime.</em>
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Form.Label>First name</Form.Label>
          <Form.Input
            id="firstName"
            name="firstName"
            onChange={handleFirstNameChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Input id="email" name="email" onChange={handleEmailChange} />
        </Form.Field>
        <Form.Submit>
          <button
            className={cn(buttonVariants({ size: 'lg' }), '')}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Subscribe'}
          </button>
        </Form.Submit>
        <Form.Message type={type === 'error' ? 'error' : 'default'}>
          {message}
        </Form.Message>
      </Form>
    </div>
  )
}
