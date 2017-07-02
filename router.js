const router = require('koa-router')();
const send = require('koa-send');

router.get('/', welcome)    
    .use('/videos', require('./routers/videos').routes())
    .use('/comments', require('./routers/comments').routes());

async function welcome(context) {
    await send(context, 'views/index.html');
}

async function contents(context){
    console.log(context.path + " ====== " + __dirname);
    await send(context, context.path, { root: __dirname + '/' });
}

module.exports = router