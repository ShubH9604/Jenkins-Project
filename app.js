const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    res.send(`<h1>${data}</h1>`);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));