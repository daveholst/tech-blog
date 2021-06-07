const router = require('express').Router();
const { User, Post } = require('../../models')

// CREATE a new post
router.post('/', async (req, res) => {
  try {
    //TODO: error if user isnt logged in
    const { title, content } = req.body;
    const postData = await Post.create({
      title: title,
      content: content,
      author_id: req.session.userID,
    });
    res.status(201).send('Post Received')
  } catch (error) {
    console.error(error)
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  const postId = req.params.id;
  await Post.destroy({
    where: { id: postId }
  });
  res.status(200).send('Post Deleted')
})


module.exports = router;