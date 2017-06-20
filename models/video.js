'use strict';

const Comment = require('./comment');
const VideoFormat = require('./video_format');

const Video = bookshelf.Model.extend({
    tableName: 'videos',
    hidden: [ 'path', 'size' ],
    comments: function () {
        return this.hasMany(Comment);
    },
    videoFormats: function () {
        return this.hasMany(VideoFormat);
    }
});

module.exports = Video;