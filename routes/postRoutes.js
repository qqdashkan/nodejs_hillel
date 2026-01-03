import express from 'express';

const router = express.Router();

router.post('/random', (req, res) => {
  res.send(Math.floor(Math.random() * 10 + 10.5));
});

export default router;
