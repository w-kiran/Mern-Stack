import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@w_kiran/medium-common";
import { Hono } from "hono"
import { verify } from "Hono/jwt"
export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
    },
    Variables:{
        userId:string;
    }
}>();
 
blogRouter.use("/*",async(c,next)=>{
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader,"blablabla")
  if(user){
    //@ts-ignore 
      c.set("userId", user.id);
    await next();
  } else{
        c.status(411);
        return c.json({
            message:"You  are no logged in "
        })
    }
})
 
blogRouter.post('/',async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

      const {success}  = createBlogInput.safeParse(body);
      if(!success){
        c.status(411);
       return c.json({
         message:"input not correct"
    })  }

     const blog = await prisma.blog.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
    })
    return c .json({
        id:blog.id
    });
    
  })
  
  blogRouter.put('/', async(c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const {success}  = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
     return c.json({
       message:"input not correct"
  })  }

     const blog = await prisma.blog.update({
        where:{
            id:Number(body.id)
        },
        data:{
        title:body.title,
        content:body.content
        }
    })
    return c.json({
        id:blog.id
    });
    
  })

  blogRouter.get('/bulk', async(c) => {
  
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
         select:{
          content:true,
          title:true,
          id:true,
          author:{
              select:{
                name:true
              }
          }
         }
    });
    return c.json({
        blogs
    })

  })
  
  blogRouter.get('/:id', async(c) => {
  
    const paramid = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

  try{
    const blog = await prisma.blog.findFirst({
        where:{
         id:Number(paramid)
        },
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          }
        }
     })
     return c.json({
        blog
     })
 
  }catch(e){
      c.status(403);
    return c.json({
        message:"Error while fetching blog post"
       })
  }
  })
  
  
  
  
  