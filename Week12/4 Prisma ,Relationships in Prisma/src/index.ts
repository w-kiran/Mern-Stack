import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string, email:string){
//     const response = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstName,
//             lastName,
//             email,
//           }
//     })
//     console.log(response);
    
// };
 
// insertUser('tesw3rtt','tedfgst','tesdgt','testrgr','tedgstghvh"hjd.ckn');

async function getTodosAndUserDetails(userId: number) {
    // await prisma.todo.create({
    //     data: {
    //       title: 'Learn Prisma',
    //       description: 'Learn Prisma with TypeScript',
    //       userId: 1,
    //       done: false, // Added the 'done' property
    //     },
    //   });
          
    const response = await prisma.todo.findMany({
        where: {
            userId: userId, // userId is now an 'Int' and this will work properly
        },
        select:{
            id:true,
            title:true,
            description:true,
            user:true
        }
    });
    console.log(response);
}

getTodosAndUserDetails(1); 