import express from 'express';
import morgan from 'morgan';
import { PORT } from './config';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.all('*', (req, res) => {
  res.send(req.headers);
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));