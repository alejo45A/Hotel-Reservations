import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hotel Backend Running!');
});

app.listen(PORT, () => console.log(`Server on port ${PORT}`));
