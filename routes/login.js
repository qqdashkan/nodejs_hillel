import { Router } from 'express';
const router = Router();

import { isUserExist } from '../utilities/index.js';
import { isAuthenticated, isAdmin } from '../middlewares/index.js';

router.get('/', (req, res) => {
  res.render('index', { message: `Hello` });
});

router.get('/login', (req, res) => {
  res.render('form');
});

router.get('/only-users', isAuthenticated, (req, res) => {
  res.render('page', { message: 'Secure page' });
});

router.get('/admin', isAuthenticated, isAdmin, (req, res) => {
  res.render('admin', { message: 'Admin page' });
});

router.get('/about', (req, res) => {
  res.render('about', { message: 'About page' });
});

router.post('/login', async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const user = await isUserExist(username, email);

    if (!user) {
      return next({
        status: 404,
        message: 'User not found',
      });
    }

    req.session.regenerate((err) => {
      if (err) return next(err);

      req.session.username = user.username;
      req.session.email = user.email;
      req.session.role = user.role;

      req.session.save((err) => {
        if (err) return next(err);
        res.redirect('/');
      });
    });
  } catch (err) {
    next(err);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return next(err);
  });
  res.clearCookie('connect.sid');
  return res.redirect('/');
});

export default router;
