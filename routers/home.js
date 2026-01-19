import { Router } from 'express';

import {
  getGoods,
  getRandomGoodsByCategory,
} from '../utilities/index.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await getGoods();

    res.render('main', {
      items: {
        phones: getRandomGoodsByCategory(data, 4, 'phones'),
        laptops: getRandomGoodsByCategory(data, 4, 'laptops'),
      },
      file: 'goods.json',
    });
  } catch (err) {
    next(err);
  }
});

export default router;
