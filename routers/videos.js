const router = require('koa-router')();

var knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'postgres',
        charset: 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

var Videos = bookshelf.Model.extend({
    tableName: 'videos'
});

router.get('/', list)
    .get('/:id/stream', streamVideo)
    .get('/:id', show)
    .post('/', create)
    .post('/:id/comments', createComment)
    .get('/videos/user/:id', getUserVideos);

async function list(ctx) {
    // var newVideo = new Videos();
    // newVideo.set('author', 'Ja');
    // newVideo.set('title', 'Simple title2');
    // newVideo.set('description', 'Some example descriptionsgdrgrd');

    // newVideo.save().then(function (u) {
    //     console.log('Video saved', u.get('title'));
    // });

    await Videos.forge().fetchAll()
        .then(function (videos) {
            // videos.models.forEach(function (model) {
            //     ctx.body += model.get('title');
            // })
            ctx.body = JSON.stringify(videos.toJSON());
            console.log(videos.toJSON());
        });
    //   await ctx.render('list', { posts: posts });
    // ctx.body = 'Hello World from videos';
}

async function streamVideo(ctx) {
    //   await ctx.render('new');
    ctx.body = 'Hello World';
}

async function show(ctx) {
    //   const id = ctx.params.id;
    //   const post = posts[id];
    //   if (!post) ctx.throw(404, 'invalid post id');
    //   await ctx.render('show', { post: post });
    ctx.body = 'Hello World from show in videos';
}

async function create(ctx) {
    //   const post = ctx.request.body;
    //   const id = posts.push(post) - 1;
    //   post.created_at = new Date();
    //   post.id = id;
    //   ctx.redirect('/');
    ctx.body = 'Hello World';
}

async function createComment(ctx) {
    //   const post = ctx.request.body;
    //   const id = posts.push(post) - 1;
    //   post.created_at = new Date();
    //   post.id = id;
    //   ctx.redirect('/');
    ctx.body = 'Hello World';
}

async function getUserVideos(ctx) {
    //   const post = ctx.request.body;
    //   const id = posts.push(post) - 1;
    //   post.created_at = new Date();
    //   post.id = id;
    //   ctx.redirect('/');
    ctx.body = 'Hello World';
}

module.exports = router