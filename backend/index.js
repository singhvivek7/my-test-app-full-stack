const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Route handling
app.get('/', (_, res) => {
  res.send('Hello, this is your Express app!');
});

app.get('/err', (_, res) => {
  res.status(400).json({ message: 'Testing API Error' });
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
