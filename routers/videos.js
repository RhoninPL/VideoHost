const router = require('koa-router')();
const Busboy = require('busboy');
const Promise = require('bluebird');
const _ = require('lodash');

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
    await Videos.forge().fetchAll()
        .then(function (videos) {
            ctx.render('add', { videos: videos.toJSON() });
        });
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
    const busboy = new Busboy({
        headers: ctx.headers
    });
    
    const ALLOWED_FIELDS = ['title', 'description'];
    var newVideo = new Videos();
    newVideo.set('author', 'Ja');

    busboy.on('field', (fieldname, value) => {
        if (_.includes(ALLOWED_FIELDS, fieldname)) {
            newVideo.set(fieldname, value);
        }        
    });

    const busboyPromise = new Promise(resolve => {
        busboy.on('finish', resolve);
    });

    ctx.req.pipe(busboy);

    await busboyPromise;

    await newVideo.save()
        .then(function (u) {
            ctx.body = 'Video saved!' + u.get('title');
        });
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