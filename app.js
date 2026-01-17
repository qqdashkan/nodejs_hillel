import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { homeRouter, categoryRouter, downloadRouter } from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/download', downloadRouter);
app.use('/category', categoryRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server start на http://localhost:${PORT}`);
});
