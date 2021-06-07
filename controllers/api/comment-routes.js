const router = require('express').Router();
const { User, Post, Comment } = require('../../models')

// CREATE a new comment
router.post('/', async (req, res) => {
  try {
    const { postId, content } = req.body;
    console.log(req.body);
    const commentData = await Comment.create({
      content: content,
      author_id: req.session.userID,
      username: req.session.username,
      post_id: postId
    });
    res.status(201).send('Comment Received')
  } catch (error) {
    console.error(error)
  }
});

// // Delete a post
// router.delete('/:id', async (req, res) => {
//   const postId = req.params.id;
//   await Post.destroy({
//     where: { id: postId }
//   });
//   res.status(200).send('Post Deleted')
// })


module.exports = router;