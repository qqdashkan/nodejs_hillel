import express from 'express';
import dotenv from 'dotenv';

import { errorHandler } from './middlewares/errorHandler';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.status(200).send('Hello User');
});

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`✅ Server was open on port http://localhost:${PORT}`),
);
