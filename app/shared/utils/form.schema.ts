import {z} from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1,{ message:'O nome deve ser preenchido'}),
  email: z.string().min(1,{message:'O E-mail deve ser preenchido'}),
  telefone: z.string().min(1,{message:'O Telefone deve ser preenchido'}),
})

export type ContactForm = z.infer<typeof contactFormSchema>