import express from 'express';

const app = express();
const port = 5000;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});