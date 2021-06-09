const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// CREATE a new comment
router.post('/', async (req, res) => {
  try {
    const { postId, content } = req.body;
    console.log(req.body);
    const commentData = await Comment.create({
      content,
      author_id: req.session.userID,
      username: req.session.username,
      post_id: postId,
    });
    res.status(201).send('Comment Received');
  } catch (error) {
    console.error(error);
  }
});

// Delete a comment
router.delete('/:id', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      const commentId = req.params.id;
      await Comment.destroy({
        where: { id: commentId },
      });
      res.status(200).send('Comment Deleted');
    } else {
      res.status(400).send('USer must be logged in to delete comments');
    }
  } catch (error) {
    console.error(error);
  }
});

// Update a comment
router.put('/:id', async (req, res) => {
  try {
    const commentId = req.params.id;
    const response = await Comment.update(req.body, {
      where: {
        id: commentId,
      },
    });
    console.log(response);
    res.status(200).send('Post Updated');
  } catch (error) {
    res.status(400).send('Post did not update - check auth');
    console.error(error);
  }
});

module.exports = router;
