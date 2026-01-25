import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import FileSession from 'session-file-store';

const SessionFileStore = FileSession(session);

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { isUserExist } from './utilities/isUserExist.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { isAuthenticated } from './middlewares/isAuthenticated.js';

dotenv.config();
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({ extended: true })); //POST

const PORT = process.env.PORT || 3500;
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { username, message: `Hello, friend` });
});

app.get('/login', (req, res) => {
  res.render('form');
});

app.get('/page', isAuthenticated, (req, res) => {
  const username = req.session.username;
  res.render('page', { username, message: 'Secure page' });
});

app.post('/login', async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const user = await isUserExist(username, email);
    console.log(user);

    if (!user) {
      return next({
        status: 404,
        message: 'User not found',
      });
    }

    req.session.username = user.username;
    req.session.email = user.email;
    req.session.role = user.role;

    //res.render('index', { message: `Hello, ${user.username}` });

    return res.redirect('/');
  } catch (err) {
    next(err);
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
  });
  return res.redirect('/');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
