import {z} from 'zod'

// signup form schema
export const SignupFormSchema = z.object({
    username: z
        .string()
        .min(3,{message: 'username must be at least 3 characters'})
        .regex(/^[a-zA-Z]/,{message: 'username must start with letter'})
        .trim(),
    email: z
        .string()
        .email({message: 'invalid email address'})
        .trim(),
    password: z
        .string()
        .min(3,{message: 'password must be at least 3 characters'})
        .regex(/[a-zA-Z]/,{message: 'password must contain at least 1 letter'})
        .regex(/[0-9]/,{message: 'password must contain at least 1 digit'})
        .regex(/[^a-zA-Z0-9]/,{message: 'password must contain at least 1 special character'})
        .trim()
})