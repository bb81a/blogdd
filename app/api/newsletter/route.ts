import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

import siteConfig from '@/config/site'
import { newsletterSchema } from '@/lib/validations'

export async function POST(req: Request) {
  try {
    const reqBody = await req.json()

    const { firstName, email } = newsletterSchema.parse(reqBody)

    const result = await fetch(
      `https://${siteConfig.mailchimp.dc}.api.mailchimp.com/3.0/lists/${siteConfig.mailchimp.audienceId}/members`,
      {
        method: 'POST',
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FNAME: firstName,
          },
        }),
        headers: {
          Authorization: `Bearer ${siteConfig.mailchimp.apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (result.status >= 400) {
      throw new Error(
        'There was an error subscribing to the newsletter. Try again later.'
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof ZodError) {
      return new Response(`Validation failed.`, { status: 403 })
    }

    return new Response(`Error: ${err}`, { status: 500 })
  }
}
