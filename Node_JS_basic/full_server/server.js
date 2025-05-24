import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 1245;
const databaseFile = process.argv[2] || '';

app.use((req, res, next) => {
  req.databaseFile = databaseFile;
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
