let a = 1;
console.log(a); // This logs the value of a, which is 1.

fs.readFile("a.txt", "utf-8", (err, data) => {
    console.log("data read from the file is ");
    console.log(data);
});
// This reads the contents of the file "a.txt" using UTF-8 encoding. 
// If successful, it logs "data read from the file is" followed by the content of the file.

let ans = 0;
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}
console.log(ans); // This calculates the sum of numbers from 0 to 99 and logs the result.
