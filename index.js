const Koa = require('koa');
const view = require('koa-view');
const serve   = require('koa-static');

const app = module.exports = new Koa();

const router = require('./router');

app.use(serve(__dirname + '/contents'));
app.use(router.routes());

app.listen(3000);