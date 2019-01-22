import * as Router from 'koa-router';
import Category from '../../models/category';
import create from './create';
import update from './update';
import destroy from './destroy';
import get from './get';

const router = new Router();

router
  .get('/', async ctx => {
    ctx.body = await Category.findAll();
  })
  .get('/:id', get)
  .post('/', create)
  .put('/:id', update)
  .del('/:id', destroy);

export default router;
