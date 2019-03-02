import * as Router from 'koa-router';
import create from './create';
import destroy from './destroy';
import get from './get';
import getAll from './get-all';
import update from './update';

const router = new Router();

router
  .get('/', getAll)
  .get('/:id', get)
  .post('/', create)
  .put('/:id', update)
  .del('/:id', destroy);

export default router;
