const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.post('/login', (ctx, next) => {
  // ctx.router available
  ctx.body = { niceAuthBro: true, bigPasswordYouHaveHere: true };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const start = () => {
  app.listen(3000);
  console.log("The humming of a good computer running a good server...")
}

app.listen(3001);
