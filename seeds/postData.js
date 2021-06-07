const { Post } = require('../models')

const postdata = [
  {
    title: 'first post!!!',
    content: 'test test test',
    author_id: 1
  },
  {
    title: 'second post!!!',
    content: 'test test test',
    author_id: 1
  },
]

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;