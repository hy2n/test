const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;

app.get('/ip', async (req, res) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const publicIp = response.data.ip;
    res.json({ ip: publicIp });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving public IP');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
