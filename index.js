const Koa = require('koa');
const view = require('koa-view');

const app = module.exports = new Koa();

const router = require('./router');

app.use(view());
app.use(router.routes());

app.listen(3000);