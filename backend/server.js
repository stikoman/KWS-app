import express from 'expres';

const app = express();

app.get('/', (req, res) => {
  res.send('server is ready');
});
app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
