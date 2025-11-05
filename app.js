const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const message = fs.readFileSync('message.txt', 'utf8');
  res.send(`<h1>${message}</h1>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));