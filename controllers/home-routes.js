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

// login route
// router.get('/login', async (req, res) => {
//   res.render('login');
// })

module.exports = router;
