
import { z } from "zod";

export const signupInput = z.object({
    username:z.string().email(),
    password:z.string().min(7),
    name:z.string().optional()
})

export const signinInput = z.object({
    username:z.string().email(),
    password:z.string().min(7),
})

export const createBlogInput = z.object({
    title:z.string(),
    content:z.string()
})

export const updateBlogInput = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type SignupInput = z.infer<typeof signupInput> 
export type UserBloginput = z.infer<typeof updateBlogInput>
export type SigninInput = z.infer<typeof signinInput>