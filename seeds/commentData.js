const { Comment } = require('../models')

const commentdata = [
  {
    content: 'Great Post!!!!',
    author_id: 1,
    post_id: 1
  },
  {
    content: 'A agree!!!!',
    author_id: 2,
    post_id: 1
  },
  {
    content: 'Nice Content. 100%',
    author_id: 1,
    post_id: 2
  },
  {
    content: 'Good Insight xD',
    author_id: 2,
    post_id: 2
  },
]

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;