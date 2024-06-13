import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333),
})

const { success, error, data } = envSchema.safeParse(process.env)

if (success === false) {
  console.error('Invalid enviroment variables', error.format())

  throw new Error('Invalid enviroment variables')
}

export const env = data
