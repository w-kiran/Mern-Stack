"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getTodosAndUserDetails(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        // await prisma.todo.create({
        //     data: {
        //       title: 'Learn Prisma',
        //       description: 'Learn Prisma with TypeScript',
        //       userId: 1,
        //       done: false, // Added the 'done' property
        //     },
        //   });
        const response = yield prisma.todo.findMany({
            where: {
                userId: userId, // userId is now an 'Int' and this will work properly
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log(response);
    });
}
getTodosAndUserDetails(1);
