const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

router.get('/:id', async (req, res) => {
  // get post data
  const postData = await Post.findByPk(req.params.id);
  const cleanPostData = postData.get({ plain: true });
  console.log(cleanPostData);
  res.render('edit-post', {
    cleanPostData,
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

module.exports = router;
