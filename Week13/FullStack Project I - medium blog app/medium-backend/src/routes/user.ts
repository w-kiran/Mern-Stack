import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupInput ,signinInput } from "@w_kiran/medium-common";
import { sign } from 'Hono/jwt'


export const userRouter =  new Hono<{
    Bindings:{
           DATABASE_URL:string;
    }
 }>();
 
userRouter.post('/signup',async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

  const body = await c.req.json();
  const {success}  = signupInput.safeParse(body);
  if(!success){
    c.status(411);
   return c.json({
     message:"input not correct"
}) 
    
  }
  try{
    const user = await prisma.user.create({
         data:{
          username:body.username,
          password:body.password,
          name: body.name
         }
    })
  
    const jwt = await sign({id:user.id},"blablabla")
     console.log("Welcome to the medium blog post")
    return c.text(jwt)

  }catch(e){
   console.log(e)
    c.status(411);
    return c.text("User already exist or invalid")
  }
})
 

userRouter.post('/signin', async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const {success}  = signinInput.safeParse(body);
  if(!success){
    c.status(411);
   return c.json({
     message:"input not correct"
}) }

  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password, // Ensure this matches the database
      },
    });

    if (!user) {
      c.status(403);
      return c.text('Incorrect credentials');
    }

    const jwt = await sign({ id: user.id }, "blablabla");
    return c.text(jwt);
  } catch (e) {
    console.log('Error:', e);
    c.status(500);
    return c.text('Internal server error');
  }
});

