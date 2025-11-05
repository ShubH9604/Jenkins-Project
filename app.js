const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'message.txt');
  if (!fs.existsSync(filePath)) {
    return res.send("<h1>message.txt not found on server</h1>");
  }

  const message = fs.readFileSync(filePath, 'utf8');
  res.send(`<h1>${message}</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));