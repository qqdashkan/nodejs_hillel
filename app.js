import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3500;

import { errorHandler } from './middlewares/errorHandler.js';

import getRouter from './routes/getRoutes.js';
import postRouter from './routes/postRoutes.js';

const app = express();

app.use('/', getRouter);
app.use('/', postRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
