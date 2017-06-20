const Koa = require('koa');
var app = module.exports = new Koa();

const router = require('./router');

app.use(router.routes());

app.listen(3000);