import { Router } from 'express';
import { join } from 'path';
import { getDirname } from '../utilities/index.js';

const router = Router();

router.get('/:fileName', (req, res, next) => {
  try {
    const { fileName } = req.params;
    const filePath = join(getDirname(import.meta.url), '..', 'data', fileName);
    res.download(filePath);
  } catch (err) {
    next(err);
  }
});

export default router;
