const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;

app.get('/ip', async (req, res) => {
  res.status(500).send('Error retrieving public IP');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
