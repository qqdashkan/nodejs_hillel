import { Router } from 'express';

import {
  getGoods,
  getRandomGoods,
  getModifiedTitle,
} from '../utilities/index.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await getGoods();
    const sections = Object.entries(data).map(([category, items]) => ({
      category: getModifiedTitle(category),
      items: getRandomGoods(items, 4),
    }));

    res.render('main', { sections, file: 'goods.json' });
  } catch (err) {
    next(err);
  }
});

export default router;
