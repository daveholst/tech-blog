const router = require('express').Router();
const { Post, User, Comment } = require('../models');

const authCheck = require('../utils/authCheck');

// root route
router.get('/', async (req, res) => {
  // get all posts
  const dbPostData = await Post.findAll({
    include: [
      {
        model: Comment,
      },
      {
        model: User,
      },
    ],
    order: [['created_at', 'DESC']],
  });
  console.log(dbPostData);
  const allPosts = dbPostData.map((post) => post.get({ plain: true }));

  res.render('posts', {
    allPosts,
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
  // console.log(allPosts[0].comments);

  // res.render('test', {
  //   loggedIn: req.session.loggedIn,
  //   userID: req.session.userID,
  //   username: req.session.username,
  //   email: req.session.email,
  // });
});
router.get('/post', authCheck, (req, res) => {
  if (req.session.loggedIn)
    res.render('newpost', {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  else {
    res.render('login');
  }
});

router.get('/please-login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', authCheck, async (req, res) => {
  // get all the users posts
  const dbPostData = await Post.findAll({
    where: {
      author_id: req.session.userID,
    },
    include: [
      {
        model: User,
      },
    ],
    order: [['created_at', 'DESC']],
  });
  const allUsersPosts = dbPostData.map((post) => post.get({ plain: true }));
  // get all the users comments
  const dbCommentData = await Comment.findAll({
    where: {
      author_id: req.session.userID,
    },
    include: [
      {
        model: Post,
      },
    ],
    order: [['created_at', 'DESC']],
  });
  const allUsersComments = dbCommentData.map((comment) =>
    comment.get({ plain: true })
  );
  res.render('dashboard', {
    allUsersPosts,
    allUsersComments,
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

router.get('/edit-post', authCheck, async (req, res) => {
  // get post data
  const postId = req.query.post;
  const postData = await Post.findByPk(postId);
  const cleanPostData = postData.get({ plain: true });
  console.log(cleanPostData);
  res.render('edit-post', {
    id: cleanPostData.id,
    title: cleanPostData.title,
    content: cleanPostData.content,
    loggedIn: req.session.loggedIn,
    username: req.session.username,
  });
});

module.exports = router;
