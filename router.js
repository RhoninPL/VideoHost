const router = require('koa-router')();

router.get('/', welcome)
    .use('/videos', require('./routers/videos').routes())
    .use('/comments', require('./routers/comments').routes());

async function welcome(ctx) {
    ctx.body = 'Welcome to new video hosting website!';
}

module.exports = router