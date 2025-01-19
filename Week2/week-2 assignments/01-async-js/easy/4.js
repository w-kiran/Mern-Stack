const fs = require('fs');

// Data to write to the file
const data = 'Hello, world!';

// Write data to the file 'output.txt'
fs.writeFile('output.txt', data, (err) => {
  if (err) {
    // Handle error
    console.error('Error writing to file:', err);
  } else {
    // Success message
    console.log('File written successfully!');
  }
});