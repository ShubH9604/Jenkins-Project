const fs = require('fs');

fs.readFile('message.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.error('Error reading file:', err);
  }
  console.log("Message from File:", data);
});