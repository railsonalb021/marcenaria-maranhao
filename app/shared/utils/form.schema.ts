import {z} from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'O nome deve ser preenchido'),
  email: z.string().email('O E-mail deve ser preenchido'),
  telefone: z.string().min(10, 'O telefone deve ser preenchido'),
})

export type ContactForm = z.infer<typeof contactFormSchema>