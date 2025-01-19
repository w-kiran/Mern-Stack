// // write a function to insert into a users table in your database.
// import { Client } from 'pg'

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
//         VALUES ('', '', ''); DELETE * FROM users);
//       `);
      
//       console.log(result);
// }
      
// insertUserData(
//     "'; DELETE * FROM users;", 
//     "123",  
//     "user1@gmail.com"
// );

// write a function to insert into a users table in your database.
import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://kirangres:blablabla@localhost:5432/kirangres"
});


async function insertUserData(username: string, password: string, email: string) {
    await client.connect()

    //This doesn't lead to sql injection.
    const result = await client.query(`
        INSERT INTO users1 (username, password, email)
        VALUES ($1, $2, $3)
      `,[username,password,email]);
      
      console.log(result);
}
      
insertUserData(
    "'; DELETE * FROM users;", 
    "12grvre3",  
    "user112345@gmail.com"
);