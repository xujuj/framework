import { Spec } from '@specron/spec';
import * as view from '..';

const spec = new Spec();

spec.test('exposes objects', (ctx) => {
  ctx.true(!!view.WsProvider);
});

export default spec;
