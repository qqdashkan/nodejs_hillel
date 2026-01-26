import { Router } from 'express';
import { addNewUser } from '../utilities/index.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    await addNewUser({ username, email, password });
    return res.redirect('/login');
  } catch (err) {
    if (err.message === 'EMAIL_EXISTS') {
      return res.render('register', {
        error: 'User with this email already exists',
      });
    }

    next(err);
  }
});

export default router;
