const router = require('koa-router')();

router.delete('/:id', remove);

async function remove(ctx) {
    //   await ctx.render('list', { posts: posts });
    ctx.body = 'Hello World from comments';
}

module.exports = router