import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('main page');
});

router.get('/test-json', (req, res) => {
  res.json({ foo: 3, bar: 3 });
});

router.get('/redirect', (req, res) => {
  res.redirect('/test-json');
});

router.get('/cat', (req, res) => {
  res.send(`
  <ul>
    <li><a href="/cat/smartphones">Смартфони</a></li>
    <li><a href="/cat/laptop">Ноутбуки</a></li>
  </ul>
`);
});

router.get('/cat/:categoryName', (req, res) => {
  const { categoryName } = req.params;
  res.send(categoryName);
});

export default router;
