import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`BackEnd running at: http://localhost:${port}`);
});
