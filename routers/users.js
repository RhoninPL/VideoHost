const router = require('koa-router')();

router.get('/:id/videos', getUserVideos)
    .get('/:id/comments', getUserComments);

async function getUserVideos(ctx) {
    //   await ctx.render('list', { posts: posts });
    ctx.body = 'Hello World from users';
}

async function getUserComments(ctx) {
    //   await ctx.render('list', { posts: posts });
    ctx.body = 'Hello World from users';
}

module.exports = router