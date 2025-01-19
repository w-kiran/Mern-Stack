
const fs = require('fs');
// Asynchronous read
fs.readFile('a.txt', 'utf-8', (err, data) => {
    let str=data;
    let trimmedStr = str.replace(/\s+/g, ' ').trim()
    console.log(trimmedStr)
});
