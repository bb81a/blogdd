import { z } from 'zod'

export const newsletterSchema = z
  .object({
    firstName: z.string(),
    email: z.string().email(),
  })
  .required()

export const ogImageSchema = z.object({
  heading: z.string(),
  type: z.string(),
  mode: z.enum(['light', 'dark']).default('dark'),
})
