const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// root route
router.get("/", async (req, res) => {
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
    order: [["created_at", "DESC"]],
  });
  console.log(dbPostData);
  const allPosts = dbPostData.map((post) => post.get({ plain: true }));

  res.render("posts", {
    allPosts,
    loggedIn: req.session.loggedIn,
    username: req.session.username
  });
  // console.log(allPosts[0].comments);

  // res.render('test', {
  //   loggedIn: req.session.loggedIn,
  //   userID: req.session.userID,
  //   username: req.session.username,
  //   email: req.session.email,
  // });
});
router.get("/post", (req, res) => {
  if (req.session.loggedIn) res.render("newpost", {
    loggedIn: req.session.loggedIn,
    username: req.session.username
  });
  else {
    res.render("login");
  }
});

router.get("/please-login", (req, res) => {
  res.render('login');
})

router.get('/dashboard', async (req, res) => {
  const dbPostData = await Post.findAll({
    where: {
      author_id: req.session.userID
    },
    include: [
      {
        model: User,
      },
    ],
    order: [["created_at", "DESC"]],
  });
  console.log(dbPostData);
  const allUsersPosts = dbPostData.map((post) => post.get({ plain: true }));

  res.render('dashboard', {
    allUsersPosts,
    loggedIn: req.session.loggedIn,
    username: req.session.username
  })
})

router.get()

module.exports = router;
