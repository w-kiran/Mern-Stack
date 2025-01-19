"use strict";
// // write a function to insert into a users table in your database.
// import { Client } from 'pg'
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
// const client = new Client({
//     connectionString: "postgresql://kirangres:blablabla@localhost:5432/kirangres"
// });
// async function insertUserData(username: string, password: string, email: string) {
//     await client.connect()
//     const result = await client.query(`
//         INSERT INTO users1 (username,password,email)
//         VALUES('user1','123','user1@gmail.com')
//     `)
//     console.log(result)
// }
// insertUserData(
//     'user1', 
//     '123', 
//     'user1@gmail.com'
// );
// // write a function to insert into a users table in your database.
// import { Client } from 'pg'
// const client = new Client({
//     connectionString: "postgresql://kirangres:blablabla@localhost:5432/kirangres"
// });
// async function insertUserData(username: string, password: string, email: string) {
//     await client.connect()
//     //This leads to sql injection.
//     const result = await client.query(`
//         INSERT INTO users (username, password, email)
//         VALUES ('', '', ''); DELETE * FROM users;
//       `);
//       console.log(result);
// }
// insertUserData(
//     "'; DELETE * FROM users;", 
//     "123",  
//     "user1@gmail.com"
// );
// write a function to insert into a users table in your database.
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://kirangres:blablabla@localhost:5432/kirangres"
});
function insertUserData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        //This leads to sql injection.
        const result = yield client.query(`
        INSERT INTO users1 (username, password, email)
        VALUES ($1, $2, $3)
      `, [username, password, email]);
        console.log(result);
    });
}
insertUserData("'; DELETE * FROM users;", "12grvre3", "user112345@gmail.com");
