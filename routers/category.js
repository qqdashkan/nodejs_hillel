import { Router } from 'express';
import {
  getGoods,
  getCategories,
  getModifiedTitle,
} from '../utilities/index.js';

const router = Router();

async function resolveCategory(req, res, next, category) {
  try {
    const data = await getGoods();

    if (!data.some((elem) => elem.category === category)) {
      return next({
        status: 404,
        message: 'Category not found',
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

router.get('/', async (req, res, next) => {
  try {
    const data = await getGoods();

    res.render('category', {
      categories: getCategories(data),
      file: 'goods.json',
    });
  } catch (err) {
    next(err);
  }
});

router.param('category', resolveCategory);

router.get('/:category', async (req, res, next) => {
  try {
    const { category } = req.params;
    const data = await getGoods();

    res.render('category_single', {
      name: getModifiedTitle(category),
      items: data.filter((elem) => elem.category === category),
      file: 'goods.json',
    });
  } catch (err) {
    next(err);
  }
});

export default router;
