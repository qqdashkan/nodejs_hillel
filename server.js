import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import FileSession from 'session-file-store';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { authRouter, regRouter } from './routes/index.js';
import { errorHandler, sessionData } from './middlewares/index.js';

dotenv.config();
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true })); //POST

const PORT = process.env.PORT || 3500;

const SessionFileStore = FileSession(session);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    store: new SessionFileStore({
      path: './sessions',
      ttl: 24 * 60 * 60 * 30,
      retries: 0,
    }),
  }),
);
app.use(sessionData);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/register', regRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
