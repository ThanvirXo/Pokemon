import {z} from  'zod';

export const createUserSchema=z.object({
    email:z.string(),
    username:z.string(),
    password:z.string()
})

export type createUserInput= z.TypeOf<typeof createUserSchema>