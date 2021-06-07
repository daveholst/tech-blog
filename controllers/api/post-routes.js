const router = require('express').Router();
const { User, Post } = require('../../models')

// CREATE a new post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const postData = await Post.create({
      title: title,
      content: content,
      author_id: req.session.userID,
    });
  } catch (error) {
    console.error(error)
  }
});


module.exports = router;